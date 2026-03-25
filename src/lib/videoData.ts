export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
}

export interface VideoCategory {
  id: string;
  name: string;
  videos: VideoItem[];
}

export const videoCategories: VideoCategory[] = [
  {
    id: "mekari-flex",
    name: "Mekari Flex",
    videos: [
      {
        id: "flex-1",
        title: "Pengenalan dan Cara Menggunakan Mekari Flex",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "flex-2",
        title: "Cara Mengakses Earned Wage Access (EWA) pada Mekari Flex",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "flex-3",
        title: "Cara Memilih dan Menggunakan Benefit pada Mekari Flex",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "flex-4",
        title: "Cara Mengajukan Reimbursement pada Mekari Flex",
        youtubeId: "dQw4w9WgXcQ",
      },
    ],
  },
  {
    id: "mekari-expense",
    name: "Mekari Expense",
    videos: [
      {
        id: "expense-1",
        title: "Melakukan Pengajuan Reimbursement pada Mekari Expense",
        youtubeId: "A1OGc_fmbiw",
      },
      {
        id: "expense-2",
        title: "Melakukan Pengajuan Cash Advance pada Mekari Expense",
        youtubeId: "rTUVvMxkCY8",
      },
      {
        id: "expense-3",
        title: "Membuat Policy dan Workflow untuk Kebijakan Business Trip",
        youtubeId: "Q3I5MdGne5o",
      },
      {
        id: "expense-4",
        title:
          "Membuat Pengajuan dan Laporan pada Reimbursement dan Cash Advance Business Trip",
        youtubeId: "30pirhq5Ap4",
      },
      {
        id: "expense-5",
        title: "Membuat Pengajuan Reimbursement dan Cash Advance versi Website",
        youtubeId: "BfmRQY5Cris",
      },
    ],
  },
  {
    id: "mekari-partner",
    name: "Mekari Partner",
    videos: [
      {
        id: "partner-1",
        title: "Cara Mendaftar dan Menggunakan Mekari Partner Platform",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "partner-2",
        title: "Sekilas Menu Dashboard pada Mekari Partner Platform",
        youtubeId: "dQw4w9WgXcQ",
      },
    ],
  },
  {
    id: "mekari-sign",
    name: "Mekari Sign",
    videos: [
      {
        id: "sign-1",
        title: "Cara Mengunggah dan Mengirimkan Dokumen pada Mekari Sign",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "sign-2",
        title: "Cara Memberikan eSignature melalui Website Mekari Sign",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "sign-3",
        title: "Cara Membuat Template Dokumen pada Mekari Sign",
        youtubeId: "dQw4w9WgXcQ",
      },
    ],
  },
  {
    id: "mekari-stream",
    name: "Mekari Stream",
    videos: [
      {
        id: "stream-1",
        title: "Pengenalan Mekari Stream dan Cara Berlangganan",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "stream-2",
        title: "Cara Menggunakan Fitur Utama Mekari Stream",
        youtubeId: "dQw4w9WgXcQ",
      },
    ],
  },
  {
    id: "mekari-officeless",
    name: "Mekari Officeless",
    videos: [
      {
        id: "officeless-1",
        title: "Mulai Menggunakan Mekari Officeless",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "officeless-2",
        title: "Cara Membuat Aplikasi di Mekari Officeless",
        youtubeId: "dQw4w9WgXcQ",
      },
    ],
  },
];
