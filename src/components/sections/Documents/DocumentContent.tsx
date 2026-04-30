"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  User,
  ExternalLink,
  Share2,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useParams } from "next/navigation";
import { ApiHrms } from "@/lib/API-hrms";

// <li key={doc.id}>
//   <Link
//     href={`/articles/${doc.id}#content`}
//     className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors leading-relaxed"
//   >
//     {doc.title_tab || doc.title_content}
//   </Link>
// </li>

const relatedDocs = [
  {
    link: "/articles/3e7179d7-4a73-4c25-8535-0c1c452b7454",
    title_tab: "Sekilas menu halaman Attendence Shift & Attendence",
  },
  {
    link: "/articles/e4b4a00a-8db4-4964-97ea-add36cf6f05d",
    title_tab: "Halaman Overview Reimbursment & Travel",
  },
  {
    link: "/articles/cc80fa57-13d7-40cf-ae62-9e2cdc9616e8",
    title_tab: "Cara menambahkan Employee baru",
  },
  {
    link: "/articles/ce665933-97fa-41f6-a699-c377a3a45867",
    title_tab: "Overview Document Management",
  },
  {
    link: "/articles/7a7aeee8-5893-42e5-bf88-f0aa29a7153d",
    title_tab: "Pengunaan menu Leave and Holiday",
  },
];

export default function ArticleContent(props: any) {
  const { id } = useParams();
  const [articles, setArticles] = useState<any>(null);
  const [recentDocs, setRecentDocs] = useState<any[]>([]);

  const getRelativeTime = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "Baru saja";

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} menit yang lalu`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} jam yang lalu`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} hari yang lalu`;

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} bulan yang lalu`;

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} tahun yang lalu`;
  };

  useEffect(() => {
    Promise.all([
      ApiHrms.getDocumentById(id?.toString() || ""),
      ApiHrms.getDocuments(1),
    ]).then(([article, allDocs]: any) => {
      setArticles(article);
      setRecentDocs(allDocs.data.slice(0, 5));
    });
  }, [id]);

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = articles?.title_content || "Cek panduan ini";
    let shareUrl = "";

    switch (platform) {
      case "Facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "Instagram":
        shareUrl = `https://www.instagram.com/duluinworkin/`;
        break;
      case "LinkedIn":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "WhatsApp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  if (!articles) return <div>Loading...</div>;

  return (
    <article className="min-w-0">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center flex-wrap gap-1 text-xs text-gray-500">
          <li>
            <Link
              href="/articles/5b96aff9-5d8a-4f45-9883-3471940942b6"
              className="hover:text-blue-600 transition-colors"
            >
              Quick Guide
            </Link>
          </li>
          {/* {articles?.Category && (
            <>
              <ChevronRight className="h-3 w-3 text-gray-300" />
              <li>
                <Link
                  href={`/articles/${articles.Category.id}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {articles.Category.name}
                </Link>
              </li>
            </>
          )} */}
          {articles && (
            <>
              <ChevronRight className="h-3 w-3 text-gray-300" />
              <li className="font-medium text-gray-900 truncate max-w-[200px] md:max-w-md">
                {articles.title_tab || articles.title_content}
              </li>
            </>
          )}
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4"></h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-sm">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Learning Center {articles?.Category?.name}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>Diperbarui {getRelativeTime(articles.updatedAt)}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              PDF
            </button> */}
            {/* <Link
              href="https://community.Workin.com/Workin-training/Workin/"
              target="_blank"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 rounded-lg transition-all shadow-sm"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Ikut pelatihan GRATIS!
            </Link> */}
          </div>
        </div>
      </header>

      <div>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          {articles.title_content}
        </h3>

        <div
          className="prose tiptap ProseMirror tiptap-content"
          id="doc-content"
          dangerouslySetInnerHTML={{
            __html: articles.content,
          }}
        />
      </div>

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
              color: "bg-[#1877F2] hover:bg-[#166fe5]",
              icon: <Facebook className="h-4 w-4" />,
            },
            {
              name: "Instagram",
              color:
                "bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90",
              icon: <Instagram className="h-4 w-4" />,
            },
            {
              name: "LinkedIn",
              color: "bg-[#0A66C2] hover:bg-[#004182]",
              icon: <Linkedin className="h-4 w-4" />,
            },
            {
              name: "WhatsApp",
              color: "bg-[#25D366] hover:bg-[#20bd5c]",
              icon: <MessageCircle className="h-4 w-4" />,
            },
          ].map((social) => (
            <button
              key={social.name}
              onClick={() => handleShare(social.name)}
              className={`w-8 h-8 ${social.color} cursor-pointer text-white rounded-lg flex items-center justify-center transition-all shadow-sm hover:scale-110 active:scale-95`}
              title={`Bagikan ke ${social.name}`}
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
          href="https://form.duluin.com/form/v/9fb67097-55e6-4248-8f51-e140b1e3ebef"
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
            Panduan Terbaru
          </h3>
          <ul className="space-y-2">
            {recentDocs.map((doc) => (
              <li key={doc.id}>
                <Link
                  href={`/articles/${doc.id}#content`}
                  className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors leading-relaxed"
                >
                  {doc.title_tab || doc.title_content}
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
            {relatedDocs.map((doc, id) => (
              <li key={id}>
                <Link
                  href={`${doc.link}#content`}
                  className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors leading-relaxed"
                >
                  {doc.title_tab}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </article>
  );
}
