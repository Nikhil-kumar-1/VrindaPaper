import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFeather,
  FaArrowRight,
  FaChevronRight,
  FaRegPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    mill: [
      "Our Story",
      "The Process",
      "Certifications",
      "Sustainability",
      "Careers",
    ],
    products: [
      "Premium Matte",
      "Textured Silk",
      "Kraft Packaging",
      "Ivory Board",
      "Industrial Rolls",
    ],
    support: [
      "Catalogue",
      "Enquiry",
      "Privacy Policy",
      "Terms of Use",
      "Global Agents",
    ],
  };

  return (
    <footer className="relative bg-[#0f172a] text-slate-400 overflow-hidden pt-24">
      {/* 1. ANIMATED BACKGROUND RIPPLE (Paper Vibe) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-[600px] h-[600px] border border-slate-700 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 2. TOP SECTION: NEWSLETTER BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 md:p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-2xl font-serif italic text-white mb-2">
              Join the Registry
            </h3>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
              Stay updated with our latest fiber innovations.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-slate-950 border border-slate-700 px-6 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-slate-700"
            />
            <button className="bg-red-600 hover:bg-white hover:text-slate-900 text-white px-10 py-4 font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3">
              Subscribe <FaRegPaperPlane />
            </button>
          </div>
        </motion.div>

        {/* 3. MAIN LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white">
                <FaFeather size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter text-white leading-none">
                  PULP<span className="text-red-600">&</span>MILL
                </h2>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500">
                  Premium Standards
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
              Engineering the surface for your most valuable ideas. Since 1995,
              we have been the gold standard in sustainable milling and tactile
              paper design.
            </p>
            <div className="flex gap-4">
              {[
                <FaFacebookF />,
                <FaTwitter />,
                <FaLinkedinIn />,
                <FaInstagram />,
                <FaYoutube />,
              ].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#dc2626" }}
                  className="w-10 h-10 border border-slate-800 flex items-center justify-center text-slate-500 transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.3em] mb-8 border-l-2 border-red-600 pl-4">
              The Mill
            </h4>
            <ul className="space-y-4">
              {footerLinks.mill.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm hover:text-red-500 transition-colors flex items-center group"
                  >
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.3em] mb-8 border-l-2 border-red-600 pl-4">
              Grades
            </h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm hover:text-red-500 transition-colors flex items-center group"
                  >
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.3em] mb-8 border-l-2 border-red-600 pl-4">
              Head Office
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                <p className="text-sm leading-tight text-slate-500">
                  123 Industrial Hub, <br /> Gujarat, India 380001
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <FaPhoneAlt className="text-red-600 mt-1" />
                <p className="text-sm font-bold text-slate-300 tracking-tighter">
                  +91 22 1234 5678
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <FaEnvelope className="text-red-600 mt-1" />
                <p className="text-sm text-slate-300">sales@pulpmill.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="border-t border-slate-900 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest">
          <p className="text-slate-600">
            © {currentYear} Pulp & Mill Industries.{" "}
            <span className="text-slate-800 ml-2 italic">
              Crafted by Artisans.
            </span>
          </p>
          <div className="flex gap-8 text-slate-600">
            <a href="#" className="hover:text-red-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Cookies
            </a>
          </div>
          {/* Back to top with Mill Icon */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -5 }}
            className="w-10 h-10 bg-slate-900 flex items-center justify-center border border-slate-800 text-red-600"
          >
            <FaArrowRight className="-rotate-90" />
          </motion.button>
        </div>
      </div>

      {/* Industrial Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`,
        }}
      />
    </footer>
  );
};

export default Footer;
