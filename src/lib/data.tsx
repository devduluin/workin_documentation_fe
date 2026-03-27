import {
  SidebarCategory,
  ReleaseLogEntry,
  InfoCard,
  RelatedArticle,
  BreadcrumbItem,
  TableOfContentsItem,
  Topics,
} from "@/types";
import { SignatureIcon } from "lucide-react";

export const breadcrumbs: BreadcrumbItem[] = [
  { label: "Workin Help Center", href: "/hc/id" },
  { label: "General", href: "/hc/id/categories/20043365335833-General" },
  {
    label: "Guidebook Release Log",
    href: "/hc/id/sections/20043397536281-Guidebook-Release-Log",
  },
];

export const tableOfContents: TableOfContentsItem[] = [
  { id: "januari", title: "Januari" },
  { id: "februari", title: "Februari" },
];

export const releaseLogEntries: ReleaseLogEntry[] = [
  {
    publishedDate: "25/2/2025",
    featureName: "Keamanan",
    guidebookTitle:
      "Bagaimana Cara Mengaktifkan Fitur Account Lockout di Workin",
    guidebookHref: "/hc/id/articles/55467657227929",
    featureStatus: "New",
    description: "Penjelasan scara mengaktifkan fitur penguncian akun.",
  },
];

export const sidebarCategories: SidebarCategory[] = [
  {
    id: "cat-general",
    title: "General",
    sections: [
      {
        id: "sec-product-release",
        title: "Workin Products Release Log",
        articles: [
          {
            id: "art-1",
            title: "Workin Products Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/18341184943257-Workin-Products-Release-Log",
          },
        ],
      },
      {
        id: "sec-guidebook-release",
        title: "Guidebook Release Log",
        articles: [
          {
            id: "art-2",
            title: "Workin Account - Guidebook Release Log",
            href: "#",
            isActive: true,
          },
          {
            id: "art-3",
            title: "Workin Flex - Guidebook Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/20043431490585",
          },
          {
            id: "art-4",
            title: "Flex Savings - Guidebook Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/51235042353817",
          },
          {
            id: "art-5",
            title: "Workin Sign - Guidebook Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/20043582871705",
          },
          {
            id: "art-6",
            title: "Workin Expense - Guidebook Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/20043673497881",
          },
          {
            id: "art-7",
            title: "Workin Partners Platform - Guidebook Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/25732922429337",
          },
          {
            id: "art-8",
            title: "Workin Officeless - Guidebook Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/34339538913689",
          },
          {
            id: "art-9",
            title: "Workin POS - Guidebook Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/55471117475097",
          },
        ],
      },
      {
        id: "sec-video-release",
        title: "Video Tutorial Release Log",
        articles: [
          {
            id: "art-10",
            title: "Workin Flex - Tutorial Video Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/20044056349593",
          },
          {
            id: "art-11",
            title: "Workin Expense - Tutorial Video Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/20044239293337",
          },
          {
            id: "art-12",
            title: "Workin Sign - Tutorial Video Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/32293589704857",
          },
          {
            id: "art-13",
            title: "Workin Stream - Tutorial Video Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/36264493677081",
          },
          {
            id: "art-14",
            title: "Workin POS - Tutorial Video Release Log",
            href: "https://help-center.Workin.com/hc/id/articles/55938336047385",
          },
        ],
      },
    ],
  },
  {
    id: "cat-Workin-account",
    title: "Workin Account",
    sections: [
      {
        id: "sec-faq",
        title: "Frequently Asked Questions",
        articles: [
          { id: "art-15", title: "FAQs Workin Account", href: "#" },
          { id: "art-16", title: "FAQs SAML", href: "#" },
          { id: "art-17", title: "FAQs Workin Appstudio", href: "#" },
        ],
      },
      {
        id: "sec-mulai",
        title: "Mulai dengan Workin Account",
        articles: [
          {
            id: "art-18",
            title: "Bagaimana Cara Sign in ke Workin Account",
            href: "#",
          },
          {
            id: "art-19",
            title:
              "Bagaimana Cara Sign In dengan Employee ID pada Workin Account",
            href: "#",
          },
          {
            id: "art-20",
            title: "Bagaimana Cara Melakukan Sign in melalui Akun Google",
            href: "#",
          },
          {
            id: "art-21",
            title:
              "Bagaimana Cara Sign In dengan Nomor Telepon pada Workin Account",
            href: "#",
          },
          {
            id: "art-22",
            title: "Bagaimana Cara Sign In dengan SAML SSO pada Workin Account",
            href: "#",
          },
          {
            id: "art-23",
            title:
              "Bagaimana Cara Memantau Aktivitas dan Riwayat Sign-in pada Workin Account",
            href: "#",
          },
          {
            id: "art-24",
            title: "Ketentuan Penggunaan Produk Workin",
            href: "#",
          },
          {
            id: "art-25",
            title:
              "Bagaimana Cara Mengaktifkan Pengelolaan Kata Sandi Perusahaan pada Workin Access",
            href: "#",
          },
          {
            id: "art-26",
            title: "Himbauan ketika Terdapat Kata Sandi yang Lemah",
            href: "#",
          },
          {
            id: "art-27",
            title:
              "Bagaimana Cara Mengganti Password/Kata Sandi pada Workin Account",
            href: "#",
          },
          {
            id: "art-28",
            title:
              "Bagaimana Jika Kita Lupa Password/Kata Sandi Workin Account",
            href: "#",
          },
        ],
      },
      {
        id: "sec-support-center",
        title: "Support Center",
        articles: [
          {
            id: "art-29",
            title:
              "Bagaimana Cara Menggunakan Support Center pada Workin Account",
            href: "#",
          },
          {
            id: "art-30",
            title:
              "Penjelasan Tahapan Subscriptions pada Support Center Workin",
            href: "#",
          },
        ],
      },
      {
        id: "sec-produk",
        title: "Produk",
        articles: [
          {
            id: "art-31",
            title: "Bagaimana Cara Mencoba Produk Lain Pada Workin Account",
            href: "#",
          },
        ],
      },
      {
        id: "sec-info-pribadi",
        title: "Info pribadi",
        articles: [
          {
            id: "art-32",
            title: "Bagaimana Cara Mengubah Info Pribadi Workin Account",
            href: "#",
          },
          {
            id: "art-33",
            title:
              "Bagaimana Cara Melakukan Verifikasi atau Perubahan pada Nomor Telepon di Workin Account",
            href: "#",
          },
        ],
      },
      {
        id: "sec-perusahaan",
        title: "Perusahaan",
        articles: [
          {
            id: "art-34",
            title:
              "Bagaimana Cara Mengubah Info Perusahaan dari Workin Account",
            href: "#",
          },
        ],
      },
      {
        id: "sec-keamanan",
        title: "Keamanan",
        articles: [
          {
            id: "art-35",
            title:
              "Bagaimana Cara Mengaktifkan Fitur Account Lockout di Workin",
            href: "#",
          },
          {
            id: "art-36",
            title: "Bagaimana Cara Mengatasi OTP yang Tidak Terkirim",
            href: "#",
          },
          {
            id: "art-37",
            title: "Bagaimana Cara Mengaktifkan 2FA pada Workin Account",
            href: "#",
          },
        ],
      },
      {
        id: "sec-marketplace",
        title: "Marketplace",
        articles: [
          {
            id: "art-38",
            title: "Bagaimana Cara Menggunakan Marketplace pada Workin Account",
            href: "#",
          },
        ],
      },
      {
        id: "sec-integrasi",
        title: "Integrasi",
        articles: [
          {
            id: "art-39",
            title: "Bagaimana Cara Melakukan Integrasi SAML dengan Okta",
            href: "#",
          },
          {
            id: "art-40",
            title:
              "Bagaimana Cara Melakukan Integrasi SAML dengan Microsoft Entra (Azure ID)",
            href: "#",
          },
          {
            id: "art-41",
            title: "Bagaimana Cara Melakukan Integrasi SAML dengan Jumpcloud",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "cat-flex-company",
    title: "Workin Flex for Company",
    sections: [
      {
        id: "sec-about-flex",
        title: "Tentang Workin Flex for Company",
        articles: [
          {
            id: "art-42",
            title: "Flex for Company Frequently Asked Questions (FAQ)",
            href: "#",
          },
          { id: "art-43", title: "Apa itu Workin Flex?", href: "#" },
        ],
      },
    ],
  },
  {
    id: "cat-flex-individual",
    title: "Workin Flex for Individual Employee",
    sections: [
      {
        id: "sec-about-flex-individual",
        title: "Tentang Workin Flex for Individual Employee",
        articles: [
          {
            id: "art-44",
            title:
              "Flex for Individual Employee Frequently Asked Questions (FAQ)",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "cat-flex-savings",
    title: "Flex Savings",
    sections: [
      {
        id: "sec-about-flex-savings",
        title: "Tentang Flex Savings",
        articles: [
          {
            id: "art-45",
            title: "Workin Flex Savings Frequently Asked Questions (FAQ)",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "cat-sign",
    title: "Workin Sign",
    sections: [
      {
        id: "sec-mulai-sign",
        title: "Mulai dengan Workin Sign",
        articles: [
          {
            id: "art-46",
            title: "Bagaimana Cara Daftar Akun di Workin Sign",
            href: "#",
          },
          {
            id: "art-47",
            title: "Bagaimana Cara Sign in ke Workin Sign",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "cat-expense",
    title: "Workin Expense",
    sections: [
      {
        id: "sec-home-expense",
        title: "[Web] Home",
        articles: [
          { id: "art-48", title: "Overview Menu Home", href: "#" },
          {
            id: "art-49",
            title:
              "Bagaimana Cara Melakukan Top Up Saldo Workin Expense Balance",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "cat-partners",
    title: "Workin Partners Platform",
    sections: [
      {
        id: "sec-partners",
        title: "Workin Partners Platform",
        articles: [
          { id: "art-50", title: "FAQs Workin Partner Platform", href: "#" },
          {
            id: "art-51",
            title: "Bagaimana Cara Mendaftar Akun di Workin Partner Platform",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "cat-officeless",
    title: "Workin Officeless",
    sections: [
      {
        id: "sec-mulai-officeless",
        title: "Mulai dengan Workin Officeless",
        articles: [
          {
            id: "art-52",
            title: "Mulai Menggunakan Workin Officeless",
            href: "#",
          },
          {
            id: "art-53",
            title: "Bagaimana Cara Sign in ke Workin Officeless",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "cat-pos",
    title: "Workin POS",
    sections: [
      {
        id: "sec-mulai-pos",
        title: "Mulai dengan Workin POS F&B",
        articles: [
          {
            id: "art-54",
            title: "Mulai Menggunakan Workin POS F&B",
            href: "#",
          },
          {
            id: "art-55",
            title: "Bagaimana Cara Mendaftar Akun Workin POS F&B",
            href: "#",
          },
        ],
      },
    ],
  },
];

export const infoCards: InfoCard[] = [
  {
    title: "Pelatihan",
    description:
      "Ingin mempelajari pengoperasian produk-produk Workin? Anda dapat mengikuti sesi pelatihan khusus bersama para trainer berpengalaman.",
    href: "https://community.Workin.com/Workin-training/Workin/",
    image: "🎓",
  },
  {
    title: "Workin University",
    description:
      "Persaingan semakin ketat! Khawatir karier dan bisnis tidak berkembang pesat? Perkaya wawasan dan asah keterampilan Anda melalui kursus bersertifikat dari para ahli.",
    href: "https://univ.Workin.com/",
    image: "🏫",
  },
  {
    title: "Workin Community",
    description:
      "Dapatkan informasi menarik dan terbaru dari berbagai lini bisnis dengan para praktisi dan profesional di grup Komunitas Workin.",
    href: "https://community.Workin.com/",
    image: "👥",
  },
  {
    title: "Workin Customer Care",
    description:
      "Kami peduli dengan keluhan Anda. Segera terhubung dengan tim kami untuk solusi kendala produk, perpanjangan berlangganan, dan lainnya.",
    href: "https://api.whatsapp.com/send/?phone=6285174314286&text&type=phone_number&app_absent=0",
    image: "💬",
  },
  {
    title: "Blog Workin",
    description:
      "Dapatkan informasi terkini seputar teknologi digital, bisnis, dan karier dengan mengunjungi blog Workin, yang menyediakan artikel-artikel informatif dan terkini dalam bidang tersebut.",
    href: "https://Workin.com/blog/",
    image: "📝",
  },
];

export const recentArticles: RelatedArticle[] = [
  {
    title: "Flex for Company Frequently Asked Questions (FAQ)",
    href: "/hc/id/articles/6766675891865",
  },
  {
    title: "Workin Products Release Log",
    href: "/hc/id/articles/18341184943257",
  },
  {
    title: "Apa itu Workin Flex?",
    href: "/hc/id/articles/6753887495193",
  },
];

export const relatedArticles: RelatedArticle[] = [
  {
    title: "Flex for Company Frequently Asked Questions (FAQ)",
    href: "#",
  },
  {
    title: "Workin Sign - Guidebook Release Log",
    href: "#",
  },
  {
    title: "FAQs Workin Appstudio",
    href: "#",
  },
  {
    title:
      "Bagaimana Cara Mengintegrasikan Workin Expense dengan Workin Jurnal",
    href: "#",
  },
  {
    title: "Bagaimana Cara Daftar Akun di Workin Sign",
    href: "#",
  },
];

export const dataHomeTopics: Topics[] = [
  {
    title: "Getting Started",
    href: "/category/",
    icon: <SignatureIcon />,
    desc: "Video pengantar untuk pengguna talenta baru.",
  },
];
