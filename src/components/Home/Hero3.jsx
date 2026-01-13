import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaPlayCircle,
  FaFeather,
  FaLeaf,
  FaBoxOpen,
  FaPrint,
  FaChevronDown,
  FaGlobeAmericas,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Hero3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1636997112337-4f0a138fd377?w=1600&q=80",
      title: "UNFOLD",
      subtitle: "Purity.",
      tag: "THE ORGANIC SERIES",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611619899256-5e61d4c46df9?w=1600&q=80",
      title: "CRAFT",
      subtitle: "Legacy.",
      tag: "ARTISAN MILLING",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617600433693-eef3435282a9?w=1600&q=80",
      title: "NATURE",
      subtitle: "Surface.",
      tag: "ECO-CONSCIOUS TECH",
    },
  ];

  const stats = [
    { value: "10k+", label: "Varieties", icon: <FaBoxOpen /> },
    { value: "Net 0", label: "Carbon", icon: <FaLeaf /> },
    { value: "HD", label: "Precision", icon: <FaPrint /> },
    { value: "24/7", label: "Milling", icon: <FaFeather /> },
  ];

  const brands = [
    "ECO-FRIENDLY",
    "CARBON NEUTRAL",
    "100% RECYCLED",
    "FSC CERTIFIED",
    "PREMIUM MILL",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen bg-[#FDFCF8] flex flex-col justify-between overflow-hidden">
      {/* 1. SIDE VERTICAL DECOR (Branding) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 z-20">
        <div className="h-20 w-[1px] bg-slate-200"></div>
        <span className="vertical-text text-[10px] font-black tracking-[0.8em] text-slate-300 uppercase">
          Pulp & Mill Industries
        </span>
        <div className="h-20 w-[1px] bg-red-600"></div>
      </div>

      {/* 2. MAIN LAYOUT GRID */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex-grow grid lg:grid-cols-12 gap-10 items-center pt-32 pb-16">
        {/* LEFT CONTENT: TEXT (Col 1-5) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-600 font-bold text-xs tracking-widest uppercase mb-4 block">
                {slides[currentSlide].tag}
              </span>
              <h1 className="text-6xl md:text-[100px] font-black text-slate-900 leading-[0.85] tracking-tighter mb-8">
                {slides[currentSlide].title}
                <br />
                <span className="font-serif italic font-light text-red-600 drop-shadow-sm">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-lg text-slate-500 max-w-sm leading-relaxed font-light mb-10 border-l-2 border-slate-100 pl-6">
                Redefining the tactile essence of premium paper through
                sustainable industrial mastery.
              </p>

              <div className="flex items-center gap-6">
                <button className="bg-slate-900 text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-red-600 transition-all shadow-2xl flex items-center gap-4">
                  View Collection <FaArrowRight />
                </button>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Explore
                  </span>
                  <FaChevronDown className="text-red-600 animate-bounce mt-1" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-20 flex gap-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`group relative w-12 h-1 overflow-hidden bg-slate-200 transition-all duration-500 ${
                  currentSlide === idx ? "w-24 bg-red-600" : ""
                }`}
              >
                {currentSlide === idx && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 bg-white/30"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT: FLOATING IMAGE BOX (Col 6-12) */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative h-[500px] lg:h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="absolute inset-0 z-10 p-4"
            >
              <div className="w-full h-full relative group">
                {/* Decorative Frame Overlays */}
                <div className="absolute -inset-4 border border-slate-200 -z-10 group-hover:inset-0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-red-600/5 mix-blend-multiply pointer-events-none"></div>

                <img
                  src={slides[currentSlide].image}
                  alt="Premium Visual"
                  className="w-full h-full object-cover shadow-[40px_40px_80px_rgba(0,0,0,0.1)]"
                />

                {/* Floating Image Label */}
                <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl border-t-4 border-red-600 hidden md:block">
                  <FaGlobeAmericas className="text-red-600 text-3xl mb-4" />
                  <p className="text-2xl font-serif italic text-slate-800 tracking-tighter">
                    Certified 2026
                  </p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">
                    Zero-Carbon Mill
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Background Background Text */}
          <div className="absolute -right-20 top-20 text-[15rem] font-black text-slate-50 pointer-events-none select-none -z-10">
            PULP
          </div>
        </div>
      </div>

      {/* 3. TRANSITION BAR: DUAL TICKER */}
      <div className="w-full relative z-20">
        <div className="w-full bg-slate-900 py-6 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-20 items-center"
          >
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center gap-6">
                <span className="text-5xl font-black text-transparent stroke-text-white opacity-40 uppercase tracking-tighter">
                  {brand}
                </span>
                <div className="w-2 h-2 bg-red-600 rotate-45" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* TORN PAPER STATS BAR */}
        <div className="bg-white py-12 border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex items-center gap-5"
              >
                <div className="w-12 h-12 border-2 border-red-100 flex items-center justify-center text-red-600 text-xl font-black rotate-3 group-hover:rotate-0 transition-transform">
                  {s.icon}
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">
                    {s.value}
                  </div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap");
        .font-serif {
          font-family: "Playfair Display", serif;
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
        .stroke-text-white {
          -webkit-text-stroke: 1px #fff;
        }
      `}</style>
    </section>
  );
};

export default Hero3;
