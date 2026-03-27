"use client";
import HeroSection from "@/components/sections/HeroSection";
import TabSelector from "@/components/sections/TabSelector";
import ArticleSidebar from "@/components/sections/ArticleSidebar";
import ArticleContent from "@/components/sections/ArticleContent";
import InfoSection from "@/components/sections/InfoSection";
import CTASection from "@/components/sections/CTASection";
import BackToTop from "@/components/sections/BackToTop";
import TableOfContents from "@/components/sections/TableOfContent";
import MobileSidebarToggle from "@/components/sections/ToggleSidebar";
import { ApiHrms } from "@/lib/API-hrms";
import { useEffect } from "react";
import { useCategoryStore } from "@/stores/useCategory";
import WorkinNavbar from "@/components/layouts/Navbar";
import WorkinFooter from "@/components/layouts/Footer";

export default function ArticlePage() {
  const { setCategories, categories } = useCategoryStore();

  useEffect(() => {
    Promise.all([ApiHrms.getCategory()]).then(([c]) => {
      setCategories(c);
    });
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <WorkinNavbar />
      <HeroSection />
      <TabSelector />

      {/* Section Title */}
      <div className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-340 mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-[20px] md:text-[24px] font-extrabold text-slate-900 tracking-tight">
            Temukan artikel panduan sesuai kebutuhan Anda
          </h1>
          <p className="text-[13px] text-slate-400 mt-2">
            Pilih kategori di sidebar atau gunakan pencarian untuk menemukan
            artikel
          </p>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="flex-1 bg-slate-50/30 mesh-bg pt-4" id="content">
        <div className="max-w-340 mx-auto px-5 sm:px-8 py-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            id="page-container"
          >
            {/* Left Sidebar */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-37.5">
                <ArticleSidebar categories={categories} />
              </div>
            </div>

            {/* Main Article */}
            <div className="lg:col-span-6">
              <div className="card-elevated rounded-2xl! p-7 md:p-9">
                <ArticleContent categories={categories} />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-37.5">
                <TableOfContents />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoSection />
      <CTASection />
      <WorkinFooter />
      <BackToTop />
      <MobileSidebarToggle />
    </div>
  );
}
