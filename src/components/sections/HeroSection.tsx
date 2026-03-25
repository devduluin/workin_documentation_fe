"use client";

import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />

      {/* Mesh Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 left-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Grid lines */}
      <div className="absolute inset-0 line-pattern opacity-40" />

      {/* Content */}
      <div className="relative max-w-[1360px] mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.08] border border-white/[0.08] rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-[12px] font-medium text-blue-200/90">
              Pusat Bantuan Mekari
            </span>
          </div>

          <h2 className="text-3xl md:text-[42px] md:leading-[1.15] font-extrabold text-white mb-4 tracking-tight text-balance">
            Panduan pengguna{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
              Mekari
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base mb-8 max-w-lg mx-auto">
            Temukan panduan lengkap untuk mengoptimalkan penggunaan semua produk
            Mekari
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <form action="/hc/id/search" method="get" className="relative">
              <div
                className={`relative rounded-2xl transition-all duration-300 ${
                  isFocused
                    ? "shadow-[0_0_0_2px_rgba(99,102,241,0.4),0_8px_40px_rgba(99,102,241,0.15)]"
                    : "shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
                }`}
              >
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search
                    className={`h-[18px] w-[18px] transition-colors duration-200 ${
                      isFocused ? "text-indigo-400" : "text-slate-500"
                    }`}
                  />
                </div>
                <input
                  type="search"
                  name="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Temukan panduan di sini..."
                  className="w-full pl-13 pr-5 py-4 bg-white/[0.07] backdrop-blur-xl text-white placeholder-slate-500 rounded-2xl border border-white/[0.08] focus:bg-white/[0.1] focus:border-indigo-500/40 focus:outline-none text-[15px] transition-all"
                  autoComplete="off"
                />
              </div>

              {/* Keyboard hint */}
              <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-1">
                <kbd className="px-2 py-0.5 text-[10px] font-medium text-slate-500 bg-white/[0.06] border border-white/[0.08] rounded-md">
                  ⌘ K
                </kbd>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/30 to-transparent" />
    </section>
  );
}
