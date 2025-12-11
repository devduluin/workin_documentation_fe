"use client";

import "quill/dist/quill.snow.css";
import "../../../globals.css";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import Sidebar from "../../../component/Sidebar";
import { Search } from "lucide-react"; // ✅ Tambahkan ikon dari lucide-react

export default function DocumentPage({ params }) {
  const { categoryId, documentId } = React.use(params);

  const [content, setContent] = useState("");
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [contentHeight, setContentHeight] = useState("100vh");

  const contentRef = useRef(null);
  const mainRef = useRef(null);
  const searchRef = useRef(null);

  // 🔹 Fetch sections
  useEffect(() => {
    if (!documentId) return;

    fetch(`http://localhost.guide_be:5503/api/sections/document/${documentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          const html = data.data[0].content || "";

          const fixedHtml = html.replace(/<h2>(.*?)<\/h2>/g, (match, title) => {
            const plainTitle = title.replace(/<[^>]+>/g, "").trim();
            const id = plainTitle
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
            return `<h2 id="${id}">${title}</h2>`;
          });

          setContent(fixedHtml);
        } else {
          setContent("<p>Tidak ada konten untuk dokumen ini.</p>");
        }
      })
      .catch((err) => console.error("Error fetching section:", err));
  }, [documentId]);

  // 🔹 Extract <h2>
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

  // 🔹 Global search
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(() => {
      fetch(`http://localhost.guide_be:5503/api/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setSearchResults(data.data);
        })
        .catch((err) => console.error("Search error:", err));
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  // 🔹 Highlight active heading
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
          if (nextActive !== activeId) setActiveId(nextActive);
        }
      },
      {
        root: contentRef.current,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.2,
      }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [sections, activeId]);

  // 🔹 Auto adjust height of content area
  useLayoutEffect(() => {
    const resize = () => {
      if (searchRef.current) {
        const topHeight =
          searchRef.current.offsetTop + searchRef.current.offsetHeight + 24;
        setContentHeight(`calc(100vh - ${topHeight}px)`);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar kiri */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main content */}
      <main
        ref={mainRef}
        className={`flex-1 p-8 scroll-smooth ${
          sections.length === 0 ? "max-w-full" : "max-w-[calc(100%-16rem)]"
        }`}
      >
        {/* 🔍 Search bar */}
        <div ref={searchRef} className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            {/* 🔍 Ikon kaca pembesar */}
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5 pointer-events-none" />

            <input
              type="text"
              placeholder="Cari konten di sini..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border rounded-md pl-10 pr-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />

            {/* 🔽 Dropdown hasil pencarian */}
            {searchResults.length > 0 && (
              <div className="absolute z-10 bg-white border rounded-md mt-1 shadow-lg w-full max-h-60 overflow-auto">
                {searchResults.map((r, index) => (
                  <a
                    key={`${r.type}-${r.sectionId || r.documentId || index}`}
                    href={`/docs/${r.categoryId}/${r.documentId}${
                      r.sectionId ? `#${r.sectionId}` : ""
                    }`}
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                    onClick={() => setQuery("")}
                  >
                    <span className="font-semibold">{r.title}</span>
                    <span className="text-sm text-gray-500 block">
                      {r.categoryName || "Tanpa Kategori"}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Isi konten (scrollable area) */}
        <div
          ref={contentRef}
          className="prose max-w-none ql-editor overflow-y-auto pr-4"
          style={{ height: contentHeight }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>

      {/* Daftar Isi kanan */}
      {sections.length > 0 && (
        <aside className="w-64 bg-gray-50 shadow-inner border-l border-gray-200 sticky top-0 h-screen overflow-y-auto">
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
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-800"
                }`}
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>
      )}
    </div>
  );
}
