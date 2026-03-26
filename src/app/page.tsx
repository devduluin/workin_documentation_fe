"use client";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import CTASection from "@/components/sections/CTASection";
import BackToTop from "@/components/sections/BackToTop";
import MekariNavbar from "@/components/layouts/Navbar";
import MekariFooter from "@/components/layouts/Footer";
import MobileSidebarToggle from "@/components/sections/ToggleSidebar";
import { usePricingStore } from "@/stores/usePricing";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArticleData } from "@/lib/articleData";

export default function ArticlePage() {
  const { activeTab, setActiveTab } = usePricingStore();

  const currents =
    ArticleData.find((t) => t.id === activeTab) ?? ArticleData[0];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MekariNavbar />
      <HeroSection />
      {/* product tab */}
      <section className="py-16 md:py-20 bg-slate-50/30 mesh-bg">
        <div className="max-w-340 mx-auto px-5 sm:px-8">
          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {ArticleData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                    : "bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <h2 className="text-[22px] md:text-[28px] font-extrabold text-slate-900 text-center mb-3 tracking-tight">
            Penawaran produk dan layanan secara terpisah
          </h2>
          <p className="text-[14px] text-slate-500 text-center mb-10 max-w-lg mx-auto">
            Untuk detil penawaran paket dan fitur, Anda dapat klik di salah satu
            produk pilihan Anda
          </p>

          {/* Content */}
          <div
            className=" rounded-2xl! p-8 md:px-12 md:py-8 animate-fade-in"
            key={currents.id}
          >
            <div className="grid grid-cols-1 gap-10 items-center">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-extrabold text-slate-900 tracking-tight mb-3">
                  {currents.title}
                </h3>
                <p className="text-[14px] text-slate-500 mb-8">
                  {currents.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currents.products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      target="_blank"
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200/60 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                    >
                      <div className="w-7 h-7 rounded-lg bg-linear-to-br from-slate-100 to-slate-50 border border-slate-200/60 flex items-center justify-center text-[10px] font-bold text-slate-500 group-hover:from-blue-50 group-hover:to-indigo-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all">
                        {product.icon}
                      </div>
                      <span className="text-[13px] font-semibold text-slate-700 group-hover:text-blue-700 transition-colors flex-1">
                        {product.name}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfoSection />
      <CTASection />
      <MekariFooter />
      <BackToTop />
      <MobileSidebarToggle />
    </div>
  );
}
