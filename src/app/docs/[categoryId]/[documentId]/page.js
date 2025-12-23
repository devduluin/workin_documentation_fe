"use client";

import "quill/dist/quill.snow.css";
import "../../../globals.css";
import React, { useEffect, useState, useRef } from "react";
import { Search } from "lucide-react";
import TableOfContents from "@/app/component/TableOfContents";

export default function DocumentPage({ params }) {
  const { documentId } = React.use(params);

  const [content, setContent] = useState("");
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // 🔥 STATE ANIMASI
  const [contentReady, setContentReady] = useState(false);

  const contentRef = useRef(null);
  const isProgrammaticScroll = useRef(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* =====================
     FETCH CONTENT
  ===================== */
  useEffect(() => {
    if (!documentId) return;

    setContentReady(false); // reset animasi

    fetch(`${API_URL}/sections/document/${documentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          const html = data.data[0].content || "";

          const fixedHtml = html.replace(/<h2>(.*?)<\/h2>/g, (_, title) => {
            const plain = title.replace(/<[^>]+>/g, "").trim();
            const id = plain
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");

            return `<h2 id="${id}">${title}</h2>`;
          });

          setContent(fixedHtml);
        } else {
          setContent("<p>Tidak ada konten.</p>");
        }

        // 🔥 trigger animasi setelah konten siap
        setTimeout(() => setContentReady(true), 50);
      });
  }, [documentId]);

  /* =====================
     EXTRACT TOC
  ===================== */
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new MutationObserver(() => {
      const headings = contentRef.current.querySelectorAll("h2[id]");
      if (!headings.length) return;

      setSections(
        Array.from(headings).map((h) => ({
          id: h.id,
          title: h.textContent.trim(),
        }))
      );

      setActiveId(headings[0].id);
      observer.disconnect();
    });

    observer.observe(contentRef.current, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [content]);

  /* =====================
     SCROLL SPY
  ===================== */
  const getCurrentSection = () => {
    const headings = Array.from(document.querySelectorAll("h2[id]"));
    const offset = 100;
    const scrollY = window.scrollY + offset;

    let current = headings[0]?.id;
    for (const h of headings) {
      if (h.offsetTop <= scrollY) current = h.id;
      else break;
    }
    return current;
  };

  useEffect(() => {
    if (!sections.length) return;

    const headings = Array.from(document.querySelectorAll("h2[id]"));

    const observer = new IntersectionObserver(
      () => {
        if (isProgrammaticScroll.current) return;
        const current = getCurrentSection();
        if (current) setActiveId(current);
      },
      {
        rootMargin: "-96px 0px -60% 0px",
        threshold: [0, 0.01],
      }
    );

    headings.forEach((h) => observer.observe(h));

    const onScroll = () => {
      if (isProgrammaticScroll.current) return;
      const current = getCurrentSection();
      if (current) setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  /* =====================
     TOC CLICK
  ===================== */
  const handleTocNavigate = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    isProgrammaticScroll.current = true;

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });

    setActiveId(id);

    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 400);
  };

  /* =====================
     SEARCH
  ===================== */
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const t = setTimeout(() => {
      fetch(`${API_URL}/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setSearchResults(data.data);
        });
    }, 400);

    return () => clearTimeout(t);
  }, [query]);

  return (
    <div className="flex bg-white">
      {/* MAIN */}
      <main className="flex-1 flex flex-col lg:mr-64">
        {/* SEARCH */}
        <div className="flex justify-center py-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari konten..."
              className="w-full border rounded-md pl-10 pr-4 py-2"
            />

            {searchResults.length > 0 && (
              <div className="absolute z-10 bg-white border mt-1 w-full max-h-60 overflow-auto">
                {searchResults.map((r, i) => (
                  <a
                    key={i}
                    href={`/docs/${r.categoryId}/${r.documentId}${
                      r.sectionId ? `#${r.sectionId}` : ""
                    }`}
                    className="block px-4 py-2 hover:bg-blue-50"
                    onClick={() => setQuery("")}
                  >
                    <strong>{r.title}</strong>
                    <div className="text-sm text-gray-500">
                      {r.categoryName}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 🔥 CONTENT WITH ANIMATION */}
        <div
          ref={contentRef}
          className={`
            prose max-w-none ql-editor px-4
            transition-all duration-500 ease-out
            ${contentReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* FOOTER */}
        <footer className="border-t py-4 flex items-center justify-center text-sm text-gray-500 font-semibold">
          Copyright © {new Date().getFullYear()} PT. Rasa Aksata Nusantara. All Rights Reserved.
        </footer>
      </main>

      {/* TOC */}
      <TableOfContents
        sections={sections}
        activeId={activeId}
        onNavigate={handleTocNavigate}
      />
    </div>
  );
}
