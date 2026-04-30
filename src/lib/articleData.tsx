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
        name: "Getting Started",
        href: "/articles/5b96aff9-5d8a-4f45-9883-3471940942b6",
        icon: "G",
      },
      {
        name: "Employe Management",
        href: "/articles/35157d96-8e47-4397-bf7b-5727f71df235",
        icon: "E",
      },
      {
        name: "Document Management",
        href: "/articles/ce665933-97fa-41f6-a699-c377a3a45867",
        icon: "D",
      },
      {
        name: "Publisher",
        href: "/articles/9f7298a0-3203-4e80-bc8e-2792cd4d7ff4",
        icon: "P",
      },
      {
        name: "Companies",
        href: "/articles/a99bb529-ad27-47ca-81ad-51a9da849f43",
        icon: "C",
      },
      {
        name: "Checklist",
        href: "/articles/17166742-9e57-43fa-a2a4-94a14795ad1c",
        icon: "C",
      },
      {
        name: "Reimbursement & Travel",
        href: "/articles/e4b4a00a-8db4-4964-97ea-add36cf6f05d",
        icon: "R",
      },
      {
        name: "Shift Attendece",
        href: "/articles/3e7179d7-4a73-4c25-8535-0c1c452b7454",
        icon: "S",
      },
      {
        name: "Leave & Holiday",
        href: "/articles/7a7aeee8-5893-42e5-bf88-f0aa29a7153d",
        icon: "L",
      },
      {
        name: "My Account",
        href: "/articles/f30277d1-52fb-4125-9b6a-9c02355be4b3",
        icon: "M",
      },
      {
        name: "Billings",
        href: "/articles/170e6833-a359-4ec1-b284-766cbc7f1703",
        icon: "B",
      },
      {
        name:"Settings",
        href:"/articles/e8c2de64-e165-48e9-98ec-e066f670270a",
        icon:"S"
      },
      {
        name:"User Management",
        href:"/articles/e8c2de64-e165-48e9-98ec-e066f670270a",
        icon:"U"
      },
      {
        name:"Assets & Resources",
        href:"/articles/07d4a79e-8f91-44b8-a67c-9571dffffd34",
        icon:"A"
      }
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
        href: "/articles/5b96aff9-5d8a-4f45-9883-3471940942b6",
        icon: "NA",
      },
      {
        name: "What's New (Video)",
        href: "/video",
        icon: "NV",
      },
    ],
  },
];