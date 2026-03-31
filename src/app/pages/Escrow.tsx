import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CheckCircle2, Clock, Send, Shield, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    id: 1,
    title: "Pembeli Bayar",
    description: "Pembeli melakukan pembayaran",
    icon: Shield,
  },
  {
    id: 2,
    title: "Dana Ditahan",
    description: "Platform menahan dana secara aman",
    icon: Clock,
  },
  {
    id: 3,
    title: "Penjual Kirim",
    description: "Penjual mengirim detail akun",
    icon: Send,
  },
  {
    id: 4,
    title: "Pembeli Konfirmasi",
    description: "Pembeli cek dan konfirmasi akun",
    icon: CheckCircle2,
  },
  {
    id: 5,
    title: "Dana Cair",
    description: "Dana dikirim ke penjual",
    icon: CheckCircle2,
  },
];

export function Escrow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(`/marketplace/${id}`)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Detail Produk
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Sistem Escrow
            </span>
          </h1>
          <p className="text-gray-400">
            Transaksi aman dengan sistem escrow otomatis. Dana kamu dilindungi!
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-12">
          <div className="relative">
            {/* Progress Bar */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-[#1e1e2e] -z-10" />
            <div
              className="absolute top-8 left-0 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-all duration-500 -z-10"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />

            {/* Steps */}
            <div className="flex justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep >= step.id;
                const isCurrent = currentStep === step.id;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all mb-3 ${
                        isActive
                          ? "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-lg shadow-[#6366f1]/50"
                          : "bg-[#1e1e2e] text-gray-500"
                      } ${isCurrent ? "scale-110 ring-4 ring-[#6366f1]/20" : ""}`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <p
                      className={`text-sm font-semibold text-center max-w-[100px] mb-1 ${
                        isActive ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 text-center max-w-[100px] hidden md:block">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current Step Content */}
        <div className="p-8 rounded-2xl bg-[#12121a] border border-[#6366f1]/20 mb-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Pembayaran</h2>
              <p className="text-gray-400">
                Silakan lakukan pembayaran untuk melanjutkan transaksi. Dana akan ditahan oleh
                platform sampai kamu menerima akun.
              </p>

              <div className="p-6 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Total Pembayaran</span>
                  <span className="text-3xl font-bold text-[#6366f1]">Rp 850.000</span>
                </div>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-semibold transition-all shadow-lg shadow-[#6366f1]/25"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Dana Ditahan Platform</h2>
              <p className="text-gray-400">
                Pembayaran berhasil! Dana kamu sekarang ditahan oleh platform dan akan dikirim ke
                penjual setelah kamu konfirmasi akun sudah diterima.
              </p>

              <div className="p-6 rounded-xl bg-[#14b8a6]/10 border border-[#14b8a6]/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#14b8a6] flex-shrink-0 mt-1" />
                  <div className="text-[#14b8a6]">
                    <p className="font-semibold mb-1">Dana Kamu Aman</p>
                    <p className="text-sm">
                      Kami akan menahan dana sampai penjual mengirim akun dan kamu konfirmasi
                      sudah menerima dengan baik.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep(3)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold"
              >
                Lanjutkan (Simulasi)
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Menunggu Pengiriman</h2>
              <p className="text-gray-400">
                Penjual sedang memproses pengiriman detail akun. Kamu akan mendapat notifikasi
                saat akun sudah dikirim.
              </p>

              <div className="p-6 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#f59e0b]" />
                  <div>
                    <p className="font-semibold">Status: Menunggu Pengiriman</p>
                    <p className="text-sm text-gray-400">Estimasi: 1-24 jam</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep(4)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold"
              >
                Lanjutkan (Simulasi)
              </button>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Konfirmasi Penerimaan</h2>
              <p className="text-gray-400">
                Penjual telah mengirim detail akun. Silakan cek dan pastikan semuanya sesuai
                sebelum konfirmasi.
              </p>

              <div className="p-6 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="font-mono">user@example.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Password:</span>
                  <span className="font-mono">********</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20">
                <p className="text-sm text-[#f59e0b]">
                  ⚠️ Pastikan kamu sudah login dan cek akun sebelum konfirmasi. Setelah konfirmasi,
                  dana akan langsung dikirim ke penjual.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-4 rounded-xl border border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444]/20 transition-all">
                  Laporkan Masalah
                </button>
                <button
                  onClick={() => setCurrentStep(5)}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-white font-semibold"
                >
                  Konfirmasi Terima
                </button>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Transaksi Berhasil!</h2>
              <p className="text-gray-400">
                Dana telah dikirim ke penjual. Terima kasih telah bertransaksi di OkeGas Games!
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold"
                >
                  Lihat Riwayat
                </button>
                <button
                  onClick={() => navigate("/marketplace")}
                  className="px-8 py-4 rounded-xl border border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1]/20 transition-all"
                >
                  Belanja Lagi
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20">
          <h3 className="font-semibold mb-4">Cara Kerja Escrow</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p>
              1. <strong className="text-white">Pembayaran Aman:</strong> Dana ditahan platform,
              bukan langsung ke penjual
            </p>
            <p>
              2. <strong className="text-white">Verifikasi:</strong> Kamu bisa cek akun terlebih
              dahulu
            </p>
            <p>
              3. <strong className="text-white">Konfirmasi:</strong> Dana baru dikirim setelah kamu
              konfirmasi
            </p>
            <p>
              4. <strong className="text-white">Garansi:</strong> Jika ada masalah, dana bisa
              dikembalikan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
