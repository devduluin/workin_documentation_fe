"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AddDocumentPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "/api/documents",
        { title, categoryId },
        { withCredentials: true } // ⬅️ kirim cookie token otomatis
      );

      alert("✅ Dokumen berhasil ditambahkan!");
      router.push("/dashboard");
    } catch (error) {
      console.error("❌ Error saat menambah dokumen:", error);

      if (error.response?.status === 401) {
        alert("Gagal menambahkan dokumen: Anda belum login.");
        router.push("/dashboard/login");
      } else {
        alert("Terjadi kesalahan: " + (error.response?.data?.message || "Unknown"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header + tombol kembali */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tambah Dokumen Baru</h1>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            ← Kembali
          </button>
        </div>

        {/* Form input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Judul */}
          <div>
            <label className="block font-medium mb-1">Judul Dokumen</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Masukkan judul dokumen..."
              required
            />
          </div>

          {/* Input Kategori */}
          <div>
            <label className="block font-medium mb-1">Kategori</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Pilih Kategori</option>
              <option value="1">Overview</option>
              <option value="2">Getting Started</option>
              <option value="3">Employee Management</option>
              <option value="4">Claim & Travel</option>
              <option value="5">Shift & Attendance</option>
              <option value="6">Company</option>
              <option value="7">Leaves</option>
              <option value="8">Payroll</option>
            </select>
          </div>

          {/* Tombol simpan */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Menyimpan..." : "Simpan Dokumen"}
          </button>
        </form>
      </div>
    </div>
  );
}
