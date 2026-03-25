"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Download,
  GraduationCap,
  Clock,
  User,
  ExternalLink,
  Share2,
  MessageCircle,
} from "lucide-react";
import {
  breadcrumbs,
  releaseLogEntries,
  recentArticles,
  relatedArticles,
} from "@/lib/data";

export default function ArticleContent() {
  return (
    <article className="min-w-0">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center flex-wrap gap-1 text-xs text-gray-500">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.href}>
              {index > 0 && <ChevronRight className="h-3 w-3 text-gray-300" />}
              <li>
                <Link
                  href={crumb.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
          Mekari Account - Guidebook Release Log
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-sm">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Learning Center Mekari
              </p>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>Diperbarui 6 hari yang lalu</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              PDF
            </button>
            <Link
              href="https://community.mekari.com/mekari-training/mekari/"
              target="_blank"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 rounded-lg transition-all shadow-sm"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Ikut pelatihan GRATIS!
            </Link>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <section className="prose prose-sm max-w-none mb-8">
        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed m-0">
            Kumpulan catatan rilis (release log) artikel panduan mengenai Mekari
            Account untuk melakukan berbagai pengaturan pengoperasian penggunaan
            sistem Mekari Account. Halaman ini berisi daftar artikel panduan
            Mekari Account baru atau yang diperbarui pada tahun tertera
            berdasarkan fitur yang telah dirilis per bulannya.
          </p>
        </div>

        {/* Year 2026 */}
        <h2
          id="tahun-2026"
          className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2"
        >
          <div className="w-1 h-6 bg-blue-600 rounded-full" />
          Tahun 2026
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Temukan panduan baru atau yang diperbarui di sini.
        </p>

        {/* Januari */}
        <h3
          id="januari"
          className="text-lg font-semibold text-gray-800 mb-4 pl-3 border-l-2 border-gray-300"
        >
          Januari
        </h3>

        {/* Empty state for Januari */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-center">
          <p className="text-xs text-gray-400 italic">
            Belum ada data untuk bulan ini.
          </p>
        </div>

        {/* Februari */}
        <h3
          id="februari"
          className="text-lg font-semibold text-gray-800 mb-4 pl-3 border-l-2 border-blue-500"
        >
          Februari
        </h3>

        {/* Release Log Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-linear-to-r from-gray-50 to-gray-100">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                  Published Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                  Feature Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                  Guidebook Title
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                  Feature Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {releaseLogEntries.map((entry, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50/30 transition-colors"
                >
                  <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">
                    {entry.publishedDate}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-700 font-medium">
                    {entry.featureName}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <Link
                      href={entry.guidebookHref}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {entry.guidebookTitle}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                        entry.featureStatus === "New"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {entry.featureStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600">
                    {entry.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Share */}
      <div className="flex items-center gap-3 py-4 border-t border-gray-200 mb-6">
        <span className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
          <Share2 className="h-4 w-4" />
          Bagikan artikel ini
        </span>
        <div className="flex items-center gap-2">
          {[
            {
              name: "Facebook",
              color: "bg-blue-600 hover:bg-blue-700",
              icon: "f",
            },
            { name: "X", color: "bg-gray-900 hover:bg-gray-800", icon: "𝕏" },
            {
              name: "LinkedIn",
              color: "bg-blue-700 hover:bg-blue-800",
              icon: "in",
            },
          ].map((social) => (
            <button
              key={social.name}
              className={`w-8 h-8 ${social.color} text-white rounded-lg flex items-center justify-center text-xs font-bold transition-colors shadow-sm`}
              title={`Share to ${social.name}`}
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback Form */}
      <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 p-6 text-center mb-8">
        <h4 className="text-base font-semibold text-gray-900 mb-1">
          Punya saran dan komentar untuk artikel ini?
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Bantu kami meningkatkan kualitas dari guidebook kami dengan mengisi
          form
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdZiSPo0y8tJUtkZ3zWIKVv8KCK1YuvGBnqIeXG3zlyOEOumg/viewform"
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-sm"
        >
          <MessageCircle className="h-4 w-4" />
          Isi form saran
        </Link>
      </div>

      {/* Recent & Related Articles */}
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-400" />
            Panduan yang dilihat baru-baru ini
          </h3>
          <ul className="space-y-2">
            {recentArticles.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors leading-relaxed"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Related */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <ExternalLink className="h-4 w-4 text-gray-400" />
            Panduan terkait
          </h3>
          <ul className="space-y-2">
            {relatedArticles.map((article, i) => (
              <li key={i}>
                <Link
                  href={article.href}
                  className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors leading-relaxed"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </article>
  );
}
