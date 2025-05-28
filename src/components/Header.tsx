import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black bg-opacity-80 backdrop-blur shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-white animate-pulse">MonLogo</div>
        <ul className="flex space-x-6 text-white font-medium">
          <li><a href="#hero" className="hover:text-cyan-400 transition">Accueil</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">À propos</a></li>
          <li><a href="#experiences" className="hover:text-cyan-400 transition">Expériences</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Compétences</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projets</a></li>
          <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
          <li><a href="#devis" className="hover:text-cyan-400 transition">Devis</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 