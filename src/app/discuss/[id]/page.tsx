"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  MessageSquare,
  Eye,
  Clock,
  Send,
  Tag,
} from "lucide-react";
import { useAuthStore } from "@/stores/useAuth";
import { discussApi } from "@/lib/discussAPI";

export default function TopicDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { user, loadUser } = useAuthStore();
  const [topic, setTopic] = useState<any>(null);
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (!id) return;
    discussApi.getTopic(id).then((t) => {
      setTopic(t);
      setLikeCount(t._count.likes);
      if (user) setLiked(t.likes.some((l: any) => l.userId === user.id));
    });
  }, [id, user]);

  const handleLike = async () => {
    if (!user) return router.push("/login");
    const res = await discussApi.toggleLike(id);
    setLiked(res.liked);
    setLikeCount((c) => (res.liked ? c + 1 : c - 1));
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return router.push("/login");
    if (!comment.trim()) return;
    setSubmitting(true);
    const newComment = await discussApi.addComment(id, { content: comment });
    setTopic((t: any) => ({ ...t, comments: [...t.comments, newComment] }));
    setComment("");
    setSubmitting(false);
  };

  if (!topic)
    return <div className="p-12 text-center text-slate-400">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50/30">
      <div className="max-w-225 mx-auto px-5 sm:px-8 py-8">
        <Link
          href="/discuss"
          className="inline-flex items-center gap-2 text-[13px] text-slate-500 hover:text-slate-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke Discussion
        </Link>

        {/* Topic */}
        <div className="card-elevated rounded-2xl! p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
              {topic.forum.name}
            </span>
            {topic.tags?.map((tt: any) => (
              <span
                key={tt.tag.id}
                className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full"
              >
                <Tag className="h-2.5 w-2.5 inline mr-1" />
                {tt.tag.name}
              </span>
            ))}
          </div>

          <h1 className="text-[22px] md:text-[26px] font-extrabold text-slate-900 tracking-tight mb-4">
            {topic.title}
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              {topic.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-[13px] font-semibold text-slate-800">
                {topic.author.name}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Clock className="h-3 w-3" />
                {new Date(topic.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed mb-6 whitespace-pre-wrap">
            {topic.content}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${liked ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500"}`}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-red-500" : ""}`} />{" "}
              {likeCount}
            </button>
            <span className="flex items-center gap-1.5 text-[12px] text-slate-400">
              <MessageSquare className="h-4 w-4" /> {topic.comments.length}{" "}
              comments
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-slate-400">
              <Eye className="h-4 w-4" /> {topic.views} views
            </span>
          </div>
        </div>

        {/* Comments */}
        <div className="card-elevated rounded-2xl! p-6 md:p-8">
          <h2 className="text-[16px] font-extrabold text-slate-900 mb-6">
            Comments ({topic.comments.length})
          </h2>

          <div className="space-y-4 mb-6">
            {topic.comments.map((c: any) => (
              <div
                key={c.id}
                className="flex gap-3 p-4 bg-slate-50/50 rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-[11px] font-bold shrink-0">
                  {c.author.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[12px] font-semibold text-slate-800">
                      {c.author.name}
                    </span>
                    {c.author.role === "ADMIN" && (
                      <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                        ADMIN
                      </span>
                    )}
                    <span className="text-[11px] text-slate-400">
                      {new Date(c.createdAt).toLocaleDateString("id-ID")}
                    </span>
                  </div>
                  <p className="text-[13px] text-slate-600 whitespace-pre-wrap">
                    {c.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          {user ? (
            <form onSubmit={handleComment} className="flex gap-3">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tulis komentar..."
                rows={3}
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
              />
              <button
                type="submit"
                disabled={submitting || !comment.trim()}
                className="btn-primary self-end py-3! disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <Link
                href="/login"
                className="text-[13px] font-semibold text-indigo-600 hover:underline"
              >
                Login untuk berkomentar
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
