(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard2/components/SidebarItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SidebarItem(param) {
    let { submenu, isSelected, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors duration-150 ".concat(isSelected ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"),
        children: submenu.title
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard2/components/SidebarItem.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = SidebarItem;
var _c;
__turbopack_context__.k.register(_c, "SidebarItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard2/components/Sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$SidebarItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard2/components/SidebarItem.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Sidebar(param) {
    let { menuData, selected, setSelected, onAddMenu, onDelete, onRename, onLogout } = param;
    _s();
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // { type: "menu" | "submenu", id }
    const [newTitle, setNewTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const toggleMenu = (menuId)=>{
        setActiveMenu(activeMenu === menuId ? null : menuId);
    };
    const handleRenameStart = (type, item)=>{
        setEditingItem({
            type,
            id: item.id
        });
        setNewTitle(item.title);
    };
    const handleRenameSubmit = async ()=>{
        if (newTitle.trim() === "") return;
        if (onRename) {
            await onRename(editingItem, newTitle);
        }
        setEditingItem(null);
        setNewTitle("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "dashboard-sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-sidebar-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/duluin-hrms.png",
                        alt: "Logo HRMS",
                        className: "dashboard-logo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "dashboard-doc-title",
                        children: "Documentation"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dashboard-header-btns",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onAddMenu,
                            className: "dashboard-add-btn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "dashboard-nav",
                children: menuData.map((menu)=>{
                    var _menu_submenus, _selected_menu;
                    const subCount = ((_menu_submenus = menu.submenus) === null || _menu_submenus === void 0 ? void 0 : _menu_submenus.length) || 0;
                    const hasSubmenus = subCount > 1;
                    const singleDoc = subCount === 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (hasSubmenus) toggleMenu(menu.id);
                                            else if (singleDoc) setSelected({
                                                menu,
                                                submenu: menu.submenus[0]
                                            });
                                            else setSelected({
                                                menu,
                                                submenu: null
                                            });
                                        },
                                        className: "dashboard-menu-btn ".concat((selected === null || selected === void 0 ? void 0 : (_selected_menu = selected.menu) === null || _selected_menu === void 0 ? void 0 : _selected_menu.id) === menu.id ? "active" : ""),
                                        children: [
                                            (editingItem === null || editingItem === void 0 ? void 0 : editingItem.type) === "menu" && editingItem.id === menu.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: newTitle,
                                                onChange: (e)=>setNewTitle(e.target.value),
                                                onBlur: handleRenameSubmit,
                                                onKeyDown: (e)=>e.key === "Enter" && handleRenameSubmit(),
                                                className: "border border-gray-300 rounded px-2 py-1 text-sm w-full",
                                                autoFocus: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: menu.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this),
                                            hasSubmenus && (activeMenu === menu.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                lineNumber: 98,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                lineNumber: 100,
                                                columnNumber: 23
                                            }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleRenameStart("menu", menu),
                                                className: "text-gray-400 hover:text-blue-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onDelete({
                                                        type: "menu",
                                                        id: menu.id
                                                    }),
                                                className: "text-gray-400 hover:text-red-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this),
                            hasSubmenus && activeMenu === menu.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dashboard-submenu",
                                children: menu.submenus.map((sub)=>{
                                    var _selected_submenu;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center group pl-3",
                                        children: [
                                            (editingItem === null || editingItem === void 0 ? void 0 : editingItem.type) === "submenu" && editingItem.id === sub.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: newTitle,
                                                onChange: (e)=>setNewTitle(e.target.value),
                                                onBlur: handleRenameSubmit,
                                                onKeyDown: (e)=>e.key === "Enter" && handleRenameSubmit(),
                                                className: "border border-gray-300 rounded px-2 py-1 text-sm w-full",
                                                autoFocus: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                lineNumber: 133,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$SidebarItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                submenu: sub,
                                                isSelected: (selected === null || selected === void 0 ? void 0 : (_selected_submenu = selected.submenu) === null || _selected_submenu === void 0 ? void 0 : _selected_submenu.id) === sub.id,
                                                onClick: ()=>setSelected({
                                                        menu,
                                                        submenu: sub
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                lineNumber: 144,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleRenameStart("submenu", sub),
                                                        className: "text-gray-400 hover:text-blue-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                            lineNumber: 157,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                        lineNumber: 153,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onDelete({
                                                                type: "submenu",
                                                                menuId: menu.id,
                                                                id: sub.id
                                                            }),
                                                        className: "text-gray-400 hover:text-red-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                            lineNumber: 171,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                        lineNumber: 161,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                                lineNumber: 151,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, sub.id, true, {
                                        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                        lineNumber: 127,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                lineNumber: 125,
                                columnNumber: 17
                            }, this)
                        ]
                    }, menu.id, true, {
                        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto p-4 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onLogout,
                    className: "w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 2,
                            stroke: "currentColor",
                            className: "w-5 h-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        "Logout"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard2/components/Sidebar.js",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "q1CxOgTJYY0h8cRHNMt1DC/q5PQ=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard2/components/DynamicContent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DynamicContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ReactQuill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-quill-new/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-quill-new/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ReactQuill;
function DynamicContent(param) {
    let { selected } = param;
    var _selected_submenu;
    _s();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sectionId, setSectionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rowsInput, setRowsInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [colsInput, setColsInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const quillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 🔹 Fetch content berdasarkan documentId
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DynamicContent.useEffect": ()=>{
            const fetchContent = {
                "DynamicContent.useEffect.fetchContent": async ()=>{
                    if (!(selected === null || selected === void 0 ? void 0 : selected.submenu)) return;
                    setLoading(true);
                    setError("");
                    try {
                        const res = await fetch("http://localhost:5000/api/sections/document/".concat(selected.submenu.id));
                        if (res.ok) {
                            const data = await res.json();
                            if (data.data && data.data.length > 0) {
                                const firstSection = data.data[0];
                                setSectionId(firstSection.id);
                                setContent(firstSection.content || "");
                                setTitle(firstSection.title || selected.submenu.title || "");
                            } else {
                                setSectionId(null);
                                setContent("");
                                setTitle(selected.submenu.title || "");
                            }
                        } else {
                            throw new Error("Gagal memuat konten dari server.");
                        }
                    } catch (err) {
                        console.error("Error fetching content:", err);
                        setError("Terjadi kesalahan koneksi ke server.");
                        setSectionId(null);
                        setContent("");
                        setTitle(selected.submenu.title || "");
                    } finally{
                        setLoading(false);
                    }
                }
            }["DynamicContent.useEffect.fetchContent"];
            fetchContent();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return ({
                "DynamicContent.useEffect": ()=>{
                    setContent("");
                    setTitle("");
                    setSectionId(null);
                }
            })["DynamicContent.useEffect"];
        }
    }["DynamicContent.useEffect"], [
        selected
    ]);
    // 🔹 Sisipkan video YouTube
    const videoHandler = async ()=>{
        const { value: url } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: "Masukkan URL video YouTube",
            input: "url",
            inputPlaceholder: "https://www.youtube.com/watch?v=...",
            showCancelButton: true,
            confirmButtonText: "Sisipkan",
            cancelButtonText: "Batal"
        });
        if (url) {
            const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/i);
            if (match && match[1]) {
                const embedUrl = "https://www.youtube.com/embed/".concat(match[1]);
                const editor = quillRef.current.getEditor();
                const range = editor.getSelection(true);
                editor.insertEmbed(range.index, "video", embedUrl, "user");
                editor.setSelection(range.index + 1);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: "error",
                    title: "URL tidak valid",
                    text: "Pastikan URL adalah video YouTube yang benar."
                });
            }
        }
    };
    // 🔹 Sisipkan tabel
    const insertEditableTable = (rows, cols)=>{
        var _editor_getSelection;
        if (!quillRef.current) return;
        const editor = quillRef.current.getEditor();
        if (!editor) return;
        let tableHtml = '<table class="editable-table" border="1" cellpadding="4" cellspacing="0" style="border-collapse: collapse;">';
        for(let i = 0; i < rows; i++){
            tableHtml += "<tr>";
            for(let j = 0; j < cols; j++){
                tableHtml += "<td><br></td>";
            }
            tableHtml += "</tr>";
        }
        tableHtml += "</table><p><br></p>";
        editor.clipboard.dangerouslyPasteHTML(((_editor_getSelection = editor.getSelection()) === null || _editor_getSelection === void 0 ? void 0 : _editor_getSelection.index) || 0, tableHtml);
    };
    // 🔹 Simpan konten (buat/update)
    const handleSave = async ()=>{
        if (!(selected === null || selected === void 0 ? void 0 : selected.submenu)) return;
        setSaving(true);
        try {
            const payload = {
                title,
                content,
                documentId: selected.submenu.id
            };
            let response;
            if (sectionId) {
                // Update section
                response = await fetch("http://localhost:5000/api/sections/".concat(sectionId), {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(payload)
                });
            } else {
                // Create section baru
                response = await fetch("http://localhost:5000/api/sections", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(payload)
                });
            }
            if (response.ok) {
                const newData = await response.json();
                if (!sectionId) setSectionId(newData.data.id);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: "success",
                    title: "Sukses",
                    text: "Konten berhasil disimpan!",
                    timer: 2000,
                    showConfirmButton: false
                });
            } else {
                throw new Error("Gagal menyimpan konten");
            }
        } catch (error) {
            console.error("Error saving content:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                icon: "error",
                title: "Gagal",
                text: "Terjadi kesalahan saat menyimpan konten."
            });
        } finally{
            setSaving(false);
        }
    };
    // 🔹 UI belum pilih dokumen
    if (!(selected === null || selected === void 0 ? void 0 : selected.submenu)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-gray-500",
            children: "Silakan pilih dokumen dari sidebar untuk mulai mengedit konten."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
            lineNumber: 185,
            columnNumber: 7
        }, this);
    }
    // 🔹 UI Loading
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-[70vh] text-gray-500",
            children: "Memuat konten..."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
            lineNumber: 194,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 items-start w-full px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: ((_selected_submenu = selected.submenu) === null || _selected_submenu === void 0 ? void 0 : _selected_submenu.title) || "Tanpa Judul"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                lineNumber: 206,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm font-medium text-gray-700 block mb-1",
                        children: "Judul Konten"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "w-full border rounded p-2 text-sm",
                        placeholder: "Masukkan judul konten"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm",
                        children: "Rows"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: 1,
                        max: 12,
                        value: rowsInput,
                        onChange: (e)=>setRowsInput(Number(e.target.value)),
                        className: "w-20 border rounded p-1 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm",
                        children: "Cols"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: 1,
                        max: 12,
                        value: colsInput,
                        onChange: (e)=>setColsInput(Number(e.target.value)),
                        className: "w-20 border rounded p-1 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>insertEditableTable(rowsInput, colsInput),
                        className: "editor-toolbar-btn editor-toolbar-btn-success",
                        children: "Insert Table"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                                title: "Yakin ingin menghapus semua isi editor?",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText: "Ya, hapus!",
                                cancelButtonText: "Batal"
                            }).then((result)=>{
                                if (result.isConfirmed) {
                                    var _quillRef_current;
                                    setContent("");
                                    (_quillRef_current = quillRef.current) === null || _quillRef_current === void 0 ? void 0 : _quillRef_current.getEditor().setContents([]);
                                }
                            });
                        },
                        className: "editor-toolbar-btn editor-toolbar-btn-secondary",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg w-full h-[70vh] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactQuill, {
                    ref: quillRef,
                    theme: "snow",
                    value: content,
                    onChange: setContent,
                    className: "h-full",
                    modules: {
                        toolbar: {
                            container: [
                                [
                                    {
                                        header: [
                                            1,
                                            2,
                                            3,
                                            false
                                        ]
                                    }
                                ],
                                [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strike"
                                ],
                                [
                                    {
                                        list: "ordered"
                                    },
                                    {
                                        list: "bullet"
                                    }
                                ],
                                [
                                    "link",
                                    "image",
                                    "video"
                                ],
                                [
                                    {
                                        color: []
                                    },
                                    {
                                        background: []
                                    }
                                ],
                                [
                                    {
                                        align: []
                                    }
                                ],
                                [
                                    "clean"
                                ]
                            ],
                            handlers: {
                                video: videoHandler
                            }
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                    lineNumber: 274,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSave,
                    disabled: saving,
                    className: "editor-toolbar-btn editor-toolbar-btn-primary",
                    children: saving ? "Menyimpan..." : "Simpan"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                    lineNumber: 299,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard2/components/DynamicContent.js",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_s(DynamicContent, "WtAvbwh5oEnPM9/YPdgLK9hFpII=");
_c1 = DynamicContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactQuill");
__turbopack_context__.k.register(_c1, "DynamicContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard2/components/AddMenuModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddMenuModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const API_URL = "http://localhost:5000/api";
function AddMenuModal(param) {
    let { onClose, onSave } = param;
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newCategoryName, setNewCategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [documentName, setDocumentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 🔹 Fetch kategori saat modal muncul
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddMenuModal.useEffect": ()=>{
            setMounted(true);
            const fetchCategories = {
                "AddMenuModal.useEffect.fetchCategories": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_URL, "/categories"), {
                            withCredentials: true
                        });
                        setCategories(res.data.data || []);
                    } catch (err) {
                        console.error("❌ Gagal mengambil kategori:", err);
                    }
                }
            }["AddMenuModal.useEffect.fetchCategories"];
            fetchCategories();
        }
    }["AddMenuModal.useEffect"], []);
    if (!mounted) return null;
    const handleSubmit = ()=>{
        // Kasus 1: tambah kategori baru aja
        if (!documentName.trim() && newCategoryName.trim()) {
            onSave(newCategoryName, "");
        } else if (documentName.trim() && newCategoryName.trim()) {
            onSave(newCategoryName, documentName);
        } else if (documentName.trim() && selectedCategory) {
            onSave(selectedCategory, documentName);
        }
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg w-96 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold mb-3",
                    children: "Tambah Kategori / Dokumen"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block mb-2 text-sm text-gray-700",
                    children: "Pilih Kategori"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedCategory,
                    onChange: (e)=>setSelectedCategory(e.target.value),
                    className: "w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "(Buat Kategori Baru)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: cat.name,
                                children: cat.name
                            }, cat.id, false, {
                                fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                !selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block mb-2 text-sm text-gray-700",
                            children: "Nama Kategori Baru"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: newCategoryName,
                            onChange: (e)=>setNewCategoryName(e.target.value),
                            className: "w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none",
                            placeholder: "Contoh: Employee Management"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block mb-2 text-sm text-gray-700",
                    children: "Nama Dokumen (opsional)"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    value: documentName,
                    onChange: (e)=>setDocumentName(e.target.value),
                    className: "w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none",
                    placeholder: "Contoh: Employee List"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-1.5 rounded border border-gray-300 hover:bg-gray-100 text-sm font-medium",
                            children: "Batal"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            className: "px-4 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium",
                            children: "Simpan"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard2/components/AddMenuModal.js",
        lineNumber: 50,
        columnNumber: 5
    }, this), document.body);
}
_s(AddMenuModal, "lQtlBzt/mVTbqaSpsAkD/5E8234=");
_c = AddMenuModal;
var _c;
__turbopack_context__.k.register(_c, "AddMenuModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard2/components/ConfirmModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ConfirmModal(param) {
    let { title, message, onClose, onConfirm } = param;
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfirmModal.useEffect": ()=>setMounted(true)
    }["ConfirmModal.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-lg p-6 w-96",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-2",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/components/ConfirmModal.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mb-6",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/components/ConfirmModal.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium",
                            children: "Batal"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard2/components/ConfirmModal.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            className: "px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-md text-sm font-medium",
                            children: "Hapus"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard2/components/ConfirmModal.js",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard2/components/ConfirmModal.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard2/components/ConfirmModal.js",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard2/components/ConfirmModal.js",
        lineNumber: 12,
        columnNumber: 5
    }, this), document.body);
}
_s(ConfirmModal, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard2/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard2/components/Sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$DynamicContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard2/components/DynamicContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$AddMenuModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard2/components/AddMenuModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$ConfirmModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard2/components/ConfirmModal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const API_URL = "http://localhost:5000/api";
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.withCredentials = true;
function DashboardPage() {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        menu: null,
        submenu: null
    });
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmModal, setShowConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [targetDelete, setTargetDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuData, setMenuData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAuth, setIsAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const checkAuth = {
                "DashboardPage.useEffect.checkAuth": async ()=>{
                    try {
                        var _res_data;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_URL, "/auth/check"));
                        if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                            setIsAuth(true);
                            await fetchData();
                        } else {
                            window.location.href = "/login";
                        }
                    } catch (e) {
                        window.location.href = "/login";
                    } finally{
                        setLoading(false);
                    }
                }
            }["DashboardPage.useEffect.checkAuth"];
            checkAuth();
        }
    }["DashboardPage.useEffect"], []);
    // 🧩 ambil kategori & dokumen
    const fetchData = async ()=>{
        try {
            const [catRes, docRes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_URL, "/categories")),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_URL, "/documents"))
            ]);
            const categories = catRes.data.data;
            const documents = docRes.data.data;
            const combined = categories.map((cat)=>({
                    id: cat.id,
                    title: cat.name,
                    submenus: documents.filter((doc)=>doc.categoryId === cat.id).map((doc)=>({
                            id: doc.id,
                            title: doc.title
                        }))
                }));
            setMenuData(combined);
        } catch (err) {
            var _err_response;
            console.error("❌ Gagal fetch data:", err);
            if (((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) === 401) {
                alert("Sesi login habis, silakan login ulang.");
                window.location.href = "/login";
            }
        }
    };
    // 🆕 FIX: tambah menu/submenu baru dan pilih otomatis
    const handleAddMenu = async (menuName, submenuName)=>{
        try {
            let categoryId = null;
            let newCategory = null;
            let newDoc = null;
            if (menuName.trim()) {
                const existingCategory = menuData.find((cat)=>cat.title.toLowerCase() === menuName.toLowerCase());
                if (existingCategory) {
                    categoryId = existingCategory.id;
                    newCategory = existingCategory;
                } else {
                    const catRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(API_URL, "/categories"), {
                        name: menuName
                    });
                    newCategory = catRes.data.data;
                    categoryId = newCategory.id;
                }
            }
            if (submenuName.trim()) {
                if (!categoryId) return console.warn("⚠️ Tidak ada kategori untuk dokumen ini!");
                const docRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(API_URL, "/documents"), {
                    title: submenuName,
                    categoryId
                });
                newDoc = docRes.data.data;
            }
            await fetchData();
            // ✅ Otomatis pilih dokumen baru (biar gak nyangkut di dokumen lama)
            if (newCategory && newDoc) {
                setSelected({
                    menu: {
                        id: newCategory.id,
                        title: newCategory.name
                    },
                    submenu: {
                        id: newDoc.id,
                        title: newDoc.title
                    }
                });
                console.log("🟢 Dokumen baru terpilih:", newDoc.id, "-", newDoc.title);
            }
            setShowAddModal(false);
        } catch (err) {
            console.error("❌ Gagal tambah data:", err);
        }
    };
    const handleRename = async (target, newTitle)=>{
        try {
            if (target.type === "menu") {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_URL, "/categories/").concat(target.id), {
                    name: newTitle
                });
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_URL, "/documents/").concat(target.id), {
                    title: newTitle
                });
            }
            await fetchData();
        } catch (err) {
            console.error("❌ Gagal rename:", err);
        }
    };
    const executeDelete = async ()=>{
        try {
            if (targetDelete.type === "menu") {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_URL, "/categories/").concat(targetDelete.id));
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_URL, "/documents/").concat(targetDelete.id));
            }
            setShowConfirmModal(false);
            // 🧹 Reset dokumen/halaman aktif biar gak nyangkut di data yang udah kehapus
            setSelected({
                menu: null,
                submenu: null
            });
            await fetchData();
        } catch (err) {
            console.error("❌ Gagal hapus:", err);
        }
    };
    const confirmDelete = (target)=>{
        setTargetDelete(target);
        setShowConfirmModal(true);
    };
    const handleLogout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(API_URL, "/auth/logout"));
            setIsAuth(false);
            window.location.href = "/login";
        } catch (err) {
            console.error("❌ Gagal logout:", err);
        }
    };
    // 🧠 DEBUG LOG: pantau dokumen terpilih
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            var _selected_submenu;
            if (selected === null || selected === void 0 ? void 0 : (_selected_submenu = selected.submenu) === null || _selected_submenu === void 0 ? void 0 : _selected_submenu.id) {
                console.log("📄 Sekarang dokumen aktif:", selected.submenu.id);
            }
        }
    }["DashboardPage.useEffect"], [
        selected
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center h-screen w-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/page.js",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-gray-700 text-lg",
                    children: "Memeriksa sesi login..."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard2/page.js",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard2/page.js",
            lineNumber: 178,
            columnNumber: 7
        }, this);
    }
    if (!isAuth) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dashboard-layout",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                menuData: menuData,
                selected: selected,
                setSelected: setSelected,
                onAddMenu: ()=>setShowAddModal(true),
                onDelete: confirmDelete,
                onRename: handleRename,
                onLogout: handleLogout
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard2/page.js",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "dashboard-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "dashboard-header mb-6 flex justify-between items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Dashboard Admin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard2/page.js",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Kelola kategori dan konten dokumentasi HRMS"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard2/page.js",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard2/page.js",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/page.js",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$DynamicContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selected: selected
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/page.js",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$AddMenuModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>setShowAddModal(false),
                        onSave: handleAddMenu
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/page.js",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    showConfirmModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard2$2f$components$2f$ConfirmModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>setShowConfirmModal(false),
                        onConfirm: executeDelete,
                        title: "Hapus Item",
                        message: "Apakah kamu yakin ingin menghapus item ini?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard2/page.js",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard2/page.js",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard2/page.js",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "D1CrFGdhMizjtY63zYwACT/35NM=");
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_dashboard2_41e6d6e9._.js.map