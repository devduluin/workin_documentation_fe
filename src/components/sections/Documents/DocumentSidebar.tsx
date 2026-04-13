"use client";

import Link from "next/link";
import { ChevronRight, Search, FolderClosed, Dot } from "lucide-react";
import { useSidebarStore } from "@/stores/useSidebar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useArticleStore } from "@/stores/useArticles";
import { ApiHrms } from "@/lib/API-hrms";

export default function ArticleSidebar(props: any) {
  const { setSidebar, sidebar } = useArticleStore();

  useEffect(() => {
    Promise.all([ApiHrms.getSidebar()]).then(([c]) => {
      setSidebar(c);
    });
  }, []);

  const { openCategoryId, toggleCategory } = useSidebarStore();

  const [openArticleId, setOpenArticleId] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const { id } = useParams();

  const toggleArticle = (id: string) => {
    setOpenArticleId((prev) => (prev === id ? null : id));
  };

  const results = sidebar
    ?.flatMap((art: any) => art?.Categories || [])
    .flatMap((cat: any) => cat?.Documents || [])
    ?.filter((doc: any) =>
      doc.title_tab.toLowerCase().includes(search.toLowerCase()),
    );

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <aside className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Daftar artikel
        </h3>
      </div>

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

        {/* Search Dropdown */}
        {isFocus && search && results?.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-auto z-50">
            {results.map((item: any) => (
              <Link
                key={item.id}
                href={`/articles/${item.id}#content`}
                onClick={() => {
                  setSearch("");
                  if (item.category_id !== openCategoryId)
                    toggleCategory(item.category_id);
                }}
                className="flex items-start gap-1 px-3 py-2 text-[12px] hover:bg-slate-50"
              >
                <Dot className="h-6 w-6 -mt-1 text-slate-400" />
                <span>{item.title_tab}</span>
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

      <div className="card-elevated rounded-xl! overflow-hidden">
        <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
          {sidebar.map((article: any) => {
            const isArticleOpen = openArticleId === article.id;
            const categories: any[] = article.Categories || [];

            return (
              <div
                key={article.id}
                className="border-b border-slate-100/80 last:border-b-0"
              >
                <button
                  onClick={() => toggleArticle(article.id)}
                  className={`w-full flex cursor-pointer items-center gap-2.5 px-4 py-4 text-[12px] transition-all duration-200 ${
                    isArticleOpen
                      ? "text-blue-700 bg-linear-to-r from-blue-50/80 to-indigo-50/40 border-b border-blue-300"
                      : "text-slate-700 bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  <span className="flex-1 text-left text-[16px] truncate">
                    {article.name}
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isArticleOpen
                        ? "rotate-90 text-blue-500"
                        : "text-slate-300"
                    }`}
                  />
                </button>

                {isArticleOpen && (
                  <div className="bg-slate-50/40 animate-fade-in">
                    {categories.map((category: any) => {
                      const isCatOpen = openCategoryId === category.id;
                      const documents: any[] = category.Documents || [];

                      return (
                        <div key={category.id}>
                          {documents.length > 1 ? (
                            <>
                              <button
                                onClick={() => toggleCategory(category.id)}
                                className={`w-full flex cursor-pointer items-center gap-2.5 pl-8 pr-4 py-2.5 text-[14px] font-semibold transition-all duration-200 ${
                                  isCatOpen
                                    ? "text-blue-700 bg-linear-to-r from-blue-50/60 to-indigo-50/30"
                                    : "text-slate-600 hover:bg-slate-50"
                                }`}
                              >
                                <span className="flex-1 text-left truncate">
                                  {category.name}
                                </span>
                                <ChevronRight
                                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                                    isCatOpen
                                      ? "rotate-90 text-blue-500"
                                      : "text-slate-300"
                                  }`}
                                />
                              </button>

                              {isCatOpen && (
                                <div className="animate-fade-in">
                                  {documents.map((doc: any) => (
                                    <Link
                                      key={doc.id}
                                      href={`/articles/${doc.id}#content`}
                                      className={`flex items-start gap-1 pl-8 py-2 text-[12px] leading-relaxed transition-all duration-200 ${
                                        id === doc.id.toString()
                                          ? "text-blue-700 bg-blue-100 font-semibold border-r-[3px] border-blue-600"
                                          : "text-slate-500 hover:text-slate-700 hover:bg-white"
                                      }`}
                                    >
                                      <Dot
                                        className={`h-6 w-6 shrink-0 -mt-1 ${
                                          id === doc.id.toString()
                                            ? "text-blue-500"
                                            : "text-slate-300"
                                        }`}
                                      />
                                      <span className="line-clamp-2">
                                        {doc.title_tab}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : documents.length === 1 ? (
                            <Link href={`/articles/${documents[0].id}#content`}>
                              <button
                                className={`w-full flex cursor-pointer items-center gap-2.5 pl-8 pr-4 py-2.5 text-[12px] font-semibold transition-all duration-200 ${
                                  id === documents[0].id.toString()
                                    ? "text-blue-700 bg-blue-100 border-r-[3px] border-blue-600"
                                    : "text-slate-600 hover:text-slate-700 hover:bg-white"
                                }`}
                              >
                                <div className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 bg-slate-100 text-slate-400">
                                  <FolderClosed className="h-2.5 w-2.5" />
                                </div>
                                <span className="flex-1 text-left truncate">
                                  {documents[0].title_tab}
                                </span>
                              </button>
                            </Link>
                          ) : (
                            <button
                              disabled
                              className="w-full flex disabled:opacity-20 cursor-pointer items-center gap-2.5 pl-8 pr-4 py-2.5 text-[12px] font-semibold"
                            >
                              <div className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 bg-slate-100 text-slate-400">
                                <FolderClosed className="h-2.5 w-2.5" />
                              </div>
                              <span className="flex-1 text-left truncate">
                                {category.name}
                              </span>
                            </button>
                          )}
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
