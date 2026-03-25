"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Plus, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sidebar({
  menuData,
  selected,
  setSelected,
  onAddMenu,
  onDelete,
  onRename,
  onLogout,
}) {
  const [expandedIds, setExpandedIds] = useState(new Set());
  const [editingItem, setEditingItem] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const toggleExpanded = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleRenameStart = (item) => {
    setEditingItem({ id: item.id });
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

  const renderNode = (node, depth) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedIds.has(node.id);
    const isEditing = editingItem?.id === node.id;
    const isSelected = selected?.id === node.id;

    return (
      <div key={node.id}>
        <div
          className="flex justify-between items-center group"
          style={{ paddingLeft: depth * 12 }}
        >
          <div className="flex items-center gap-2 flex-1">
            {hasChildren && (
              <button
                onClick={() => toggleExpanded(node.id)}
                className="text-gray-400 hover:text-gray-600"
              >
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            )}
            {!hasChildren && <div className="w-4" />}
            <button
              onClick={() => setSelected(node)}
              className={`dashboard-menu-btn ${isSelected ? "active" : ""}`}
            >
              {isEditing ? (
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onBlur={handleRenameSubmit}
                  onKeyDown={(e) => e.key === "Enter" && handleRenameSubmit()}
                  className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
                  autoFocus
                />
              ) : (
                <span className="flex items-center gap-2">
                  <span>{node.title}</span>
                  <span className="text-xs text-gray-400">{node.type}</span>
                </span>
              )}
            </button>
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
            <button
              onClick={() => handleRenameStart(node)}
              className="text-gray-400 hover:text-blue-500"
            >
              <Pencil size={13} />
            </button>
            <button
              onClick={() => onDelete({ id: node.id })}
              className="text-gray-400 hover:text-red-500"
            >
              <Trash2 size={13} />
            </button>
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div>{node.children.map((child) => renderNode(child, depth + 1))}</div>
        )}
      </div>
    );
  };

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar-header">
        <img src="/workin-color.png" alt="Logo Workin" className="dashboard-logo" />
        <h3 className="dashboard-doc-title">Documentation</h3>

        <div className="dashboard-header-btns">
          <Button
            type="button"
            size="sm"
            variant="secondary"
            onClick={onAddMenu}
            className="dashboard-add-btn"
          >
            <Plus size={16} />
            <span>Add</span>
          </Button>
        </div>
      </div>

      <nav className="dashboard-nav">
        {menuData.map((node) => renderNode(node, 0))}
      </nav>

      <div className="mt-auto p-4 border-t border-gray-200">
        <Button
          type="button"
          variant="destructive"
          size="md"
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2"
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
        </Button>
      </div>
    </aside>
  );
}
