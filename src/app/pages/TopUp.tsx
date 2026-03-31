import { useState } from "react";
import { Zap, CreditCard, Wallet, Building2, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { GameCard } from "../components/GameCard";

const games = [
  { id: 1, name: "Mobile Legends", image: "https://images.unsplash.com/photo-1761395013890-49090392ff0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWdlbmRzJTIwZ2FtZXxlbnwxfHx8fDE3NzQ4NjA4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 2, name: "Free Fire", image: "https://images.unsplash.com/photo-1675310854573-c5c8e4089426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwZmlyZSUyMGdhbWluZ3xlbnwxfHx8fDE3NzQ5NjQ1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 3, name: "PUBG Mobile", image: "https://images.unsplash.com/photo-1564049489314-60d154ff107d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJnJTIwbW9iaWxlJTIwZ2FtZXBsYXl8ZW58MXx8fHwxNzc0OTY0NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 4, name: "Genshin Impact", image: "https://images.unsplash.com/photo-1769709992557-45387590ae7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5zaGluJTIwaW1wYWN0JTIwZ2FtZXxlbnwxfHx8fDE3NzQ5Mzk1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080" },
];

const nominals = [
  { id: 1, amount: 86, bonus: 0, price: 20000, isPromo: false },
  { id: 2, amount: 172, bonus: 0, price: 40000, isPromo: false },
  { id: 3, amount: 257, bonus: 3, price: 60000, isPromo: true },
  { id: 4, amount: 344, bonus: 6, price: 80000, isPromo: false },
  { id: 5, amount: 429, bonus: 10, price: 100000, isPromo: true },
  { id: 6, amount: 706, bonus: 20, price: 165000, isPromo: false },
];

const paymentMethods = [
  { id: 1, name: "GoPay", icon: Wallet, fee: 0 },
  { id: 2, name: "OVO", icon: Wallet, fee: 0 },
  { id: 3, name: "DANA", icon: Wallet, fee: 0 },
  { id: 4, name: "Bank Transfer", icon: Building2, fee: 0 },
  { id: 5, name: "Credit Card", icon: CreditCard, fee: 2500 },
];

export function TopUp() {
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [gameId, setGameId] = useState("");
  const [serverId, setServerId] = useState("");
  const [selectedNominal, setSelectedNominal] = useState<number | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);

  const handleCheckout = () => {
    if (!gameId || !serverId || !selectedNominal || !selectedPayment) {
      alert("Mohon lengkapi semua data terlebih dahulu");
      return;
    }
    alert("Checkout berhasil! Redirect ke halaman pembayaran...");
  };

  const selectedNominalData = nominals.find((n) => n.id === selectedNominal);
  const selectedPaymentData = paymentMethods.find((p) => p.id === selectedPayment);
  const totalPrice = (selectedNominalData?.price || 0) + (selectedPaymentData?.fee || 0);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Top Up Game Instan
            </span>
          </h1>
          <p className="text-gray-400">Proses instan, diamond langsung masuk dalam hitungan detik</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Select Game */}
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm">
                  1
                </span>
                Pilih Game
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {games.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => setSelectedGame(game)}
                    className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                      selectedGame.id === game.id
                        ? "border-[#6366f1] shadow-lg shadow-[#6366f1]/25"
                        : "border-transparent hover:border-[#6366f1]/50"
                    }`}
                  >
                    <GameCard title={game.name} image={game.image} />
                  </div>
                ))}
              </div>
            </div>

            {/* Game ID & Server */}
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm">
                  2
                </span>
                Masukkan Data Akun
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">User ID</label>
                  <input
                    type="text"
                    value={gameId}
                    onChange={(e) => setGameId(e.target.value)}
                    placeholder="Masukkan User ID"
                    className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] outline-none text-white placeholder:text-gray-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Server ID (Opsional)</label>
                  <input
                    type="text"
                    value={serverId}
                    onChange={(e) => setServerId(e.target.value)}
                    placeholder="Masukkan Server ID"
                    className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] outline-none text-white placeholder:text-gray-500 transition-all"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Pastikan User ID dan Server ID benar untuk menghindari kesalahan pengiriman
              </p>
            </div>

            {/* Select Nominal */}
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm">
                  3
                </span>
                Pilih Nominal Diamond
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {nominals.map((nominal) => (
                  <motion.div
                    key={nominal.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedNominal(nominal.id)}
                    className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedNominal === nominal.id
                        ? "border-[#6366f1] bg-[#6366f1]/10"
                        : "border-[#6366f1]/20 hover:border-[#6366f1]/50"
                    }`}
                  >
                    {nominal.isPromo && (
                      <span className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] text-xs font-semibold">
                        PROMO
                      </span>
                    )}
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#6366f1]">{nominal.amount}</p>
                      {nominal.bonus > 0 && (
                        <p className="text-sm text-[#14b8a6]">+{nominal.bonus} Bonus</p>
                      )}
                      <p className="text-sm text-gray-400 mt-2">
                        Rp {nominal.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                    {selectedNominal === nominal.id && (
                      <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-[#14b8a6]" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm">
                  4
                </span>
                Pilih Metode Pembayaran
              </h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedPayment === method.id
                          ? "border-[#6366f1] bg-[#6366f1]/10"
                          : "border-[#6366f1]/20 hover:border-[#6366f1]/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold">{method.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {method.fee > 0 && (
                          <span className="text-sm text-gray-400">
                            +Rp {method.fee.toLocaleString("id-ID")}
                          </span>
                        )}
                        {selectedPayment === method.id && (
                          <CheckCircle2 className="w-5 h-5 text-[#14b8a6]" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20 space-y-4">
                <h3 className="text-xl font-semibold">Ringkasan Pesanan</h3>

                <div className="space-y-3 py-4 border-y border-[#6366f1]/20">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Game</span>
                    <span className="font-semibold">{selectedGame.name}</span>
                  </div>
                  {selectedNominalData && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Diamond</span>
                        <span className="font-semibold">
                          {selectedNominalData.amount}
                          {selectedNominalData.bonus > 0 && ` +${selectedNominalData.bonus}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Harga</span>
                        <span className="font-semibold">
                          Rp {selectedNominalData.price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </>
                  )}
                  {selectedPaymentData && selectedPaymentData.fee > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Biaya Admin</span>
                      <span className="font-semibold">
                        Rp {selectedPaymentData.fee.toLocaleString("id-ID")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center py-4">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold text-[#6366f1]">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={!gameId || !selectedNominal || !selectedPayment}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#6366f1]/25 hover:shadow-[#8b5cf6]/50 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Bayar Sekarang
                </button>

                <div className="p-4 rounded-xl bg-[#14b8a6]/10 border border-[#14b8a6]/20">
                  <p className="text-sm text-center text-[#14b8a6]">
                    ⚡ Estimasi Proses: <strong>Instan (±10 detik)</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
