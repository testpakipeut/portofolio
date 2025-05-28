'use client';
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg"
      >
        Zoumeye TOURE
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
      >
        Bienvenue sur mon Portfolio
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl mb-8 max-w-2xl text-center"
      >
        Développeur web passionné par la création d'expériences modernes et animées.
      </motion.div>
      <div className="flex space-x-4">
        <a href="#projects" className="px-6 py-3 bg-cyan-500 rounded-lg text-white font-semibold shadow hover:bg-cyan-400 transition">Voir mes projets</a>
        <a href="#contact" className="px-6 py-3 border border-cyan-500 rounded-lg text-cyan-500 font-semibold hover:bg-cyan-500 hover:text-white transition">Me contacter</a>
      </div>
      <div className="absolute -z-10 w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-400 opacity-30 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection; 