"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "../../component/Sidebar";

export default function EmployeeManagement() {
  const [content, setContent] = useState("");
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const contentRef = useRef(null);
  const mainRef = useRef(null);

  // 🔹 Fetch data dari backend
  useEffect(() => {
    fetch("/api/sections/3")
      .then((res) => res.json())
      .then((data) => {
        if (!data?.data?.content) return;

        const fixedContent = data.data.content.replace(
          /<h2>(.*?)<\/h2>/g,
          (match, title) => {
            const plainTitle = title.replace(/<[^>]+>/g, "").trim();
            const id = plainTitle
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
            return `<h2 id="${id}">${title}</h2>`;
          }
        );

        setContent(fixedContent);
      })
      .catch((err) => console.error("Error fetching section:", err));
  }, []);

  // 🔹 Generate daftar isi otomatis setelah konten render
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

  // 🔹 Intersection Observer highlight aktif (auto adaptif)
  useEffect(() => {
    const container = mainRef.current;
    const headings = contentRef.current?.querySelectorAll("h2[id]");
    if (!headings || headings.length === 0) return;

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
        root: container && container.scrollHeight > container.clientHeight
          ? container
          : null, // fallback ke window
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.2,
      }
    );

    headings.forEach((h) => observer.observe(h));

    // 🔹 Fallback: aktifkan heading terakhir kalau page pendek atau scroll ke bawah
    const handleScroll = () => {
      const root = container || document.documentElement;
      const scrollTop = root.scrollTop || window.scrollY;
      const scrollHeight = root.scrollHeight;
      const clientHeight = root.clientHeight || window.innerHeight;

      const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
      if (atBottom && headings.length > 0) {
        const lastId = headings[headings.length - 1].id;
        if (activeId !== lastId) {
          setActiveId(lastId);
        }
      }
    };

    const scrollTarget = container || window;
    scrollTarget.addEventListener("scroll", handleScroll);

    // Jalankan 1x awal untuk page pendek
    handleScroll();

    return () => {
      observer.disconnect();
      scrollTarget.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar kiri */}
      <aside>
        <Sidebar />
      </aside>

      {/* Konten utama */}
      <main
        ref={mainRef}
        className="flex-1 p-10 text-left overflow-y-auto scroll-smooth h-screen"
      >
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
