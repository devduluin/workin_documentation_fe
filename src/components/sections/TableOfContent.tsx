"use client";

import { useEffect } from "react";
import Link from "next/link";
import { List, MessageSquareMore, ArrowUpRight } from "lucide-react";
import { tableOfContents } from "@/lib/data";
import { useSidebarStore } from "@/stores/useSidebar";

export default function TableOfContents() {
  const { activeHeadingId, setActiveHeadingId } = useSidebarStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      { rootMargin: "-120px 0px -70% 0px" },
    );

    tableOfContents.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveHeadingId]);

  return (
    <div className="space-y-3">
      {/* TOC */}
      <div className="card-elevated !rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100/80">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <List className="h-3.5 w-3.5" />
            Daftar Isi
          </p>
        </div>
        <nav className="p-2">
          <ul className="space-y-0.5">
            {tableOfContents.map((item) => {
              const isActive = activeHeadingId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative flex items-center gap-2.5 px-3 py-2 text-[12px] rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-50 to-indigo-50/50 text-blue-700 font-semibold"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all ${
                        isActive
                          ? "bg-blue-600 ring-4 ring-blue-100"
                          : "bg-slate-300"
                      }`}
                    />
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Discuss CTA */}
      <Link
        href="https://community.mekari.com/discuss/"
        target="_blank"
        className="group flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl text-[13px] font-semibold text-white transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #1e40af, #4f46e5, #7c3aed)",
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.1), 0 4px 16px rgba(79,70,229,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        <MessageSquareMore className="h-4 w-4" />
        Diskusikan fitur ini
        <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
      </Link>

      {/* Quick Stats */}
      <div className="card-elevated !rounded-xl p-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <p className="text-[18px] font-bold text-slate-900">12</p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Total Artikel
            </p>
          </div>
          <div className="text-center">
            <p className="text-[18px] font-bold text-emerald-600">3</p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Updated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
