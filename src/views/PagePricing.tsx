"use client";
import MekariFooter from "@/components/layouts/Footer";
import MekariNavbar from "@/components/layouts/Navbar";
import BackToTop from "@/components/sections/BackToTop";
import {
  bundleProducts,
  faqItems,
  featureCards,
  productTabs,
  testimonials,
} from "@/lib/pricing";
import { usePricingStore } from "@/stores/usePricing";
import {
  ArrowUpRight,
  Brain,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Headphones,
  MessageCircle,
  Package,
  Quote,
  Shield,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const icons = [Shield, Zap, Brain, Headphones, Users, Cloud];

export default function HargaPage() {
  const { selectedBundles, toggleBundle } = usePricingStore();

  const selected = bundleProducts.filter((p) => selectedBundles.includes(p.id));

  const waText = encodeURIComponent(
    `Halo saya tertarik dengan produk Mekari ${selected.map((p) => p.name).join(", ")}`,
  );

  const { activeTab, setActiveTab } = usePricingStore();
  const currents =
    productTabs.find((t) => t.id === activeTab) ?? productTabs[0];
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];
  const { openFaqIndex, toggleFaq } = usePricingStore();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MekariNavbar />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-800" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-125 h-125 bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-violet-600/15 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative max-w-340 mx-auto px-5 sm:px-8 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.08] border border-white/[0.08] rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-[12px] font-medium text-amber-200/90">
                Pricing
              </span>
            </div>
            <h1 className="text-3xl md:text-[48px] md:leading-[1.1] font-extrabold text-white mb-5 tracking-tight">
              Paket harga
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto">
              Temukan pilihan paket harga yang tepat untuk kebutuhan bisnis Anda
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-600/30 to-transparent" />
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-340 mx-auto px-5 sm:px-8">
          <h2 className="text-[22px] md:text-[28px] font-extrabold text-slate-900 text-center mb-12 tracking-tight">
            Penawaran pembelian bundle dan kustom sesuai kebutuhan Anda
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Product Selector */}
            <div className="card-elevated !rounded-2xl p-6 md:p-8">
              <p className="text-[14px] font-semibold text-slate-700 mb-5">
                Pilih produk yang Anda ingin beli secara bundle
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bundleProducts.map((product) => {
                  const isSelected = selectedBundles.includes(product.id);
                  return (
                    <button
                      key={product.id}
                      onClick={() => toggleBundle(product.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 text-left ${
                        isSelected
                          ? "border-blue-500 bg-blue-50/50 shadow-[var(--shadow-glow-blue)]"
                          : "border-slate-200/60 hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? "bg-blue-600 border-blue-600"
                            : "border-slate-300"
                        }`}
                      >
                        {isSelected && <Check className="h-3 w-3 text-white" />}
                      </div>
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold shrink-0 ${
                          isSelected
                            ? "bg-blue-100 text-blue-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {product.initial}
                      </div>
                      <span className="text-[13px] font-semibold text-slate-700">
                        {product.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Summary */}
            <div className="card-elevated !rounded-2xl p-6 md:p-8 flex flex-col">
              <p className="text-[14px] font-semibold text-slate-700 mb-5">
                Produk bundling yang Anda pilih:
              </p>

              <div className="flex-1 space-y-2 mb-6 min-h-[120px]">
                {selected.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-center py-8">
                    <div>
                      <Package className="h-8 w-8 text-slate-300 mx-auto mb-3" />
                      <p className="text-[13px] text-slate-400">
                        You haven&apos;t selected a bundling product yet
                      </p>
                    </div>
                  </div>
                ) : (
                  selected.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl animate-fade-in"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-md bg-emerald-500 flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">
                          {product.initial}
                        </div>
                        <span className="text-[13px] font-semibold text-slate-700">
                          {product.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          {product.priceLabel && (
                            <p className="text-[10px] text-slate-400">
                              {product.priceLabel}
                            </p>
                          )}
                          <p className="text-[12px] font-semibold text-slate-700">
                            {product.price ?? "Diskusi dengan kami"}
                            {product.price && (
                              <span className="text-[10px] text-slate-400 font-normal">
                                {" "}
                                /month
                              </span>
                            )}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleBundle(product.id)}
                          className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {selected.length > 0 && (
                <Link
                  href={`https://api.whatsapp.com/send/?phone=6281392770506&text=${waText}`}
                  target="_blank"
                  className="btn-primary w-full justify-center text-[14px] !py-3"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp sekarang
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* product tab */}
      <section className="py-16 md:py-20 bg-slate-50/30 mesh-bg">
        <div className="max-w-340 mx-auto px-5 sm:px-8">
          <h2 className="text-[22px] md:text-[28px] font-extrabold text-slate-900 text-center mb-3 tracking-tight">
            Penawaran produk dan layanan secara terpisah
          </h2>
          <p className="text-[14px] text-slate-500 text-center mb-10 max-w-lg mx-auto">
            Untuk detil penawaran paket dan fitur, Anda dapat klik di salah satu
            produk pilihan Anda
          </p>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {productTabs.map((tab) => (
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

          {/* Content */}
          <div
            className="card-elevated !rounded-2xl p-8 md:p-12 animate-fade-in"
            key={currents.id}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-extrabold text-slate-900 tracking-tight mb-3">
                  {currents.title}
                </h3>
                <p className="text-[14px] text-slate-500 mb-8">
                  {currents.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currents.products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      target="_blank"
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200/60 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                    >
                      <div className="w-7 h-7 rounded-lg bg-linear-to-br from-slate-100 to-slate-50 border border-slate-200/60 flex items-center justify-center text-[10px] font-bold text-slate-500 group-hover:from-blue-50 group-hover:to-indigo-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all">
                        {product.initial}
                      </div>
                      <span className="text-[13px] font-semibold text-slate-700 group-hover:text-blue-700 transition-colors flex-1">
                        {product.name}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-sm aspect-square bg-linear-to-br from-slate-100 to-indigo-50 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-black linear-text">M</span>
                    </div>
                    <p className="text-[13px] font-semibold text-slate-500">
                      Ekosistem Mekari
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-340 mx-auto px-5 sm:px-8">
          <h2 className="text-[22px] md:text-[28px] font-extrabold text-slate-900 text-center mb-12 tracking-tight">
            Platform bisnis dalam ekosistem terbaik dan teraman
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureCards.map((card, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={card.title}
                  className="card-interactive p-6 !rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-slate-100 to-indigo-50 border border-slate-200/60 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* testimoni */}
      <section className="py-16 md:py-20 bg-slate-50/30">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="text-[22px] md:text-[28px] font-extrabold text-slate-900 text-center mb-10 tracking-tight">
            Bawa agilitas dalam bisnis Anda
          </h2>

          <div className="card-elevated !rounded-2xl p-8 md:p-10 relative">
            <Quote className="h-8 w-8 text-indigo-200 absolute top-6 left-6" />
            <div className="relative">
              <p className="text-[15px] md:text-[16px] text-slate-700 leading-relaxed mb-8 italic pl-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4 pl-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between pl-6">
                <div>
                  <p className="text-[14px] font-bold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-slate-500">{t.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrent((c) =>
                        c === 0 ? testimonials.length - 1 : c - 1,
                      )
                    }
                    className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrent((c) =>
                        c === testimonials.length - 1 ? 0 : c + 1,
                      )
                    }
                    className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-340 mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left */}
            <div className="lg:col-span-4">
              <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest mb-3">
                Frequently Asked Questions (FAQ)
              </p>
              <h2 className="text-[22px] md:text-[28px] font-extrabold text-slate-900 tracking-tight mb-4">
                Apa itu Mekari?
              </h2>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                Mekari adalah penyedia SaaS terkemuka di Indonesia, menawarkan
                berbagai perangkat lunak berbasis cloud, layanan keuangan
                kontekstual, dan layanan profesional untuk membantu bisnis dari
                semua ukuran tumbuh dan sukses.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 lg:col-start-6 space-y-3">
              {faqItems.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    className={`card-elevated !rounded-xl overflow-hidden transition-all ${
                      isOpen ? "ring-1 ring-indigo-200" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left"
                    >
                      <h3 className="text-[14px] font-semibold text-slate-800 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-indigo-500" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 animate-fade-in">
                        <p className="text-[13px] text-slate-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-linear-to-b from-white to-slate-50/50">
        <div className="max-w-lg mx-auto px-5 sm:px-8 text-center">
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-black text-lg">M</span>
          </div>
          <h2 className="text-[22px] md:text-[28px] font-extrabold text-slate-900 tracking-tight mb-3">
            Siap untuk dunia kerja masa depan?
          </h2>
          <p className="text-[14px] text-slate-500 mb-8 max-w-md mx-auto">
            Mekari adalah partner dan solusi digital transformasi paling
            terpercaya untuk dorong pertumbuhan bisnis Anda
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=6281392770506&text=Halo%20saya%20tertarik%20dengan%20solusi%20Mekari"
            target="_blank"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-[14px] font-bold text-white rounded-2xl transition-all duration-300"
            style={{
              background: "linear-linear(135deg, #22c55e, #16a34a)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), 0 8px 32px rgba(34,197,94,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp sekarang
            <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </section>
      <MekariFooter />
      <BackToTop />
    </div>
  );
}
