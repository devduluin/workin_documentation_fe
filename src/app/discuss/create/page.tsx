"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { useAuthStore } from "@/stores/useAuth";
import { discussApi } from "@/lib/discussAPI";

export default function CreateTopicPage() {
  const router = useRouter();
  const { user, loadUser } = useAuthStore();
  const [forums, setForums] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [forumId, setForumId] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    if (!user) return;
    discussApi.getForums().then(setForums);
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forumId) return setError("Pilih forum");
    if (content.length < 100) return setError("Konten minimal 100 karakter");
    setError("");
    setLoading(true);
    try {
      const tags = tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      await discussApi.createTopic({ title, content, forumId, tags });
      router.push("/discuss");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user)
    return (
      <div className="p-12 text-center">
        <Link href="/login" className="text-indigo-600 font-semibold">
          Login dulu
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50/30">
      <div className="max-w-175 mx-auto px-5 sm:px-8 py-8">
        <Link
          href="/discuss"
          className="inline-flex items-center gap-2 text-[13px] text-slate-500 hover:text-slate-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali
        </Link>

        <div className="card-elevated rounded-2xl! p-6 md:p-8">
          <h1 className="text-[20px] font-extrabold text-slate-900 mb-1">
            Buat Diskusi
          </h1>
          <p className="text-[12px] text-slate-400 mb-6">
            Diskusi akan langsung ditampilkan setelah dibuat.
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 text-[12px] p-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-slate-600 mb-1">
                Forum
              </label>
              <select
                value={forumId}
                onChange={(e) => setForumId(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px]"
                required
              >
                <option value="">Pilih Forum</option>
                {forums.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-slate-600 mb-1">
                Judul
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px]"
                placeholder="Judul diskusi"
                required
                maxLength={120}
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-slate-600 mb-1">
                Tag (opsional)
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px]"
                placeholder="pajak, cuti, bpjs (pisahkan koma)"
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-slate-600 mb-1">
                Isi Diskusi
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] min-h-50"
                placeholder="Jelaskan detail..."
                required
              />
              <p className="text-[11px] text-slate-400 mt-1">
                {content.length} / min 100 karakter
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3!"
            >
              <Send className="h-4 w-4" />{" "}
              {loading ? "Mengirim..." : "Kirim Diskusi"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
