import CTASection from "@/components/sections/CTASection";
import BackToTop from "@/components/sections/BackToTop";
import Link from "next/link";
import { FileText, Video } from "lucide-react";
import VideoSidebar from "@/components/sections/videos/VideoSidebar";
import VideoContent from "@/components/sections/videos/VideoContent";
import MobileSidebarToggle from "@/components/sections/ToggleSidebar";
import WorkinNavbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import { Metadata } from "next";
import Footer from "@/components/layouts/FooterSection";

export const metadata: Metadata = {
  title: "Video Tutorial - Workin by Duluin Help Center",
  description:
    "Temukan berbagai video tutorial yang membantu Anda memahami dan menggunakan produk Workin by Duluin dengan lebih efektif. Pelajari fitur-fitur utama, tips penggunaan, dan solusi untuk masalah umum melalui panduan video kami.",
};

export default function VideoTutorialPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <WorkinNavbar />

      <HeroSection />

      <div className="bg-white border-b border-slate-200/60 sticky top-[97px] z-30">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-0">
            <Link
              href="/articles/5b96aff9-5d8a-4f45-9883-3471940942b6"
              className="relative flex items-center gap-2.5 px-5 py-3.5 text-[13px] font-medium text-slate-400 hover:text-slate-600 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-slate-200/70 flex items-center justify-center transition-colors">
                <FileText className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-500 transition-colors" />
              </div>
              <span>Artikel panduan</span>
            </Link>

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

      <div className="flex-1 bg-slate-50/30 mesh-bg">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            id="page-container"
          >
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-[150px]">
                <VideoSidebar />
              </div>
            </div>

            <div className="lg:col-span-9">
              <VideoContent />
            </div>
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
      <BackToTop />
      <MobileSidebarToggle />
    </div>
  );
}
