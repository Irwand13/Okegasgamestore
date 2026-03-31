import { useNavigate, useParams } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Shield, Star, Package, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const sellerData = {
  name: "ProGamer88",
  verified: true,
  rating: 4.9,
  totalSales: 245,
  joinDate: "Januari 2025",
  responseTime: "< 1 jam",
  description:
    "Seller terpercaya sejak 2025. Menjual berbagai akun game premium dengan harga terjangkau. Garansi akun aman dan legal. Fast response!",
};

const sellerProducts = [
  {
    id: 1,
    game: "Mobile Legends",
    rank: "Mythic",
    level: 85,
    price: 850000,
    image: "https://images.unsplash.com/photo-1761395013890-49090392ff0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWdlbmRzJTIwZ2FtZXxlbnwxfHx8fDE3NzQ4NjA4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    game: "Mobile Legends",
    rank: "Legend",
    level: 65,
    price: 550000,
    image: "https://images.unsplash.com/photo-1761395013890-49090392ff0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWdlbmRzJTIwZ2FtZXxlbnwxfHx8fDE3NzQ4NjA4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    game: "PUBG Mobile",
    rank: "Ace",
    level: 68,
    price: 650000,
    image: "https://images.unsplash.com/photo-1564049489314-60d154ff107d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJnJTIwbW9iaWxlJTIwZ2FtZXBsYXl8ZW58MXx8fHwxNzc0OTY0NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const reviews = [
  {
    id: 1,
    buyer: "GamingLord",
    rating: 5,
    comment: "Seller fast respon, akun sesuai deskripsi. Recommended!",
    date: "25 Mar 2026",
  },
  {
    id: 2,
    buyer: "PlayerOne",
    rating: 5,
    comment: "Transaksi cepat dan aman. Akun bagus banget!",
    date: "22 Mar 2026",
  },
  {
    id: 3,
    buyer: "MLPro",
    rating: 4,
    comment: "Barang oke, cuma agak lama responnya. Overall good!",
    date: "18 Mar 2026",
  },
];

export function SellerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali
        </button>

        {/* Seller Info */}
        <div className="p-8 rounded-2xl bg-[#12121a] border border-[#6366f1]/20 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-4xl font-bold flex-shrink-0">
              {sellerData.name[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-3xl font-bold">{sellerData.name}</h1>
                {sellerData.verified && (
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#14b8a6]/20 text-[#14b8a6]">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-semibold">Verified</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-[#1e1e2e]">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    <span className="text-2xl font-bold text-[#6366f1]">{sellerData.rating}</span>
                  </div>
                  <p className="text-xs text-gray-400">Rating</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1e1e2e]">
                  <p className="text-2xl font-bold text-[#6366f1] mb-1">{sellerData.totalSales}</p>
                  <p className="text-xs text-gray-400">Penjualan</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1e1e2e]">
                  <p className="text-xl font-bold text-[#6366f1] mb-1">{sellerData.responseTime}</p>
                  <p className="text-xs text-gray-400">Waktu Respon</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1e1e2e]">
                  <p className="text-lg font-bold text-[#6366f1] mb-1">{sellerData.joinDate}</p>
                  <p className="text-xs text-gray-400">Bergabung</p>
                </div>
              </div>

              <p className="text-gray-400">{sellerData.description}</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Package className="w-6 h-6 text-[#6366f1]" />
            Produk Dijual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sellerProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/marketplace/${product.id}`)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#12121a] border border-[#6366f1]/20 hover:border-[#6366f1]/50 transition-all hover:shadow-lg hover:shadow-[#6366f1]/25">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.game}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-sm font-semibold">
                      {product.rank}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 group-hover:text-[#6366f1] transition-colors">
                      {product.game}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">Level {product.level}</p>
                    <p className="text-xl font-bold text-[#6366f1]">
                      Rp {product.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-[#f59e0b]" />
            Ulasan Pembeli
          </h2>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {review.buyer[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{review.buyer}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                    <p className="text-gray-400">{review.comment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
