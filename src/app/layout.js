import "quill/dist/quill.snow.css"; // ✅ penting
import "./globals.css";

export const metadata = {
  title: "Workin by Duluin Documentation",
  description: "Dokumentasi resmi Workin by Duluin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
