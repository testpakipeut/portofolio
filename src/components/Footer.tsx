import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center mt-12">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer; 