"use client";
import { useEffect, useState } from "react";

export default function MyAccountPageSidebar() {
  const sections = [
    { id: "status1", title: "Account Settings Section" },
    { id: "status2", title: "Login Information" },
    { id: "status3", title: "Tombol Actions" },
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
        rootMargin: "-50% 0px -50% 0px", // section aktif pas agak ke tengah
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
    <aside className="w-64 bg-gray-50 shadow p-4 h-screen sticky top-0 flex flex-col">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Daftar Isi</h3>
      <nav className="flex flex-col space-y-2 overflow-y-auto">
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