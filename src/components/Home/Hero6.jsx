import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const JoeleFinalScrollPage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // REVERSED LOGIC:
  // 0 scroll par position 0% (Center mein dikhega)
  // 0.3 scroll hote hi position -100% (Navbar ke peeche chala jayega)
  const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-120%"]);

  // Video halki zoom hogi jab text upar jayega
  const videoScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5],
    [1, 1, 0.8]
  );

  return (
    <div ref={containerRef} className="bg-white font-sans overflow-x-hidden">
      {/* 1. FIXED NAVBAR (Iska z-index sabse zyada hai taaki text iske peeche chhup sake) */}
      <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-10 py-8 bg-white border-b border-gray-100">
        <div className="flex flex-col leading-none font-black text-2xl tracking-tighter">
          <span>JOELE</span>
          <span className="text-green-500">FRANK</span>
        </div>
        <div className="font-bold text-xs tracking-widest uppercase cursor-pointer">
          MENU
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[150vh] w-full bg-white">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background Video Layer */}
          <motion.div
            style={{ scale: videoScale, opacity: videoOpacity }}
            className="absolute inset-0 z-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/853826/853826-hd_1920_1080_25fps.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Masked Text: Niche scroll karne par ye Navbar (z-100) ke peeche chala jayega */}
          <motion.div
            style={{ y: textY }}
            className="relative z-10 w-full text-center mix-blend-screen bg-white h-full flex items-center justify-center"
          >
            <h1 className="text-[18vw] md:text-[14vw] font-black leading-[0.85] tracking-tighter uppercase text-black bg-white w-full py-20">
              TAKE <br /> CONTROL.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 3. GLOWING TEXT SECTION (Line by Line Reveal) */}
      <section className="relative z-30 bg-[#0a0a0a] py-40 px-10 md:px-24 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl">
          <motion.span className="text-green-500 font-bold tracking-widest text-xs uppercase mb-10 block">
            WHO WE ARE
          </motion.span>

          {/* Line by line glow reveal component */}
          <LineRevealText text="We are a strategic communications firm that helps our clients take control in their most critical moments—from bet-the-company situations to the ongoing execution of long-term business goals." />
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-40 border-t border-white/10 pt-20">
          <StatItem number="#1" label="U.S. M&A Advisor" />
          <StatItem number="104" label="Global Deals 2025" />
          <StatItem number="$600B+" label="Total Transaction Value" />
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-[#0a0a0a] text-white py-20 px-10 text-center border-t border-white/5">
        <div className="text-[10vw] font-black tracking-tighter opacity-10 mb-10">
          JOELE FRANK
        </div>
        <p className="text-green-500 font-bold tracking-[0.3em] uppercase font-mono">
          Precision. Perspective. Control.
        </p>
      </footer>
    </div>
  );
};

// Line by Line Glow Component
const LineRevealText = ({ text }) => {
  const words = text.split(" ");
  return (
    <div className="flex flex-wrap">
      {words.map((word, i) => (
        <Word key={i}>{word}</Word>
      ))}
    </div>
  );
};

const Word = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.span
      ref={ref}
      className="text-4xl md:text-6xl font-medium text-white mr-[0.3em] mb-4 inline-block"
      animate={{
        opacity: isInView ? 1 : 0.1,
        filter: isInView
          ? "blur(0px) brightness(1.3)"
          : "blur(4px) brightness(0.5)",
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
};

// Stat Item Component
const StatItem = ({ number, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col border-l border-white/20 pl-6"
  >
    <span className="text-6xl md:text-8xl font-black text-white">{number}</span>
    <span className="text-xs text-gray-400 uppercase tracking-[0.2em] mt-4 font-bold">
      {label}
    </span>
  </motion.div>
);

export default JoeleFinalScrollPage;
