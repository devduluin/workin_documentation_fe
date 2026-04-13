export interface ArticleLink {
  name: string;
  href: string;
  icon: string;
}

export interface Article {
  id: string;
  label: string;
  title: string;
  description: string;
  products: ArticleLink[];
}

export const ArticleData: Article[] = [
  {
    id: "artikel",
    label: "Artikel",
    title: "Semua Topik",
    description:
      "Temukan solusi lebih cepat dengan memilih topik yang paling sesuai dengan pertanyaan atau masalah yang Anda alami di Workin by Duluin",
    products: [
      {
        name: "Quick Overview",
        href: "/articles/1",
        icon: "T",
      },
      {
        name: "Getting Started",
        href: "/articles/2",
        icon: "Q",
      },
      {
        name: "Employe Management",
        href: "/articles/3",
        icon: "J",
      },
      {
        name: "Claim & Travel",
        href: "/articles/12",
        icon: "K",
      },
      {
        name: "Shift Attendence",
        href: "/articles/4",
        icon: "F",
      },
      {
        name: "Leaves",
        href: "/articles/5",
        icon: "E",
      },
      {
        name: "Company",
        href: "/articles/6",
        icon: "S",
      },
      {
        name: "Payroll",
        href: "/articles/7",
        icon: "St",
      },
      {
        name: "Publisher",
        href: "/articles/8",
        icon: "C",
      },
      {
        name: "Settings",
        href: "/articles/9",
        icon: "P",
      },
    ],
  },
  {
    id: "video",
    label: "Video Tutorial",
    title: "Semua Video Tutorial",
    description:
      "Cari dan temukan video tutorial yang sesuai dengan kebutuhan Anda.",
    products: [
      {
        name: "Video Started",
        href: "/video",
        icon: "U",
      },
    ],
  },
  {
    id: "terbaru",
    label: "Terbaru",
    title: "Semua Terbaru",
    description:
      "Temukan solusi lebih cepat dengan memilih topik yang paling sesuai dengan pertanyaan atau masalah yang Anda alami di Workin by Duluin.",
    products: [
      {
        name: "What's New (Article)",
        href: "/categories/10",
        icon: "Fl",
      },
      {
        name: "What's New (Video)",
        href: "/video",
        icon: "A",
      },
    ],
  },
];
