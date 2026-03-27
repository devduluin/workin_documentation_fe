"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  ExternalLink,
  Headphones,
  Tag,
  MessageSquare,
  LogIn,
  LogOut,
  LayoutDashboard,
  User2,
  MessageCircle,
} from "lucide-react";
import { useSidebarStore } from "@/stores/useSidebar";
import { useAuthStore } from "@/stores/useAuth";

export default function WorkinNavbar() {
  const router = useRouter();
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    isProductDropdownOpen,
    toggleProductDropdown,
    closeProductDropdown,
    isLangDropdownOpen,
    toggleLangDropdown,
    closeLangDropdown,
  } = useSidebarStore();

  const { user, loading: authLoading, loadUser, logout } = useAuthStore();

  const productRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  // Close dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        productRef.current &&
        !productRef.current.contains(e.target as Node)
      ) {
        closeProductDropdown();
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        closeLangDropdown();
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeProductDropdown, closeLangDropdown]);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    closeMobileMenu();
    router.push("/");
  };

  // Get user initials for avatar
  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start py-1.5">
          <div ref={langRef} className="relative">
            <button
              onClick={toggleLangDropdown}
              className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Bahasa Indonesia</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform ${
                  isLangDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isLangDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-40 animate-slide-down z-50">
                <Link
                  href="#"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  onClick={closeLangDropdown}
                >
                  🇺🇸 English
                </Link>
                <div className="flex items-center gap-2 px-3 py-2 text-xs text-blue-700 bg-blue-50 font-medium">
                  🇮🇩 Bahasa Indonesia
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* <span className="text-lg font-bold text-gray-900">Workin </span> */}
            <img src={"/images/logo-workin.svg"} className="w-40 h-40" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Produk Dropdown */}
            <div ref={productRef} className="relative">
              <Link href="https://workin.duluin.com/#feature" target="_blank">
                <button
                  onClick={toggleProductDropdown}
                  className="flex items-center gap-1 px-3 py-2 text-sm cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                >
                  Fitur
                </button>
              </Link>
            </div>

            <Link
              href="https://workin.duluin.com/price-package"
              target="_blank"
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
            >
              Harga
            </Link>
            <Link
              href="#"
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
            >
              Workin by Duluin
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=6285165555987&text&type=phone_number&app_absent=0"
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
            >
              Workin Customer Care
            </Link>

            <div className="w-px h-6 bg-gray-200 mx-1" />

            {/* Auth Section */}
            {/* {authLoading ? (
              <div className="w-8 h-8 rounded-full bg-gray-100 animate-pulse" />
            ) : user ? (
              <div ref={userMenuRef} className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {getUserInitials(user.name)}
                    </span>
                  </div>
                  <div className="hidden xl:block text-left">
                    <p className="text-xs font-semibold text-gray-800 leading-tight truncate max-w-25">
                      {user.name}
                    </p>
                    <p className="text-[10px] text-gray-400 leading-tight">
                      {user.role === "ADMIN" ? "Admin" : "Member"}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-3 w-3 text-gray-400 transition-transform ${
                      isUserMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-1 min-w-55 animate-slide-down z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                      {user.role === "ADMIN" && (
                        <span className="inline-flex items-center mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-600">
                          ADMIN
                        </span>
                      )}
                    </div>

                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <LayoutDashboard className="h-4 w-4 text-gray-400" />
                        Dashboard
                      </Link>
                      <Link
                        href="/discuss/create"
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <MessageSquare className="h-4 w-4 text-gray-400" />
                        Buat Diskusi
                      </Link>
                    </div>

                    <div className="border-t border-gray-100 py-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-sm"
                >
                  <LogIn className="h-3.5 w-3.5" />
                  Sign Up
                </Link>
              </div>
            )} */}
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 animate-slide-down">
            <div className="space-y-1">
              {user && (
                <div className="flex items-center gap-3 px-3 py-3 mb-2 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {getUserInitials(user.name)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>
                  {user.role === "ADMIN" && (
                    <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-600">
                      ADMIN
                    </span>
                  )}
                </div>
              )}
              <Link href={"https://workin.duluin.com/#feature"}>
                <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <Tag className="h-4 w-4" /> Fitur
                  </span>
                  {/* <ChevronDown className="h-4 w-4" /> */}
                </button>
              </Link>

              <Link
                href="https://workin.duluin.com/price-package"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <ExternalLink className="h-4 w-4" /> Harga
              </Link>
              <Link
                href="#"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Tag className="h-4 w-4" /> Workin by Duluin
              </Link>
              <Link
                href="/discuss"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <MessageSquare className="h-4 w-4" /> Diskusi
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=6285165555987&text&type=phone_number&app_absent=0"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Headphones className="h-4 w-4" /> Workin Customer Care
              </Link>
              {/* 
              {user ? (
                <div className="pt-2 border-t border-gray-100 mt-2 space-y-1">
                  <Link
                    href="/dashboard"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <LayoutDashboard className="h-4 w-4" /> Dashboard
                  </Link>
                  <Link
                    href="/discuss/create"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <MessageCircle className="h-4 w-4" /> Buat Diskusi
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              ) : (
                <div className="pt-2 border-t border-gray-100 mt-2 space-y-2">
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-gray-700 border border-gray-200 hover:bg-gray-50 rounded-lg"
                  >
                    <User2 className="h-4 w-4" /> Login
                  </Link>
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    <LogIn className="h-4 w-4" /> Sign Up
                  </Link>
                </div>
              )} */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
