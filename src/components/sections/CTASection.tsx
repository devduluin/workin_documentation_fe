import React from "react";
import Link from "next/link";
import { MessageCircle, HelpCircle, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto px-5 sm:px-8 text-center">
        {/* Icon */}
        <div className="relative inline-flex mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center">
            <HelpCircle className="h-7 w-7 text-blue-600" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold text-amber-900">?</span>
          </div>
        </div>

        <h2 className="text-[22px] md:text-[26px] font-extrabold text-slate-900 tracking-tight mb-3 text-balance">
          Tidak menemukan informasi yang Anda cari?
        </h2>
        <p className="text-[14px] text-slate-500 mb-8">
          Silahkan hubungi tim kami melalui Mekari Customer Care
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=6285174314286&text&type=phone_number&app_absent=0"
          target="_blank"
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-[14px] font-bold text-white rounded-2xl transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), 0 8px 32px rgba(34,197,94,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <MessageCircle className="h-5 w-5" />
          Mekari Customer Care
          <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </section>
  );
}
