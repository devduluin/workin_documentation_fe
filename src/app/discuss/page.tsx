"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Heart,
  Eye,
  Plus,
  Trophy,
  Flame,
  Sparkles,
  LogIn,
} from "lucide-react";
import { discussApi } from "@/lib/discussAPI";
import { useAuthStore } from "@/stores/useAuth";
import WorkinNavbar from "@/components/layouts/Navbar";

export default function DiscussPage() {
  const { user, loadUser, loading: authLoading } = useAuthStore();
  const [forums, setForums] = useState<any[]>([]);
  const [topics, setTopics] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [contributors, setContributors] = useState<any[]>([]);
  const [selectedForum, setSelectedForum] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [sort, setSort] = useState("new");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    Promise.all([
      discussApi.getForums(),
      discussApi.getTags(),
      discussApi.getTopContributors(),
    ]).then(([f, t, c]) => {
      setForums(f);
      setTags(t);
      setContributors(c);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const params: Record<string, string> = { sort };
    if (selectedForum) params.forumId = selectedForum;
    if (selectedTag) params.tag = selectedTag;
    discussApi.getTopics(params).then((data) => {
      setTopics(data.topics);
      setLoading(false);
    });
  }, [selectedForum, selectedTag, sort]);

  return (
    <>
      <WorkinNavbar />
      <div className="min-h-screen bg-slate-50/30">
        <div className="max-w-340 mx-auto px-5 sm:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-[24px] font-extrabold text-slate-900 tracking-tight">
              Discussion
            </h1>
            {user ? (
              <Link href="/discuss/create" className="btn-primary text-[13px]">
                <Plus className="h-4 w-4" /> Buat Diskusi
              </Link>
            ) : (
              <Link href="/login" className="btn-primary text-[13px]">
                <LogIn className="h-4 w-4" /> Login untuk Diskusi
              </Link>
            )}
          </div>

          {/* Filters */}
          <div className="card-elevated rounded-2xl! p-5 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div>
                <label className="block text-[12px] font-semibold text-slate-500 mb-1">
                  Forum
                </label>
                <select
                  value={selectedForum}
                  onChange={(e) => setSelectedForum(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="">All Forums</option>
                  {forums.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-slate-500 mb-1">
                  Tag
                </label>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="">All Tags</option>
                  {tags.map((t) => (
                    <option key={t.id} value={t.slug}>
                      #{t.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-slate-500 mb-1">
                  Sort
                </label>
                <div className="flex gap-2">
                  {[
                    { value: "new", label: "New", icon: Sparkles },
                    { value: "hot", label: "Hot", icon: Flame },
                  ].map((s) => (
                    <button
                      key={s.value}
                      onClick={() => setSort(s.value)}
                      className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-[12px] font-semibold transition-all ${
                        sort === s.value
                          ? "bg-slate-900 text-white"
                          : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <s.icon className="h-3.5 w-3.5" /> {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Forum Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {forums.map((f) => (
              <button
                key={f.id}
                onClick={() =>
                  setSelectedForum(selectedForum === f.id ? "" : f.id)
                }
                className={`card-interactive p-5 rounded-2xl! text-left transition-all ${
                  selectedForum === f.id
                    ? "ring-2 ring-indigo-500 border-indigo-200"
                    : ""
                }`}
              >
                <h3 className="text-[14px] font-bold text-slate-900 mb-1">
                  {f.name}
                </h3>
                <p className="text-[12px] text-slate-500 mb-3 line-clamp-2">
                  {f.description}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span>{f.topicCount} topics</span>
                  <span>•</span>
                  <span>{f.replyCount} replies</span>
                </div>
              </button>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Topics */}
            <div className="lg:col-span-8">
              <div className="card-elevated rounded-2xl! overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                  <div className="col-span-7">Topic</div>
                  <div className="col-span-2">Forum</div>
                  <div className="col-span-1 text-center">Replies</div>
                  <div className="col-span-1 text-center">Likes</div>
                  <div className="col-span-1 text-center">Views</div>
                </div>

                {loading ? (
                  <div className="p-8 text-center text-slate-400">
                    Loading...
                  </div>
                ) : topics.length === 0 ? (
                  <div className="p-8 text-center text-slate-400">
                    No topics found
                  </div>
                ) : (
                  topics.map((t) => (
                    <Link
                      key={t.id}
                      href={`/discuss/${t.id}`}
                      className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 py-4 border-b border-slate-100/60 hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="md:col-span-7">
                        <h3 className="text-[14px] font-semibold text-slate-800 mb-1 line-clamp-1">
                          {t.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span>{t.author.name}</span>
                          <span>•</span>
                          <span>
                            {new Date(t.createdAt).toLocaleDateString("id-ID")}
                          </span>
                          {t.tags?.map((tt: any) => (
                            <span
                              key={tt.tag.id}
                              className="bg-slate-100 px-2 py-0.5 rounded-full text-[10px] font-medium"
                            >
                              #{tt.tag.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-2 text-[12px] text-slate-500 font-medium">
                        {t.forum.name}
                      </div>
                      <div className="flex gap-4 md:gap-8 xl:gap-14">
                        <div className="md:col-span-1 text-center">
                          <div className="flex items-center justify-center gap-1 text-[12px] text-slate-500">
                            <MessageSquare className="h-3 w-3" />{" "}
                            {t._count.comments}
                          </div>
                        </div>
                        <div className="md:col-span-1 text-center">
                          <div className="flex items-center justify-center gap-1 text-[12px] text-slate-500">
                            <Heart className="h-3 w-3" /> {t._count.likes}
                          </div>
                        </div>
                        <div className="md:col-span-1 text-center">
                          <div className="flex items-center justify-center gap-1 text-[12px] text-slate-500">
                            <Eye className="h-3 w-3" /> {t.views}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>

            {/* Sidebar: Top Contributors */}
            <aside className="lg:col-span-4">
              <div className="card-elevated rounded-2xl! p-5 sticky top-28">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <h2 className="text-[16px] font-extrabold text-slate-900">
                    Top Contributor
                  </h2>
                </div>
                <p className="text-[11px] text-slate-400 mb-4">
                  Rank berdasarkan <b>total likes</b> yang didapatkan
                </p>

                <div className="space-y-3">
                  {contributors.map((c, i) => (
                    <div
                      key={c.id}
                      className={`flex items-center gap-3 ${i === 0 ? "p-3 bg-linear-to-r from-amber-50 to-white rounded-xl border border-amber-200/50" : ""}`}
                    >
                      <span className="text-[14px] font-extrabold text-slate-400 w-6 text-center">
                        #{i + 1}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                        {c.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-slate-800 truncate">
                          {c.name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {c.topicCount} topics
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-[14px] font-black text-slate-900">
                          +{c.totalLikes}
                        </p>
                        <p className="text-[10px] text-slate-400">Likes</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
