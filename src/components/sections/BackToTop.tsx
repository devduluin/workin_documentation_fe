"use client";

import React, { useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useSidebarStore } from "@/stores/useSidebar";

export default function BackToTop() {
  const { showBackToTop, setShowBackToTop } = useSidebarStore();

  useEffect(() => {
    const handler = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [setShowBackToTop]);

  if (!showBackToTop) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300 animate-slide-up"
      style={{
        background: "linear-gradient(135deg, #1e293b, #334155)",
        boxShadow:
          "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
      title="Kembali ke atas"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
