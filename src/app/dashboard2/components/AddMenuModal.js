"use client";

import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function AddMenuModal({ onClose, onSave, nodes = [], selected }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("head");
  const [parentId, setParentId] = useState("");

  const parentOptions = useMemo(() => {
    if (type === "head") return [];
    const parentType =
      type === "sub" ? "head" : type === "sub_sub" ? "sub" : "sub_sub";
    return nodes.filter((node) => node.type === parentType);
  }, [nodes, type]);

  const handleSubmit = () => {
    if (!title.trim()) return;
    const parentType =
      type === "sub" ? "head" : type === "sub_sub" ? "sub" : "sub_sub";
    let resolvedParent =
      type === "head" ? null : parentId !== "" ? Number(parentId) : null;
    if (type !== "head" && resolvedParent === null) {
      if (selected && selected.type === parentType) {
        resolvedParent = selected.id;
      }
    }
    if (type !== "head" && resolvedParent === null) {
      alert("Parent wajib dipilih untuk tipe ini.");
      return;
    }
    onSave(title.trim(), type, resolvedParent);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Tambah Node Dokumentasi
        </h3>

        <div className="space-y-3">
          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Tipe Node
            </label>
            <Select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setParentId("");
              }}
            >
              <option value="head">Head</option>
              <option value="sub">Sub</option>
              <option value="sub_sub">Sub-sub</option>
              <option value="page">Page</option>
            </Select>
          </div>

          {type !== "head" && (
            <div>
              <label className="block mb-1 text-sm text-gray-700">
                Parent
              </label>
              <Select
                value={parentId}
                onChange={(e) => setParentId(e.target.value)}
              >
                <option value="">
                  {selected ? `Gunakan ${selected.title}` : "Pilih parent"}
                </option>
                {parentOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.title} (#{option.id})
                  </option>
                ))}
              </Select>
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Judul Node
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Employee Management"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={onClose}
          >
            Batal
          </Button>
          <Button type="button" size="sm" onClick={handleSubmit}>
            Simpan
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
