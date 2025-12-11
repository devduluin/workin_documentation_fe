"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import DynamicContent from "./components/DynamicContent";
import AddMenuModal from "./components/AddMenuModal";
import ConfirmModal from "./components/ConfirmModal";
import "./styles/dashboard.css";
import "react-quill-new/dist/quill.snow.css";
import { LogOut } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;

export default function DashboardPage() {
  const [selected, setSelected] = useState({ menu: null, submenu: null });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [targetDelete, setTargetDelete] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${API_URL}/auth/check`);
        if (res.data?.success) {
          setIsAuth(true);
          await fetchData();
        } else {
          window.location.href = "/login";
        }
      } catch {
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // 🧩 ambil kategori & dokumen
  const fetchData = async () => {
    try {
      const [catRes, docRes] = await Promise.all([
        axios.get(`${API_URL}/categories`),
        axios.get(`${API_URL}/documents`),
      ]);

      const categories = catRes.data.data;
      const documents = docRes.data.data;

      const combined = categories.map((cat) => ({
        id: cat.id,
        title: cat.name,
        submenus: documents
          .filter((doc) => doc.categoryId === cat.id)
          .map((doc) => ({ id: doc.id, title: doc.title })),
      }));

      setMenuData(combined);
    } catch (err) {
      console.error("❌ Gagal fetch data:", err);
      if (err.response?.status === 401) {
        alert("Sesi login habis, silakan login ulang.");
        window.location.href = "/login";
      }
    }
  };

  // 🆕 FIX: tambah menu/submenu baru dan pilih otomatis
  const handleAddMenu = async (menuName, submenuName) => {
    try {
      let categoryId = null;
      let newCategory = null;
      let newDoc = null;

      if (menuName.trim()) {
        const existingCategory = menuData.find(
          (cat) => cat.title.toLowerCase() === menuName.toLowerCase()
        );

        if (existingCategory) {
          categoryId = existingCategory.id;
          newCategory = existingCategory;
        } else {
          const catRes = await axios.post(`${API_URL}/categories`, {
            name: menuName,
          });
          newCategory = catRes.data.data;
          categoryId = newCategory.id;
        }
      }

      if (submenuName.trim()) {
        if (!categoryId)
          return console.warn("⚠️ Tidak ada kategori untuk dokumen ini!");
        const docRes = await axios.post(`${API_URL}/documents`, {
          title: submenuName,
          categoryId,
        });
        newDoc = docRes.data.data;
      }

      await fetchData();

      // ✅ Otomatis pilih dokumen baru (biar gak nyangkut di dokumen lama)
      if (newCategory && newDoc) {
        setSelected({
          menu: { id: newCategory.id, title: newCategory.name },
          submenu: { id: newDoc.id, title: newDoc.title },
        });

        console.log("🟢 Dokumen baru terpilih:", newDoc.id, "-", newDoc.title);
      }

      setShowAddModal(false);
    } catch (err) {
      console.error("❌ Gagal tambah data:", err);
    }
  };

  const handleRename = async (target, newTitle) => {
    try {
      if (target.type === "menu") {
        await axios.put(`${API_URL}/categories/${target.id}`, {
          name: newTitle,
        });
      } else {
        await axios.put(`${API_URL}/documents/${target.id}`, {
          title: newTitle,
        });
      }
      await fetchData();
    } catch (err) {
      console.error("❌ Gagal rename:", err);
    }
  };

  const executeDelete = async () => {
    try {
      if (targetDelete.type === "menu") {
        await axios.delete(`${API_URL}/categories/${targetDelete.id}`);
      } else {
        await axios.delete(`${API_URL}/documents/${targetDelete.id}`);
      }

      setShowConfirmModal(false);

      // 🧹 Reset dokumen/halaman aktif biar gak nyangkut di data yang udah kehapus
      setSelected({ menu: null, submenu: null });

      await fetchData();
    } catch (err) {
      console.error("❌ Gagal hapus:", err);
    }
  };

  const confirmDelete = (target) => {
    setTargetDelete(target);
    setShowConfirmModal(true);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`);
      setIsAuth(false);
      window.location.href = "/login";
    } catch (err) {
      console.error("❌ Gagal logout:", err);
    }
  };

  // 🧠 DEBUG LOG: pantau dokumen terpilih
  useEffect(() => {
    if (selected?.submenu?.id) {
      console.log("📄 Sekarang dokumen aktif:", selected.submenu.id);
    }
  }, [selected]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 text-lg">Memeriksa sesi login...</p>
      </div>
    );
  }

  if (!isAuth) return null;

  return (
    <div className="dashboard-layout">
      <Sidebar
        menuData={menuData}
        selected={selected}
        setSelected={setSelected}
        onAddMenu={() => setShowAddModal(true)}
        onDelete={confirmDelete}
        onRename={handleRename}
        onLogout={handleLogout}
      />

      <main className="dashboard-main">
        <header className="dashboard-header mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard Admin
            </h1>
            <p className="text-gray-600">
              Kelola kategori dan konten dokumentasi HRMS
            </p>
          </div>
        </header>

        <DynamicContent selected={selected} />

        {showAddModal && (
          <AddMenuModal
            onClose={() => setShowAddModal(false)}
            onSave={handleAddMenu}
          />
        )}

        {showConfirmModal && (
          <ConfirmModal
            onClose={() => setShowConfirmModal(false)}
            onConfirm={executeDelete}
            title="Hapus Item"
            message="Apakah kamu yakin ingin menghapus item ini?"
          />
        )}
      </main>
    </div>
  );
}
