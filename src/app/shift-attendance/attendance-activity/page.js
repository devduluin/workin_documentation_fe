"use client";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../../component/Sidebar";

export default function ShiftAttendance() {
  const [content, setContent] = useState("");
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const contentRef = useRef(null);
  const mainRef = useRef(null);

  // 🔹 Fetch data dari database
  useEffect(() => {
    fetch("/api/sections/23")
      .then((res) => res.json())
      .then((data) => {
        // Tambahkan id otomatis ke setiap <h2> (skip yang kosong)
        const fixedContent = data.data.content.replace(
          /<h2[^>]*>([\s\S]*?)<\/h2>/g,
          (match, title) => {
            // Ambil teks murni tanpa HTML
            const plainTitle = title.replace(/<[^>]+>/g, "").trim();

            // ⚠️ Skip kalau kosong / cuma <br> / &nbsp;
            if (!plainTitle || plainTitle === "&nbsp;" || plainTitle === " ") {
              return match; // biarkan apa adanya, tanpa id
            }

            const id = plainTitle
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");

            return `<h2 id="${id}">${title}</h2>`;
          }
        );
        setContent(fixedContent);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // 🔹 Generate daftar isi setelah konten render
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new MutationObserver(() => {
      const headings = contentRef.current.querySelectorAll("h2[id]");
      if (headings.length > 0) {
        const list = Array.from(headings)
          // Filter biar gak masukin heading kosong
          .filter((h) => h.textContent.trim() !== "")
          .map((h) => ({
            id: h.id,
            title: h.textContent.trim(),
          }));

        setSections(list);
        observer.disconnect();
      }
    });

    observer.observe(contentRef.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [content]);

  // 🔹 Intersection Observer untuk highlight aktif
  useEffect(() => {
    if (!contentRef.current || !mainRef.current) return;

    const headings = contentRef.current.querySelectorAll("h2[id]");
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const nextActive = visible[0].target.id;
          if (nextActive !== activeId) {
            setActiveId(nextActive);
          }
        }
      },
      {
        root: mainRef.current,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.2,
      }
    );

    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, [sections, activeId]);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar kiri */}
      <aside>
        <Sidebar />
      </aside>

      {/* Konten utama */}
      <main
        ref={mainRef}
        className="flex-1 p-6 md:p-10 overflow-y-auto scroll-smooth h-screen"
      >
        <div
          ref={contentRef}
          className="prose max-w-none ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>

      {/* Sidebar kanan */}
      <aside className="w-64 bg-gray-50 shadow sticky top-0 h-screen overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">Daftar Isi</h3>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 rounded-md transition scroll-smooth ${
                activeId === s.id
                  ? "bg-blue-500 text-white font-semibold shadow-md"
                  : "text-gray-600 hover:bg-blue-100 hover:text-blue-800"
              }`}
            >
              {s.title}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
