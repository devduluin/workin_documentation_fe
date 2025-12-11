"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCategoryPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE || "http://localhost.guide_be:5503/api";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Nama kategori wajib diisi!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/categories`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include", // ⬅️ INI PENTING BANGET
  body: JSON.stringify({ name }),
});


      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Gagal menambah kategori");
      }

      alert("Kategori berhasil ditambahkan!");
      router.push("/dashboard/categories");
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tambah Kategori Baru</h1>

        <button
          onClick={() => router.push("/dashboard/categories")}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-lg transition"
        >
          ← Kembali
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 rounded-xl shadow"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Nama Kategori</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Payroll"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg disabled:opacity-50 transition"
        >
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
      </form>
    </div>
  );
}
