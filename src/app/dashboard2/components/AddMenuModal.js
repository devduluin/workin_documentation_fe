"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AddMenuModal({ onClose, onSave }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [mounted, setMounted] = useState(false);

  // 🔹 Fetch kategori saat modal muncul
  useEffect(() => {
    setMounted(true);
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API_URL}/categories`, {
          withCredentials: true,
        });
        setCategories(res.data.data || []);
      } catch (err) {
        console.error("❌ Gagal mengambil kategori:", err);
      }
    };
    fetchCategories();
  }, []);

  if (!mounted) return null;

  const handleSubmit = () => {
    // Kasus 1: tambah kategori baru aja
    if (!documentName.trim() && newCategoryName.trim()) {
      onSave(newCategoryName, "");
    }
    // Kasus 2: tambah dokumen di kategori baru
    else if (documentName.trim() && newCategoryName.trim()) {
      onSave(newCategoryName, documentName);
    }
    // Kasus 3: tambah dokumen di kategori yang sudah ada
    else if (documentName.trim() && selectedCategory) {
      onSave(selectedCategory, documentName);
    }

    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]">
      <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
        <h3 className="text-lg font-semibold mb-3">
          Tambah Kategori / Dokumen
        </h3>

        {/* Dropdown pilih kategori */}
        <label className="block mb-2 text-sm text-gray-700">
          Pilih Kategori
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="">(Buat Kategori Baru)</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Input nama kategori baru */}
        {!selectedCategory && (
          <>
            <label className="block mb-2 text-sm text-gray-700">
              Nama Kategori Baru
            </label>
            <input
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Contoh: Employee Management"
            />
          </>
        )}

        {/* Input nama dokumen */}
        <label className="block mb-2 text-sm text-gray-700">
          Nama Dokumen (opsional)
        </label>
        <input
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          className="w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Contoh: Employee List"
        />

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded border border-gray-300 hover:bg-gray-100 text-sm font-medium"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
