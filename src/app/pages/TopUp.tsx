import { useState } from "react";
import { Zap, CreditCard, Wallet, Building2, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { GameCard } from "../components/GameCard";

// MENGGUNAKAN GAMBAR LOKAL dari folder image
const games = [
  { 
    id: 1, 
    name: "Mobile Legends", 
    image: "/image/mobile_legend.jpeg"
  },
  { 
    id: 2, 
    name: "Free Fire", 
    image: "/image/free_fire.png"
  },
  { 
    id: 3, 
    name: "PUBG Mobile", 
    image: "/image/pubg.png"
  },
  { 
    id: 4, 
    name: "Genshin Impact", 
    image: "/image/genshin.png"
  },
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
    if (!gameId || !selectedNominal || !selectedPayment) {
      alert("Mohon lengkapi semua data terlebih dahulu");
      return;
    }
    
    // Simpan data ke localStorage (mock database)
    const orderData = {
      id: Date.now(),
      game: selectedGame.name,
      gameId,
      serverId: serverId || "-",
      nominal: selectedNominalData,
      payment: selectedPaymentData,
      total: totalPrice,
      date: new Date().toISOString(),
      status: "pending"
    };
    
    // Ambil data pesanan lama atau buat array baru
    const existingOrders = localStorage.getItem("orders");
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));
    
    alert(`✅ Checkout berhasil!\n\nDetail Pesanan:\nGame: ${selectedGame.name}\nUser ID: ${gameId}\nTotal: Rp ${totalPrice.toLocaleString("id-ID")}\n\nSimpan kode pembayaran Anda.`);
  };

  const selectedNominalData = nominals.find((n) => n.id === selectedNominal);
  const selectedPaymentData = paymentMethods.find((p) => p.id === selectedPayment);
  const totalPrice = (selectedNominalData?.price || 0) + (selectedPaymentData?.fee || 0);

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        {/* Header dengan efek glassmorphism */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent animate-gradient">
                Top Up Game Instan
              </span>
            </h1>
            <p className="text-gray-400 text-lg">Proses instan, diamond langsung masuk dalam hitungan detik</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Select Game */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#12121a]/80 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm shadow-lg">
                  1
                </span>
                Pilih Game
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {games.map((game, index) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedGame(game)}
                    className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                      selectedGame.id === game.id
                        ? "border-[#6366f1] shadow-lg shadow-[#6366f1]/25"
                        : "border-transparent hover:border-[#6366f1]/50"
                    }`}
                  >
                    <GameCard title={game.name} image={game.image} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Game ID & Server */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#12121a]/80 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm shadow-lg">
                  2
                </span>
                Masukkan Data Akun
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    User ID <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={gameId}
                    onChange={(e) => setGameId(e.target.value)}
                    placeholder="Masukkan User ID"
                    className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-white placeholder:text-gray-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Server ID (Opsional)</label>
                  <input
                    type="text"
                    value={serverId}
                    onChange={(e) => setServerId(e.target.value)}
                    placeholder="Masukkan Server ID"
                    className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-white placeholder:text-gray-500 transition-all"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 flex items-center gap-1">
                <span className="text-[#14b8a6] text-lg">ℹ️</span>
                Pastikan User ID benar untuk menghindari kesalahan pengiriman
              </p>
            </motion.div>

            {/* Select Nominal */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#12121a]/80 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm shadow-lg">
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
                        ? "border-[#6366f1] bg-[#6366f1]/10 shadow-lg shadow-[#6366f1]/25"
                        : "border-[#6366f1]/20 hover:border-[#6366f1]/50"
                    }`}
                  >
                    {nominal.isPromo && (
                      <span className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] text-xs font-semibold shadow-lg animate-pulse">
                        🔥 PROMO
                      </span>
                    )}
                    <div className="text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                        {nominal.amount}
                      </p>
                      {nominal.bonus > 0 && (
                        <p className="text-sm text-[#14b8a6] font-semibold mt-1">
                          +{nominal.bonus} Bonus
                        </p>
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
            </motion.div>

            {/* Payment Method */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#12121a]/80 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm shadow-lg">
                  4
                </span>
                Pilih Metode Pembayaran
              </h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={method.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedPayment === method.id
                          ? "border-[#6366f1] bg-[#6366f1]/10"
                          : "border-[#6366f1]/20 hover:border-[#6366f1]/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-md">
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
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-[#6366f1]/20 shadow-xl"
              >
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <span>🛒</span>
                  Ringkasan Pesanan
                </h3>

                <div className="space-y-3 py-4 border-t border-b border-[#6366f1]/20">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Game</span>
                    <span className="font-semibold text-[#6366f1]">{selectedGame.name}</span>
                  </div>
                  {gameId && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">User ID</span>
                      <span className="font-mono text-sm bg-[#1e1e2e] px-2 py-1 rounded">
                        {gameId}
                      </span>
                    </div>
                  )}
                  {selectedNominalData && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Diamond</span>
                        <span className="font-semibold">
                          {selectedNominalData.amount}
                          {selectedNominalData.bonus > 0 && (
                            <span className="text-[#14b8a6] ml-1">
                              +{selectedNominalData.bonus}
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Harga</span>
                        <span>
                          Rp {selectedNominalData.price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </>
                  )}
                  {selectedPaymentData && selectedPaymentData.fee > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Biaya Admin</span>
                      <span>
                        Rp {selectedPaymentData.fee.toLocaleString("id-ID")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center py-4">
                  <span className="text-lg font-semibold">Total Pembayaran</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={!gameId || !selectedNominal || !selectedPayment}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#6366f1]/25 hover:shadow-[#8b5cf6]/50 flex items-center justify-center gap-2 group"
                >
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Bayar Sekarang
                </button>

                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#14b8a6]/10 to-[#0d9488]/10 border border-[#14b8a6]/20">
                  <p className="text-sm text-center text-[#14b8a6] font-medium">
                    ⚡ Estimasi Proses: <strong>Instan (±10 detik)</strong>
                  </p>
                  <p className="text-xs text-center text-gray-500 mt-2">
                    ✓ Transaksi aman & terenkripsi
                  </p>
                  <p className="text-xs text-center text-gray-500">
                    ✓ Garansi 100% uang kembali
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Tambahkan CSS untuk animasi gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
}