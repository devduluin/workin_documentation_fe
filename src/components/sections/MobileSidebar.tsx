"use client";

import React from "react";
import { List, X } from "lucide-react";
import ArticleSidebar from "./ArticleSidebar";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { useSidebarStore } from "@/stores/useSidebar";

export default function MobileSidebarToggle() {
  const { isMobileSidebarOpen, toggleMobileSidebar, closeMobileSidebar } =
    useSidebarStore();

  return (
    <>
      {/* Toggle Button - Mobile Only */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-full shadow-lg transition-all"
      >
        <List className="h-4 w-4" />
        Daftar isi
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileSidebar}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-gray-50 shadow-2xl animate-slide-down overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
              <span className="text-sm font-semibold text-gray-900">
                Daftar Artikel
              </span>
              <button
                onClick={closeMobileSidebar}
                className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <ArticleSidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
