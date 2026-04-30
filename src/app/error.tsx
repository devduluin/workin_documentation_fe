"use client";

import { useEffect } from "react";
import Link from "next/link";
import WorkinNavbar from "@/components/layouts/Navbar";
import WorkinFooter from "@/components/layouts/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <>
    <WorkinNavbar />
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-white mb-4">500</div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-yellow-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-white mb-4">
          Terjadi Kesalahan Server
        </h2>

        <p className="text-gray-200 mb-4 max-w-md mx-auto">
          Maaf, terjadi kesalahan pada server kami. Tim teknis sedang bekerja
          untuk memperbaikinya.
        </p>

        {error.digest && (
          <p className="text-sm text-gray-300 mb-6">Error ID: {error.digest}</p>
        )}

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={reset}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition duration-300 transform hover:scale-105"
          >
            Coba Lagi
          </button>

          <Link
            href="/"
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition duration-300"
          >
            Kembali ke Beranda
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-200">
          <p>
            Jika masalah berlanjut, silakan{" "}
            <Link href="/contact" className="text-yellow-300 hover:underline">
              hubungi tim support
            </Link>
          </p>
        </div>
      </div>
    </div>
    <WorkinFooter />
    </>
  );
}
