import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaPlayCircle,
  FaFeather,
  FaLeaf,
  FaBoxOpen,
  FaPrint,
  FaRecycle,
  FaAward,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HeroOneSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1636997112337-4f0a138fd377?w=1200&auto=format&fit=crop&q=80",
      title: "UNFOLD",
      subtitle: "Purity.",
      desc: "Engineered for the most demanding artisans. Where every great idea starts on a blank canvas.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611619899256-5e61d4c46df9?w=1200&auto=format&fit=crop&q=80",
      title: "CRAFT",
      subtitle: "Legacy.",
      desc: "Transforming raw fibers into premium textures. Experience excellence in sustainable milling.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?w=1200&auto=format&fit=crop&q=80",
      title: "NATURE",
      subtitle: "Surface.",
      desc: "100% Recycled fiber meets high-definition printing. Technical perfection with respect for Earth.",
    },
  ];

  const stats = [
    { value: "10k+", label: "Paper Varieties", icon: <FaBoxOpen /> },
    { value: "Eco", label: "Sustainable Art", icon: <FaLeaf /> },
    { value: "HD", label: "Print Ready", icon: <FaPrint /> },
    { value: "Light", label: "Premium Feel", icon: <FaFeather /> },
  ];

  const brands = [
    "ECO-FRIENDLY",
    "CARBON NEUTRAL",
    "100% RECYCLED",
    "FSC CERTIFIED",
    "PREMIUM MILL",
    "NON-TOXIC",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#F8F7F2]">
      {/* 1. BACKGROUND SLIDER WITH KEN BURNS EFFECT */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt="Premium Paper"
              className="w-full h-full object-cover grayscale-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F2] via-[#F8F7F2]/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex items-center">
        <div className="max-w-4xl pt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-red-600"></div>
            <span className="text-xs font-bold tracking-[0.4em] text-red-600 uppercase italic">
              Premium Mill 2026
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-7xl md:text-[110px] font-bold text-slate-900 leading-[0.85] tracking-tighter mb-10">
                {slides[currentSlide].title}
                <br />
                <span className="font-serif italic font-light text-red-600">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <div className="flex flex-col md:flex-row items-center gap-12">
                <p className="text-lg md:text-xl text-slate-700 max-w-sm leading-relaxed font-light border-l-4 border-red-600 pl-8">
                  {slides[currentSlide].desc}
                </p>

                <div className="flex items-center gap-8">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-4 transition-all shadow-xl"
                  >
                    Explore <FaArrowRight className="text-red-500" />
                  </motion.button>
                  <button className="flex items-center gap-3 text-slate-900 font-bold hover:text-red-600 transition-colors uppercase text-xs tracking-widest group">
                    <FaPlayCircle
                      size={28}
                      className="text-red-600 group-hover:scale-110 transition-transform"
                    />
                    <span>Watch Story</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center gap-8 mt-20">
            <div className="text-slate-400 font-mono text-sm tracking-widest">
              <span className="text-red-600 font-bold">
                0{currentSlide + 1}
              </span>{" "}
              / 0{slides.length}
            </div>
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-700 ${
                    currentSlide === index
                      ? "w-16 bg-red-600"
                      : "w-4 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. TRANSITION AREA (CAROUSEL + TORN PAPER) */}
      <div className="relative z-20 w-full">
        {/* INFINITE BRAND TICKER (NEW) */}
        <div className="w-full bg-white/60 backdrop-blur-sm border-t border-slate-100 py-6 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-16 items-center"
          >
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase hover:text-red-600 transition-colors cursor-default">
                  {brand}
                </span>
                <div className="w-1 h-1 bg-red-600 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* DYNAMIC TORN PAPER EFFECT */}
        <div className="absolute top-full left-0 w-full -translate-y-[1px] pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-sm"
          >
            <path
              d="M0 30L45 20L90 35L180 15L270 25L360 10L450 30L540 15L630 35L720 20L810 30L900 10L990 25L1080 15L1170 35L1260 20L1350 30L1440 15V60H0V30Z"
              fill="white"
            />
          </svg>
        </div>

        {/* STATS PANEL */}
        <div className="bg-white py-12 lg:py-20 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-800 leading-none tracking-tighter">
                      {s.value}
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                      {s.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap");
        .font-serif {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </section>
  );
};

export default HeroOneSection;
