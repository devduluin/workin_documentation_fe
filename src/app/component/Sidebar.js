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

  useEffect(() => {
    async function fetchMenus() {
      try {
        const resCat = await fetch("http://localhost.guide_be:5503/api/categories");
        const catData = await resCat.json();

        if (catData.success && catData.data.length) {
          const categories = catData.data;

          const categoriesWithDocs = await Promise.all(
            categories.map(async (cat) => {
              const resDocs = await fetch(
                `http://localhost:5000/api/documents/category/${cat.id}`
              );
              const docData = await resDocs.json();

              return {
                id: cat.id,
                name: cat.name,
                children: docData.success
                  ? docData.data.map((doc) => ({
                      id: doc.id,
                      name: doc.title,
                      href: `/docs/${cat.id}/${doc.id}`,
                    }))
                  : [],
              };
            })
          );

          setMenus(categoriesWithDocs);
        }
      } catch (error) {
        console.error("Fetch menus failed:", error);
      }
    }

    fetchMenus();
  }, []);

  useEffect(() => {
    menus.forEach((menu, idx) => {
      if (menu.children?.some((child) => child.href === pathname)) {
        setOpenMenu(idx);
      }
    });
  }, [pathname, menus]);

  // Admin rename handler
  const handleRenameSubmit = async (docId, newTitle) => {
    try {
      const res = await fetch(`http://localhost:5000/api/documents/${docId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ title: newTitle }),
      });

      if (!res.ok) throw new Error("Rename failed");

      // Update menu state
      setMenus((prev) =>
        prev.map((menu) => ({
          ...menu,
          children: menu.children.map((child) =>
            child.id === docId ? { ...child, name: newTitle } : child
          ),
        }))
      );

      setEditingDocId(null);
    } catch (err) {
      console.error("❌ Gagal rename dokumen:", err);
    }
  };

  return (
    <div className="w-64 bg-gray-50 shadow flex flex-col sticky top-0 h-screen overflow-y-auto">
      <div className="p-5 border-b border-gray-200 flex flex-col items-center justify-center text-center space-y-0">
        <img
          src="/duluin-hrms.png"
          alt="Logo HRMS"
          className="w-28 h-auto object-contain -my-2 block"
        />
        <h3 className="text-base font-bold text-gray-800 leading-tight mt-5">
          Documentation
        </h3>
      </div>

      <nav className="flex flex-col p-4 space-y-2">
        {menus.map((menu, idx) => (
          <div key={menu.id}>
            {menu.children.length === 1 ? (
              <Link
                href={menu.children[0].href}
                className={`w-full block text-left px-4 py-2 rounded-lg transition ${
                  pathname === menu.children[0].href
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-blue-50"
                }`}
              >
                {menu.name}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    openMenu === idx
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-blue-50"
                  }`}
                >
                  {menu.name}
                </button>
                {menu.children && openMenu === idx && (
                  <div className="ml-6 mt-1 flex flex-col space-y-1">
                    {menu.children.map((child) => (
                      <div key={child.id} className="flex items-center gap-1">
                        {editingDocId === child.id ? (
                          <>
                            <input
                              type="text"
                              value={editingTitle}
                              onChange={(e) =>
                                setEditingTitle(e.target.value)
                              }
                              className="border p-1 rounded text-sm flex-1"
                            />
                            <button
                              className="text-sm text-green-600"
                              onClick={() =>
                                handleRenameSubmit(child.id, editingTitle)
                              }
                            >
                              💾
                            </button>
                            <button
                              className="text-sm text-red-600"
                              onClick={() => setEditingDocId(null)}
                            >
                              ❌
                            </button>
                          </>
                        ) : (
                          <>
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
                                className="text-gray-400 hover:text-gray-700 text-sm ml-1"
                                onClick={() => {
                                  setEditingDocId(child.id);
                                  setEditingTitle(child.name);
                                }}
                              >
                                ✏️
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
