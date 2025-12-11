"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditCategoryPage() {
  const { id } = useParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(`${API_URL}/categories/${id}`, {
          credentials: "include",
        });
        const data = await res.json();
        setName(data.name || "");
      } catch (err) {
        console.error("Error fetching category:", err);
      }
    };
    fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/categories/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        alert("Kategori berhasil diperbarui!");
        router.push("/dashboard/categories");
      } else {
        alert("Gagal memperbarui kategori.");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat update kategori");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Edit Kategori
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block font-medium mb-1">Nama Kategori</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => router.push("/dashboard/categories")}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 text-white rounded ${
                loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Menyimpan..." : "Simpan Perubahan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
