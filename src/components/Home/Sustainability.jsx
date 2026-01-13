import React from "react";
import {
  FaLeaf,
  FaArrowRight,
  FaSeedling,
  FaIndustry,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SustainabilitySection = () => {
  const points = [
    {
      id: "01",
      title: "Organic Sourcing",
      desc: "100% Post-consumer recycled fibers from sustainable forests.",
      icon: <FaLeaf />,
    },
    {
      id: "02",
      title: "Closed-Loop Water",
      desc: "80% Water recovery using advanced bio-filtration systems.",
      icon: <FaIndustry />,
    },
    {
      id: "03",
      title: "Renewable Energy",
      desc: "Our mills run on 95% on-site solar and wind energy production.",
      icon: <FaGlobe />,
    },
  ];

  return (
    <section className="relative bg-[#FDFCF8] py-24 overflow-hidden border-t border-slate-200">
      {/* 1. ANIMATED SECTION HEADER (Vertical Style) */}
      <div className="absolute left-10 top-24 hidden xl:block pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[12rem] font-black text-slate-100 leading-none uppercase -rotate-90 origin-top-left"
        >
          Earth
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT COLUMN: THE INTERACTIVE LIST */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 bg-red-600 text-white w-fit px-6 py-2 shadow-xl skew-x-[-10deg]"
            >
              <FaSeedling className="skew-x-[10deg]" />
              <span className="text-xs font-black uppercase tracking-[0.3em] skew-x-[10deg]">
                The Green Protocol
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[0.9] tracking-tighter">
              A Sheet <br /> That{" "}
              <span className="italic text-red-600">Breathes.</span>
            </h2>

            <div className="space-y-0 border-t border-slate-200 mt-12">
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 20 }}
                  className="group py-10 border-b border-slate-200 flex gap-8 items-start cursor-pointer transition-all"
                >
                  <span className="text-sm font-black text-red-600 font-mono">
                    {p.id}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors uppercase tracking-tight mb-2">
                      {p.title}
                    </h3>
                    <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 text-red-600 transition-opacity">
                    <FaArrowRight />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: THE "BIO-GRAPHIC" VISUAL */}
          <div className="lg:col-span-7 relative h-[600px] md:h-[800px] w-full">
            {/* Main Floating Image (Paper Mill with Nature) */}
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 z-10 shadow-[-50px_50px_100px_rgba(0,0,0,0.1)] grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 overflow-hidden border-[15px] border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"
                alt="Eco Milling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
            </motion.div>

            {/* Overlapping Counter Card */}
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-20 bg-slate-900 text-white p-12 shadow-2xl flex flex-col items-center justify-center text-center"
            >
              <div className="text-6xl font-black tracking-tighter mb-2">
                95%
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-500">
                Solar Power
              </div>
              <div className="mt-6 w-12 h-1 bg-red-600" />
            </motion.div>

            {/* Side-Vertical Text */}
            <div className="absolute top-1/2 -right-12 z-30 vertical-text font-black text-[10px] tracking-[1em] text-slate-400 uppercase opacity-50">
              Sustainability Report 2026
            </div>

            {/* Bottom Swatch Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-12 -left-12 z-20 bg-white p-8 shadow-2xl border-t-[8px] border-red-600 max-w-[280px]"
            >
              <h4 className="font-bold text-slate-900 mb-2">
                Net Zero Commitment
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                We are on track to become the world's first carbon-negative
                paper mill by 2030.
              </p>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-slate-100 border border-slate-200"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FOOTER: THE "PULSE" TICKER */}
      <div className="mt-32 w-full border-y border-slate-200 bg-white py-12">
        <div className="flex items-center gap-12 overflow-hidden whitespace-nowrap px-6">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-24 items-center"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-4xl font-serif italic text-slate-300">
                  Biodegradable Inks
                </span>
                <div className="w-3 h-3 bg-red-600 rotate-45" />
                <span className="text-4xl font-serif italic text-slate-300">
                  Forest Stewardship
                </span>
                <div className="w-3 h-3 bg-red-600 rotate-45" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/handmade-paper.png')`,
        }}
      />

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
};

export default SustainabilitySection;
