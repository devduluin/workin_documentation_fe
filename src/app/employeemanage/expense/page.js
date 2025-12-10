import Sidebar from "../../component/Sidebar";

export default function EmployeeManagement() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar kiri biasa */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main Content otomatis geser */}
      <main className="flex-1 p-10 text-left">
        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Attendance
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="preview4.png"
            alt="Preview dashboard 4"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span className="font-semibold">Dashboard Ringkasan:</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>Statistik: grafik kehadiran bulanan.</p>
              <p>Lembur: total jam lembur karyawan.</p>
              <p>Jam Kerja: total jam kerja rata-rata.</p>
              <p>Total Kehadiran: jumlah hadir, izin, cuti, sakit.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold">Menu Utama:</span>
            <div className="ml-6 mt-1">
              <p>Overtime Request → pengajuan lembur.</p>
              <p>Daily Attendance → daftar absensi harian.</p>
              <p>Shift Management → pengaturan shift kerja.</p>
              <p>Attendance Report → laporan absensi (per karyawan/periode).</p>
            </div>
          </div>
        </div>

        {/* Fitur Utama */}
        <div className="mt-8">
          <span className="font-semibold">Fitur Utama:</span>
          <div className="ml-6 mt-1">
            <p>Filter Data → berdasarkan tanggal, divisi, karyawan.</p>
            <p>Pencarian Cepat → temukan data absensi spesifik.</p>
            <p>Tambah Manual → input absensi secara manual (jika ada kendala sistem).</p>
            <p>Import/Export → unggah absensi dari mesin fingerprint / export ke Excel/PDF.</p>
          </div>
        </div>
      </main>
    </div>
  );
}