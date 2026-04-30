"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {  MessageSquareMore, ArrowUpRight } from "lucide-react";
import { tableOfContents } from "@/lib/data";
import { useSidebarStore } from "@/stores/useSidebar";
import { ApiHrms } from "@/lib/API-hrms";

export default function TableOfContents() {
  const { activeHeadingId, setActiveHeadingId } = useSidebarStore();

  const [stats, setStats] = useState({ total: 0, updated: 0 });

  useEffect(() => {
    ApiHrms.getDocuments(1)
      .then((res: any) => {
        if (res && res.meta) {
          const total = res.meta.total_items || 0;
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

          const recentlyUpdated = (res.data || []).filter((doc: any) => {
            return new Date(doc.updatedAt) > thirtyDaysAgo;
          }).length;

          setStats({ total, updated: recentlyUpdated });
        }
      })
      .catch((err) => console.error("Failed to fetch stats:", err));

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
      {/* Discuss CTA */}
      <Link
        href="https://api.whatsapp.com/send/?phone=6285165555987&text&type=phone_number&app_absent=0"
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
      <div className="card-elevated rounded-xl! p-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <p className="text-[18px] font-bold text-slate-900">
              {stats.total}
            </p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Total Artikel
            </p>
          </div>
          <div className="text-center">
            <p className="text-[18px] font-bold text-emerald-600">
              {stats.updated}
            </p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Updated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
