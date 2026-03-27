export interface BundleProduct {
  id: string;
  name: string;
  initial: string;
  price: string | null;
  priceLabel?: string;
}

export interface ProductLink {
  name: string;
  href: string;
  initial: string;
}

export interface ProductTab {
  id: string;
  label: string;
  title: string;
  description: string;
  products: ProductLink[];
}

export interface FeatureCard {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const bundleProducts: BundleProduct[] = [
  { id: "cbundle_1", name: "Workin Talenta", initial: "T", price: null },
  {
    id: "cbundle_2",
    name: "Workin Jurnal",
    initial: "J",
    price: "Rp 399.000",
    priceLabel: "Mulai dari",
  },
  {
    id: "cbundle_3",
    name: "Workin Klikpajak",
    initial: "K",
    price: "Rp 250.000",
    priceLabel: "Mulai dari",
  },
  {
    id: "cbundle_4",
    name: "Workin Qontak",
    initial: "Q",
    price: "Rp 750.000",
    priceLabel: "Mulai dari",
  },
  {
    id: "cbundle_5",
    name: "Workin Sign",
    initial: "S",
    price: "Rp 465.000",
    priceLabel: "Mulai dari",
  },
  { id: "cbundle_6", name: "Workin Flex", initial: "F", price: null },
  { id: "cbundle_7", name: "Workin Capital", initial: "C", price: null },
  { id: "cbundle_8", name: "Workin Pay", initial: "P", price: null },
  { id: "cbundle_9", name: "Workin Expense", initial: "E", price: null },
];

export const productTabs: ProductTab[] = [
  {
    id: "artikel",
    label: "Artikel",
    title: "Semua Topik",
    description:
      "Temukan solusi lebih cepat dengan memilih topik yang paling sesuai dengan pertanyaan atau masalah yang Anda alami di Workin by Duluin",
    products: [
      {
        name: "Quick Overview",
        href: "/categories/1",
        initial: "T",
      },
      {
        name: "Workin Qontak",
        href: "https://qontak.com/harga/",
        initial: "Q",
      },
      {
        name: "Workin Jurnal",
        href: "https://www.jurnal.id/id/harga/",
        initial: "J",
      },
      {
        name: "Workin Klikpajak",
        href: "https://klikpajak.id/harga/",
        initial: "K",
      },
      {
        name: "Workin Flex",
        href: "https://Workin.com/produk/flex/",
        initial: "F",
      },
      {
        name: "Workin Expense",
        href: "https://Workin.com/produk/expense/",
        initial: "E",
      },
      {
        name: "Workin Sign",
        href: "https://Workinsign.com/id/harga/",
        initial: "S",
      },
      {
        name: "Workin Stream",
        href: "https://Workin.com/produk/stream/",
        initial: "St",
      },
      {
        name: "Workin Capital",
        href: "https://Workin.com/produk/capital/",
        initial: "C",
      },
      {
        name: "Workin Pay",
        href: "https://Workin.com/produk/pay/",
        initial: "P",
      },
    ],
  },
  {
    id: "produk2",
    label: "Layanan",
    title: "Layanan komprehensif untuk akselerasi bisnis",
    description:
      "Dengan klik masing-masing pilihan produk, Anda akan diarahkan ke halaman harga terpisah tiap produk.",
    products: [
      {
        name: "Workin University",
        href: "https://univ.Workin.com/",
        initial: "U",
      },
    ],
  },
  {
    id: "produk3",
    label: "Inovasi pendukung",
    title: "Dukungan inovasi untuk produk utama di ekosistem Workin",
    description:
      "Dengan klik masing-masing pilihan produk, Anda akan diarahkan ke halaman harga terpisah tiap produk.",
    products: [
      {
        name: "Workin Flow",
        href: "https://Workin.com/produk/flow/",
        initial: "Fl",
      },
      {
        name: "Workin Access",
        href: "https://Workin.com/produk/access/",
        initial: "A",
      },
      {
        name: "Workin Airene",
        href: "https://Workin.com/produk/airene/",
        initial: "Ai",
      },
      {
        name: "Workin Officeless",
        href: "https://Workin.com/produk/officeless/",
        initial: "O",
      },
    ],
  },
];

export const featureCards: FeatureCard[] = [
  {
    title: "Skalabilitas dan Fleksibilitas",
    description:
      "Produk dan layanan kami di design menyesuaikan kompleksitas kebutuhan bisnis, dengan kustomisasi dan integrasi Open API.",
  },
  {
    title: "Akses dan Keamanan",
    description:
      "Kami memastikan kontrol guna setiap platform kami, dan sistem keamanan tersertifikasi berbasis standar internasional.",
  },
  {
    title: "Data & Kecerdasan Buatan (AI)",
    description:
      "Sentralisasi data dan jaminan pengembangan berkelanjutan dengan sistem pengambilan keputusan yang mudah, cepat, dan akurat.",
  },
  {
    title: "Layanan Pelanggan Multichannel",
    description:
      "Dukungan after-sales service dan training produk terpercaya yang dapat diakses di berbagai channel komunikasi.",
  },
  {
    title: "Program Inspiratif Komunitas",
    description:
      "Berbagai event, networking, dan kolaborasi dengan berbagai praktisi ahli di Workin Community dan Workin Event.",
  },
  {
    title: "Bebas Maintenance & Ramah Aturan",
    description:
      "Platform berbasis cloud tersertifikasi Kominfo yang cepat menyesuaikan regulasi bisnis sesuai peraturan perundangan.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Setelah menggunakan Workin Talenta dan Workin Jurnal, terasa sekali bahwa ROI sistem ini bagus. Saya rasa kita telah menghemat paling tidak 30% dari waktu yang biasa terbuang untuk FAT dan juga talent management.",
    name: "Ellen Pranata",
    title: "CEO, KLAR Smile",
    company: "KLAR",
  },
  {
    quote:
      "Sebagai decision maker berpengaruh sekali untuk saya. Laporan keuangan yang relevan tersedia dari Jurnal, dan review, promosi, bonus, performance tracking berbasis OKR dan KPI sudah ada dari Talenta.",
    name: "Ivan Tambunan",
    title: "CEO, Akseleran",
    company: "Akseleran",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Apa manfaat menggunakan produk Workin?",
    answer:
      "Produk Workin menawarkan sejumlah manfaat, termasuk: Efisiensi dan produktivitas yang meningkat, Pengurangan biaya, Kepatuhan yang ditingkatkan, dan Skalabilitas yang ditingkatkan.",
  },
  {
    question: "Apakah Anda menawarkan uji coba atau demo gratis?",
    answer:
      "Ya, kami menawarkan uji coba dan demo gratis untuk sebagian besar produk kami. Kunjungi situs web dengan klik masing-masing logo di section produk kami untuk mempelajari lebih lanjut dan mendaftar untuk uji coba gratis.",
  },
  {
    question: "Apa model harga Anda?",
    answer:
      "Kami menawarkan berbagai paket harga untuk memenuhi kebutuhan bisnis dari semua industri dan segmen. Harga kami didasarkan pada jumlah pengguna, fitur, dan tingkat dukungan. Anda dapat memilih antara paket bulanan atau tahunan, sesuai dengan kebutuhan bisnis Anda.",
  },
  {
    question:
      "Bisakah saya beralih antara berbagai produk Perangkat Lunak Berbasis Cloud dalam langganan saya?",
    answer:
      "Tentu saja! Anda memiliki fleksibilitas untuk melakukan upgrade, downgrade, atau beralih antara produk-produk Perangkat Lunak Berbasis Cloud kami kapan saja untuk lebih sesuai dengan kebutuhan bisnis Anda.",
  },
  {
    question:
      "Apa yang terjadi jika saya membutuhkan dukungan atau pelatihan tambahan platform Workin?",
    answer:
      "Kami sudah menyiapkan semuanya! Layanan Profesional kami, tersedia untuk memberikan dukungan dan pelatihan yang Anda butuhkan untuk implementasi dan penggunaan yang lancar.",
  },
];
