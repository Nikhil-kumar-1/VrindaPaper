import React, { useState, useEffect } from "react";
import {
  FaFeather,
  FaLeaf,
  FaArrowRight,
  FaHistory,
  FaMicrochip,
  FaQuoteRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [counts, setCounts] = useState({ years: 0, products: 0, export: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ years: 28, products: 150, export: 45 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-0 bg-[#FDFCF8] overflow-hidden">
      {/* 1. BACKGROUND DECORATION */}
      <div className="absolute top-10 left-[-5%] text-[15rem] font-black text-slate-200/20 select-none pointer-events-none uppercase tracking-tighter">
        Heritage
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
          {/* LEFT: THE VISUAL STACK */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              className="relative z-20 w-full aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-[12px] border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=600&auto=format&fit=crop&q=60"
                alt="Paper Mill"
                className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-6 border-l-4 border-red-600 shadow-xl">
                <p className="text-4xl font-black text-slate-900 tracking-tighter">
                  {counts.years}+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Years of Mastership
                </p>
              </div>
            </motion.div>
            <div className="absolute top-10 -right-8 w-full h-full bg-red-600/5 -z-10 rotate-3 border border-red-100" />
            <div className="absolute -bottom-8 -left-8 w-1/2 h-1/2 bg-slate-900 shadow-2xl -z-10 -rotate-6 flex items-end p-6">
              <FaFeather className="text-white/20 text-6xl" />
            </div>
          </div>

          {/* RIGHT: THE CONTENT */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-red-600"></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  Our Mill Story
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight mb-8">
                Blending Artistry <br />
                <span className="italic font-light text-slate-500">
                  with Innovation.
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                Founded on the principles of traditional papermaking,{" "}
                <span className="font-bold text-slate-900 underline decoration-red-600 decoration-2 underline-offset-4">
                  Pulp & Mill
                </span>{" "}
                has evolved into a global leader.
              </p>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-3 gap-8 mb-10">
                {[
                  { icon: <FaHistory />, title: "Legacy", val: counts.years },
                  {
                    icon: <FaMicrochip />,
                    title: "Global",
                    val: counts.export,
                  },
                  { icon: <FaLeaf />, title: "Eco", val: "100%" },
                ].map((f, i) => (
                  <div key={i} className="border-l border-slate-200 pl-4">
                    <div className="text-red-600 mb-2">{f.icon}</div>
                    <div className="text-xl font-bold text-slate-900">
                      {f.val}
                      {i < 2 ? "+" : ""}
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {f.title}
                    </div>
                  </div>
                ))}
              </div>

              <button className="group flex items-center gap-5 text-slate-900 font-black uppercase tracking-[0.2em] text-xs">
                Explore Our Heritage{" "}
                <FaArrowRight className="text-red-600 group-hover:translate-x-2 transition-all" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. TRANSITION DIVIDER (About aur Services ko alag karne ke liye) */}
      <div className="relative w-full h-32 md:h-48 mt-20">
        {/* Curved Overlapping Background */}
        <div className="absolute inset-0 bg-[#0f172a] rounded-t-[50%_100%] scale-x-125 translate-y-8" />

        {/* Floating Paper Quote Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 -top-12 z-30 bg-white p-8 shadow-2xl border-t-4 border-red-600 text-center max-w-lg w-[90%]"
        >
          <FaQuoteRight className="text-red-50/50 text-6xl absolute top-2 right-4 -z-10" />
          <h3 className="text-xl font-serif italic text-slate-800 mb-2">
            "Quality is not an act, it is a habit."
          </h3>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Our Founding Principle
          </p>
        </motion.div>
      </div>

      {/* 3. SUB-SECTION (Next start point for Services) */}
      <div className="bg-[#0f172a] w-full py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="flex justify-center gap-20 overflow-hidden whitespace-nowrap"
        >
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="text-white font-black text-6xl tracking-[0.5em] opacity-20 uppercase"
            >
              Premium Solutions • Industrial Milling • Sustainable Fiber •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cardboard-flat.png')`,
        }}
      />
    </section>
  );
};

export default AboutSection;
