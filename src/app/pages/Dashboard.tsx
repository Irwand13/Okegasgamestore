import { useState } from "react";
import { ShoppingBag, Wallet, Package, Bell, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    title: "Saldo",
    value: "Rp 2.450.000",
    icon: Wallet,
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    change: "+12.5%",
  },
  {
    title: "Total Transaksi",
    value: "47",
    icon: ShoppingBag,
    gradient: "from-[#8b5cf6] to-[#ec4899]",
    change: "+8.2%",
  },
  {
    title: "Produk Dijual",
    value: "12",
    icon: Package,
    gradient: "from-[#ec4899] to-[#ef4444]",
    change: "+3",
  },
];

const transactions = [
  {
    id: 1,
    type: "buy",
    game: "Mobile Legends",
    item: "Akun Mythic 120 Heroes",
    price: 850000,
    status: "completed",
    date: "28 Mar 2026",
  },
  {
    id: 2,
    type: "topup",
    game: "Free Fire",
    item: "429 Diamond + 10 Bonus",
    price: 100000,
    status: "completed",
    date: "27 Mar 2026",
  },
  {
    id: 3,
    type: "buy",
    game: "PUBG Mobile",
    item: "Akun Ace 30 Skins",
    price: 650000,
    status: "in_progress",
    date: "26 Mar 2026",
  },
  {
    id: 4,
    type: "topup",
    game: "Mobile Legends",
    item: "257 Diamond + 3 Bonus",
    price: 60000,
    status: "completed",
    date: "25 Mar 2026",
  },
];

const notifications = [
  {
    id: 1,
    title: "Pembayaran Berhasil",
    message: "Top up 429 diamond Free Fire berhasil",
    time: "2 jam yang lalu",
    read: false,
  },
  {
    id: 2,
    title: "Akun Terkirim",
    message: "Penjual telah mengirim detail akun PUBG Mobile",
    time: "5 jam yang lalu",
    read: false,
  },
  {
    id: 3,
    title: "Promo Spesial",
    message: "Diskon 20% untuk top up Mobile Legends!",
    time: "1 hari yang lalu",
    read: true,
  },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<"transactions" | "products" | "notifications">(
    "transactions"
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-gray-400">Selamat datang kembali, ProGamer88! 👋</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20 hover:border-[#6366f1]/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1 text-[#14b8a6] text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 border-b border-[#6366f1]/20">
            <button
              onClick={() => setActiveTab("transactions")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === "transactions"
                  ? "text-[#6366f1] border-b-2 border-[#6366f1]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Riwayat Transaksi
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === "products"
                  ? "text-[#6366f1] border-b-2 border-[#6366f1]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Produk Dijual
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`px-6 py-3 font-semibold transition-all relative ${
                activeTab === "notifications"
                  ? "text-[#6366f1] border-b-2 border-[#6366f1]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Notifikasi
              {notifications.filter((n) => !n.read).length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ef4444] text-white text-xs flex items-center justify-center">
                  {notifications.filter((n) => !n.read).length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {activeTab === "transactions" && (
            <>
              {transactions.map((transaction) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20 hover:border-[#6366f1]/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-xl ${
                        transaction.type === "buy"
                          ? "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]"
                          : "bg-gradient-to-r from-[#14b8a6] to-[#06b6d4]"
                      } flex items-center justify-center`}>
                        {transaction.type === "buy" ? (
                          <ShoppingBag className="w-6 h-6 text-white" />
                        ) : (
                          <Wallet className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{transaction.game}</p>
                        <p className="text-sm text-gray-400">{transaction.item}</p>
                        <p className="text-xs text-gray-500 mt-1">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#6366f1] mb-2">
                        Rp {transaction.price.toLocaleString("id-ID")}
                      </p>
                      {transaction.status === "completed" ? (
                        <div className="flex items-center gap-1 text-[#14b8a6] text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Selesai</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-[#f59e0b] text-sm">
                          <Clock className="w-4 h-4" />
                          <span>Proses</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          )}

          {activeTab === "products" && (
            <div className="p-12 rounded-2xl bg-[#12121a] border border-[#6366f1]/20 text-center">
              <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-xl font-semibold mb-2">Belum Ada Produk</p>
              <p className="text-gray-400 mb-6">
                Mulai jual akun game kamu dan dapatkan penghasilan tambahan
              </p>
              <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold">
                Jual Akun Sekarang
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <>
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-6 rounded-2xl border transition-all ${
                    notification.read
                      ? "bg-[#12121a] border-[#6366f1]/20"
                      : "bg-[#6366f1]/10 border-[#6366f1]/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <p className="font-semibold">{notification.title}</p>
                        {!notification.read && (
                          <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
