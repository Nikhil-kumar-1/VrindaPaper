import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaBuilding,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "The Mill",
      details: ["123 Industrial Valley", "Gujarat, India 380001"],
    },
    {
      icon: <FaPhoneAlt />,
      title: "Direct Line",
      details: ["+91 22 1234 5678", "+91 98765 43210"],
    },
    {
      icon: <FaEnvelope />,
      title: "Mailbox",
      details: ["hello@pulpmill.com", "sales@pulpmill.com"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section className="relative bg-[#FDFCF8] overflow-hidden">
      {/* --- 1. PREMIUM SECTION DIVIDER --- */}
      <div className="relative w-full h-48 bg-[#0f172a] flex items-center justify-center">
        {/* Paper Tear Effect SVG */}
        

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center z-10 pt-0"
        >
          <span className="text-[30px] font-black text-red-500 uppercase tracking-[0.5em] mb-2 block">
            Final Chapter
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter">
            Get In Touch
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 -mt-10 pb-32">
        <div className="grid lg:grid-cols-12 gap-1 bg-slate-200 shadow-2xl overflow-hidden border border-slate-200">
          {/* --- 2. LEFT: CONTACT FORM (Slate-900) --- */}
          <div className="lg:col-span-8 bg-[#0f172a] p-8 md:p-16">
            <div className="mb-12">
              <h3 className="text-3xl font-serif text-white mb-4 italic">
                Write a Letter.
              </h3>
              <p className="text-slate-400 font-light max-w-md">
                Have a custom paper requirement? Our mill experts respond within
                12 hours.
              </p>
            </div>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-8 p-6 bg-red-600 text-white flex items-center gap-4"
                >
                  <FaCheckCircle size={24} />
                  <div>
                    <p className="font-bold uppercase text-xs tracking-widest">
                      Message Dispatched
                    </p>
                    <p className="text-xs opacity-80">
                      We've received your inquiry and are reviewing the fibers.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="relative group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="md:col-span-2 relative group">
                <textarea
                  rows="4"
                  placeholder="Describe your project..."
                  required
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all resize-none placeholder:text-slate-600"
                />
              </div>

              <div className="md:col-span-2 mt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-xl"
                >
                  {isSubmitting ? "Dispatching..." : "Send Message"}
                </button>
                <div className="flex gap-6">
                  <FaWhatsapp className="text-slate-500 hover:text-red-500 cursor-pointer text-xl" />
                  <FaLinkedin className="text-slate-500 hover:text-red-500 cursor-pointer text-xl" />
                  <FaInstagram className="text-slate-500 hover:text-red-500 cursor-pointer text-xl" />
                </div>
              </div>
            </form>
          </div>

          {/* --- 3. RIGHT: CONTACT INFO (Ivory/White) --- */}
          <div className="lg:col-span-4 bg-white p-8 md:p-16 flex flex-col justify-between">
            <div className="space-y-16">
              {contactInfo.map((info, i) => (
                <div key={i} className="group">
                  <div className="text-red-600 text-xl mb-6 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">
                    {info.title}
                  </h4>
                  {info.details.map((text, j) => (
                    <p
                      key={j}
                      className="text-slate-800 font-serif italic text-lg leading-tight"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-slate-100">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-none group-hover:bg-red-600 transition-colors">
                  <FaClock size={14} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Mill Hours
                  </p>
                  <p className="text-xs font-black text-slate-800 uppercase">
                    Mon-Sat | 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')`,
        }}
      />
    </section>
  );
};

export default ContactSection;
