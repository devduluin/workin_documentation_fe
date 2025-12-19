"use client";

import { useState } from "react";
import Sidebar from "@/app/component/Sidebar";

export default function DocsLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
  };

  const handleAnimationEnd = () => {
    if (closing) {
      setOpen(false);
      setClosing(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={handleClose}
          />

          <aside
            className={`fixed inset-y-0 left-0 w-64 bg-gray-50 z-50 md:hidden flex flex-col ${
              closing ? "animate-slide-out" : "animate-slide-in"
            }`}
            onAnimationEnd={handleAnimationEnd}
          >
            <div className="flex justify-end p-4 border-b">
              <button
                onClick={handleClose}
                className="text-2xl font-bold text-black"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <Sidebar />
            </div>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center p-4 border-b relative">
          <button
            onClick={() => setOpen(true)}
            className="text-2xl font-bold text-black"
          >
            ☰
          </button>

          {/* Logo – MOBILE ONLY */}
          <img
            src="/workin-color.png"
            alt="Workin"
            className="h-8 object-contain absolute left-1/2 -translate-x-1/2"
          />
        </div>

        <div className="p-4 md:p-10">{children}</div>
      </main>
    </div>
  );
}