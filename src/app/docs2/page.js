 "use client";
 
import { useEffect, useState, useRef } from "react";
import { ChevronRight, ChevronDown, BookOpen } from "lucide-react";
 import TableOfContents from "@/app/component/TableOfContents";
 
 const API_URL = process.env.NEXT_PUBLIC_API_URL;
 
 export default function DocsViewerAll() {
   const [nodes, setNodes] = useState([]);
   const [tree, setTree] = useState([]);
   const [selected, setSelected] = useState(null);
   const [title, setTitle] = useState("");
   const [contentHtml, setContentHtml] = useState("");
   const [sections, setSections] = useState([]);
   const contentRef = useRef(null);
 
   useEffect(() => {
     const load = async () => {
       try {
         const res = await fetch(`${API_URL}/docs-nodes?page=1&limit=1000`);
         const data = await res.json();
         const list = Array.isArray(data?.data) ? data.data : [];
         setNodes(list);
         const map = new Map();
         list.forEach((n) => map.set(n.id, { ...n, children: [] }));
         const roots = [];
         map.forEach((n) => {
           if (n.parentId && map.has(n.parentId)) {
             map.get(n.parentId).children.push(n);
           } else {
             roots.push(n);
           }
         });
         const sortNodes = (arr) => {
           arr.sort((a, b) => {
             if (a.orderIndex !== b.orderIndex) return a.orderIndex - b.orderIndex;
             return a.id - b.id;
           });
           arr.forEach((i) => sortNodes(i.children));
         };
         sortNodes(roots);
         setTree(roots);
       } catch {
         setNodes([]);
         setTree([]);
       }
     };
     load();
   }, []);
 
   useEffect(() => {
     const computeSections = () => {
       if (!contentRef.current) return;
       const headings = contentRef.current.querySelectorAll("h2[id]");
       const list =
         headings.length > 0
           ? Array.from(headings).map((h) => ({
               id: h.id,
               title: h.textContent || "",
             }))
           : [];
       setSections(list);
     };
     computeSections();
   }, [contentHtml]);
 
   const openNode = async (id) => {
     try {
       const res = await fetch(`${API_URL}/docs-nodes/${id}`);
       const data = await res.json();
       const node = data?.data;
       const raw = node?.content || "";
      let fixed = raw.replace(/<h2>(.*?)<\/h2>/g, (_, h) => {
         const plain = String(h).replace(/<[^>]+>/g, "").trim();
         const slug = plain
           .toLowerCase()
           .replace(/[^a-z0-9]+/g, "-")
           .replace(/^-+|-+$/g, "");
         return `<h2 id="${slug}">${h}</h2>`;
       });
      fixed = fixed.replace(
        /<img\b/gi,
        '<img loading="lazy" decoding="async" style="max-width:100%;height:auto"'
      );
       setSelected(node);
       setTitle(node?.title || "");
       setContentHtml(fixed || "<p>Tidak ada konten.</p>");
     } catch {
       setSelected(null);
       setTitle("");
       setContentHtml("<p>Konten tidak tersedia.</p>");
     }
   };
 
  const [expanded, setExpanded] = useState(new Set());
  useEffect(() => {
    const initial = new Set();
    tree.forEach((n) => initial.add(n.id));
    setExpanded(initial);
  }, [tree.length]);

  const toggle = (id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const typeColor = (t) =>
    t === "head"
      ? "bg-indigo-50 text-indigo-600"
      : t === "sub"
      ? "bg-blue-50 text-blue-600"
      : t === "sub_sub"
      ? "bg-teal-50 text-teal-600"
      : "bg-gray-100 text-gray-600";

  const renderNode = (node, depth = 0) => {
     const hasChildren = node.children && node.children.length > 0;
    const isOpen = expanded.has(node.id);
     return (
       <div key={node.id} style={{ paddingLeft: depth * 12 }}>
        <div className="flex items-center">
          {hasChildren ? (
            <button
              onClick={() => toggle(node.id)}
              className="mr-2 text-gray-500 hover:text-gray-700"
            >
              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          ) : (
            <div className="mr-2 w-4" />
          )}
          <button
            onClick={() => openNode(node.id)}
            className="flex-1 flex items-center justify-between px-3 py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <span className="flex items-center gap-2">
              <span className="font-medium text-gray-800">{node.title}</span>
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${typeColor(
                  node.type
                )}`}
              >
                {node.type}
              </span>
            </span>
          </button>
        </div>
        {hasChildren && isOpen && (
          <div className="ml-2">{node.children.map((c) => renderNode(c, depth + 1))}</div>
        )}
       </div>
     );
   };
 
   return (
     <div className="min-h-screen bg-gray-50">
       <div className="mx-auto max-w-6xl px-6 py-8">
         <div className="mb-6 flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-lg font-bold">
               W
             </div>
             <div>
               <h1 className="text-2xl font-bold text-gray-900">Dokumentasi</h1>
               <p className="text-sm text-gray-500">Portal Dokumentasi Workin by Duluin</p>
             </div>
           </div>
         </div>
 
          <aside className="fixed left-0 top-0 h-screen w-[260px] bg-white border-r border-gray-200 p-4 overflow-y-auto">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Navigasi</h3>
            <div className="space-y-1">{tree.map((n) => renderNode(n))}</div>
            {selected && (
              <>
                {/* <h3 className="text-sm font-semibold text-gray-700 mt-4 mb-3">Daftar Isi</h3> */}
                <TableOfContents sections={sections} />
              </>
            )}
          </aside>
 
          <main className="px-8">
            {selected ? (
              <div
                ref={contentRef}
                className="prose prose-slate prose-lg max-w-none w-full bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">
                      Pilih dokumentasi dari navigasi
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Klik salah satu item di sidebar untuk melihat panduan
                      lengkapnya.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
                      <span className="rounded-full bg-gray-100 px-3 py-1">
                        Navigasi tetap di kiri
                      </span>
                      <span className="rounded-full bg-gray-100 px-3 py-1">
                        Daftar isi muncul otomatis
                      </span>
                      <span className="rounded-full bg-gray-100 px-3 py-1">
                        Konten tampil penuh
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
       </div>
     </div>
   );
 }
