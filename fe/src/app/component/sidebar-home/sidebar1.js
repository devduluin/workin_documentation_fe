"use client";
import { useEffect, useState } from "react";

export default function DocSidebar() {
  const sections = [
    { id: "login", title: "Cara Login" },
    { id: "password", title: "Cara Reset Password" },
  ];

  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-60% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="w-64 bg-gray-50 shadow flex flex-col sticky top-0 h-screen overflow-y-auto">
      <div className="p-4 border-gray-200">
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
  );
}
