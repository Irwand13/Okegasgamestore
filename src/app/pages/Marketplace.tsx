import { useState } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Shield, Star, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";

const games = ["Semua Game", "Mobile Legends", "Free Fire", "PUBG Mobile", "Genshin Impact"];
const rankFilters = ["Semua Rank", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Mythic"];
const priceFilters = ["Semua Harga", "< 100rb", "100rb - 500rb", "500rb - 1jt", "> 1jt"];

const products = [
  {
    id: 1,
    game: "Mobile Legends",
    rank: "Mythic",
    level: 85,
    heroes: 120,
    skins: 85,
    price: 850000,
    image: "https://images.unsplash.com/photo-1761395013890-49090392ff0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWdlbmRzJTIwZ2FtZXxlbnwxfHx8fDE3NzQ4NjA4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    seller: "ProGamer88",
    rating: 4.9,
    verified: true,
  },
  {
    id: 2,
    game: "Free Fire",
    rank: "Heroic",
    level: 72,
    heroes: 0,
    skins: 45,
    price: 450000,
    image: "https://images.unsplash.com/photo-1675310854573-c5c8e4089426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwZmlyZSUyMGdhbWluZ3xlbnwxfHx8fDE3NzQ5NjQ1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    seller: "FFKingdom",
    rating: 5.0,
    verified: true,
  },
  {
    id: 3,
    game: "PUBG Mobile",
    rank: "Ace",
    level: 68,
    heroes: 0,
    skins: 30,
    price: 650000,
    image: "https://images.unsplash.com/photo-1564049489314-60d154ff107d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJnJTIwbW9iaWxlJTIwZ2FtZXBsYXl8ZW58MXx8fHwxNzc0OTY0NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    seller: "PUBGPro",
    rating: 4.8,
    verified: true,
  },
  {
    id: 4,
    game: "Genshin Impact",
    rank: "AR 58",
    level: 58,
    heroes: 35,
    skins: 0,
    price: 1200000,
    image: "https://images.unsplash.com/photo-1769709992557-45387590ae7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5zaGluJTIwaW1wYWN0JTIwZ2FtZXxlbnwxfHx8fDE3NzQ5Mzk1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    seller: "GenshinMaster",
    rating: 4.9,
    verified: true,
  },
  {
    id: 5,
    game: "Mobile Legends",
    rank: "Legend",
    level: 65,
    heroes: 95,
    skins: 60,
    price: 550000,
    image: "https://images.unsplash.com/photo-1761395013890-49090392ff0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWdlbmRzJTIwZ2FtZXxlbnwxfHx8fDE3NzQ4NjA4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    seller: "MLPro123",
    rating: 4.7,
    verified: true,
  },
  {
    id: 6,
    game: "Free Fire",
    rank: "Diamond",
    level: 55,
    heroes: 0,
    skins: 28,
    price: 320000,
    image: "https://images.unsplash.com/photo-1675310854573-c5c8e4089426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwZmlyZSUyMGdhbWluZ3xlbnwxfHx8fDE3NzQ5NjQ1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    seller: "FireSeller",
    rating: 4.6,
    verified: false,
  },
];

export function Marketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGame, setSelectedGame] = useState("Semua Game");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchGame = selectedGame === "Semua Game" || product.game === selectedGame;
    const matchSearch =
      product.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGame && matchSearch;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Marketplace Akun Game
            </span>
          </h1>
          <p className="text-gray-400">Jual beli akun game aman dengan sistem escrow otomatis</p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari game atau seller..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#12121a] border border-[#6366f1]/20 focus:border-[#6366f1] outline-none text-white placeholder:text-gray-500 transition-all"
            />
          </div>

          {/* Game Filter */}
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {games.map((game) => (
              <button
                key={game}
                onClick={() => setSelectedGame(game)}
                className={`px-6 py-2 rounded-xl transition-all ${
                  selectedGame === game
                    ? "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-lg shadow-[#6366f1]/25"
                    : "bg-[#12121a] text-gray-400 border border-[#6366f1]/20 hover:border-[#6366f1]/50 hover:text-white"
                }`}
              >
                {game}
              </button>
            ))}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-2 rounded-xl bg-[#12121a] text-gray-400 border border-[#6366f1]/20 hover:border-[#6366f1]/50 hover:text-white transition-all flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter Lainnya
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-2xl bg-[#12121a] border border-[#6366f1]/20"
            >
              <div>
                <label className="block text-sm text-gray-400 mb-2">Rank</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] outline-none text-white">
                  {rankFilters.map((rank) => (
                    <option key={rank}>{rank}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Harga</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-[#6366f1]/20 focus:border-[#6366f1] outline-none text-white">
                  {priceFilters.map((price) => (
                    <option key={price}>{price}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/marketplace/${product.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#12121a] border border-[#6366f1]/20 hover:border-[#6366f1]/50 transition-all hover:shadow-lg hover:shadow-[#6366f1]/25">
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.game}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
                  
                  {/* Verified Badge */}
                  {product.verified && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-[#14b8a6] text-xs font-semibold">
                      <Shield className="w-3 h-3" />
                      Verified
                    </div>
                  )}

                  {/* Rank Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-sm font-semibold">
                    {product.rank}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-[#6366f1] transition-colors">
                      {product.game}
                    </h3>
                    <p className="text-sm text-gray-400">Level {product.level}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {product.heroes > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Heroes:</span>
                        <span className="text-white font-semibold">{product.heroes}</span>
                      </div>
                    )}
                    {product.skins > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Skins:</span>
                        <span className="text-white font-semibold">{product.skins}</span>
                      </div>
                    )}
                  </div>

                  {/* Seller Info */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#6366f1]/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-xs font-semibold">
                        {product.seller[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{product.seller}</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-[#f59e0b] text-[#f59e0b]" />
                          <span className="text-xs text-gray-400">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-3 border-t border-[#6366f1]/20">
                    <p className="text-sm text-gray-400">Harga</p>
                    <p className="text-2xl font-bold text-[#6366f1]">
                      Rp {product.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">Tidak ada produk yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}
