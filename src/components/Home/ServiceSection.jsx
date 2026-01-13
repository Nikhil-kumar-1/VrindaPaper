import React from "react";
import {
  FaLeaf,
  FaRecycle,
  FaTruck,
  FaWarehouse,
  FaArrowRight,
  FaFingerprint,
  FaCogs,
  FaShippingFast,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaFingerprint />,
    title: "Bespoke Textures",
    desc: "Custom-engineered fiber patterns and unique tactile finishes for luxury branding.",
    tag: "Customization",
  },
  {
    icon: <FaCogs />,
    title: "Sustainable Milling",
    desc: "Advanced eco-milling technology reduces water waste by 40% using organic fibers.",
    tag: "Eco-Tech",
  },
  {
    icon: <FaShippingFast />,
    title: "Express Logistics",
    desc: "Global supply chain network ensures paper delivery within 7-10 business days.",
    tag: "Global",
  },
  {
    icon: <FaWarehouse />,
    title: "Volume Management",
    desc: "Smart inventory systems for industrial-scale bulk requirements and warehousing.",
    tag: "Industrial",
  },
];

const HomeServices = () => {
  return (
    <section className="relative py-32 bg-[#FDFCF8] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[20rem] font-black leading-none">SERVICES</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[2px] bg-red-600"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600">
                Capabilities
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight"
            >
              High-Performance <br />
              <span className="italic font-light text-slate-400 underline decoration-red-100 decoration-8 underline-offset-[-2px]">
                Paper Engineering
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-sm text-lg font-light leading-relaxed border-l-2 border-slate-100 pl-8"
          >
            We provide specialized solutions that bridge the gap between
            traditional craftsmanship and modern industrial demands.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ backgroundColor: "#0f172a" }} // Slate-900 on hover
              className="group relative p-10 bg-white border-r border-b border-slate-200 transition-all duration-500 cursor-pointer overflow-hidden min-h-[400px] flex flex-col justify-between"
            >
              {/* Top Section */}
              <div>
                <div className="text-red-600 text-3xl mb-8 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 block group-hover:text-red-400">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors duration-500 text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="mt-12 flex items-center justify-between">
                <motion.div
                  initial={{ width: "20px" }}
                  whileHover={{ width: "100%" }}
                  className="h-[1px] bg-red-600"
                />
                <FaArrowRight className="text-slate-200 group-hover:text-red-600 group-hover:translate-x-2 transition-all duration-500" />
              </div>

              {/* Background Subtle Numbering */}
              <span className="absolute bottom-[-20px] right-[-10px] text-8xl font-black text-slate-50 opacity-0 group-hover:opacity-10 transition-opacity">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <p className="text-slate-400 font-medium">
            Need a specialized paper grade?
          </p>
          <button className="px-12 py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl hover:-translate-y-1">
            Consult our mill expert
          </button>
        </motion.div>
      </div>

      {/* Tactile Texture Layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')`,
        }}
      />
    </section>
  );
};

export default HomeServices;
