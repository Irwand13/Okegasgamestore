import { Link } from "react-router";
import { Gamepad2, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#12121a] border-t border-[#6366f1]/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-[#6366f1]" />
              <span className="text-lg font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                OkeGas Games
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Platform top up game instan dan marketplace akun game terpercaya dengan sistem escrow untuk keamanan transaksi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/topup" className="text-gray-400 hover:text-[#6366f1] transition-colors">
                  Top Up Game
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-gray-400 hover:text-[#6366f1] transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-[#6366f1] transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6366f1] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6366f1] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6366f1] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1e1e2e] flex items-center justify-center text-gray-400 hover:text-[#6366f1] hover:bg-[#6366f1]/20 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1e1e2e] flex items-center justify-center text-gray-400 hover:text-[#ec4899] hover:bg-[#ec4899]/20 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1e1e2e] flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1e1e2e] flex items-center justify-center text-gray-400 hover:text-[#ef4444] hover:bg-[#ef4444]/20 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6366f1]/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 OkeGas Games Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
