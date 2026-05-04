"use client";

import { useEffect } from "react";
import { Play, ChevronRight, MonitorPlay } from "lucide-react";
import { useVideoStore } from "@/stores/useVideos";

export default function VideoSidebar() {
  const { categories, loading, activeCategoryId, setActiveCategoryId, loadCategories } = useVideoStore();

  useEffect(() => {
    loadCategories();
  }, []);

  if (loading) {
    return (
      <aside className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 bg-slate-200 animate-pulse rounded" />
          <div className="h-4 w-10 bg-slate-100 animate-pulse rounded-full" />
        </div>
        <div className="card-elevated rounded-xl! overflow-hidden divide-y divide-slate-100">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3.5">
              <div className="w-8 h-8 rounded-xl bg-slate-100 animate-pulse shrink-0" />
              <div className="flex-1 space-y-1.5">
                <div className="h-3 bg-slate-200 animate-pulse rounded w-3/4" />
                <div className="h-2.5 bg-slate-100 animate-pulse rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  const totalVideos = categories.reduce((acc, cat) => acc + cat.videos.length, 0);

  return (
    <aside className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Daftar video
        </h3>
        <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
          {categories.length} produk
        </span>
      </div>

      {/* Category List */}
      <div className="card-elevated rounded-xl! overflow-hidden">
        <div className="divide-y divide-slate-100/80">
          {categories.map((category) => {
            const isActive = activeCategoryId === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all duration-200 group ${
                  isActive
                    ? "bg-linear-to-r from-violet-50/80 via-indigo-50/40 to-white"
                    : "hover:bg-slate-50/80"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isActive
                      ? "bg-linear-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25"
                      : "bg-slate-100 group-hover:bg-slate-200/70"
                  }`}
                >
                  <MonitorPlay
                    className={`h-4 w-4 transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 group-hover:text-slate-500"
                    }`}
                  />
                </div>

                {/* Label */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-[13px] font-semibold truncate transition-colors ${
                      isActive ? "text-violet-700" : "text-slate-700"
                    }`}
                  >
                    {category.name}
                  </p>
                  <p
                    className={`text-[11px] transition-colors ${
                      isActive ? "text-violet-500" : "text-slate-400"
                    }`}
                  >
                    {category.videos.length} video
                  </p>
                </div>

                {/* Arrow / Active indicator */}
                {isActive ? (
                  <div className="w-1.5 h-8 bg-linear-to-b from-violet-500 to-indigo-600 rounded-full shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-slate-400 shrink-0 transition-colors" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stats Card */}
      <div className="card-elevated rounded-xl! p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
            <Play className="h-4 w-4 text-violet-600" />
          </div>
          <div>
            <p className="text-[16px] font-bold text-slate-900">{totalVideos}</p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Total Video
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
