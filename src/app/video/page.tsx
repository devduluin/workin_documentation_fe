"use client";
import CTASection from "@/components/sections/CTASection";
import BackToTop from "@/components/sections/BackToTop";
import MekariNavbar from "@/components/layouts/Navbar";
import { useState } from "react";
import Link from "next/link";
import { FileText, Play, Search, Video } from "lucide-react";
import VideoSidebar from "@/components/sections/videos/VideoSidebar";
import VideoContent from "@/components/sections/videos/VideoContent";
import InfoSection from "@/components/sections/InfoSection";
import MekariFooter from "@/components/layouts/Footer";
import MobileSidebarToggle from "@/components/sections/ToggleSidebar";

export default function VideoTutorialPage() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared: Navbar */}
      <MekariNavbar />

      {/* Hero (video variant) */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-800" />

        {/* Mesh linear */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 left-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
        </div>

        {/* Patterns */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute inset-0 line-pattern opacity-40" />

        {/* Content */}
        <div className="relative max-w-[1360px] mx-auto px-5 sm:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.08] border border-white/[0.08] rounded-full mb-6 backdrop-blur-sm">
              <Play className="h-3.5 w-3.5 text-violet-400" />
              <span className="text-[12px] font-medium text-violet-200/90">
                Video Tutorial Mekari
              </span>
            </div>

            <h1 className="text-3xl md:text-[42px] md:leading-[1.15] font-extrabold text-white mb-4 tracking-tight text-balance">
              Ada yang bisa kami{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-violet-400 via-blue-400 to-cyan-400">
                bantu?
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base mb-8 max-w-lg mx-auto">
              Temukan video tutorial lengkap untuk memandu Anda menggunakan
              produk Mekari
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto">
              <form action="/hc/id/search" method="get" className="relative">
                <div
                  className={`relative rounded-2xl transition-all duration-300 ${
                    isFocused
                      ? "shadow-[0_0_0_2px_rgba(139,92,246,0.4),0_8px_40px_rgba(139,92,246,0.15)]"
                      : "shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Search
                      className={`h-[18px] w-[18px] transition-colors duration-200 ${
                        isFocused ? "text-violet-400" : "text-slate-500"
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
                    className="w-full pl-13 pr-5 py-4 bg-white/[0.07] backdrop-blur-xl text-white placeholder-slate-500 rounded-2xl border border-white/[0.08] focus:bg-white/[0.1] focus:border-violet-500/40 focus:outline-none text-[15px] transition-all"
                    autoComplete="off"
                  />
                </div>
                <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-1">
                  <kbd className="px-2 py-0.5 text-[10px] font-medium text-slate-500 bg-white/[0.06] border border-white/[0.08] rounded-md">
                    ⌘ K
                  </kbd>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-600/30 to-transparent" />
      </section>

      {/* Tab Selector (video active) */}
      <div className="bg-white border-b border-slate-200/60 sticky top-[97px] z-30">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-0">
            {/* Artikel panduan - Inactive */}
            <Link
              href="/"
              className="relative flex items-center gap-2.5 px-5 py-3.5 text-[13px] font-medium text-slate-400 hover:text-slate-600 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-slate-200/70 flex items-center justify-center transition-colors">
                <FileText className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-500 transition-colors" />
              </div>
              <span>Artikel panduan</span>
            </Link>

            {/* Video tutorial - Active */}
            <button className="relative flex items-center gap-2.5 px-5 py-3.5 text-[13px] font-semibold text-slate-900 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center">
                <Video className="h-3.5 w-3.5 text-violet-600" />
              </div>
              <span>Video tutorial</span>
              <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-linear-to-r from-violet-600 to-indigo-600 rounded-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-[20px] md:text-[24px] font-extrabold text-slate-900 tracking-tight">
            Lihat berbagai video tutorial yang Anda butuhkan
          </h1>
          <p className="text-[13px] text-slate-400 mt-2">
            Pilih produk di sidebar untuk melihat video tutorial terkait
          </p>
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="flex-1 bg-slate-50/30 mesh-bg">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            id="page-container"
          >
            {/* Left Sidebar */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-[150px]">
                <VideoSidebar />
              </div>
            </div>

            {/* Main Video Content */}
            <div className="lg:col-span-9">
              <VideoContent />
            </div>
          </div>
        </div>
      </div>

      {/* Shared: Info Section */}
      <InfoSection />

      {/* Shared: CTA Section */}
      <CTASection />

      {/* Shared: Footer */}
      <MekariFooter />

      {/* Shared: Back to Top */}
      <BackToTop />

      {/* Mobile Video Sidebar Toggle */}
      <MobileSidebarToggle />
    </div>
  );
}
