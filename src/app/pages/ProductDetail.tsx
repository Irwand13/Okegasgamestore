import { useNavigate, useParams } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Shield, Star, ArrowLeft, CheckCircle2 } from "lucide-react";

const productDetails = {
  1: {
    id: 1,
    game: "Mobile Legends",
    rank: "Mythic",
    level: 85,
    heroes: 120,
    skins: 85,
    price: 850000,
    image: "https://images.unsplash.com/photo-1761395013890-49090392ff0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWdlbmRzJTIwZ2FtZXxlbnwxfHx8fDE3NzQ4NjA4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    seller: "ProGamer88",
    sellerRating: 4.9,
    sellerSales: 245,
    verified: true,
    description:
      "Akun Mobile Legends Mythic dengan 120+ heroes dan 85 skin premium. Semua hero sudah unlock, banyak skin epic dan legend. Win rate bagus, tidak pernah banned. Akun aman dan legal.",
    features: [
      "120+ Heroes (Semua Unlock)",
      "85 Skin (15 Epic, 5 Legend)",
      "Win Rate 60%+",
      "Emblem Max Level",
      "15.000+ Battle Points",
      "Email Bisa Diganti",
    ],
  },
};

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productDetails[Number(id) as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-400">Produk tidak ditemukan</p>
      </div>
    );
  }

  const handleBuy = () => {
    navigate(`/escrow/${product.id}`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/marketplace")}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Marketplace
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={product.image}
                alt={product.game}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] font-semibold">
                {product.rank}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20">
              <h1 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                  {product.game} - {product.rank}
                </span>
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20">
                  <p className="text-sm text-gray-400">Level</p>
                  <p className="text-2xl font-bold text-[#6366f1]">{product.level}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20">
                  <p className="text-sm text-gray-400">Heroes</p>
                  <p className="text-2xl font-bold text-[#6366f1]">{product.heroes}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20">
                  <p className="text-sm text-gray-400">Skins</p>
                  <p className="text-2xl font-bold text-[#6366f1]">{product.skins}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20">
                  <p className="text-sm text-gray-400">Rank</p>
                  <p className="text-lg font-bold text-[#6366f1]">{product.rank}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Deskripsi</h3>
                  <p className="text-gray-400">{product.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Fitur & Keunggulan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-[#14b8a6] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20">
              <h3 className="font-semibold mb-4">Informasi Penjual</h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-2xl font-bold">
                  {product.seller[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-lg">{product.seller}</p>
                    {product.verified && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-xs">
                        <Shield className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                      <span>{product.sellerRating} Rating</span>
                    </div>
                    <span>•</span>
                    <span>{product.sellerSales} Penjualan</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/seller/${product.id}`)}
                  className="px-6 py-2 rounded-xl border border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1]/20 transition-all"
                >
                  Lihat Toko
                </button>
              </div>
            </div>
          </div>

          {/* Purchase Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20 space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Harga</p>
                  <p className="text-3xl font-bold text-[#6366f1]">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <button
                  onClick={handleBuy}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-semibold transition-all shadow-lg shadow-[#6366f1]/25 hover:shadow-[#8b5cf6]/50"
                >
                  Beli Sekarang
                </button>

                <div className="p-4 rounded-xl bg-[#14b8a6]/10 border border-[#14b8a6]/20">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-[#14b8a6]">
                      <p className="font-semibold mb-1">Dilindungi Escrow</p>
                      <p className="text-xs">
                        Dana kamu ditahan platform sampai akun diterima dengan baik
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14b8a6]" />
                    <span>Akun Legal & Aman</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14b8a6]" />
                    <span>Garansi 7 Hari</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14b8a6]" />
                    <span>Support 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
