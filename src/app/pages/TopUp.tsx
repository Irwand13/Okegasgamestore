import { useState } from "react";
import { Zap, CreditCard, Wallet, Building2, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

// IMPORT GAMBAR LOKAL - PATH SESUAI STRUKTUR
import mobileLegendImg from "../../../image/mobile_legend.jpeg";
import freeFireImg from "../../../image/free_fire.png";
import pubgImg from "../../../image/pubg.png";
import genshinImg from "../../../image/genshin.png";

const games = [
  { 
    id: 1, 
    name: "Mobile Legends", 
    image: mobileLegendImg,
    fallbackImage: "https://placehold.co/600x400/6366f1/ffffff?text=Mobile+Legends"
  },
  { 
    id: 2, 
    name: "Free Fire", 
    image: freeFireImg,
    fallbackImage: "https://placehold.co/600x400/ff4757/ffffff?text=Free+Fire"
  },
  { 
    id: 3, 
    name: "PUBG Mobile", 
    image: pubgImg,
    fallbackImage: "https://placehold.co/600x400/2ed573/ffffff?text=PUBG"
  },
  { 
    id: 4, 
    name: "Genshin Impact", 
    image: genshinImg,
    fallbackImage: "https://placehold.co/600x400/a55ff7/ffffff?text=Genshin"
  },
];

// DATA NOMINAL PER GAME (dengan diskon 5%)
const nominalByGame: Record<string, Array<{ id: number; amount: number; bonus: number; price: number; isPromo: boolean }>> = {
  "Mobile Legends": [
    { id: 1, amount: 39, bonus: 0, price: 11875, isPromo: false },
    { id: 2, amount: 56, bonus: 0, price: 16150, isPromo: false },
    { id: 3, amount: 86, bonus: 0, price: 23750, isPromo: false },
    { id: 4, amount: 112, bonus: 0, price: 30685, isPromo: false },
    { id: 5, amount: 140, bonus: 0, price: 39045, isPromo: false },
    { id: 6, amount: 172, bonus: 0, price: 47500, isPromo: false },
    { id: 7, amount: 257, bonus: 0, price: 69730, isPromo: true },
    { id: 8, amount: 284, bonus: 0, price: 75430, isPromo: false },
    { id: 9, amount: 344, bonus: 0, price: 95000, isPromo: false },
    { id: 10, amount: 625, bonus: 0, price: 172900, isPromo: false },
  ],
  "Free Fire": [
    { id: 1, amount: 100, bonus: 25, price: 19950, isPromo: false },
    { id: 2, amount: 210, bonus: 53, price: 40850, isPromo: false },
    { id: 3, amount: 520, bonus: 0, price: 101650, isPromo: false },
    { id: 4, amount: 1060, bonus: 0, price: 204250, isPromo: true },
    { id: 5, amount: 2180, bonus: 0, price: 413250, isPromo: false },
  ],
  "PUBG Mobile": [
    { id: 1, amount: 60, bonus: 0, price: 15200, isPromo: false },
    { id: 2, amount: 350, bonus: 25, price: 78850, isPromo: false },
    { id: 3, amount: 720, bonus: 60, price: 157700, isPromo: false },
    { id: 4, amount: 2100, bonus: 300, price: 395200, isPromo: true },
    { id: 5, amount: 3300, bonus: 300, price: 791350, isPromo: false },
    { id: 6, amount: 8100, bonus: 2100, price: 1582700, isPromo: false },
  ],
  "Genshin Impact": [
    { id: 1, amount: 60, bonus: 0, price: 15200, isPromo: false },
    { id: 2, amount: 300, bonus: 0, price: 78850, isPromo: false },
    { id: 3, amount: 980, bonus: 0, price: 237500, isPromo: false },
    { id: 4, amount: 1980, bonus: 0, price: 475000, isPromo: false },
    { id: 5, amount: 3280, bonus: 0, price: 791350, isPromo: true },
    { id: 6, amount: 6480, bonus: 0, price: 1582700, isPromo: false },
  ],
};

const paymentMethods = [
  { id: 1, name: "GoPay", icon: Wallet, fee: 0 },
  { id: 2, name: "OVO", icon: Wallet, fee: 0 },
  { id: 3, name: "DANA", icon: Wallet, fee: 0 },
  { id: 4, name: "Bank Transfer", icon: Building2, fee: 0 },
  { id: 5, name: "Credit Card", icon: CreditCard, fee: 2500 },
];

// Komponen GameCard sederhana
const GameCard = ({ title, image }: { title: string; image: string }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="relative">
      <img 
        src={imgError ? `https://placehold.co/600x400/6366f1/ffffff?text=${title}` : image} 
        alt={title}
        className="w-full h-32 object-cover"
        onError={() => setImgError(true)}
      />
      <div className="p-3 bg-[#12121a]">
        <p className="text-sm font-semibold text-center">{title}</p>
      </div>
    </div>
  );
};

