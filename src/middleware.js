import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "mrblue_*");

export async function middleware(req) {
  const url = req.nextUrl;
  const { pathname } = url;
  const token = req.cookies.get("token")?.value;

  // 🔹 Abaikan file statis & API internal
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // 🔹 Halaman login
  if (pathname === "/login") {
    if (!token) return NextResponse.next(); // belum login → lanjut
    try {
      const { payload } = await jwtVerify(token, SECRET);
      if (payload.role === "admin") {
        console.log("✅ Sudah login admin → redirect ke dashboard2");
        return NextResponse.redirect(new URL("/dashboard2", req.url));
      }
      // role lain (user biasa) → ke dashboard publik
      return NextResponse.redirect(new URL("/dashboard-publik", req.url));
    } catch {
      return NextResponse.next();
    }
  }

  // 🔹 Proteksi dashboard admin
  if (pathname.startsWith("/dashboard2")) {
    if (!token) {
      console.log("❌ Tidak ada token → redirect ke login");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      const { payload } = await jwtVerify(token, SECRET);
      if (payload.role !== "admin") {
        console.log("🚫 Bukan admin → arahkan ke dashboard publik");
        return NextResponse.redirect(new URL("/dashboard-publik", req.url));
      }
      console.log("✅ Token valid & admin → lanjut");
      return NextResponse.next();
    } catch (err) {
      console.log("❌ Token rusak/expired → login lagi");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // 🔹 Halaman lain bebas diakses
  return NextResponse.next();
}

// 🔹 Cakupan middleware (hanya dashboard2 & login)
export const config = {
  matcher: ["/dashboard2/:path*", "/login"],
};
