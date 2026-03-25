"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import DynamicContent from "./components/DynamicContent";
import AddMenuModal from "./components/AddMenuModal";
import ConfirmModal from "./components/ConfirmModal";
import "./styles/dashboard.css";
import "react-quill-new/dist/quill.snow.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;

export default function DashboardPage() {
  const [selected, setSelected] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [targetDelete, setTargetDelete] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().finally(() => setLoading(false));
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/docs-nodes`, {
        params: { page: 1, limit: 1000 },
      });
      setNodes(response.data.data || []);
    } catch (err) {
      console.error("❌ Gagal fetch data:", err);
    }
  };

  const handleAddNode = async (title, type, parentId) => {
    try {
      const payload = { title, type };
      if (parentId !== null && parentId !== undefined && parentId !== "") {
        payload.parentId = parentId;
      }
      const res = await axios.post(`${API_URL}/docs-nodes`, payload);
      await fetchData();
      const created = res.data.data;
      if (created) setSelected(created);
      setShowAddModal(false);
    } catch (err) {
      console.error("❌ Gagal tambah data:", err);
    }
  };

  const handleRename = async (target, newTitle) => {
    try {
      await axios.put(`${API_URL}/docs-nodes/${target.id}`, {
        title: newTitle,
      });
      await fetchData();
    } catch (err) {
      console.error("❌ Gagal rename:", err);
    }
  };

  const executeDelete = async () => {
    try {
      setShowConfirmModal(false);
      await axios.delete(`${API_URL}/docs-nodes/${targetDelete.id}`);
      setSelected(null);
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
    window.location.href = "/login";
  };

  const treeData = useMemo(() => {
    const map = new Map();
    nodes.forEach((node) => {
      map.set(node.id, { ...node, children: [] });
    });
    const roots = [];
    map.forEach((node) => {
      if (node.parentId && map.has(node.parentId)) {
        map.get(node.parentId).children.push(node);
      } else {
        roots.push(node);
      }
    });
    const sortNodes = (list) => {
      list.sort((a, b) => {
        if (a.orderIndex !== b.orderIndex) return a.orderIndex - b.orderIndex;
        return a.id - b.id;
      });
      list.forEach((item) => sortNodes(item.children));
    };
    sortNodes(roots);
    return roots;
  }, [nodes]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 text-lg">Memuat data...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar
        menuData={treeData}
        selected={selected}
        setSelected={setSelected}
        onAddMenu={() => setShowAddModal(true)}
        onDelete={confirmDelete}
        onRename={handleRename}
        onLogout={handleLogout}
      />

      <main className="dashboard-main">
        <div className="max-w-6xl mx-auto space-y-4">
          <header className="dashboard-header flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-lg font-bold">
                W
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Dashboard Admin
                </h1>
                <p className="text-gray-500 text-sm">
                  Kelola struktur dan konten dokumentasi Workin by Duluin
                </p>
              </div>
            </div>
          </header>

          <DynamicContent selected={selected} />
        </div>

        {showAddModal && (
          <AddMenuModal
            onClose={() => setShowAddModal(false)}
            onSave={handleAddNode}
            nodes={nodes}
            selected={selected}
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
