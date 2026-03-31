import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface GameCardProps {
  title: string;
  image: string;
  isHot?: boolean;
  isPromo?: boolean;
  onClick?: () => void;
}

export function GameCard({ title, image, isHot, isPromo, onClick }: GameCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#12121a] border border-[#6366f1]/20 hover:border-[#6366f1]/50 transition-all shadow-lg hover:shadow-[#6366f1]/25">
        {/* Image */}
        <div className="aspect-video relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
        </div>

        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-2">
          {isHot && (
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ef4444] to-[#ec4899] text-xs font-semibold">
              🔥 HOT
            </span>
          )}
          {isPromo && (
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] text-xs font-semibold">
              ⚡ PROMO
            </span>
          )}
        </div>

        {/* Title */}
        <div className="p-4">
          <h3 className="font-semibold text-white group-hover:text-[#6366f1] transition-colors">
            {title}
          </h3>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10" />
        </div>
      </div>
    </motion.div>
  );
}
