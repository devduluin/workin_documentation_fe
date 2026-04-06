"use client";
import { useState } from "react";
import { SidebarTrigger } from "../ui/sidebar";

const dummyUser = {
  name: "HRMS",
  role: "Enterprise",
  avatar:
    "https://ui-avatars.com/api/?name=HRMS&background=6366f1&color=fff&size=64",
};

const quickSearchLinks = [
  { label: "Employees", href: "/dashboard/hrms/employee", icon: "users2" },
  { label: "Salary Payout", href: "/dashboard/hrms/payout", icon: "coins" },
  {
    label: "Shift & Attendance",
    href: "/dashboard/hrms/attendance",
    icon: "calendar",
  },
  { label: "Leave", href: "/dashboard/hrms/leave", icon: "briefcase" },
];

const userMenuLinks = [
  {
    label: "Email Settings",
    href: "/dashboard/settings/email_setting",
    icon: "inbox",
  },
  {
    label: "Reset Password",
    href: "/dashboard/settings/security",
    icon: "lock",
  },
  { label: "Profile Info", href: "/dashboard/settings", icon: "users" },
];

const IconSearch = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const IconChevronRight = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const IconPower = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v10" />
    <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
  </svg>
);

const SearchModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-60 bg-linear-to-b from-indigo-900/50 via-purple-900/50 to-black/50
          transition-opacity duration-200 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />
      <div
        className={`fixed inset-0 z-60 flex items-start justify-center pt-10 sm:pt-40 px-3
        transition-opacity duration-200 pointer-events-none ${open ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className={`relative w-full sm:w-150 lg:w-175 transition-transform duration-200 pointer-events-auto
          ${open ? "scale-100" : "scale-95"}`}
        >
          {/* Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex w-12 items-center justify-center">
              <IconSearch className="h-5 w-5 text-slate-400" />
            </div>
            <input
              autoFocus={open}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Quick search..."
              className="w-full rounded-lg border-0 py-3.5 pl-12 pr-14 text-base shadow-lg
                focus:ring-0 focus:outline-none placeholder:text-slate-400/90"
            />
            <div className="absolute inset-y-0 right-0 flex w-14 items-center">
              <button
                onClick={onClose}
                className="mr-auto rounded-[0.4rem] border bg-slate-100 px-2 py-1 text-xs text-slate-500/80"
              >
                ESC
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div className="relative z-10 mt-1 max-h-117 overflow-y-auto rounded-lg bg-white pb-1 shadow-lg">
            <div className="px-5 py-4">
              <p className="text-xs uppercase text-slate-500 mb-3.5">
                Start your search here...
              </p>
              <div className="flex flex-wrap gap-2">
                {quickSearchLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const UserDropdown = ({ user }: { user: typeof dummyUser }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative ml-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="h-9 w-9 overflow-hidden rounded-full border-[3px] border-white/20
          focus:outline-none hover:border-white/40 transition-colors"
      >
        <img
          src={user.avatar}
          alt={user.name}
          className="h-full w-full object-cover"
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-50 mt-2 w-56 rounded-xl bg-white shadow-xl border border-slate-100 p-2">
            {/* Profile header */}
            <a
              href="/dashboard/settings/user_account"
              className="flex items-center gap-2.5 p-2 rounded-md hover:bg-slate-100/60 transition-colors"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="h-9 w-9 rounded-full"
              />
              <div className="text-xs text-slate-500 leading-tight">
                <p className="font-semibold text-slate-700">{user.name}</p>
                <p>{user.role}</p>
              </div>
            </a>
            <div className="my-2 -mx-2 h-px bg-slate-200/60" />

            {userMenuLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 p-2 rounded-md text-sm text-slate-600
                  hover:bg-slate-100/60 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="my-2 -mx-2 h-px bg-slate-200/60" />
            <button
              className="w-full flex items-center gap-2 p-2 rounded-md text-sm text-red-500
                hover:bg-red-50 transition-colors"
            >
              <IconPower className="stroke-[1.5]" />
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const HeaderDashboard = ({ breadcrumbLabel }: { breadcrumbLabel?: string }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="sticky top-3 inset-x-0 transition-[padding] duration-100 z-40 px-2">
        <div className="flex w-full items-center justify-center py-2 rounded-2xl px-4 sm:px-5 bg-linear-to-r from-blue-700 via-purple-900/80 to-purple-700 shadow-lg">
          <div className="flex gap-4 items-center">
            <SidebarTrigger className="text-white bg-transparent hover:bg-transparent hover:text-white cursor-pointer" />
            {/* Breadcrumb – hidden on mobile */}
            <nav aria-label="breadcrumb" className="hidden flex-1 xl:block">
              <ol className="flex items-center text-white/90 text-sm">
                <li>
                  <a
                    href="/dashboard"
                    className="hover:text-white transition-colors"
                  >
                    Dashboard
                  </a>
                </li>
                {breadcrumbLabel && (
                  <li className="flex items-center ml-3 text-white/60">
                    <IconChevronRight className="mr-1 opacity-60" />
                    <a
                      href={`/dashboard/${breadcrumbLabel.toLowerCase()}`}
                      className="hover:text-white/90 transition-colors"
                    >
                      {breadcrumbLabel}
                    </a>
                  </li>
                )}
              </ol>
            </nav>
          </div>

          {/* Search bar – desktop */}
          <div className="hidden flex-1 justify-center xl:flex">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex w-87.5 cursor-pointer items-center rounded-lg
                bg-white/12 px-3.5 py-2 text-white/60 hover:bg-white/20 transition-colors"
            >
              <IconSearch className="h-4.5 w-4.5 stroke-1" />
              <span className="ml-2.5 mr-auto text-sm">Quick search...</span>
              <span className="text-xs opacity-60">⌘ K</span>
            </button>
          </div>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="xl:hidden rounded-full p-2 hover:bg-white/10 text-white transition-colors"
            >
              <IconSearch className="h-4.5 w-4.5 stroke-1" />
            </button>

            <UserDropdown user={dummyUser} />
          </div>
        </div>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default HeaderDashboard;
