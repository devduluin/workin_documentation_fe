 "use client";
 
 import { useEffect, useState, useRef } from "react";
 import { useRouter } from "next/navigation";
 import TableOfContents from "@/app/component/TableOfContents";
 
 const API_URL = process.env.NEXT_PUBLIC_API_URL;
 
 export default function DocsViewer({ params }) {
   const router = useRouter();
   const { id } = params || {};
   const [title, setTitle] = useState("");
   const [contentHtml, setContentHtml] = useState("");
   const [sections, setSections] = useState([]);
   const [tree, setTree] = useState([]);
   const contentRef = useRef(null);
 
   useEffect(() => {
     if (!id) return;
     const load = async () => {
       try {
         const [nodeRes, listRes] = await Promise.all([
           fetch(`${API_URL}/docs-nodes/${id}`),
           fetch(`${API_URL}/docs-nodes?page=1&limit=1000`),
         ]);
         const nodeData = await nodeRes.json();
         const listData = await listRes.json();
         const node = nodeData?.data;
         const nodes = Array.isArray(listData?.data) ? listData.data : [];
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
         setTitle(node?.title || "");
         setContentHtml(fixed || "<p>Tidak ada konten.</p>");
         const byId = new Map();
         nodes.forEach((n) => byId.set(n.id, { ...n, children: [] }));
         const findRootHead = (n) => {
           let cur = n;
           while (cur && cur.parentId) {
             cur = byId.get(cur.parentId);
           }
           return cur;
         };
         const rootHead = findRootHead(node);
         const isUnderRoot = (n) => {
           let cur = n;
           while (cur && cur.parentId) {
             cur = byId.get(cur.parentId);
           }
           return rootHead && cur && cur.id === rootHead.id;
         };
         const scoped = nodes.filter(isUnderRoot);
         const scopedMap = new Map();
         scoped.forEach((n) => scopedMap.set(n.id, { ...n, children: [] }));
         const roots = [];
         scopedMap.forEach((n) => {
           if (n.parentId && scopedMap.has(n.parentId)) {
             scopedMap.get(n.parentId).children.push(n);
           } else {
             roots.push(n);
           }
         });
         const sortNodes = (list) => {
           list.sort((a, b) => {
             if (a.orderIndex !== b.orderIndex) return a.orderIndex - b.orderIndex;
             return a.id - b.id;
           });
           list.forEach((i) => sortNodes(i.children));
         };
         sortNodes(roots);
         setTree(roots);
       } catch {
         setTitle("Tidak ditemukan");
         setContentHtml("<p>Konten tidak tersedia.</p>");
         setTree([]);
       }
     };
     load();
   }, [id]);
 
   useEffect(() => {
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
   }, [contentHtml]);
 
   const renderNode = (node, depth = 0) => {
     const hasChildren = node.children && node.children.length > 0;
     return (
       <div key={node.id} style={{ paddingLeft: depth * 12 }}>
         <button
           onClick={() => router.push(`/docs2/${node.id}`)}
           className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
         >
           <span className="flex items-center gap-2">
             <span className="font-medium">{node.title}</span>
             <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
               {node.type}
             </span>
           </span>
         </button>
         {hasChildren && (
           <div className="ml-2">
             {node.children.map((c) => renderNode(c, depth + 1))}
           </div>
         )}
       </div>
     );
   };
 
  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed left-0 top-0 h-screen w-[260px] bg-white border-r border-gray-200 p-4 overflow-y-auto">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-7 w-7 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">
            W
          </div>
          <div className="text-sm font-semibold text-gray-800">Dokumentasi</div>
        </div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Navigasi</h3>
        <div className="space-y-1">{tree.map((n) => renderNode(n))}</div>
        {/* <h3 className="text-sm font-semibold text-gray-700 mt-4 mb-3">Daftar Isi</h3> */}
        <TableOfContents sections={sections} />
      </aside>

      <div className="ml-[260px] px-8 py-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-lg font-bold">
            W
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title || "Dokumentasi"}</h1>
            <p className="text-sm text-gray-500">Portal Dokumentasi Workin by Duluin</p>
          </div>
        </div>

        <div
          ref={contentRef}
          className="prose prose-slate prose-lg max-w-none w-full bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
 }
