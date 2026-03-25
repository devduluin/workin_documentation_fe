import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  MapPin,
  Phone,
} from "lucide-react";

const footerMenus = {
  "Mengapa Mekari": [
    { label: "Dukungan purna jual", href: "https://mekari.com/customer-care/" },
    { label: "Klien kami", href: "https://mekari.com/klien-kami/" },
  ],
  Produk: [
    { label: "Mekari Talenta", href: "https://mekari.com/produk/talenta/" },
    { label: "Mekari Jurnal", href: "https://mekari.com/produk/jurnal/" },
    { label: "Mekari Qontak", href: "https://mekari.com/produk/qontak/" },
    { label: "Mekari Klikpajak", href: "https://mekari.com/produk/klikpajak/" },
    { label: "Mekari Flex", href: "https://mekari.com/produk/flex/" },
    { label: "Mekari Sign", href: "https://mekari.com/produk/sign/" },
    { label: "Mekari Expense", href: "https://mekari.com/produk/expense/" },
  ],
  Solusi: [
    { label: "Software ERP", href: "https://mekari.com/sistem-software-erp/" },
    { label: "Integrasi", href: "https://mekari.com/integrasi/" },
    { label: "Harga", href: "https://mekari.com/harga/" },
  ],
  Perusahaan: [
    { label: "Tentang Mekari", href: "https://mekari.com/tentang-mekari/" },
    { label: "Mekari University", href: "https://univ.mekari.com/" },
    {
      label: "Karir",
      href: "https://mekari.com/careers/",
      badge: "We're Hiring!",
    },
    { label: "Hubungi kami", href: "https://mekari.com/hubungi-kami/" },
    { label: "Pusat bantuan", href: "https://mekari.com/customer-service/" },
    { label: "Kebijakan Privasi", href: "https://mekari.com/privacy/" },
    { label: "Blog", href: "https://mekari.com/blog/" },
    { label: "Sitemap", href: "https://mekari.com/sitemap/" },
  ],
};

const offices = [
  {
    city: "Jakarta",
    address:
      "MidPlaza 2 Lantai 4 Jln. Jend. Sudirman Kav. 10-11 Jakarta, 10220.",
    tel: "1500 069",
  },
  {
    city: "Bandung",
    address: "JL. Jenderal Ahmad Yani No. 271 A, Bandung",
    tel: "1500 069",
  },
  {
    city: "Surabaya",
    address: "Jl. Ngagel Jaya Selatan No 158",
    tel: "1500 069",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://id.linkedin.com/company/mekari",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/mekaricom/",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://twitter.com/mekaricom", label: "X" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/mekaricom",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UClgJG7J-GrEbqNBSaMi-cWQ",
    label: "YouTube",
  },
];

export default function MekariFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Top linear line */}
      <div className="h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Main */}
      <div className="max-w-340 mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <span className="text-[17px] font-bold text-white tracking-tight">
                Mekari
              </span>
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed max-w-50">
              Solusi SaaS terdepan untuk bisnis di Indonesia.
            </p>
          </div>

          {/* Menu */}
          {Object.entries(footerMenus).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="text-[12px] text-slate-500 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                      {link.label}
                      {"badge" in link && link.badge && (
                        <span className="text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Office Addresses */}
      <div className="border-t border-slate-800/80">
        <div className="max-w-340 mx-auto px-5 sm:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                Follow us
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      className="w-8 h-8 bg-slate-800/60 hover:bg-slate-700 text-slate-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                      title={social.label}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Offices */}
            {offices.map((office) => (
              <div key={office.city}>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <MapPin className="h-3 w-3 text-slate-600" />
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {office.city}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed mb-1">
                  {office.address}
                </p>
                <p className="text-[11px] text-slate-600 flex items-center gap-1">
                  <Phone className="h-2.5 w-2.5" />
                  <Link
                    href={`tel:${office.tel}`}
                    className="hover:text-slate-400 transition-colors"
                  >
                    Tel: {office.tel}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-340 mx-auto px-5 sm:px-8 py-5">
          <p className="text-center text-[11px] text-slate-600">
            © Copyright 2024 PT Mid Solusi Nusantara.
          </p>
        </div>
      </div>
    </footer>
  );
}
