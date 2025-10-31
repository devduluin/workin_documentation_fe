(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/Testing/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PublicContentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../component/Sidebar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PublicContentPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { slug } = router.query; // ambil slug dari URL, misal: /public/getting-started
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch data konten berdasarkan slug
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PublicContentPage.useEffect": ()=>{
            if (!slug) return;
            fetch("/api/sections/".concat(slug)).then({
                "PublicContentPage.useEffect": (res)=>{
                    if (!res.ok) throw new Error("Failed to fetch");
                    return res.json();
                }
            }["PublicContentPage.useEffect"]).then({
                "PublicContentPage.useEffect": (data)=>{
                    // Tambahkan id otomatis ke setiap <h2>
                    const fixedContent = data.data.content.replace(/<h2>(.*?)<\/h2>/g, {
                        "PublicContentPage.useEffect.fixedContent": (match, title)=>{
                            const plainTitle = title.replace(/<[^>]+>/g, "").trim();
                            const id = plainTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-") // buang karakter aneh
                            .replace(/^-+|-+$/g, ""); // hapus "-" di awal/akhir
                            return '<h2 id="'.concat(id, '">').concat(title, "</h2>");
                        }
                    }["PublicContentPage.useEffect.fixedContent"]);
                    setContent(fixedContent);
                }
            }["PublicContentPage.useEffect"]).catch({
                "PublicContentPage.useEffect": (err)=>{
                    console.error("Fetch error:", err);
                    setContent("<p>Konten tidak ditemukan.</p>");
                }
            }["PublicContentPage.useEffect"]);
        }
    }["PublicContentPage.useEffect"], [
        slug
    ]);
    // Generate daftar isi setelah konten render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PublicContentPage.useEffect": ()=>{
            if (!contentRef.current) return;
            const observer = new MutationObserver({
                "PublicContentPage.useEffect": ()=>{
                    const headings = contentRef.current.querySelectorAll("h2[id]");
                    if (headings.length > 0) {
                        const list = Array.from(headings).map({
                            "PublicContentPage.useEffect.list": (h)=>({
                                    id: h.id,
                                    title: h.textContent.trim()
                                })
                        }["PublicContentPage.useEffect.list"]);
                        setSections(list);
                        observer.disconnect();
                    }
                }
            }["PublicContentPage.useEffect"]);
            observer.observe(contentRef.current, {
                childList: true,
                subtree: true
            });
            return ({
                "PublicContentPage.useEffect": ()=>observer.disconnect()
            })["PublicContentPage.useEffect"];
        }
    }["PublicContentPage.useEffect"], [
        content
    ]);
    // Intersection Observer untuk highlight aktif
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PublicContentPage.useEffect": ()=>{
            if (!contentRef.current || !mainRef.current) return;
            const headings = contentRef.current.querySelectorAll("h2[id]");
            if (!headings.length) return;
            const observer = new IntersectionObserver({
                "PublicContentPage.useEffect": (entries)=>{
                    const visible = entries.filter({
                        "PublicContentPage.useEffect.visible": (entry)=>entry.isIntersecting
                    }["PublicContentPage.useEffect.visible"]).sort({
                        "PublicContentPage.useEffect.visible": (a, b)=>a.boundingClientRect.top - b.boundingClientRect.top
                    }["PublicContentPage.useEffect.visible"]);
                    if (visible.length > 0) {
                        const nextActive = visible[0].target.id;
                        if (nextActive !== activeId) {
                            setActiveId(nextActive);
                        }
                    }
                }
            }["PublicContentPage.useEffect"], {
                root: mainRef.current,
                rootMargin: "0px 0px -50% 0px",
                threshold: 0.2
            });
            headings.forEach({
                "PublicContentPage.useEffect": (h)=>observer.observe(h)
            }["PublicContentPage.useEffect"]);
            return ({
                "PublicContentPage.useEffect": ()=>observer.disconnect()
            })["PublicContentPage.useEffect"];
        }
    }["PublicContentPage.useEffect"], [
        sections,
        activeId
    ]);
    // Loading state kalau slug belum tersedia (Next.js kadang delay router.query)
    if (!slug) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/Testing/page.js",
        lineNumber: 102,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sidebar, {}, void 0, false, {
                    fileName: "[project]/src/app/Testing/page.js",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Testing/page.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: mainRef,
                className: "flex-1 p-6 md:p-10 overflow-y-auto scroll-smooth h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: contentRef,
                    className: "prose max-w-none ql-editor",
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/Testing/page.js",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Testing/page.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-64 bg-gray-50 shadow sticky top-0 h-screen overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800",
                            children: "Daftar Isi"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Testing/page.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Testing/page.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col p-4 space-y-2",
                        children: sections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#".concat(s.id),
                                className: "px-3 py-2 rounded-md transition scroll-smooth ".concat(activeId === s.id ? "bg-blue-500 text-white font-semibold shadow-md" : "text-gray-600 hover:bg-blue-100 hover:text-blue-800"),
                                children: s.title
                            }, s.id, false, {
                                fileName: "[project]/src/app/Testing/page.js",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Testing/page.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Testing/page.js",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Testing/page.js",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(PublicContentPage, "cKh9nRgtNK4wQN1pckETgKKDJ+A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PublicContentPage;
var _c;
__turbopack_context__.k.register(_c, "PublicContentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_Testing_page_095266ab.js.map