export function TopUp() {
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [gameId, setGameId] = useState("");
  const [serverId, setServerId] = useState("");
  const [selectedNominal, setSelectedNominal] = useState<number | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);

  // Ambil nominal berdasarkan game yang dipilih
  const currentNominals = nominalByGame[selectedGame.name] || nominalByGame["Mobile Legends"];
  
  const handleGameChange = (game: typeof games[0]) => {
    setSelectedGame(game);
    setSelectedNominal(null); // Reset nominal saat ganti game
  };

  const handleCheckout = () => {
    if (!gameId || !selectedNominal || !selectedPayment) {
      alert("Mohon lengkapi semua data terlebih dahulu");
      return;
    }
    
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
    
    const existingOrders = localStorage.getItem("orders");
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));
    
    alert(`✅ Checkout berhasil!\n\nDetail Pesanan:\nGame: ${selectedGame.name}\nUser ID: ${gameId}\nTotal: Rp ${totalPrice.toLocaleString("id-ID")}`);
  };

  const selectedNominalData = currentNominals.find((n) => n.id === selectedNominal);
  const selectedPaymentData = paymentMethods.find((p) => p.id === selectedPayment);
  const totalPrice = (selectedNominalData?.price || 0) + (selectedPaymentData?.fee || 0);

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
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
              className="p-6 rounded-2xl bg-[#12121a]/80 backdrop-blur-sm border border-[#6366f1]/20"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm">
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
                    onClick={() => handleGameChange(game)}
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
              className="p-6 rounded-2xl bg-[#12121a]/80 backdrop-blur-sm border border-[#6366f1]/20"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Server ID (Opsional)</label>
                  <input
                    type="text"
                    value={serverId}
                    onChange={(e) => setServerId(e.target.value)}
                    placeholder="Masukkan Server ID"
                    className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-white"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                ℹ️ Pastikan User ID benar untuk menghindari kesalahan pengiriman
              </p>
            </motion.div>

            {/* Select Nominal - Dinamis berdasarkan game */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#12121a]/80 backdrop-blur-sm border border-[#6366f1]/20"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm">
                  3
                </span>
                Pilih Nominal {selectedGame.name === "Mobile Legends" ? "Diamond" : selectedGame.name === "Genshin Impact" ? "Genesis Crystals" : selectedGame.name === "PUBG Mobile" ? "UC" : "Diamond"}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentNominals.map((nominal) => (
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
                        🔥 PROMO
                      </span>
                    )}
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#6366f1]">{nominal.amount.toLocaleString("id-ID")}</p>
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
            </motion.div>

            {/* Payment Method */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#12121a]/80 backdrop-blur-sm border border-[#6366f1]/20"
            >
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
                    <motion.div
                      key={method.id}
                      whileHover={{ scale: 1.01 }}
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
                className="p-6 rounded-2xl bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-[#6366f1]/20"
              >
                <h3 className="text-xl font-semibold mb-4">🛒 Ringkasan Pesanan</h3>

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
                        <span className="text-gray-400">
                          {selectedGame.name === "Genshin Impact" ? "Genesis Crystals" : selectedGame.name === "PUBG Mobile" ? "UC" : "Diamond"}
                        </span>
                        <span>
                          {selectedNominalData.amount.toLocaleString("id-ID")}
                          {selectedNominalData.bonus > 0 && (
                            <span className="text-[#14b8a6] ml-1">
                              +{selectedNominalData.bonus}
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Harga</span>
                        <span>Rp {selectedNominalData.price.toLocaleString("id-ID")}</span>
                      </div>
                    </>
                  )}
                  {selectedPaymentData && selectedPaymentData.fee > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Biaya Admin</span>
                      <span>Rp {selectedPaymentData.fee.toLocaleString("id-ID")}</span>
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
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                >
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Bayar Sekarang
                </button>

                <div className="mt-4 p-3 rounded-xl bg-[#14b8a6]/10 border border-[#14b8a6]/20">
                  <p className="text-xs text-center text-[#14b8a6]">
                    ⚡ Estimasi Proses: Instan (±10 detik)
                  </p>
                  <p className="text-xs text-center text-gray-500 mt-1">
                    💰 Harga sudah termasuk diskon 5%
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}