module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/component/Sidebar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Sidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const menus = [
        {
            name: "Overview",
            href: "/"
        },
        {
            name: "Getting Started",
            href: "/gettingstarted"
        },
        {
            name: "Employee Management",
            children: [
                {
                    name: "Employee List",
                    href: "/employeemanage/data"
                },
                {
                    name: "Create New Employee",
                    href: "/employeemanage/new-employee"
                },
                {
                    name: "Joining",
                    href: "/employeemanage/joining"
                },
                {
                    name: "Address & Contact",
                    href: "/employeemanage/address"
                },
                {
                    name: "Attendance",
                    href: "/employeemanage/attendance"
                },
                {
                    name: "Salary",
                    href: "/employeemanage/salary"
                },
                {
                    name: "Personal",
                    href: "/employeemanage/personal"
                },
                {
                    name: "Profile",
                    href: "/employeemanage/profile"
                },
                {
                    name: "Exit",
                    href: "/employeemanage/exit"
                }
            ]
        },
        {
            name: "Claims & Travel",
            children: [
                {
                    name: "Employee Expense",
                    href: "/claimtravel/expense"
                },
                {
                    name: "Create Expense",
                    href: "/claimtravel/addexpense"
                },
                {
                    name: "Employee Advance",
                    href: "/claimtravel/advance"
                },
                {
                    name: "Add New Advance",
                    href: "/claimtravel/addadvance"
                },
                {
                    name: "Expense Claim Type",
                    href: "/claimtravel/expense-type"
                },
                {
                    name: "Create Expense Claim Type",
                    href: "/claimtravel/add-expense-type"
                },
                {
                    name: "Employee Travel",
                    href: "/claimtravel/travel"
                },
                {
                    name: "Create Travel",
                    href: "/claimtravel/add-travel"
                }
            ]
        },
        {
            name: "Shift & Attendance",
            children: [
                {
                    name: "Shift Attendance Management",
                    href: "/shift-attendance/shift-attendance-management"
                },
                {
                    name: "Attendance Dashboard",
                    href: "/shift-attendance/attendance-dashboard"
                },
                {
                    name: "Add Attendance",
                    href: "/shift-attendance/add-attendance"
                },
                {
                    name: "Attendance Activity",
                    href: "/shift-attendance/attendance-activity"
                },
                {
                    name: "Attendance Report",
                    href: "/shift-attendance/attendance-report"
                },
                {
                    name: "Activity Report",
                    href: "/shift-attendance/activity-report"
                },
                {
                    name: "Shift Report",
                    href: "/shift-attendance/shift-report"
                },
                {
                    name: "Attendance Summary",
                    href: "/shift-attendance/attendance-summary"
                },
                {
                    name: "Data Checkpoint",
                    href: "/shift-attendance/data-checkpoint"
                },
                {
                    name: "Add Checkpoint",
                    href: "/shift-attendance/add-checkpoint"
                },
                {
                    name: "Checkpoint Record",
                    href: "/shift-attendance/checkpoint-record"
                },
                {
                    name: "Add Checkpoint Record",
                    href: "/shift-attendance/add-record"
                },
                {
                    name: "Checkpoint Assignment",
                    href: "/shift-attendance/checkpoint-assignment"
                },
                {
                    name: "Shift Type",
                    href: "/shift-attendance/shift-type"
                },
                {
                    name: "Add Shift Type",
                    href: "/shift-attendance/add-shift-type"
                },
                {
                    name: "Shift Assignment",
                    href: "/shift-attendance/shift-assignment"
                },
                {
                    name: "Add Shift Assignment",
                    href: "/shift-attendance/add-shift-assignment"
                },
                {
                    name: "Add Shift Assignment Bulk",
                    href: "/shift-attendance/bulk-assignment"
                },
                {
                    name: "Shift Assignment Schedule",
                    href: "/shift-attendance/assignment-schedule"
                }
            ]
        },
        {
            name: "Leaves",
            children: [
                {
                    name: "Employee Leave",
                    href: "/leaves/employee-leaves"
                },
                {
                    name: "Holiday List",
                    href: "/leaves/holiday-list"
                },
                {
                    name: "Add New Holiday",
                    href: "/leaves/add-new-holiday"
                },
                {
                    name: "Leave Type",
                    href: "/leaves/leave-type"
                },
                {
                    name: "Add New Leave Type",
                    href: "/leaves/add-new-leave"
                },
                {
                    name: "Leave Application",
                    href: "/leaves/leave-application"
                },
                {
                    name: "Add Leave Application",
                    href: "/leaves/add-leave-application"
                },
                {
                    name: "Leave Allocation",
                    href: "/leaves/leave-allocation"
                },
                {
                    name: "Add Leave Allocation",
                    href: "/leaves/add-leave-allocation"
                }
            ]
        },
        {
            name: "Company",
            children: [
                {
                    name: "Publisher",
                    href: "/company/publisher"
                },
                {
                    name: "Categories",
                    href: "/company/categories"
                },
                {
                    name: "Add New Categories",
                    href: "/company/add-new-categories"
                },
                {
                    name: "Blog & News",
                    href: "/company/blog-&-news"
                },
                {
                    name: "Events Calendar",
                    href: "/company/events-calendar"
                },
                {
                    name: "Add New Events Calendar",
                    href: "/company/add-new-events-calendar"
                },
                {
                    name: "Broadcast Notification",
                    href: "/company/broadcast-notification"
                },
                {
                    name: "Add New Broadcast Notification",
                    href: "/company/add-new-broadcast-notification"
                },
                {
                    name: "Companies",
                    href: "/company/companies"
                },
                {
                    name: "HR Setting",
                    href: "/company/hr-setting"
                },
                {
                    name: "HRMS Setting",
                    href: "/company/hrms-setting"
                },
                {
                    name: "HRMS Setting Page Guidance",
                    href: "/company/hrms-page-guidance"
                },
                {
                    name: "My Account Page",
                    href: "/company/my-account"
                },
                {
                    name: "My Account Page (Detail Guidance)",
                    href: "/company/my-account-page"
                },
                {
                    name: "Email Settings Page",
                    href: "/company/email-settings"
                },
                {
                    name: "Security Settings",
                    href: "/company/security-settings"
                },
                {
                    name: "Preferences Settings",
                    href: "/company/preferences-settings"
                },
                {
                    name: "Deactivation Account",
                    href: "/company/deactivation-account"
                },
                {
                    name: "User Access Controll",
                    href: "/company/user-access-controll"
                },
                {
                    name: "Role List",
                    href: "/company/role-list"
                },
                {
                    name: "Add New Role",
                    href: "/company/new-role"
                },
                {
                    name: "Designation List",
                    href: "/company/designation-list-page"
                },
                {
                    name: "Add New Designation",
                    href: "/company/add-designation"
                },
                {
                    name: "Data Department",
                    href: "/company/department"
                },
                {
                    name: "Grade",
                    href: "/company/grade"
                },
                {
                    name: "Branch",
                    href: "/company/branch"
                }
            ]
        },
        {
            name: "Payroll",
            children: [
                {
                    name: "Salary Component",
                    href: "/payroll/salary-component"
                },
                {
                    name: "Salary Structure",
                    href: "/payroll/salary-structure"
                },
                {
                    name: "Salary Structure Assignment",
                    href: "/payroll/salary-structure-assignment"
                },
                {
                    name: "Bulk Salary Structure Assignment",
                    href: "/payroll/bulk-salary-structure-assignment"
                },
                {
                    name: "Payroll Periode",
                    href: "/payroll/payroll-periode"
                },
                {
                    name: "Payroll Entry",
                    href: "/payroll/payroll-entry"
                },
                {
                    name: "Salary Slip",
                    href: "/payroll/salary-slip"
                },
                {
                    name: "Cost Component",
                    href: "/payroll/cost-component"
                }
            ]
        }
    ];
    // Buka otomatis menu jika salah satu child-nya aktif
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        menus.forEach((menu, idx)=>{
            if (menu.children?.some((child)=>child.href === pathname)) {
                setOpenMenu(idx);
            }
        });
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 bg-gray-50 shadow flex flex-col sticky top-0 h-screen overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-b border-gray-200 flex flex-col items-center justify-center text-center space-y-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/duluin-hrms.png",
                        alt: "Logo HRMS",
                        className: "w-28 h-auto object-contain -my-2 block"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Sidebar.js",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold text-gray-800 leading-tight mt-5",
                        children: "Documentation"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Sidebar.js",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/Sidebar.js",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col p-4 space-y-2",
                children: menus.map((menu, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: menu.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: menu.href,
                            className: `block px-4 py-2 rounded-lg transition ${pathname === menu.href ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-600 hover:bg-blue-50"}`,
                            children: menu.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/Sidebar.js",
                            lineNumber: 160,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenMenu(openMenu === idx ? null : idx),
                                    className: `w-full text-left px-4 py-2 rounded-lg transition ${openMenu === idx ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-600 hover:bg-blue-50"}`,
                                    children: menu.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/Sidebar.js",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this),
                                menu.children && openMenu === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-6 mt-1 flex flex-col space-y-1",
                                    children: menu.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: child.href,
                                            className: `block px-3 py-1 rounded-md text-sm transition ${pathname === child.href ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-500 hover:bg-blue-50"}`,
                                            children: child.name
                                        }, child.href, false, {
                                            fileName: "[project]/src/app/component/Sidebar.js",
                                            lineNumber: 188,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/Sidebar.js",
                                    lineNumber: 186,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true)
                    }, menu.name, false, {
                        fileName: "[project]/src/app/component/Sidebar.js",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/component/Sidebar.js",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/Sidebar.js",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/employeemanage/personal/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GettingStartedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Sidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/Sidebar.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function GettingStartedPage() {
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 🔹 Fetch data dari database
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/sections/9").then((res)=>res.json()).then((data)=>{
            // Tambahkan id otomatis ke setiap <h2>
            const fixedContent = data.data.content.replace(/<h2>(.*?)<\/h2>/g, (match, title)=>{
                const plainTitle = title.replace(/<[^>]+>/g, "").trim();
                const id = plainTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-") // buang karakter aneh
                .replace(/^-+|-+$/g, ""); // hapus "-" di awal/akhir
                console.log("Creating ID for title:", plainTitle, "-> ID:", id);
                return `<h2 id="${id}">${title}</h2>`;
            });
            setContent(fixedContent);
        }).catch((err)=>console.error("Fetch error:", err));
    }, []);
    // 🔹 Generate daftar isi setelah konten render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contentRef.current) return;
        const observer = new MutationObserver(()=>{
            const headings = contentRef.current.querySelectorAll("h2[id]");
            if (headings.length > 0) {
                const list = Array.from(headings).map((h)=>({
                        id: h.id,
                        title: h.textContent.trim()
                    }));
                setSections(list);
                observer.disconnect();
            }
        });
        observer.observe(contentRef.current, {
            childList: true,
            subtree: true
        });
        return ()=>observer.disconnect();
    }, [
        content
    ]);
    // 🔹 Intersection Observer untuk highlight aktif
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contentRef.current || !mainRef.current) return;
        const headings = contentRef.current.querySelectorAll("h2[id]");
        if (!headings.length) return;
        const observer = new IntersectionObserver((entries)=>{
            const visible = entries.filter((entry)=>entry.isIntersecting).sort((a, b)=>a.boundingClientRect.top - b.boundingClientRect.top);
            if (visible.length > 0) {
                const nextActive = visible[0].target.id;
                if (nextActive !== activeId) {
                    console.log("Active heading changed to:", nextActive);
                    setActiveId(nextActive);
                }
            }
        }, {
            root: mainRef.current,
            rootMargin: "0px 0px -50% 0px",
            threshold: 0.2
        });
        headings.forEach((h)=>observer.observe(h));
        return ()=>observer.disconnect();
    }, [
        sections,
        activeId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Sidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/employeemanage/personal/page.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/employeemanage/personal/page.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: mainRef,
                className: "flex-1 p-6 md:p-10 overflow-y-auto scroll-smooth h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: contentRef,
                    className: "prose max-w-none ql-editor",
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/employeemanage/personal/page.js",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/employeemanage/personal/page.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-64 bg-gray-50 shadow sticky top-0 h-screen overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800",
                            children: "Daftar Isi"
                        }, void 0, false, {
                            fileName: "[project]/src/app/employeemanage/personal/page.js",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/employeemanage/personal/page.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col p-4 space-y-2",
                        children: sections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${s.id}`,
                                className: `px-3 py-2 rounded-md transition scroll-smooth ${activeId === s.id ? "bg-blue-500 text-white font-semibold shadow-md" : "text-gray-600 hover:bg-blue-100 hover:text-blue-800"}`,
                                children: s.title
                            }, s.id, false, {
                                fileName: "[project]/src/app/employeemanage/personal/page.js",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/employeemanage/personal/page.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/employeemanage/personal/page.js",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/employeemanage/personal/page.js",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4f3a455d._.js.map