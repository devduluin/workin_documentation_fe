"use client";
import { useEffect, useRef, useState } from "react";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-100 py-12">
      <style jsx>{`
        .animated-underline {
          position: relative;
          transition: all 0.3s ease;
        }

        .animated-underline::after {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background: #6b7280;
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animated-underline:hover::after {
          width: 100%;
        }

        .animated-underline:hover {
          color: #1d4ed8;
          transform: translateY(-1px);
        }

        .animated-underline:active {
          transform: translateY(0px) scale(0.98);
          transition: transform 0.1s ease;
        }

        .contact-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .contact-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 28px;
          background: #6b7280;
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .contact-link:hover::after {
          width: calc(100% - 28px);
        }

        .contact-link:hover::after {
          width: calc(100% - 28px);
        }

        .contact-link:hover {
          color: #1d4ed8;
        }

        .contact-link:hover .contact-icon {
          transform: scale(1.15) rotate(5deg);
          color: #1d4ed8;
        }

        .contact-link:active {
          transform: scale(0.98);
        }

        .social-icon {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .social-icon::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
          z-index: -1;
        }

        .social-icon:hover::before {
          width: 40px;
          height: 40px;
        }

        .social-icon:hover {
          transform: scale(1.25) translateY(-2px);
          color: #1d4ed8;
        }

        .social-icon:active {
          transform: scale(1.1) translateY(0px);
        }
      `}</style>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Company Info & Downloads */}
          <div
            className={`md:col-span-5 space-y-8 text-center md:text-left transform transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="space-y-6">
              <div className="flex justify-center md:justify-start">
                <Image src="/images/duluin-logo.svg" alt="Duluin Logo" width={120} height={40} />
              </div>

              <div className="space-y-4 text-sm text-gray-600">
                <a
                  href="https://maps.app.goo.gl/rAUYUBuXZYkT11Kj6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-center md:justify-start space-x-2 hover:text-blue-600 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Jl. Batununggal Indah Raya No.365, Batununggal, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40266</span>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=6285165555987&text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20Workin%20by%20Duluin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start space-x-2 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>085-165-555-987</span>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@duluin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start space-x-2 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>hello@duluin.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-sm">Download Aplikasi</h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="https://play.google.com/store/apps/details?id=com.duluin.duluin_hris_app" target="_blank" rel="noopener noreferrer" className="bg-black p-2 rounded-lg hover:scale-105 transition-transform">
                  <Image src="/images/google-play.svg" alt="Google Play" width={110} height={35} />
                </a>
                <a href="https://apps.apple.com/us/app/duluin-hrms/id6741068388" target="_blank" rel="noopener noreferrer" className="bg-black p-2 rounded-lg hover:scale-105 transition-transform">
                  <Image src="/images/app-store.svg" alt="App Store" width={110} height={35} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Kominfo & Social Media */}
          <div
            className={`md:col-span-3 space-y-8 text-center md:text-left transform transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-4">
              <div className="flex justify-center md:justify-start">
                <Image src="/images/logo-kominfo.svg" alt="Kominfo Logo" width={120} height={40} />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium">PT. DULUIN SOLUSI KEPEGAWAIAN</p>
                <p>Terdaftar di Penyelenggara Sistem Elektronik</p>
                <p className="text-xs mt-2 text-gray-400">018780.01/DJAI.PSE/06/2025</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-sm">Ikuti Kami</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.instagram.com/duluinworkin/" target="_blank" className="w-8 h-8  bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 text-white rounded-lg flex items-center justify-center transition-all shadow-sm hover:scale-110 active:scale-95"><Instagram className="h-4 w-4" /></a>

                <a href="https://www.youtube.com/channel/UCg_lBr1S63cuMt9vNECJYCw" target="_blank" className="w-8 h-8  bg-red-600 hover:opacity-90 text-white rounded-lg flex items-center justify-center transition-all shadow-sm hover:scale-110 active:scale-95"><Youtube size={24} /></a>
              </div>
            </div>
          </div>

          {/* Column 3: Fitur */}
          <div
            className={`md:col-span-2 space-y-4 text-center md:text-left transform transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="font-semibold text-gray-800">Fitur</h3>
            <div className="space-y-2 text-sm text-gray-600">
              {[
                { label: "Absensi Online", href: "https://workin.duluin.com/features/absensi-online" },
                { label: "Shift Management", href: "https://workin.duluin.com/features/shift-management" },
                { label: "Payroll Calculation", href: "https://workin.duluin.com/features/payroll-calculation" },
                { label: "Claim Management", href: "https://workin.duluin.com/features/claim-reimbursement" },
                { label: "Employee Management", href: "https://workin.duluin.com/features/employee-management" },
                { label: "Document Management", href: "https://workin.duluin.com/features/document-management" },
                { label: "Broadcast & News", href: "https://workin.duluin.com/features/broadcast" },
                { label: "Earned Wage Access", href: "https://workin.duluin.com/features/earned-wage-access" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="block hover:text-blue-600 transition-colors">
                  <span className="animated-underline">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Halaman */}
          <div
            className={`md:col-span-2 space-y-4 text-center md:text-left transform transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="font-semibold text-gray-800">Halaman</h3>
            <div className="space-y-2 text-sm text-gray-600">
              {[
                { label: "Beranda", href: "/" },
                { label: "Kenali Duluin", href: "https://duluin.com" },
                { label: "Paket Harga", href: "https://workin.duluin.com/price-package" },
                { label: "Fitur", href: "https://workin.duluin.com/features" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block hover:text-blue-600 transition-colors">
                  <span className="animated-underline">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className={`pt-8 border-t border-gray-200 transform transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex justify-center items-center">
            <div className="text-sm text-gray-500 text-center">
              Copyright © 2026 PT. Duluin Solusi Kepegawaian. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
