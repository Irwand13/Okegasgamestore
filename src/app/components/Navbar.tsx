import { Link, useLocation } from "react-router";
import { Gamepad2, ShoppingBag, User, Menu, X, Wallet } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: Gamepad2 },
    { path: "/topup", label: "Top Up", icon: Wallet },
    { path: "/marketplace", label: "Marketplace", icon: ShoppingBag },
    { path: "/dashboard", label: "Dashboard", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-[#6366f1]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Gamepad2 className="w-8 h-8 text-[#6366f1] group-hover:text-[#00d4ff] transition-colors" />
              <div className="absolute inset-0 blur-lg bg-[#6366f1] opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              OkeGas Games
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    active
                      ? "bg-[#6366f1]/20 text-[#6366f1]"
                      : "text-gray-400 hover:text-white hover:bg-[#1e1e2e]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white transition-all shadow-lg shadow-[#6366f1]/25 hover:shadow-[#8b5cf6]/50"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        active
                          ? "bg-[#6366f1]/20 text-[#6366f1]"
                          : "text-gray-400 hover:text-white hover:bg-[#1e1e2e]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-center"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
