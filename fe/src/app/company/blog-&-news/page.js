"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "../../component/Sidebar";

export default function EmployeeManagement() {
  const [content, setContent] = useState("");
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const contentRef = useRef(null);

  // 🔹 Fetch data dari backend
  useEffect(() => {
    fetch("/api/sections/51") // ganti ID sesuai kebutuhan
      .then((res) => res.json())
      .then((data) => {
        if (!data?.data?.content) return;

        // Tambahkan id ke setiap <h2>
        const fixedContent = data.data.content.replace(
          /<h2>(.*?)<\/h2>/g,
          (match, title) => {
            const plainTitle = title.replace(/<[^>]+>/g, "").trim();
            const id = plainTitle.toLowerCase().replace(/\s+/g, "-");
            return `<h2 id="${id}">${title}</h2>`;
          }
        );

        setContent(fixedContent);
      })
      .catch((err) => console.error("Error fetching section:", err));
  }, []);

  // 🔹 Generate daftar isi otomatis
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new MutationObserver(() => {
      const headings = contentRef.current.querySelectorAll("h2[id]");
      if (headings.length > 0) {
        const list = Array.from(headings).map((h) => ({
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
    const sectionEls = contentRef.current?.querySelectorAll("h2[id]");
    if (!sectionEls) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-60% 0px -40% 0px", threshold: 0 }
    );

    sectionEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar kiri */}
      <aside>
        <Sidebar />
      </aside>

      {/* Konten utama */}
      <main className="flex-1 p-10 text-left overflow-y-auto">
        <div
          ref={contentRef}
          className="prose max-w-none ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>

      {/* Sidebar kanan otomatis daftar isi */}
      <aside className="w-64 bg-gray-50 shadow sticky top-0 h-screen overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">Daftar Isi</h3>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 rounded-md transition ${
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
