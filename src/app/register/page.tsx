"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, UserPlus } from "lucide-react";
import { useAuthStore } from "@/stores/useAuth";
import Link from "next/link";
import { ApiHrms } from "@/lib/API-hrms";
import WorkinNavbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/FooterSection";

export default function RegisterPage() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await ApiHrms.register({ username, email, password });
      setAuth(res.user);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <WorkinNavbar />
      <div className="min-h-screen mesh-bg flex items-center justify-center bg-slate-50/30 px-4">
        <div className="card-elevated rounded-2xl! p-8 w-full max-w-md">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-slate-500 hover:text-slate-700 mb-6"
          >
            <Home className="h-6 w-6" />
          </Link>
          <h1 className="text-[22px] font-extrabold text-slate-900 text-center mb-2">
            Buat Akun
          </h1>
          <p className="text-[13px] text-slate-500 text-center mb-6">
            Daftar untuk mulai berdiskusi
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 text-[12px] font-medium p-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-slate-600 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-slate-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-slate-600 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3! text-[14px]"
            >
              <UserPlus className="h-4 w-4" />
              {loading ? "Loading..." : "Daftar"}
            </button>
          </form>

          <p className="text-center text-[12px] text-slate-500 mt-4">
            Sudah punya akun?
            <Link href={"/login"}>
              <button className="text-indigo-600 cursor-pointer font-semibold hover:underline">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
