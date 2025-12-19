import "quill/dist/quill.snow.css"; // ✅ penting
import "./globals.css";

export const metadata = {
  title: "Workin by Duluin Documentation",
  description: "Dokumentasi resmi Workin by Duluin",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
