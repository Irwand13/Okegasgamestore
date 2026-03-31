import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    alert(isLogin ? "Login berhasil!" : "Registrasi berhasil!");
    navigate("/dashboard");
  };

  const handleGoogleLogin = () => {
    alert("Login dengan Google (Mock)");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-3xl blur-2xl opacity-20" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729501309405-5710375095cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMHB1cnBsZXxlbnwxfHx8fDE3NzQ5NjQ1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gaming Setup"
                className="relative rounded-3xl object-cover w-full h-[600px]"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-2xl bg-[#12121a] border border-[#6366f1]/20"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                    {isLogin ? "Selamat Datang!" : "Daftar Akun"}
                  </span>
                </h1>
                <p className="text-gray-400">
                  {isLogin
                    ? "Login untuk melanjutkan transaksi"
                    : "Buat akun untuk mulai bertransaksi"}
                </p>
              </div>

              {/* Google Login */}
              <button
                onClick={handleGoogleLogin}
                className="w-full py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all mb-6 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Lanjutkan dengan Google
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#6366f1]/20" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#12121a] text-gray-400">Atau</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@email.com"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] outline-none text-white placeholder:text-gray-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan password"
                      required
                      className="w-full pl-12 pr-12 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] outline-none text-white placeholder:text-gray-500 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-[#6366f1] bg-[#1e1e2e] text-[#6366f1] focus:ring-[#6366f1] focus:ring-offset-0"
                      />
                      Ingat saya
                    </label>
                    <a href="#" className="text-[#6366f1] hover:text-[#8b5cf6] transition-colors">
                      Lupa password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-semibold transition-all shadow-lg shadow-[#6366f1]/25 hover:shadow-[#8b5cf6]/50"
                >
                  {isLogin ? "Login" : "Daftar"}
                </button>
              </form>

              {/* Toggle */}
              <div className="mt-6 text-center text-sm">
                <span className="text-gray-400">
                  {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}
                </span>{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#6366f1] hover:text-[#8b5cf6] font-semibold transition-colors"
                >
                  {isLogin ? "Daftar sekarang" : "Login di sini"}
                </button>
              </div>

              {/* Note */}
              <div className="mt-6 p-4 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20">
                <p className="text-xs text-center text-gray-400">
                  Dengan melanjutkan, kamu menyetujui{" "}
                  <a href="#" className="text-[#6366f1] hover:underline">
                    Syarat & Ketentuan
                  </a>{" "}
                  serta{" "}
                  <a href="#" className="text-[#6366f1] hover:underline">
                    Kebijakan Privasi
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
