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
  "Mengapa Workin": [
    { label: "Dukungan purna jual", href: "https://workin.com/customer-care/" },
    { label: "Klien kami", href: "https://workin.com/klien-kami/" },
  ],
  Produk: [
    { label: "workin Talenta", href: "https://workin.com/produk/talenta/" },
    { label: "workin Jurnal", href: "https://workin.com/produk/jurnal/" },
    { label: "workin Qontak", href: "https://workin.com/produk/qontak/" },
    { label: "workin Klikpajak", href: "https://workin.com/produk/klikpajak/" },
    { label: "workin Flex", href: "https://workin.com/produk/flex/" },
    { label: "workin Sign", href: "https://workin.com/produk/sign/" },
    { label: "workin Expense", href: "https://workin.com/produk/expense/" },
  ],
  Solusi: [
    { label: "Software ERP", href: "https://workin.com/sistem-software-erp/" },
    { label: "Integrasi", href: "https://workin.com/integrasi/" },
    { label: "Harga", href: "https://workin.com/harga/" },
  ],
  Perusahaan: [
    { label: "Tentang workin", href: "https://workin.com/tentang-workin/" },
    { label: "workin University", href: "https://univ.workin.com/" },
    {
      label: "Karir",
      href: "https://workin.com/careers/",
      badge: "We're Hiring!",
    },
    { label: "Hubungi kami", href: "https://workin.com/hubungi-kami/" },
    { label: "Pusat bantuan", href: "https://workin.com/customer-service/" },
    { label: "Kebijakan Privasi", href: "https://workin.com/privacy/" },
    { label: "Blog", href: "https://workin.com/blog/" },
    { label: "Sitemap", href: "https://workin.com/sitemap/" },
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
    address:
      "Jl. Batununggal Indah Raya No.365, Batununggal, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40266",
    tel: "085-165-555-987",
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
    href: "https://id.linkedin.com/company/workin",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/workincom/",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://twitter.com/workincom", label: "X" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/workincom",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UClgJG7J-GrEbqNBSaMi-cWQ",
    label: "YouTube",
  },
];

export default function WorkinFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Top linear line */}
      <div className="h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Main */}
      <div className="max-w-340 mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={"/images/logo-workin-white.svg"} className="w-40" />
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
