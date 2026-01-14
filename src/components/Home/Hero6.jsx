import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const JoeleUltimatePage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax: Niche scroll karne par text Navbar ke piche jayega
  const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-120%"]);
  const videoScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);

  // Direct Video MP4 Link (High Quality Traffic/City)
  const videoLink =
    "https://videos.pexels.com/video-files/857267/857267-hd_1920_1080_24fps.mp4";

  return (
    <div ref={containerRef} className="bg-white font-sans overflow-x-hidden">
      {/* 1. FIXED NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-10 py-8 bg-white border-b border-gray-100">
        <div className="flex  leading-none font-black text-2xl tracking-tighter">
          <span>Vrinda</span>
          <span className="text-red-500"> Paper</span>
        </div>
        <div className="font-bold text-[10px] tracking-widest uppercase cursor-pointer">
          MENU
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[160vh] w-full bg-black">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <motion.div
            style={{ scale: videoScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-50"
            >
              <source src={videoLink} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          {/* Masked Text Layer */}
          <motion.div
            style={{ y: textY }}
            className="relative z-10 w-full text-center mix-blend-screen bg-white h-full flex items-center justify-center"
          >
            {/* IMPORTANT: 
               1. text-black hona chahiye taaki mix-blend-screen ise transparent window banaye.
               2. bg-white text ke bahar ka area cover karega.
            */}
            <h1 className="text-[18vw] md:text-[15vw] font-black leading-[0.85] tracking-tighter uppercase text-black bg-white w-full py-20">
              TAKE <br /> CONTROL.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 3. TYPEWRITER GLOW SECTION */}
      <section className="relative z-30 bg-[#0a0a0a] py-48 px-10 md:px-24 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl">
          <motion.span className="text-green-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-12 block">
            OUR VISION
          </motion.span>
          <TypewriterGlowText text="We illuminate the path to success in a complex world, empowering leaders to navigate challenges with clarity and confidence." />
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-[#0a0a0a] text-white py-20 px-10 text-center border-t border-white/5">
        <div className="text-[10vw] font-black tracking-tighter opacity-10">
          JOELE FRANK
        </div>
      </footer>
    </div>
  );
};

// --- TYPEWRITER GLOW COMPONENT ---
const TypewriterGlowText = ({ text }) => {
  const words = text.split(" ");
  const container = useRef(null);
  const isInView = useInView(container, { once: false, amount: 0.2 });

  return (
    <div ref={container} className="flex flex-wrap max-w-5xl">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.05, filter: "blur(8px)", y: 15 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  filter: "blur(0px) brightness(1.3)",
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: "easeOut",
          }}
          className="text-4xl md:text-7xl font-bold text-white mr-[0.3em] mb-4 inline-block tracking-tight"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default JoeleUltimatePage;
