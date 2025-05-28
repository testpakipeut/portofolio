'use client';
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-8 text-center">
        À propos de moi
      </motion.h2>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }} className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
        <p>
          Passionné par le développement informatique, je cultive un intérêt particulier pour la qualité, la robustesse et la pérennité des livrables. Spécialisé dans le développement web, j'aime concevoir des interfaces modernes, animées et accessibles, alliant esthétisme et performance. Curieux, rigoureux et créatif, je m'investis pleinement dans chaque projet afin d'offrir une expérience utilisateur optimale et durable.
        </p>
      </motion.div>
    </section>
  );
};

export default About; 