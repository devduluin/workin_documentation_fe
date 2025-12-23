"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Sidebar({ isAdmin = false }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [menus, setMenus] = useState([]);
  const [editingDocId, setEditingDocId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ===============================
  // FETCH SIDEBAR DATA
  // ===============================
  useEffect(() => {
    async function fetchMenus() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/categories/sidebar`);
        const data = await res.json();

        if (!data.success) return;

        const formatted = data.data.map((cat) => ({
          id: cat.id,
          name: cat.name,
          children: cat.Documents.map((doc) => ({
            id: doc.id,
            name: doc.title,
            href: `/docs/${cat.id}/${doc.id}`,
          })),
        }));

        setMenus(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMenus();
  }, [API_URL]);

  useEffect(() => {
    menus.forEach((menu, idx) => {
      if (menu.children?.some((c) => c.href === pathname)) {
        setOpenMenu(idx);
      }
    });
  }, [pathname, menus]);

  // ===============================
  // LOADING SKELETON
  // ===============================
  const SidebarSkeleton = () => (
    <div className="space-y-3 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded" />
      ))}
    </div>
  );

  // ===============================
  // RENDER
  // ===============================
  return (
    <div className="w-64 bg-gray-50 shadow flex flex-col sticky top-0 h-screen overflow-y-auto">
      <div className="p-5 border-b border-gray-200 flex flex-col items-center">
        <img
          src="/workin-color.png"
          className="w-28 -my-2"
          alt="Workin"
        />
        <h3 className="font-bold text-gray-800 mt-5">Documentation</h3>
      </div>

      <nav className="p-4 space-y-2">
        {loading ? (
          <SidebarSkeleton />
        ) : (
          menus.map((menu, idx) => (
            <div key={menu.id}>
              {menu.children.length === 1 ? (
                <Link
                  href={menu.children[0].href}
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === menu.children[0].href
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-blue-50"
                  }`}
                >
                  {menu.name}
                </Link>
              ) : (
                <>
                  {/* CATEGORY BUTTON */}
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === idx ? null : idx)
                    }
                    className={`w-full flex justify-between items-center px-4 py-2 rounded-lg transition ${
                      openMenu === idx
                        ? "bg-blue-100 text-blue-600 font-semibold"
                        : "text-gray-600 hover:bg-blue-50"
                    }`}
                  >
                    {menu.name}
                    <span
                      className={`transition-transform duration-300 ${
                        openMenu === idx ? "rotate-90" : ""
                      }`}
                    >
                      ❯
                    </span>
                  </button>

                  {/* DROPDOWN */}
                  <div
  className={`ml-6 overflow-hidden transition-all duration-300 ease-in-out ${
    openMenu === idx
      ? "max-h-screen opacity-100 mt-1"
      : "max-h-0 opacity-0"
  }`}
>
                    <div className="flex flex-col space-y-1">
                      {menu.children.map((child) => (
                        <div
                          key={child.id}
                          className="flex items-center gap-1"
                        >
                          <Link
                            href={child.href}
                            className={`block px-3 py-1 rounded-md text-sm transition ${
                              pathname === child.href
                                ? "bg-blue-100 text-blue-600 font-medium"
                                : "text-gray-500 hover:bg-blue-50"
                            }`}
                          >
                            {child.name}
                          </Link>

                          {isAdmin && (
                            <button
                              className="text-gray-400 hover:text-gray-700 text-sm"
                              onClick={() => {
                                setEditingDocId(child.id);
                                setEditingTitle(child.name);
                              }}
                            >
                              ✏️
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </nav>
    </div>
  );
}
