import React, { useState, useEffect } from "react";
import {
  FaFeather,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import {AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Collection" },
    { href: "/products", label: "Paper Grades" },
    { href: "/quality", label: "Sustainability" },
    { href: "/about", label: "Our Mill" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-700 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border-b border-slate-100"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* 1. LOGO AREA */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div
                className={`w-10 h-10 border-2 transition-all duration-500 rounded-sm flex items-center justify-center ${
                  scrolled
                    ? "border-red-600 bg-red-600"
                    : "border-slate-800 bg-transparent"
                }`}
              >
                <img
                  src="/vrinda.jpg"
                  alt="Feather Logo"
                  className={`w-full h-full transition-all duration-500 ${
                    scrolled ? "invert" : ""
                  }`}
                />
              </div>
              {/* Decorative paper fold effect */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FDFCF8] border-b border-l border-slate-300 rotate-45 group-hover:scale-150 transition-transform"></div>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-black tracking-tighter leading-none transition-colors duration-500 ${
                  scrolled ? "text-slate-900" : "text-slate-900"
                }`}
              >
                VRINDA<span className="text-red-600">&</span>PAPER
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400">
                Premium Standard
              </span>
            </div>
          </div>

          {/* 2. DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative group py-2 overflow-hidden"
              >
                <span
                  className={`text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
                    scrolled
                      ? "text-slate-600 hover:text-red-600"
                      : "text-slate-800 hover:text-red-600"
                  }`}
                >
                  {link.label}
                </span>
                {/* Animated Underline like Pen Stroke */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* 3. CTA BUTTON */}
          <div className="hidden md:flex items-center gap-6">
            <button
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                scrolled ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Enquiry
            </button>
            <button className="relative group overflow-hidden bg-slate-900 text-white px-7 py-3 rounded-none flex items-center gap-3 transition-transform active:scale-95">
              <span className="relative z-10 text-xs font-bold uppercase tracking-tighter">
                Order Swatchbook
              </span>
              <FaArrowRight
                size={12}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
              {/* Hover Slide Effect */}
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[80%] bg-white z-[110] shadow-2xl p-10 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex justify-between items-center mb-12">
                <span className="font-black text-2xl tracking-tighter">
                  MENU
                </span>
                <FaTimes size={24} onClick={() => setIsMenuOpen(false)} />
              </div>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.label}
                    href={link.href}
                    className="text-3xl font-serif italic text-slate-800 hover:text-red-600 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-6 border-t border-slate-100 pt-8">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                Global Support
              </p>
              <button className="w-full bg-red-600 text-white py-5 font-bold uppercase tracking-widest flex justify-center items-center gap-3">
                Request Quote <FaArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
