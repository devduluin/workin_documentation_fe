"use client";

import { Play, MonitorPlay, ExternalLink } from "lucide-react";
import { videoCategories, VideoItem } from "@/lib/videoData";
import { useVideoStore } from "@/stores/useVideos";

function VideoCard({ video }: { video: VideoItem }) {
  return (
    <div className="group card-interactive rounded-2xl! overflow-hidden">
      {/* Thumbnail / Embed */}
      <div className="relative aspect-video bg-slate-900 overflow-hidden">
        <iframe
          title={video.title}
          src={`https://www.youtube.com/embed/${video.youtubeId}?enablejsapi=1`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {/* Subtle overlay linear at bottom for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-100 to-indigo-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:from-violet-200 group-hover:to-indigo-200 transition-colors">
            <Play className="h-3.5 w-3.5 text-violet-600" />
          </div>
          <div className="min-w-0">
            <h3 className="text-[13px] font-semibold text-slate-800 leading-relaxed group-hover:text-violet-700 transition-colors line-clamp-2">
              {video.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoContent() {
  const { activeCategoryId } = useVideoStore();

  const activeCategory = videoCategories.find((c) => c.id === activeCategoryId);

  if (!activeCategory) return null;

  return (
    <div className="animate-fade-in">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <MonitorPlay className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-[20px] md:text-[22px] font-extrabold text-slate-900 tracking-tight">
              {activeCategory.name}
            </h2>
            <p className="text-[12px] text-slate-400 font-medium">
              {activeCategory.videos.length} video tutorial tersedia
            </p>
          </div>
        </div>

        <a
          href={`https://www.youtube.com/@DuluinGroup`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-[12px] font-medium text-slate-400 hover:text-violet-600 transition-colors"
        >
          Lihat di YouTube
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {activeCategory.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {/* Empty State (if needed) */}
      {activeCategory.videos.length === 0 && (
        <div className="card-elevated rounded-2xl! p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <MonitorPlay className="h-7 w-7 text-slate-300" />
          </div>
          <p className="text-[14px] font-medium text-slate-500">
            Belum ada video untuk kategori ini
          </p>
          <p className="text-[12px] text-slate-400 mt-1">
            Video tutorial akan segera ditambahkan
          </p>
        </div>
      )}
    </div>
  );
}
