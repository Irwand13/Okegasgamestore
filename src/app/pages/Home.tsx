import { Link, useNavigate } from "react-router";
import { GameCard } from "../components/GameCard";
import { Shield, Zap, Users, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const games = [
  {
    id: 1,
    title: "Mobile Legends",
    image: "https://images.unsplash.com/photo-1761395013890-49090392ff0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWdlbmRzJTIwZ2FtZXxlbnwxfHx8fDE3NzQ4NjA4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isHot: true,
    isPromo: true,
  },
  {
    id: 2,
    title: "Free Fire",
    image: "https://images.unsplash.com/photo-1675310854573-c5c8e4089426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwZmlyZSUyMGdhbWluZ3xlbnwxfHx8fDE3NzQ5NjQ1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isHot: true,
  },
  {
    id: 3,
    title: "PUBG Mobile",
    image: "https://images.unsplash.com/photo-1564049489314-60d154ff107d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJnJTIwbW9iaWxlJTIwZ2FtZXBsYXl8ZW58MXx8fHwxNzc0OTY0NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    isPromo: true,
  },
  {
    id: 4,
    title: "Genshin Impact",
    image: "https://images.unsplash.com/photo-1769709992557-45387590ae7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5zaGluJTIwaW1wYWN0JTIwZ2FtZXxlbnwxfHx8fDE3NzQ5Mzk1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const features = [
  {
    icon: Zap,
    title: "Top Up Instan",
    description: "Proses instan dalam 10 detik, langsung masuk ke akun game kamu",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    icon: Shield,
    title: "Aman dengan Escrow",
    description: "Sistem escrow otomatis melindungi pembeli dan penjual",
    gradient: "from-[#8b5cf6] to-[#ec4899]",
  },
  {
    icon: Users,
    title: "Verified Seller",
    description: "Semua penjual terverifikasi untuk keamanan transaksi kamu",
    gradient: "from-[#ec4899] to-[#ef4444]",
  },
];

const testimonials = [
  {
    name: "Arif Gaming",
    rating: 5,
    text: "Top up super cepat! Ga nyampe 1 menit diamond langsung masuk. Recommended!",
    game: "Mobile Legends",
  },
  {
    name: "Siti Nurhaliza",
    rating: 5,
    text: "Beli akun di sini aman banget pakai escrow. Seller juga fast respon!",
    game: "PUBG Mobile",
  },
  {
    name: "Budi Santoso",
    rating: 5,
    text: "Harga terjangkau, proses cepat, customer service responsif. Perfect!",
    game: "Free Fire",
  },
];

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758179762049-615d9aac58ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBlc3BvcnRzJTIwbmVvbnxlbnwxfHx8fDE3NzQ4ODE4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Gaming Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/90 to-[#0a0a0f]" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                Top Up Game Instan
              </span>
              <br />
              <span className="text-white">& Marketplace Terpercaya</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Platform all-in-one untuk top up diamond, UC, dan jual beli akun game dengan sistem escrow yang aman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/topup"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-semibold shadow-lg shadow-[#6366f1]/50 hover:shadow-[#8b5cf6]/50 transition-all flex items-center justify-center gap-2 group"
              >
                Top Up Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/marketplace"
                className="px-8 py-4 rounded-xl border-2 border-[#6366f1] text-white hover:bg-[#6366f1]/20 transition-all font-semibold"
              >
                Lihat Marketplace
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366f1] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#a855f7] rounded-full blur-[120px] opacity-20" />
      </section>

      {/* Popular Games */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Game Populer
            </span>
          </h2>
          <p className="text-gray-400">Pilih game favoritmu dan top up sekarang</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              image={game.image}
              isHot={game.isHot}
              isPromo={game.isPromo}
              onClick={() => navigate("/topup")}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Kenapa Pilih OkeGas?
            </span>
          </h2>
          <p className="text-gray-400">Fitur terbaik untuk pengalaman gaming yang maksimal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-[#12121a] border border-[#6366f1]/20 hover:border-[#6366f1]/50 transition-all">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] p-1">
          <div className="bg-[#12121a] rounded-[22px] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                    Promo Spesial! 🎉
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Diskon hingga 20% untuk top up game pilihan. Buruan, stok terbatas!
                </p>
                <Link
                  to="/topup"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all"
                >
                  Lihat Promo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex-shrink-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1729501309405-5710375095cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMHB1cnBsZXxlbnwxfHx8fDE3NzQ5NjQ1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Promo"
                  className="w-full md:w-80 h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Apa Kata Mereka?
            </span>
          </h2>
          <p className="text-gray-400">Testimoni dari ribuan gamer yang puas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20 hover:border-[#6366f1]/50 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#6366f1]/20">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.game}</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-[#14b8a6]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] p-12 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Siap Untuk Mulai?
            </h2>
            <p className="text-xl text-white/90">
              Bergabung dengan ribuan gamer lainnya dan nikmati pengalaman transaksi yang aman dan cepat
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#6366f1] font-semibold hover:shadow-lg hover:shadow-white/25 transition-all"
            >
              Daftar Sekarang Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
