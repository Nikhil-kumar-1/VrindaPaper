import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLayerGroup, FaMagic, FaBrush } from "react-icons/fa";

// Aapne jo files banayi hain unhe yahan import karein
import Hero from "./Hero";
import HeroOne from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
const HeroManager = () => {
  // activeHero state decide karegi kaunsa hero dikhana hai
  const [activeHero, setActiveHero] = useState(1);

  // Components mapping
  const renderHero = () => {
    switch (activeHero) {
      case 1:
        return <Hero key="hero-main" />;
      case 2:
        return <HeroOne key="hero-one" />;
      case 3:
        return <Hero2 key="hero-two" />;
      case 4:
        return <Hero3 key="hero-three" />;
      default:
        return <Hero key="hero-main" />;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. Dynamic Hero Rendering with Smooth Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeHero}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {renderHero()}
        </motion.div>
      </AnimatePresence>

      {/* 2. PREMIUM FLOATING SWITCHER BUTTONS (Bottom Right) */}
      <div className="fixed bottom-10 right-10 z-[9999] flex flex-col gap-4">
        {/* Helper Label */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-right"
        >
          Select Layout
        </motion.p>

        <div className="bg-white/80 backdrop-blur-xl p-3 shadow-2xl border border-slate-200 rounded-3xl flex flex-col gap-3">
          {/* Button 1 */}
          <button
            onClick={() => setActiveHero(1)}
            className={`group relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              activeHero === 1
                ? "bg-red-600 text-white scale-110 shadow-lg shadow-red-200"
                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
            }`}
          >
            <FaBrush size={20} />
            <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Classic Editorial
            </span>
          </button>

          {/* Button 2 */}
          <button
            onClick={() => setActiveHero(2)}
            className={`group relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              activeHero === 2
                ? "bg-red-600 text-white scale-110 shadow-lg shadow-red-200"
                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
            }`}
          >
            <FaMagic size={20} />
            <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Interactive Slider
            </span>
          </button>

          {/* Button 3 */}
          <button
            onClick={() => setActiveHero(3)}
            className={`group relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              activeHero === 3
                ? "bg-red-600 text-white scale-110 shadow-lg shadow-red-200"
                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
            }`}
          >
            <FaLayerGroup size={20} />
            <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Industrial Grid
            </span>
          </button>

          <button
            onClick={() => setActiveHero(4)}
            className={`group relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              activeHero === 4
                ? "bg-red-600 text-white scale-110 shadow-lg shadow-red-200"
                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
            }`}
          >
            <FaBrush size={20} />
            <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Hero Four
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroManager;
