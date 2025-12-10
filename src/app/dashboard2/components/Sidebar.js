"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  X,
  Pencil,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar({
  menuData,
  selected,
  setSelected,
  onAddMenu,
  onDelete,
  onRename,
  onLogout, // Terima props onLogout
}) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [editingItem, setEditingItem] = useState(null); // { type: "menu" | "submenu", id }
  const [newTitle, setNewTitle] = useState("");

  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const handleRenameStart = (type, item) => {
    setEditingItem({ type, id: item.id });
    setNewTitle(item.title);
  };

  const handleRenameSubmit = async () => {
    if (newTitle.trim() === "") return;
    if (onRename) {
      await onRename(editingItem, newTitle);
    }
    setEditingItem(null);
    setNewTitle("");
  };

  return (
    <aside className="dashboard-sidebar">
      {/* ==== Header ==== */}
      <div className="dashboard-sidebar-header">
        <img src="/duluin-hrms.png" alt="Logo HRMS" className="dashboard-logo" />
        <h3 className="dashboard-doc-title">Documentation</h3>

        <div className="dashboard-header-btns">
          <button onClick={onAddMenu} className="dashboard-add-btn">
            <Plus size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* ==== Menu Navigasi ==== */}
      <nav className="dashboard-nav">
        {menuData.map((menu) => {
          const subCount = menu.submenus?.length || 0;
          const hasSubmenus = subCount > 1;
          const singleDoc = subCount === 1;

          return (
            <div key={menu.id}>
              <div className="flex justify-between items-center group">
                <button
                  onClick={() => {
                    if (hasSubmenus) toggleMenu(menu.id);
                    else if (singleDoc)
                      setSelected({ menu, submenu: menu.submenus[0] });
                    else setSelected({ menu, submenu: null });
                  }}
                  className={`dashboard-menu-btn ${
                    selected?.menu?.id === menu.id ? "active" : ""
                  }`}
                >
                  {/* === Inline rename menu === */}
                  {editingItem?.type === "menu" && editingItem.id === menu.id ? (
                    <input
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      onBlur={handleRenameSubmit}
                      onKeyDown={(e) => e.key === "Enter" && handleRenameSubmit()}
                      className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
                      autoFocus
                    />
                  ) : (
                    <span>{menu.title}</span>
                  )}

                  {/* tampilkan panah cuma kalau punya lebih dari 1 dokumen */}
                  {hasSubmenus &&
                    (activeMenu === menu.id ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    ))}
                </button>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  {/* ✏️ Rename Menu */}
                  <button
                    onClick={() => handleRenameStart("menu", menu)}
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <Pencil size={15} />
                  </button>

                  {/* 🗑️ Delete Menu */}
                  <button
                    onClick={() => onDelete({ type: "menu", id: menu.id })}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              {/* === Submenu (kalau > 1) === */}
              {hasSubmenus && activeMenu === menu.id && (
                <div className="dashboard-submenu">
                  {menu.submenus.map((sub) => (
                    <div
                      key={sub.id}
                      className="flex justify-between items-center group pl-3"
                    >
                      {editingItem?.type === "submenu" &&
                      editingItem.id === sub.id ? (
                        <input
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          onBlur={handleRenameSubmit}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleRenameSubmit()
                          }
                          className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
                          autoFocus
                        />
                      ) : (
                        <SidebarItem
                          submenu={sub}
                          isSelected={selected?.submenu?.id === sub.id}
                          onClick={() => setSelected({ menu, submenu: sub })}
                        />
                      )}

                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                        {/* ✏️ Rename Submenu */}
                        <button
                          onClick={() => handleRenameStart("submenu", sub)}
                          className="text-gray-400 hover:text-blue-500"
                        >
                          <Pencil size={13} />
                        </button>

                        {/* ❌ Delete Submenu */}
                        <button
                          onClick={() =>
                            onDelete({
                              type: "submenu",
                              menuId: menu.id,
                              id: sub.id,
                            })
                          }
                          className="text-gray-400 hover:text-red-500"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* ==== Logout ==== */}
      <div className="mt-auto p-4 border-t border-gray-200">
        <button
          onClick={onLogout} // ganti dari console.log ke onLogout
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
