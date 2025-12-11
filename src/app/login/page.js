"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import "../globals.css";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost.guide_be:5503/api/auth/login",
        { username, password },
        { withCredentials: true }
      );

      console.log("✅ Login response:", response.data);

      if (response.data.success) {
        console.log("✅ Redirecting to /dashboard...");
        router.push("/dashboard2");
      } else {
        console.log("❌ Login gagal:", response.data.message);
        setError(response.data.message || "Login gagal");
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      setError("Login gagal, periksa username/password atau koneksi server!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Banner */}
      <div className="bg-[#052766] text-white py-8 text-center">
        <div className="flex flex-col items-center">
          <img src="/logo-duluin.png" alt="Duluin HRMS" className="h-12 mb-2" />
          <h1 className="text-3xl font-bold">Portal Dokumentasi Teknis</h1>
        </div>
      </div>

      {/* Form di tengah */}
      <div className="flex flex-1 items-center justify-center">
        <form onSubmit={handleLogin} className="login-form flex flex-col">
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
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="btn-login flex items-center justify-center mb-6"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Loading...
              </div>
            ) : (
              "Login"
            )}
          </button>

          {/* Text Register */}
          {/*<div className="mt-auto text-center text-sm">
            Belum punya akun?{" "}
            <a href="/register" className="text-blue-600 hover:underline font-medium">
              Register di sini
            </a>
          </div>*/}
        </form>
      </div>
    </div>
  );
}
