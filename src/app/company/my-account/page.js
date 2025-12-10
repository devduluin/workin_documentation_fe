import Sidebar from "../../component/Sidebar";
import MyAccountSidebar from "@/app/component/my-account/page";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Sidebar kiri biasa */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main Content otomatis geser */}
      <main className="judul flex-1 p-6 md:p-10">
        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          HRMS Setting - My Account Page Guidance 
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview59.png"
            alt="Preview Login 59"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicators">
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman HRMS Setting - My Account digunakan untuk memperbarui dan mengelola informasi akun pribadi pengguna di dalam sistem HRMS.Informasi ini digunakan untuk identifikasi ,komunikasi dan keperluan administrasi lainya.</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status1" className="font-semibold">Navigasi Menu</span>
            <div className="ml-6 mt-1 space-y-1">
            <span>Pada panel kiri tersedia beberapa tab menu:</span>
            <p style={{marginLeft: '20px'}}>o My Account (Halaman yang sedang dibuka)</p>
            <p style={{marginLeft: '20px'}}>o Email Settings</p>
            <p style={{marginLeft: '20px'}}>o Security</p>
            <p style={{marginLeft: '20px'}}>o Preferences</p>
            <p style={{marginLeft: '20px'}}>o Account Deactivation</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status2" className="font-semibold">Account Settings Section</span>
            <div className="ml-6 mt-1 space-y-1">
            <span>Full Name (Required)</span>
            <p style={{marginLeft: '20px'}}>o Masukkan nama lengkap sesuai dengan identitas resmi (KTP/SIM/Passport).</p>
            <p style={{marginLeft: '20px'}}>o Nama ini akan ditampilkan di berbagai bagian sistem (profil, laporan, kehadiran, dll).</p>
            <span>Phone Number (Required)</span>
            <p style={{marginLeft: '20px'}}>o Masukkan nomor telepon yang aktif.</p>
            <p style={{marginLeft: '20px'}}>o Digunakan oleh sistem atau admin HR untuk menghubungi Anda jika diperlukan.</p>
            <span>Country (Required)</span>
            <p style={{marginLeft: '20px'}}>o Pilih negara tempat Anda saat ini tinggal</p>
            <p style={{marginLeft: '20px'}}>o Informasi ini dapat digunakan untuk keperluan regionalisasi data, peraturan lokal, atau pengaturan sistem lainnya.</p>
            <span>Address Line (Required)</span>
            <p style={{marginLeft: '20px'}}>o Masukkan alamat lengkap tempat tinggal anda.</p>
            <p style={{marginLeft: '20px'}}>o Masukkan alamat lengkap tempat tinggal anda.Biasanya mencakup nama jalan, nomor rumah, kompleks, kota, kode pos anda.</p>
            <p style={{marginLeft: '20px'}}>o Penting untuk korespondensi resmi.</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status3" className="font-semibold">Tombol Actions</span>
            <div className="ml-6 mt-1 space-y-1">
            <span>• Back</span>
            <p style={{marginLeft: '20px'}}>o Kembali ke halaman pengaturan sebelumnya.</p>
            <span>• Save Changes</span>
            <p style={{marginLeft: '20px'}}>o Simpan semua perubahan yang telah dilakukan di form Account Settings.</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status4" className="font-semibold">Tips penggunaan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>o Pastikan untuk memperbarui informasi akun Anda secara berkala.</p>
            <p>o Perbarui segera jika ada perubahan data pribadi, seperti nomor telepon atau alamat.</p>
            <p>o Data yang akurat akan mempermudah proses komunikasi dan administrasi HR.</p>
            <p>o Jika Anda ragu, silakan hubungi tim HR untuk panduan pengisian yang benar.</p>
            </div>
        </div>

      </main>
      <aside className="h-screen sticky top-0">
        <MyAccountSidebar />
      </aside>
    </div>
  );
}