"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";

export default function CategoryListPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Ambil data kategori dari backend
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost.guide_be:5503/api/categories", {
        credentials: "include",
      });

      const data = await res.json();

      // 🧠 Pastikan hasil akhirnya selalu array
      if (Array.isArray(data)) {
        setCategories(data);
      } else if (Array.isArray(data.data)) {
        setCategories(data.data);
      } else {
        setCategories([]);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setCategories([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // 🔹 Hapus kategori
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus kategori ini?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost.guide_be:5503/api/categories/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (res.ok) {
        alert("Kategori berhasil dihapus!");
        fetchCategories();
      } else {
        const err = await res.json();
        alert("Gagal menghapus: " + (err.message || res.statusText));
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menghapus kategori");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Kategori</h1>

        <div className="flex gap-2">
          <Link href="/dashboard">
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
              ← Kembali
            </button>
          </Link>

          <Link href="/dashboard/categories/new">
            <button className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition">
              + Tambah Kategori
            </button>
          </Link>
        </div>
      </div>

      {/* Tabel daftar kategori */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full bg-white rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-center w-[60px]">ID</th>
              <th className="p-3">Nama Kategori</th>
              <th className="p-3 text-center">Dibuat</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t hover:bg-gray-50">
                <td className="p-3 text-center">{cat.id}</td>
                <td className="p-3 font-medium">{cat.name}</td>
                <td className="p-3 text-center">
                  {cat.createdAt
                    ? new Date(cat.createdAt).toLocaleDateString("id-ID")
                    : "-"}
                </td>
                <td className="p-3 flex justify-center gap-2">
                  <Link href={`/dashboard/categories/${cat.id}/edit`}>
                    <button
                      title="Edit kategori"
                      className="p-2 text-blue-600 hover:text-blue-800 transition"
                    >
                      <Pencil size={18} />
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(cat.id)}
                    title="Hapus kategori"
                    className="p-2 text-red-600 hover:text-red-800 transition"
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
