import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { infoCards } from "@/lib/data";

export default function InfoSection() {
  return (
    <section className="relative bg-slate-50/50 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative max-w-340 mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200/60 rounded-full mb-4 shadow-sm">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
              Resources
            </span>
          </div>
          <h2 className="text-2xl md:text-[32px] font-extrabold text-slate-900 tracking-tight text-balance">
            Sumber informasi lainnya yang bisa membantu Anda
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {infoCards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href}
              target="_blank"
              className="group card-interactive p-6 hover:border-blue-200/60"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-slate-100 to-slate-50 border border-slate-200/60 flex items-center justify-center mb-5 group-hover:from-blue-50 group-hover:to-indigo-50 group-hover:border-blue-200/60 transition-all duration-300">
                <span className="text-2xl">{card.image}</span>
              </div>

              {/* Content */}
              <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
                {card.description}
              </p>

              {/* Link */}
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                Selengkapnya
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
