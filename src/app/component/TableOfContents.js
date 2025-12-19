"use client";

export default function TableOfContents({ sections, activeId, onNavigate, }) {

  if (!sections?.length) return null;

  return (
    <aside className="hidden lg:flex fixed top-0 right-0 h-screen w-64 bg-white border-l border-gray-200 flex-col z-40">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 shrink-0">
        <h3 className="text-lg font-bold text-gray-800">Daftar Isi</h3>
      </div>

      {/* Scrollable TOC */}
      <nav className="toc flex-1 overflow-y-auto p-4 space-y-2">
        {sections.map((s) => (
  <a
    key={s.id}   // ← TAMBAH INI
    href={`#${s.id}`}
    onClick={(e) => {
      e.preventDefault();
      window.history.pushState(null, "", `#${s.id}`);
      onNavigate(s.id);
    }}
    className={`block px-3 py-2 rounded-md transition ${
      activeId === s.id
        ? "bg-blue-500 text-white font-semibold shadow"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-800"
    }`}
  >
    {s.title}
  </a>
))}

      </nav>
    </aside>
  );
}
