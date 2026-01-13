import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaPlayCircle,
  FaFeather,
  FaLeaf,
  FaBoxOpen,
  FaPrint,
  FaRecycle,
  FaTree,
  FaWind,
  FaWater,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HeroOneSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ecoCarouselIndex, setEcoCarouselIndex] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1636997112337-4f0a138fd377?w=1600&auto=format&fit=crop&q=80",
      title: "UNFOLD",
      subtitle: "Purity.",
      desc: "Engineered for the most demanding artisans. Where every great idea starts on a blank canvas.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611619899256-5e61d4c46df9?w=1600&auto=format&fit=crop&q=80",
      title: "CRAFT",
      subtitle: "Legacy.",
      desc: "Transforming raw fibers into premium textures. Experience excellence in sustainable milling.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617600433693-eef3435282a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwcGVuJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D",
      title: "NATURE",
      subtitle: "Surface.",
      desc: "100% Recycled fiber meets high-definition printing. Technical perfection with respect for Earth.",
    },
  ];

  const stats = [
    { value: "10k+", label: "Paper Varieties", icon: <FaBoxOpen /> },
    { value: "Net 0", label: "Carbon Neutral", icon: <FaLeaf /> },
    { value: "HD", label: "Print Ready", icon: <FaPrint /> },
    { value: "Premium", label: "Artisan Feel", icon: <FaFeather /> },
  ];

  const ecoInitiatives = [
    {
      title: "Zero Waste Production",
      description:
        "Our closed-loop system recycles 98% of water and repurposes all paper waste.",
      icon: <FaRecycle />,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop&q=60",
      color: "from-slate-900 to-slate-800",
    },
    {
      title: "Sustainable Sourcing",
      description:
        "Fiber exclusively harvested from FSC certified sustainable forests and recycled pulp.",
      icon: <FaTree />,
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60",
      color: "from-red-900 to-red-800",
    },
    {
      title: "Industrial Milling",
      description:
        "100% of our energy needs are met through high-efficiency on-site renewable sources.",
      icon: <FaWind />,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=60",
      color: "from-slate-800 to-red-900",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    const ecoTimer = setInterval(() => {
      setEcoCarouselIndex((prev) =>
        prev === ecoInitiatives.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => {
      clearInterval(timer);
      clearInterval(ecoTimer);
    };
  }, [slides.length, ecoInitiatives.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#F8F7F2]">
      {/* 1. TOP SLIDER */}
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
              alt="Paper"
              className="w-full h-full object-cover grayscale-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F2] via-[#F8F7F2]/60 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. HERO CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex items-center">
        <div className="max-w-4xl pt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-red-600"></div>
            <span className="text-xs font-black tracking-[0.4em] text-red-600 uppercase italic">
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
                    whileHover={{ scale: 1.05 }}
                    className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-5 transition-all shadow-xl"
                  >
                    Explore <FaArrowRight className="text-red-500" />
                  </motion.button>
                  <button className="flex items-center gap-4 text-slate-900 font-bold hover:text-red-600 transition-all uppercase text-xs tracking-widest group">
                    <FaPlayCircle size={32} className="text-red-600" /> Watch
                    Story
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. INTERACTIVE MINI SLIDER (Redesigned without Green) */}
      <div className="relative z-10 w-full mt-20 mb-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div>
              <div className="h-1 w-12 bg-red-600 mb-4"></div>
              <h2 className="text-4xl font-serif italic text-slate-900 leading-none">
                The Conscious <span className="text-red-600">Protocol</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  setEcoCarouselIndex(
                    ecoCarouselIndex === 0
                      ? ecoInitiatives.length - 1
                      : ecoCarouselIndex - 1
                  )
                }
                className="p-4 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() =>
                  setEcoCarouselIndex(
                    (ecoCarouselIndex + 1) % ecoInitiatives.length
                  )
                }
                className="p-4 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="bg-white shadow-2xl overflow-hidden border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={ecoCarouselIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2"
              >
                <div
                  className={`p-12 bg-gradient-to-br ${ecoInitiatives[ecoCarouselIndex].color} text-white flex flex-col justify-center`}
                >
                  <div className="text-red-500 text-4xl mb-6">
                    {ecoInitiatives[ecoCarouselIndex].icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">
                    {ecoInitiatives[ecoCarouselIndex].title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    {ecoInitiatives[ecoCarouselIndex].description}
                  </p>
                  <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] hover:text-red-400 transition-colors">
                    Technical Specifications <FaArrowRight />
                  </button>
                </div>
                <div className="relative h-[400px]">
                  <img
                    src={ecoInitiatives[ecoCarouselIndex].image}
                    className="w-full h-full object-cover grayscale-[0.5]"
                    alt="Process"
                  />
                  <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 4. TORN PAPER STATS BAR */}
      <div className="relative z-20 w-full mt-auto">
        <div className="absolute top-0 left-0 w-full -translate-y-[99%] pointer-events-none">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            className="w-full h-auto drop-shadow-xl"
          >
            <path
              d="M0 50L30 40L60 55L120 30L180 45L240 20L300 40L360 35L420 50L480 25L540 45L600 30L660 55L720 35L780 45L840 20L900 50L960 30L1020 45L1080 25L1140 50L1200 30L1260 45L1320 20L1380 40L1440 30V100H0V50Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="bg-white py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-none border border-slate-200 flex items-center justify-center text-red-600 shadow-sm group-hover:bg-red-600 transition-all">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-800 leading-none tracking-tighter">
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
