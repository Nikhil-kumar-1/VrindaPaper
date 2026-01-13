import React from "react";
import {
  FaArrowRight,
  FaPlayCircle,
  FaFeather,
  FaLeaf,
  FaBoxOpen,
  FaPrint,
  FaQuoteLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
    { value: "10k+", label: "Paper Varieties", icon: <FaBoxOpen /> },
    { value: "Eco", label: "Sustainable Art", icon: <FaLeaf /> },
    { value: "HD", label: "Print Ready", icon: <FaPrint /> },
    { value: "Light", label: "Ultra Premium", icon: <FaFeather /> },
  ];

  const paperGrades = [
    "TEXTURED SILK",
    "MATTE FINISH",
    "RECYCLED KRAFT",
    "IVORY BOARD",
    "GLOSSY COATED",
    "VINTAGE PARCHMENT",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#F8F7F2]">
      {/* 1. LAYERED BACKGROUND TEXTURE */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')`,
        }}
      />

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[40vw] h-[40vw] border-[1px] border-slate-200 rounded-full opacity-50"
        />
        {/* Floating Paper Shards */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * 100 + "vw", rotate: 0 }}
            animate={{
              y: "-10vh",
              x: Math.random() * 100 - 20 + "vw",
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-8 h-10 bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm rounded-sm"
          />
        ))}
      </div>

      {/* 2. MAIN GRID LAYOUT */}
      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT (Column 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-red-600"></div>
              <span className="text-xs font-bold tracking-[0.4em] text-red-600 uppercase">
                Est. 1995 | Premium Mill
              </span>
            </motion.div>

            <h1 className="text-7xl md:text-[100px] font-bold text-slate-900 leading-[0.85] tracking-tighter mb-8">
              UNFOLD <br />
              <span className="font-serif italic font-light text-red-600">
                Purity.
              </span>
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <p className="text-lg text-slate-500 max-w-sm leading-relaxed font-light border-l-2 border-red-100 pl-6 text-left">
                We believe every great idea starts on a blank canvas. Our paper
                is engineered for the most demanding artisans.
              </p>
              <div className="flex flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-900 text-white font-bold flex items-center gap-4 group shadow-2xl"
                >
                  Order Swatch Kit{" "}
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
                <button className="flex items-center justify-center gap-2 text-slate-900 font-bold hover:text-red-600 transition-colors uppercase text-sm tracking-widest">
                  <FaPlayCircle size={20} /> The Mill Story
                </button>
              </div>
            </div>

            {/* Stats - Floating Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/40 backdrop-blur-md p-4 border border-white/60 shadow-sm"
                >
                  <div className="text-red-600 mb-1">{s.icon}</div>
                  <div className="text-xl font-bold text-slate-800">
                    {s.value}
                  </div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL: THE "PAPER ARCHITECTURE" (Column 8-12) */}
          <div className="lg:col-span-5 relative h-[500px] md:h-[650px] flex items-center justify-center">
            {/* Main Overlapping Image Stack */}
            <motion.div
              style={{ rotateY: 15 }}
              animate={{ rotateY: -15 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="relative w-full h-full perspective-1000"
            >
              {/* Back Card */}
              <div className="absolute top-10 right-0 w-4/5 h-4/5 bg-red-600/5 border border-red-100 rotate-6" />

              {/* Middle Card (The Visual) */}
              <motion.div className="absolute inset-0 z-10 shadow-[-20px_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border-[12px] border-white">
                <img
                  src="https://plus.unsplash.com/premium_vector-1714618850159-9bbcde6e3b07?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                  alt="Paper Mill"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </motion.div>

              {/* Floating Quote Card */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 z-20 bg-white p-8 max-w-[240px] shadow-2xl border-t-4 border-red-600"
              >
                <FaQuoteLeft className="text-red-100 text-4xl absolute top-2 left-2 -z-10" />
                <p className="text-slate-600 italic text-sm mb-4 font-serif">
                  "The texture of this paper changed how I view my own art."
                </p>
                <p className="text-[10px] font-black uppercase text-slate-400">
                  — Sarah J., Designer
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. MODERN HORIZONTAL TICKER */}
      <div className="w-full bg-white border-t border-slate-200 overflow-hidden py-8">
        <div className="flex">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-24 items-center"
          >
            {[...paperGrades, ...paperGrades].map((grade, i) => (
              <div
                key={i}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <span className="text-5xl font-black text-transparent stroke-text opacity-20 group-hover:opacity-100 group-hover:text-slate-900 transition-all duration-500">
                  {grade}
                </span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2592/2592317.png"
                  alt="icon"
                  className="w-8 h-8 opacity-20 group-hover:rotate-12 transition-all"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #000;
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
