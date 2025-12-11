{/*"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import "../globals.css";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
  e.preventDefault();
  setError("");

  if (password !== confirmPassword) {
    setError("Password dan konfirmasi tidak sama.");
    return;
  }

  setLoading(true);

  try {
    const response = await axios.post(
      "http://localhost.guide_be:5503/api/auth/register",
      { username, email, password },
      { withCredentials: true }
    );

    if (response.data.success) {
      // langsung redirect ke dashboard tanpa alert login
      router.push("/dashboard2");
    } else {
      setError(response.data.message || "Registrasi gagal.");
    }
  } catch (error) {
    console.error("Register error:", error);

    if (error.response?.data?.message) {
      setError(error.response.data.message);
    } else {
      setError("Gagal mendaftar. Periksa kembali data kamu.");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-[#052766] text-white py-8 text-center">
        <div className="flex flex-col items-center">
          <img src="/logo-duluin.png" alt="Duluin HRMS" className="h-12 mb-2" />
          <h1 className="text-3xl font-bold">Registrasi Akun</h1>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <form onSubmit={handleRegister} className="login-form">
          {error && <p className="error-message">{error}</p>}

          <label className="block mb-2 font-semibold">Username</label>
          <input
            type="text"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            required
          />

          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />

          <label className="block mb-2 font-semibold">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
              tabIndex={-1}
              aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <label className="block mb-2 font-semibold">Konfirmasi Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ulangi password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
              tabIndex={-1}
              aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? "Mendaftar..." : "Daftar"}
          </button>

          <div className="mt-4 text-sm text-center">
            Sudah punya akun?{" "}
            <a href="/login" className="text-blue-600 hover:underline font-medium">
              Login di sini
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}*/}
