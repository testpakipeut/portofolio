import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center mt-12">
      <div className="container mx-auto flex flex-col items-center gap-2">
        <div className="flex gap-4 mb-2">
          <a
            href="https://github.com/testpakipeut"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-80 transition"
          >
            <img src="/logos/github.png" alt="GitHub" width={28} height={28} style={{ display: 'inline-block' }} />
          </a>
          <a
            href="https://www.linkedin.com/in/zoumeye-toure-0b205467/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition"
          >
            <img src="/logos/linkedin.png" alt="LinkedIn" width={28} height={28} style={{ display: 'inline-block' }} />
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 