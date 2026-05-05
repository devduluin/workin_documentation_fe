"use client";

import Footer from "@/components/layouts/FooterSection";
import WorkinNavbar from "@/components/layouts/Navbar";
import { Home, ProjectorIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
    <WorkinNavbar />
    <div className="min-h-screen w-full bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-200/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Header Text */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-sm font-medium text-slate-500 mb-3 tracking-wide uppercase">
            Oops! You look a little lost...
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Page not found
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Maaf, halaman yang kamu cari tidak ditemukan.
          </p>
        </div>

        {/* UFO Illustration */}
        <div className="flex justify-center mb-12 animate-float">
          <svg
            viewBox="0 0 200 200"
            className="w-40 h-40 md:w-48 md:h-48"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* UFO Body */}
            <ellipse cx="100" cy="100" rx="70" ry="40" fill="url(#ufoBg)" />

            {/* UFO Dome */}
            <ellipse
              cx="100"
              cy="70"
              rx="50"
              ry="45"
              fill="url(#domeBg)"
              opacity="0.8"
            />

            {/* UFO Lights */}
            <circle cx="75" cy="100" r="8" fill="#e0e7ff" opacity="0.8" />
            <circle cx="100" cy="105" r="8" fill="#e0e7ff" opacity="0.9" />
            <circle cx="125" cy="100" r="8" fill="#e0e7ff" opacity="0.7" />

            {/* Light Beam Effect */}
            <path
              d="M 85 135 L 80 160 L 120 160 L 115 135"
              fill="url(#beamGradient)"
              opacity="0.4"
            />

            {/* Bottom Ring */}
            <ellipse
              cx="100"
              cy="140"
              rx="40"
              ry="8"
              fill="none"
              stroke="#c7d2fe"
              strokeWidth="2"
              opacity="0.5"
            />

            {/* Decorative Elements */}
            <circle cx="60" cy="85" r="3" fill="#a5b4fc" opacity="0.6" />
            <circle cx="140" cy="85" r="3" fill="#a5b4fc" opacity="0.6" />

            {/* Gradients */}
            <defs>
              <linearGradient id="ufoBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d3748" />
                <stop offset="100%" stopColor="#1a202c" />
              </linearGradient>
              <linearGradient id="domeBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4c1d95" />
                <stop offset="100%" stopColor="#2d3748" />
              </linearGradient>
              <linearGradient
                id="beamGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed">
          {/* Home Button */}
          <Link href="/">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-slate-100">
              <span className="text-2xl">
                <Home />
              </span>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Home</p>
              </div>
              <svg
                className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>

        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-300/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.3s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
    <Footer />
    </>

  );
}
