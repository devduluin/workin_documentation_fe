"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Trash2,
  Heart,
  MessageSquare,
  LogOut,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { useAuthStore } from "@/stores/useAuth";
import { discussApi } from "@/lib/discussAPI";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loadUser, logout, loading: authLoading } = useAuthStore();
  const [myTopics, setMyTopics] = useState<any[]>([]);
  const [adminUsers, setAdminUsers] = useState<any[]>([]);
  const [tab, setTab] = useState<"topics" | "users">("topics");

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }
    discussApi.getMyTopics().then(setMyTopics);
    if (user.role === "ADMIN") discussApi.getAdminUsers().then(setAdminUsers);
  }, [user, authLoading]);

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus diskusi ini?")) return;
    await discussApi.deleteTopic(id);
    setMyTopics((t) => t.filter((x) => x.id !== id));
  };

  const handleDeleteUser = async (id: string) => {
    if (!confirm("Hapus user ini beserta semua datanya?")) return;
    await discussApi.adminDeleteUser(id);
    setAdminUsers((u) => u.filter((x) => x.id !== id));
  };

  const handleToggleRole = async (id: string, currentRole: string) => {
    const newRole = currentRole === "ADMIN" ? "USER" : "ADMIN";
    await discussApi.adminChangeRole(id, newRole);
    setAdminUsers((u) =>
      u.map((x) => (x.id === id ? { ...x, role: newRole } : x)),
    );
  };

  if (authLoading || !user)
    return <div className="p-12 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50/30">
      <div className="max-w-275 mx-auto px-5 sm:px-8 py-8">
        <Link
          href="/discuss"
          className="inline-flex items-center gap-2 text-[13px] text-slate-500 hover:text-slate-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke Discussion
        </Link>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[22px] font-extrabold text-slate-900">
              Dashboard
            </h1>
            <p className="text-[13px] text-slate-500">
              Selamat datang, {user.username}
              {user.role === "ADMIN" && (
                <span className="ml-2 text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  ADMIN
                </span>
              )}
            </p>
          </div>
          <button
            onClick={() => {
              logout();
              router.push("/discuss");
            }}
            className="btn-secondary text-[12px]"
          >
            <LogOut className="h-3.5 w-3.5" /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("topics")}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all ${
              tab === "topics"
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-600"
            }`}
          >
            Diskusi Saya ({myTopics.length})
          </button>
          {user.role === "ADMIN" && (
            <button
              onClick={() => setTab("users")}
              className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all ${
                tab === "users"
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-600"
              }`}
            >
              <Shield className="h-3.5 w-3.5 inline mr-1" /> Kelola User (
              {adminUsers.length})
            </button>
          )}
        </div>

        {/* My Topics */}
        {tab === "topics" && (
          <div className="space-y-3">
            {myTopics.length === 0 ? (
              <div className="card-elevated rounded-2xl! p-8 text-center text-slate-400">
                Anda belum membuat diskusi.{" "}
                <Link
                  href="/discuss/create"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Buat sekarang
                </Link>
              </div>
            ) : (
              myTopics.map((t) => (
                <div
                  key={t.id}
                  className="card-elevated rounded-xl! p-4 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/discuss/${t.id}`}
                      className="text-[14px] font-semibold text-slate-800 hover:text-indigo-600 truncate block"
                    >
                      {t.title}
                    </Link>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                      <span>{t.forum.name}</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />{" "}
                        {t._count.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" /> {t._count.likes}
                      </span>
                      <span>
                        {new Date(t.createdAt).toLocaleDateString("id-ID")}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* Admin: Users */}
        {tab === "users" && user.role === "ADMIN" && (
          <div className="card-elevated rounded-2xl! overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
              <div className="col-span-4">User</div>
              <div className="col-span-3">Email</div>
              <div className="col-span-1">Role</div>
              <div className="col-span-2">Topics</div>
              <div className="col-span-2">Actions</div>
            </div>
            {adminUsers.map((u) => (
              <div
                key={u.id}
                className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-slate-100/60 items-center text-[13px]"
              >
                <div className="col-span-4 font-semibold text-slate-800 truncate">
                  {u.name}
                </div>
                <div className="col-span-3 text-slate-500 truncate">
                  {u.email}
                </div>
                <div className="col-span-1">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${u.role === "ADMIN" ? "bg-indigo-50 text-indigo-600" : "bg-slate-100 text-slate-500"}`}
                  >
                    {u.role}
                  </span>
                </div>
                <div className="col-span-2 text-slate-500">
                  {u._count.topics} topics
                </div>
                <div className="col-span-2 flex gap-2">
                  <button
                    onClick={() => handleToggleRole(u.id, u.role)}
                    className="text-[11px] text-indigo-600 hover:underline"
                  >
                    {u.role === "ADMIN" ? "→ User" : "→ Admin"}
                  </button>
                  <button
                    onClick={() => handleDeleteUser(u.id)}
                    className="text-[11px] text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
