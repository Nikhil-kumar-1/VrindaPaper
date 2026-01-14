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
  FaExpand,
} from "react-icons/fa";
import { motion,AnimatePresence } from "framer-motion";

const Hero5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1636997112337-4f0a138fd377?w=1600&q=80",
      title: "UNFOLD",
      subtitle: "Purity.",
      accent: "The Bio-Fibre Edition",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611619899256-5e61d4c46df9?w=1600&q=80",
      title: "CRAFT",
      subtitle: "Legacy.",
      accent: "Textured Artisan Silk",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?w=1600&q=80",
      title: "NATURE",
      subtitle: "Surface.",
      accent: "Renewable Tech Canvas",
    },
  ];

  const stats = [
    { value: "10k+", label: "Varieties", icon: <FaBoxOpen /> },
    { value: "Net 0", label: "Carbon", icon: <FaLeaf /> },
    { value: "HD", label: "Precision", icon: <FaPrint /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen bg-[#0F172A] flex flex-col justify-center items-center overflow-hidden">
      {/* 1. BACKGROUND TEXT TUNNEL (Moving Depth) */}
      <div className="absolute  inset-0 z-0 flex items-center justify-center pointer-events-none opacity-5">
        <motion.h2
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="text-[30vw] font-black text-white leading-none whitespace-nowrap"
        >
          PULP & MILL
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT: MINIMALIST CONTENT */}
        <div className="order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-red-600"></span>
                <span className="text-red-500 font-black text-[10px] tracking-[0.5em] uppercase">
                  {slides[currentSlide].accent}
                </span>
              </div>

              <h1 className="text-7xl md:text-[120px] font-black text-white leading-[0.8] tracking-tighter mb-10">
                {slides[currentSlide].title}
                <br />
                <span className="font-serif italic font-light text-red-600">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-10">
                <button className="group relative px-10 py-5 overflow-hidden">
                  <div className="absolute inset-0 bg-red-600 transition-transform group-hover:scale-x-110"></div>
                  <span className="relative z-10 text-white font-black uppercase text-[10px] tracking-widest flex items-center gap-3">
                    Enter Gallery{" "}
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <div className="flex gap-4">
                  {stats.map((s, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-white font-bold text-lg leading-none">
                        {s.value}
                      </span>
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ORBITAL NAVIGATION */}
          <div className="mt-24 flex items-center gap-6">
            <div className="h-[1px] w-20 bg-slate-800"></div>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  currentSlide === i
                    ? "bg-red-600 border-red-600 scale-150"
                    : "border-slate-700 hover:border-red-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: GEOMETRIC CIRCULAR REVEAL */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center">
          {/* Background Rings */}
          <div className="absolute w-[120%] h-[120%] border border-slate-800 rounded-full animate-pulse-slow"></div>
          <div className="absolute w-[140%] h-[140%] border border-slate-900 rounded-full"></div>

          <div className="relative w-[300px] h-[300px] md:w-[550px] md:h-[550px] overflow-hidden rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-morph">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                initial={{ scale: 1.5, rotate: 10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.8, rotate: -10, opacity: 0 }}
                transition={{ duration: 1.2, ease: "anticipate" }}
                src={slides[currentSlide].image}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </AnimatePresence>
          </div>

          {/* Floating Detail Card */}
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="absolute -bottom-10 right-0 bg-white p-8 shadow-2xl cursor-grab active:cursor-grabbing hidden md:block"
          >
            <FaExpand className="text-red-600 mb-4" />
            <p className="text-slate-900 font-serif italic text-xl tracking-tighter">
              Micro-Texture v.26
            </p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">
              Tactile Fiber Analysis
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3. BOTTOM TICKER (Minimalist Inset) */}
      <div className="w-full bg-red-600 py-4 relative z-20 mt-auto">
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20"
          >
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="text-white font-black italic text-xs tracking-[0.5em] uppercase opacity-80"
              >
                Premium Artisan Standards • FSC Certified Organic • Industrial
                Precision •
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap");
        .font-serif {
          font-family: "Playfair Display", serif;
        }

        @keyframes morph {
          0% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
          34% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
          }
          67% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
          }
          100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero5;
