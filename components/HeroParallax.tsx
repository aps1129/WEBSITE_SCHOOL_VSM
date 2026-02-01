"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function HeroParallax() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/Photos/School.png"
          alt="VSM School Campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1e3a5f]/70 via-[#1e3a5f]/40 to-[#1e3a5f]/80" />

      {/* Content - CENTERED */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Main School Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight"
        >
          Vinita Singh Memorial School
        </motion.h1>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-[#d4a535] font-semibold mb-4"
        >
          Narora, Uttar Pradesh
        </motion.p>

        {/* CBSE Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full mb-10"
        >
          <span className="text-white text-sm sm:text-base font-medium">
            CBSE Affiliated • Affiliation No: 2132918
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/admissions"
            className="group px-8 py-4 rounded-full bg-[#d4a535] hover:bg-[#e5b84a] text-[#0f172a] font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            Admissions Open 2026-27
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
