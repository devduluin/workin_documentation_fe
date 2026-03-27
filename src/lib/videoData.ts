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
    id: "workin-flex",
    name: "Workin Flex",
    videos: [
      {
        id: "flex-1",
        title: "Pengenalan dan Cara Menggunakan Workin Flex",
        youtubeId: "Kp4PvmHAG64?si=ZJgLHjIP7NLFZdyS",
      },
      {
        id: "flex-2",
        title: "Cara Mengakses Earned Wage Access (EWA) pada Workin Flex",
        youtubeId: "Kp4PvmHAG64?si=ZJgLHjIP7NLFZdyS",
      },
      {
        id: "flex-3",
        title: "Cara Memilih dan Menggunakan Benefit pada Workin Flex",
        youtubeId: "Kp4PvmHAG64?si=ZJgLHjIP7NLFZdyS",
      },
      {
        id: "flex-4",
        title: "Cara Mengajukan Reimbursement pada Workin Flex",
        youtubeId: "Kp4PvmHAG64?si=ZJgLHjIP7NLFZdyS",
      },
    ],
  },
  {
    id: "workin-expense",
    name: "Workin Expense",
    videos: [
      {
        id: "expense-1",
        title: "Fitur KPI and tools Workin by Duluin",
        youtubeId: "Kp4PvmHAG64?si=ZJgLHjIP7NLFZdyS",
      },
      {
        id: "expense-2",
        title: "Fitur employe onboarding Workin by Duluin",
        youtubeId: "H2RjPMPhE0k?si=HO0eb-VD_gqe7HHC",
      },
      {
        id: "expense-3",
        title: "Fitur Employe Dashboard Workin by Duluin",
        youtubeId: "QX_ak-PJsYo?si=tQm4nMHwWXg_a0TP",
      },
      {
        id: "expense-4",
        title: "Fitur Attendence Mobile Workin by Duluin",
        youtubeId: "iTZqRsU4ges?si=AFuAwihs9TvUPV6m",
      },
      {
        id: "expense-5",
        title: "Fitur Presensi Mobile Workin by Duluin",
        youtubeId: "hXjagyrFiBk?si=Kd1BBKlNglOhi-CY",
      },
    ],
  },
  {
    id: "workin-partner",
    name: "Workin Partner",
    videos: [
      {
        id: "partner-1",
        title: "Cara Mendaftar dan Menggunakan Workin Partner Platform",
        youtubeId: "H2RjPMPhE0k?si=HO0eb-VD_gqe7HHC",
      },
      {
        id: "partner-2",
        title: "Sekilas Menu Dashboard pada Workin Partner Platform",
        youtubeId: "H2RjPMPhE0k?si=HO0eb-VD_gqe7HHC",
      },
    ],
  },
  {
    id: "workin-sign",
    name: "workin Sign",
    videos: [
      {
        id: "sign-1",
        title: "Cara Mengunggah dan Mengirimkan Dokumen pada workin Sign",
        youtubeId: "QX_ak-PJsYo?si=tQm4nMHwWXg_a0TP",
      },
      {
        id: "sign-2",
        title: "Cara Memberikan eSignature melalui Website workin Sign",
        youtubeId: "QX_ak-PJsYo?si=tQm4nMHwWXg_a0TP",
      },
      {
        id: "sign-3",
        title: "Cara Membuat Template Dokumen pada workin Sign",
        youtubeId: "QX_ak-PJsYo?si=tQm4nMHwWXg_a0TP",
      },
    ],
  },
  {
    id: "workin-stream",
    name: "workin Stream",
    videos: [
      {
        id: "stream-1",
        title: "Pengenalan workin Stream dan Cara Berlangganan",
        youtubeId: "iTZqRsU4ges?si=AFuAwihs9TvUPV6m",
      },
      {
        id: "stream-2",
        title: "Cara Menggunakan Fitur Utama workin Stream",
        youtubeId: "iTZqRsU4ges?si=AFuAwihs9TvUPV6m",
      },
    ],
  },
  {
    id: "workin-officeless",
    name: "workin Officeless",
    videos: [
      {
        id: "officeless-1",
        title: "Mulai Menggunakan workin Officeless",
        youtubeId: "hXjagyrFiBk?si=Kd1BBKlNglOhi-CY",
      },
      {
        id: "officeless-2",
        title: "Cara Membuat Aplikasi di workin Officeless",
        youtubeId: "hXjagyrFiBk?si=Kd1BBKlNglOhi-CY",
      },
    ],
  },
];
