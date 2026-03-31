"use client";

import Link from "next/link";
import { FileText, Video } from "lucide-react";

export default function TabSelector() {
  return (
    <div className="bg-white border-b border-slate-200/60 sticky top-22 z-30">
      <div className="max-w-340 mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-0">
          {/* Active Tab - Artikel */}
          <button className="relative flex items-center gap-2.5 px-5 py-3.5 text-[13px] font-semibold text-slate-900 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
              <FileText className="h-3.5 w-3.5 text-blue-600" />
            </div>
            <span>Artikel panduan</span>
            <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full" />
          </button>

          {/* Inactive Tab - Video → now links to /video */}
          <Link
            href="/video"
            className="relative flex items-center gap-2.5 px-5 py-3.5 text-[13px] font-medium text-slate-400 hover:text-slate-600 transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-slate-200/70 flex items-center justify-center transition-colors">
              <Video className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-500 transition-colors" />
            </div>
            <span>Video tutorial</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
