'use client';
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-12 text-center">
        À propos
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg text-gray-300 leading-relaxed">
          Passionné par le développement logiciel, je m&apos;engage à créer des solutions robustes et innovantes. Mon approche combine une expertise technique approfondie avec une attention particulière à la qualité du code et à l&apos;expérience utilisateur. Je m&apos;efforce constamment d&apos;améliorer mes compétences et de rester à jour avec les dernières technologies.
        </motion.p>
      </div>
    </section>
  );
};

export default About; 