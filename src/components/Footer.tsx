import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 backdrop-blur-sm bg-white/5 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © 2024 Toxano Modules. Все модули разработаны с{" "}
          <span className="text-red-400">❤️</span> для сообщества Hikka & Heroku
        </p>
      </div>
    </footer>
  );
};

export default Footer;
