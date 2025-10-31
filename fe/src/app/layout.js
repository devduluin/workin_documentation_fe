import "quill/dist/quill.snow.css"; // ✅ penting
import "./globals.css";

export const metadata = {
  title: "Duluin HRMS Docs",
  description: "Dokumentasi resmi HRMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
