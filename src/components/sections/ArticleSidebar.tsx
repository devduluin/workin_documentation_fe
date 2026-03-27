"use client";

import Link from "next/link";
import {
  ChevronRight,
  Search,
  FolderClosed,
  FolderOpen,
  FileText,
} from "lucide-react";
import { useSidebarStore } from "@/stores/useSidebar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ArticleSidebar(props: any) {
  const { categories } = props;
  const { openCategoryId, toggleCategory } = useSidebarStore();
  const [search, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const { categorySlug } = useParams();

  const results = categories
    ?.flatMap((cat: any) => cat?.Documents || [])
    ?.filter((doc: any) =>
      doc.title.toLowerCase().includes(search.toLowerCase()),
    );

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const delay = setTimeout(() => {}, 300);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <aside className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Daftar artikel
        </h3>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />

        <input
          type="search"
          placeholder="Cari artikel..."
          value={search}
          onChange={handleSearch}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setTimeout(() => setIsFocus(false), 200)}
          className="w-full pl-9 pr-3 py-2.5 text-[12px] bg-slate-50 border border-slate-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />

        {/* Dropdown */}
        {isFocus && search && results?.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-auto z-50 ">
            {results.map((item: any) => (
              <Link
                key={item.id}
                href={`/categories/${item.id}#content`}
                onClick={() => {
                  setSearch("");
                  if (item.categoryId !== openCategoryId)
                    toggleCategory(item.categoryId);
                }}
                className="flex items-start gap-2 px-3 py-2 text-[12px] hover:bg-slate-50"
              >
                <FileText className="h-3 w-3 mt-1 text-slate-400" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Empty state */}
        {isFocus && search && results?.length === 0 && (
          <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg p-3 text-xs text-slate-400">
            Tidak ditemukan
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="card-elevated rounded-xl! overflow-hidden">
        <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
          {categories.map((category: any) => {
            const isCatOpen = openCategoryId === category.id;
            return (
              <div
                key={category.id}
                className="border-b border-slate-100/80 last:border-b-0"
              >
                {category.Documents.length > 1 ? (
                  <button
                    onClick={() => {
                      toggleCategory(category.id);
                    }}
                    className={`w-full flex items-center  gap-2.5 px-4 py-3 text-[12px] font-semibold transition-all duration-200 ${
                      isCatOpen
                        ? "text-blue-700 bg-linear-to-r from-blue-50/80 to-indigo-50/40"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all ${
                        isCatOpen
                          ? "bg-blue-100 text-blue-600"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isCatOpen ? (
                        <FolderOpen className="h-3 w-3" />
                      ) : (
                        <FolderClosed className="h-3 w-3" />
                      )}
                    </div>
                    <span className="flex-1 text-left truncate">
                      {category.name}
                    </span>
                    <ChevronRight
                      className={`h-3 w-3 shrink-0 transition-transform duration-200 ${
                        isCatOpen ? "rotate-90 text-blue-500" : "text-slate-300"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={`/categories/${category.Documents[0].id.toString()}#content`}
                  >
                    <button
                      className={`w-full flex items-center gap-2.5 px-4 py-3 text-[12px] font-semibold transition-all duration-200
                           hover:bg-slate-50 ${
                             categorySlug ===
                             category.Documents[0].id.toString()
                               ? "text-blue-700 bg-blue-100 font-semibold border-r-[3px] border-blue-600"
                               : "text-slate-500 hover:text-slate-700 hover:bg-white"
                           }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all
                            bg-slate-100 text-slate-400"
                        `}
                      >
                        <FolderClosed className="h-3 w-3" />
                      </div>
                      <span className="flex-1 text-left truncate">
                        {category.Documents[0].title}
                      </span>
                    </button>
                  </Link>
                )}

                {/* Sections */}
                {isCatOpen && (
                  <div className="bg-slate-50/40 animate-fade-in">
                    {category.Documents.map((section: any) => {
                      return (
                        <div key={section.id}>
                          <Link
                            href={`${section.id.toString()}#content`}
                            className={`flex items-start gap-2 pl-8 pr-4 py-1.5 text-[12px] leading-relaxed transition-all duration-200 ${
                              section.id.toString() === categorySlug
                                ? "text-blue-700 bg-blue-100 font-semibold border-r-[3px] border-blue-600"
                                : "text-slate-500 hover:text-slate-700 hover:bg-white"
                            }`}
                          >
                            <FileText
                              className={`h-3 w-3 shrink-0 mt-px ${
                                section.isActive
                                  ? "text-blue-500"
                                  : "text-slate-300"
                              }`}
                            />
                            <span className="line-clamp-2">
                              {section.title}
                            </span>
                          </Link>

                          {/* Articles */}
                          {/* {isSecOpen && (
                            <ul className="animate-fade-in py-0.5">
                              {section.sections.map((article) => (
                                <li key={article.id}>
                                  <Link
                                    href={article.id.toString()}
                                    className={`flex items-start gap-2 pl-14 pr-4 py-1.5 text-[11px] leading-relaxed transition-all duration-200 ${
                                      article.isActive
                                        ? "text-blue-700 bg-blue-50/80 font-semibold border-r-[3px] border-blue-600"
                                        : "text-slate-500 hover:text-slate-700 hover:bg-white"
                                    }`}
                                  >
                                    <FileText
                                      className={`h-3 w-3 shrink-0 mt-px ${
                                        article.isActive
                                          ? "text-blue-500"
                                          : "text-slate-300"
                                      }`}
                                    />
                                    <span className="line-clamp-2">
                                      {article.title}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )} */}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
