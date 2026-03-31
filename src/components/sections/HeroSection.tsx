"use client";

import { useState } from "react";
import { Dot } from "lucide-react";
import { useSidebarStore } from "@/stores/useSidebar";
import Link from "next/link";
import { useCategoryStore } from "@/stores/useCategory";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { openCategoryId, toggleCategory } = useSidebarStore();
  const { categories } = useCategoryStore();

  const documents = categories?.flatMap((cat: any) => cat?.Documents || []);

  const results = documents?.filter((doc: any) =>
    doc.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180.91deg, #082D76 8.88%, #0E51D4 91.12%",
        }}
      />

      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="absolute inset-0 line-pattern opacity-40" />

      <div className="bg-[url('/images/hero.svg')] bg-no-repeat bg-cover bg-center relative max-w-340 h-166.25 flex justify-center items-center mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[42px] md:leading-14 font-extrabold text-white mb-4 tracking-tight text-balance">
            Panduan Penggunaan Workin by Duluin
          </h2>

          <p className="text-white text-sm md:text-base mb-8 max-w-xl mx-auto">
            Temukan panduan lengkap untuk penggunaan seluruh fitur Workin by
            Duluin.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <form action="/hc/id/search" method="get" className="relative">
              <div
                className={`relative rounded-2xl z-40 transition-all duration-300 ${
                  isFocused
                    ? "shadow-[0_0_0_2px_rgba(99,102,241,0.4),0_8px_40px_rgba(99,102,241,0.15)] scale-[1.05]"
                    : "shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
                }`}
              >
                <input
                  name="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  placeholder="Cari..."
                  className="w-full pl-7 pr-5 py-4 bg-white/20 text-white backdrop-blur-xl  placeholder-white rounded-2xl border border-white/8 focus:outline-none text-[15px] transition-all"
                  autoComplete="off"
                />
                {isFocused && query && results?.length > 0 && (
                  <div className="absolute top-full mt-3 w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50">
                    <div className="max-h-72 overflow-auto">
                      {results.slice(0, 8).map((item: any) => (
                        <Link
                          key={item.id}
                          href={`/categories/${item.id}#content`}
                          onClick={() => {
                            setQuery("");
                            if (item.categoryId !== openCategoryId)
                              toggleCategory(item.categoryId);
                          }}
                          className="flex items-start gap-3 px-4 py-3 text-sm hover:bg-slate-100 transition"
                        >
                          <Dot className="w-8 -mt-0.5 -mr-3 text-slate-400" />
                          <span className="text-slate-700">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {isFocused && query && results?.length === 0 && (
                  <div className="relative">
                    <div className="absolute top-full mt-3 w-full bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 text-sm text-slate-500">
                      Tidak ditemukan hasil untuk "
                      <span className="font-medium">{query}</span>"
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-600/30 to-transparent" />
    </section>
  );
}
