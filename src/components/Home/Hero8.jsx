import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaInfoCircle,
} from "react-icons/fa";

const DATA = [
  {
    id: 1,
    title: "Liquid Innovation",
    sub: "Next-Gen Fluid UI",
    color: "#3b82f6",
    bg: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070",
    icon: "💧",
  },
  {
    id: 2,
    title: "Nebula Streams",
    sub: "Deep Space Logistics",
    color: "#a855f7",
    bg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964",
    icon: "🌌",
  },
  {
    id: 3,
    title: "Cyber Core",
    sub: "Advanced AI Systems",
    color: "#10b981",
    bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1770",
    icon: "🤖",
  },
  {
    id: 4,
    title: "Solar Energy",
    sub: "Sustainable Power",
    color: "#f59e0b",
    bg: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?q=80&w=1770",
    icon: "☀️",
  },
  {
    id: 5,
    title: "Deep Ocean",
    sub: "Marine Exploration",
    color: "#06b6d4",
    bg: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1932",
    icon: "🌊",
  },
  {
    id: 6,
    title: "Crimson Vibe",
    sub: "Thermal Dynamics",
    color: "#ef4444",
    bg: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1770",
    icon: "🔥",
  },
];

const LiquidHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const angleStep = 360 / DATA.length;

  // Auto-rotation logic
  useEffect(() => {
    const timer = setInterval(() => handleRotate("next"), 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleRotate = (direction) => {
    if (direction === "next") {
      setActiveIndex((prev) => (prev + 1) % DATA.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + DATA.length) % DATA.length);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans select-none">
      {/* 1. IMMERSIVE BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${DATA[activeIndex].bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Multi-layered Overlays */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 2. MAIN TEXT CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mb-20">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10 mb-6 shadow-2xl"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/70 italic">
            Revolutionizing Tech
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -40, opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="flex flex-col items-center"
          >
            <h2 className="text-xl md:text-2xl font-medium tracking-widest text-white/60 uppercase mb-2">
              {DATA[activeIndex].sub}
            </h2>
            <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
              {DATA[activeIndex].title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i === 1
                      ? "block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
                      : "block"
                  }
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-gray-400 text-base md:text-lg opacity-90 font-light leading-relaxed">
              Experience a seamless integration of performance and aesthetics.
              Crafted for those who demand excellence in every pixel.
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-6 mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
          >
            Discovery Phase
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="bg-transparent border border-white/20 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-3 backdrop-blur-md"
          >
            <FaPlay size={10} className="text-white" /> Watch Film
          </motion.button>
        </div>
      </div>

      {/* 3. THE 3D INTERACTIVE CONTROL HUB (BOTTOM) */}
      <div className="absolute bottom-[-220px] left-1/2 -translate-x-1/2 z-20 perspective-[1500px]">
        {/* Navigation Floating Buttons */}
        <div className="absolute top-[180px] w-full flex justify-between px-[-100px] pointer-events-none">
          <button
            onClick={() => handleRotate("prev")}
            className="pointer-events-auto -translate-x-56 group w-14 h-14 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
          >
            <FaChevronLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => handleRotate("next")}
            className="pointer-events-auto translate-x-56 group w-14 h-14 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
          >
            <FaChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* The 3D Rotating Ring */}
        <motion.div
          animate={{ rotateX: 70, rotateZ: -activeIndex * angleStep }}
          transition={{ type: "spring", stiffness: 35, damping: 12 }}
          className="relative w-[700px] h-[700px] rounded-full border-[1px] border-white/10 shadow-[inset_0_0_50px_rgba(255,255,255,0.05)]"
        >
          {DATA.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={item.id}
                className="absolute top-0 left-0 w-full h-full"
                style={{ transform: `rotate(${index * angleStep}deg)` }}
              >
                <motion.div
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    scale: isActive ? 1.3 : 0.8,
                    rotateX: -70, // Anti-tilting icons
                    rotateZ: activeIndex * angleStep - index * angleStep,
                    y: isActive ? -20 : 0,
                  }}
                  className={`absolute top-[-40px] left-1/2 -translate-x-1/2 w-28 h-28 rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-700 group
                    ${isActive ? "bg-black/80 border-[3px]" : "bg-white/5 opacity-30 hover:opacity-100 hover:bg-white/10"}
                  `}
                  style={{
                    borderColor: isActive ? item.color : "transparent",
                    boxShadow: isActive ? `0 0 40px ${item.color}66` : "none",
                  }}
                >
                  <span
                    className={`text-4xl mb-1 filter drop-shadow-md transition-transform duration-500 ${isActive ? "scale-110" : "grayscale"}`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`text-[8px] font-black tracking-widest uppercase transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    {item.title.split(" ")[0]}
                  </span>
                </motion.div>

                {/* Radial Glow Lines */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[1px] h-[300px] origin-top transition-opacity duration-1000 ${isActive ? "bg-gradient-to-b from-white/40 to-transparent opacity-100" : "bg-white/5 opacity-20"}`}
                />
              </div>
            );
          })}

          {/* Inner Core Mechanism */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-white/5 bg-black/40 backdrop-blur-3xl flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-dashed border-white/20 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-40 h-40 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute w-12 h-12 bg-white rounded-full blur-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* 4. BOTTOM INDICATORS */}
      <div className="absolute bottom-10 left-10 flex flex-col gap-4 z-30">
        <div className="flex gap-2">
          {DATA.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-700 ${activeIndex === i ? "w-12 bg-white" : "w-4 bg-white/20"}`}
            />
          ))}
        </div>
        <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
          Scroll or Click to Navigate
        </p>
      </div>
    </div>
  );
};

export default LiquidHero;
