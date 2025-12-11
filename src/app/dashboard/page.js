"use client";
import { useState, useEffect } from "react";
import { Plus, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // 🔹 Cek session user berdasarkan cookie httpOnly
  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        router.push("/dashboard/login");
        return;
      }

      setAuthChecked(true);
    } catch (err) {
      console.error("Auth check error:", err);
      router.push("/dashboard/login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // 🔹 Ambil documents dari backend
  const fetchDocuments = async (categoryId = null) => {
    try {
      let url = API_URL + "/documents";
      if (categoryId) url += `?categoryId=${categoryId}`;

      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 403 || res.status === 401) {
        alert("Akses ditolak. Silakan login ulang.");
        router.push("/dashboard/login");
        return;
      }

      const data = await res.json();

      if (Array.isArray(data)) setDocuments(data);
      else if (data.data && Array.isArray(data.data)) setDocuments(data.data);
      else setDocuments([]);

      setLoading(false);
    } catch (err) {
      console.error("Error fetching documents:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authChecked) {
      fetchDocuments();
    }
  }, [authChecked]);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    fetchDocuments(id);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    router.replace("/dashboard/login");
    window.location.reload();
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus dokumen ini?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/documents/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        alert("Dokumen berhasil dihapus");
        fetchDocuments(activeCategory);
      } else {
        const err = await res.json();
        alert("Gagal menghapus dokumen: " + (err.message || "unknown"));
      }
    } catch (e) {
      console.error(e);
      alert("Terjadi kesalahan saat menghapus dokumen");
    }
  };

  if (!authChecked) {
    return <p>Memeriksa sesi login...</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-r fixed top-0 left-0 h-screen overflow-y-auto">
        <h2 className="font-bold text-lg mb-4">HRMS Documentation</h2>
        <nav className="flex flex-col gap-2">
          {[
            { id: 1, name: "Overview" },
            { id: 2, name: "Getting Started" },
            { id: 3, name: "Employee Management" },
            { id: 4, name: "Claim & Travel" },
            { id: 5, name: "Shift & Attendance" },
            { id: 6, name: "Leaves" },
            { id: 7, name: "Company" },
            { id: 8, name: "Payroll" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-3 py-2 rounded text-left font-medium ${
                activeCategory === cat.id ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}

          <button
            className="px-3 py-2 rounded bg-gray-300 mt-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 overflow-y-auto p-6 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard Admin</h1>
          <div className="flex gap-3">
            <Link href="/dashboard/categories">
              <button className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
                Kelola Kategori
              </button>
            </Link>
            <Link href="/dashboard/documents/new">
              <button className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700">
                Tambah Dokumen Baru
              </button>
            </Link>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full bg-white shadow rounded border-collapse">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-3 w-[60px] text-center">ID</th>
                <th className="p-3 w-[250px]">Halaman Panduan</th>
                <th className="p-3 w-[120px] text-center">Category ID</th>
                <th className="p-3 w-[180px] text-center">
                  Terakhir Diperbarui
                </th>
                <th className="p-3 w-[120px] text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={doc.id || index} className="border-t hover:bg-gray-50">
                  <td className="p-3 text-center">{doc.id}</td>
                  <td className="p-3 font-medium">{doc.title}</td>
                  <td className="p-3 text-center">{doc.categoryId || "-"}</td>
                  <td className="p-3 text-center">
                    {doc.updatedAt
                      ? new Date(doc.updatedAt).toLocaleDateString("id-ID")
                      : "-"}
                  </td>
                  <td className="p-3 flex justify-center gap-2">
                    <Link href={`/dashboard/sections/${doc.id}/new`}>
                      <button className="p-2 text-green-600 hover:text-green-800">
                        <Plus size={18} />
                      </button>
                    </Link>

                    <Link href={`/dashboard/sections/${doc.id}/edit`}>
                      <button className="p-2 text-blue-600 hover:text-blue-800">
                        <Pencil size={18} />
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(doc.id)}
                      className="p-2 text-red-600 hover:text-red-800"
                      title="Hapus dokumen"
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}
