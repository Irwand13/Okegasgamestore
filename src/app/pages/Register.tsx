import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { Mail, Lock, User, UserPlus, Eye, EyeOff } from 'lucide-react';

export function Register() {
  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !username) {
      setError('Email, password, dan username harus diisi');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok');
      return;
    }

    if (password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    const result = await register(email, password, username, fullName);
    if (result.success) {
      navigate('/login');
    } else {
      setError(result.error || 'Registrasi gagal');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1a1a2e]">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366f1] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#a855f7] rounded-full blur-[120px] opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-[#6366f1]/20 p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Daftar Akun Baru
            </h1>
            <p className="text-gray-400 mt-2">Mulai top up game favoritmu</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Username *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username_kamu"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Nama Lengkap</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Budi Santoso"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Konfirmasi Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-white"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-xl p-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
            >
              <UserPlus className="w-5 h-5 group-hover:scale-110 transition" />
              {loading ? 'Memproses...' : 'Daftar'}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Sudah punya akun?{' '}
            <Link to="/login" className="text-[#6366f1] hover:text-[#8b5cf6] transition">
              Login Sekarang
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}