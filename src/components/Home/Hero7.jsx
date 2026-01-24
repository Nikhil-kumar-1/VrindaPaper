import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaInfoCircle,
  FaArrowRight,
  FaExternalLinkAlt,
  FaRegClock,
} from "react-icons/fa";

const DATA = [
  {
    id: 1,
    title: "LIQUID INNOVATION",
    subtitle: "Fluid Technology Solutions",
    description:
      "Revolutionary fluid-based computing systems that adapt and evolve in real-time. Experience unprecedented processing power with our liquid-cooled quantum processors.",
    color: "#3b82f6",
    bg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    gradient: "from-blue-500 to-cyan-500",
    icon: "💧",
    stats: "12.4x Faster",
    duration: "45 sec",
  },
  {
    id: 2,
    title: "NEBULA STREAMS",
    subtitle: "Cosmic Data Networks",
    description:
      "Interstellar data transmission networks powered by quantum entanglement. Transfer petabytes of information across galactic distances in milliseconds.",
    color: "#a855f7",
    bg: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1822&auto=format&fit=crop",
    gradient: "from-purple-500 to-pink-500",
    icon: "🌌",
    stats: "99.99% Uptime",
    duration: "1:20",
  },
  {
    id: 3,
    title: "CYBER CORE",
    subtitle: "AI-Powered Security",
    description:
      "Advanced neural network security systems that learn and adapt to emerging threats. Protect your digital assets with self-evolving defense protocols.",
    color: "#10b981",
    bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1770&auto=format&fit=crop",
    gradient: "from-green-500 to-emerald-500",
    icon: "🤖",
    stats: "Zero Breaches",
    duration: "2:15",
  },
  {
    id: 4,
    title: "SOLAR ENERGY",
    subtitle: "Renewable Power Systems",
    description:
      "Harness the sun's limitless energy with our quantum solar panels. Achieve 98% efficiency with our proprietary photon-capture technology.",
    color: "#f59e0b",
    bg: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?q=80&w=1770&auto=format&fit=crop",
    gradient: "from-amber-500 to-orange-500",
    icon: "☀️",
    stats: "98% Efficiency",
    duration: "3:00",
  },
  {
    id: 5,
    title: "DEEP OCEAN",
    subtitle: "Submarine Computing",
    description:
      "Underwater data centers powered by oceanic thermal gradients. Eco-friendly computing solutions that leverage natural temperature differences.",
    color: "#06b6d4",
    bg: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1932&auto=format&fit=crop",
    gradient: "from-cyan-500 to-blue-500",
    icon: "🌊",
    stats: "Zero Carbon",
    duration: "1:45",
  },
  {
    id: 6,
    title: "CRIMSON VIBE",
    subtitle: "Quantum Resonance",
    description:
      "Harmonic frequency technology that synchronizes with quantum fields. Achieve perfect resonance for data transmission and energy transfer.",
    color: "#ef4444",
    bg: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1770&auto=format&fit=crop",
    gradient: "from-red-500 to-rose-500",
    icon: "🔥",
    stats: "100% Sync",
    duration: "50 sec",
  },
];

const LiquidHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const angleStep = 360 / DATA.length;

  const handleRotate = (direction) => {
    if (direction === "next") {
      setActiveIndex((prev) => (prev + 1) % DATA.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + DATA.length) % DATA.length);
    }
  };

  // Auto-rotate functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DATA.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const currentItem = DATA[activeIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${currentItem.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
        </AnimatePresence>

        {/* Multiple Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${currentItem.color}10 0%, transparent 50%)`,
          }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              initial={{ y: 0, x: Math.random() * 100 + "%" }}
              animate={{
                y: "100vh",
                x: Math.random() * 100 + "%",
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top Navigation Bar */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between px-8 pt-6"
        >
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                QUANTUM<span className="text-blue-400">TECH</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              {["Products", "Solutions", "Research", "Company"].map((item) => (
                <button
                  key={item}
                  className="hover:text-blue-300 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              {isAutoPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
              <span className="text-xs font-medium">
                {isAutoPlaying ? "Pause" : "Play"}
              </span>
            </button>
            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-semibold text-sm transition-all hover:scale-105">
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Main Content Area - Left Side */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-16">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ x: -50, opacity: 0, filter: "blur(10px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ x: 50, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-2">
                  <span className="text-xs font-bold tracking-widest uppercase">
                    {currentItem.subtitle}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: currentItem.color }}
                  />
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none">
                  <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    {currentItem.title.split(" ")[0]}
                  </span>
                  <span
                    className="block bg-gradient-to-r bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${currentItem.color}, ${currentItem.color}dd)`,
                    }}
                  >
                    {currentItem.title.split(" ").slice(1).join(" ")}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Stats and Info */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-2xl">{currentItem.icon}</span>
                    </div>
                    <div>
                      <div
                        className="text-2xl font-bold"
                        style={{ color: currentItem.color }}
                      >
                        {currentItem.stats}
                      </div>
                      <div className="text-sm text-gray-400">Performance</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <FaRegClock className="text-gray-300" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {currentItem.duration}
                      </div>
                      <div className="text-sm text-gray-400">Demo Duration</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-bold text-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
                    Explore Technology
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="group px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 font-bold text-lg flex items-center gap-3 transition-all">
                    <FaPlay size={14} />
                    Watch Demo
                    <FaExternalLinkAlt
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      size={12}
                    />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3D Wheel - Right Side */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div
              className="relative perspective-[1200px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Navigation Arrows */}
              <button
                onClick={() => handleRotate("prev")}
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all active:scale-95 group"
              >
                <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleRotate("next")}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all active:scale-95 group"
              >
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* The 3D Wheel */}
              <motion.div
                animate={{
                  rotateX: 70,
                  rotateZ: -activeIndex * angleStep,
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                }}
                className="relative w-[500px] h-[500px] rounded-full border-[12px] border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-[0_0_150px_rgba(255,255,255,0.08)]"
              >
                {/* Outer Glow Ring */}
                <div
                  className="absolute -inset-8 rounded-full border-[2px] border-white/5 blur-xl"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${currentItem.color}20 0%, transparent 70%)`,
                  }}
                />

                {/* Wheel Slices */}
                {DATA.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div
                      key={item.id}
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ transform: `rotate(${index * angleStep}deg)` }}
                    >
                      {/* Connection Line */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1px] h-[220px] bg-gradient-to-t from-white/0 via-white/20 to-white/0 origin-top" />

                      {/* Slice Item */}
                      <motion.div
                        onClick={() => setActiveIndex(index)}
                        animate={{
                          scale: isActive ? 1.3 : 0.85,
                          rotateX: -70,
                          rotateZ: activeIndex * angleStep - index * angleStep,
                          y: isActive ? -20 : 0,
                        }}
                        whileHover={{ scale: 1.1 }}
                        className={`absolute top-[-50px] left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-500 backdrop-blur-md
                          ${isActive ? "shadow-2xl" : "opacity-60 hover:opacity-90"}
                        `}
                        style={{
                          background: isActive
                            ? `linear-gradient(135deg, ${item.color}dd, ${item.color}99)`
                            : "rgba(255,255,255,0.1)",
                          border: isActive
                            ? `2px solid ${item.color}`
                            : "1px solid rgba(255,255,255,0.1)",
                          boxShadow: isActive
                            ? `0 0 40px ${item.color}80, inset 0 0 20px ${item.color}40`
                            : "none",
                        }}
                      >
                        <span className="text-3xl mb-1">{item.icon}</span>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold tracking-widest bg-black/30 px-2 py-0.5 rounded-full"
                          >
                            {item.id}
                          </motion.span>
                        )}
                      </motion.div>
                    </div>
                  );
                })}

                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-[2px] border-white/20 bg-black/80 backdrop-blur-xl flex items-center justify-center shadow-inner">
                  <div className="w-28 h-28 rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite]" />
                  <div className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white]" />
                  <div className="absolute text-center">
                    <div className="text-sm font-bold">TECH</div>
                    <div className="text-[10px] text-gray-400">WHEEL</div>
                  </div>
                </div>

                {/* Active Indicator Ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full border-[3px] border-transparent"
                  animate={{
                    borderColor: `${currentItem.color}40`,
                    boxShadow: `0 0 60px ${currentItem.color}20`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Current Item Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center"
              >
                <div className="text-sm text-gray-400 mb-2">
                  Currently Selected
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg">
                    {currentItem.icon}
                  </div>
                  <div className="text-xl font-bold">{currentItem.title}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Controls & Indicators */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            {/* Progress Dots */}
            <div className="flex justify-center items-center gap-8">
              <div className="flex gap-3">
                {DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative transition-all duration-500 ${activeIndex === i ? "w-10" : "w-3"} h-1.5 rounded-full`}
                    style={{
                      backgroundColor:
                        activeIndex === i
                          ? currentItem.color
                          : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {activeIndex === i && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute -top-1 -left-1 w-12 h-3.5 rounded-full border border-white/20"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Current Position */}
              <div className="text-sm text-gray-400">
                <span className="font-bold text-white">{activeIndex + 1}</span>
                <span className="mx-1">/</span>
                <span>{DATA.length}</span>
              </div>

              {/* Auto-play Indicator */}
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-500"}`}
                />
                <span className="text-sm text-gray-400">
                  {isAutoPlaying ? "Auto-rotating" : "Paused"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidHero;
