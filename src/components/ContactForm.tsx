'use client';
import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-8 text-center">
        Contact
      </motion.h2>
      <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }} className="max-w-xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col space-y-4">
        <input type="text" placeholder="Nom" className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        <input type="email" placeholder="Email" className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        <textarea placeholder="Votre message" rows={5} className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        <button type="submit" className="mt-4 px-6 py-3 bg-cyan-500 rounded-lg text-white font-semibold shadow hover:bg-cyan-400 transition">Envoyer</button>
      </motion.form>
    </section>
  );
};

export default ContactForm; 