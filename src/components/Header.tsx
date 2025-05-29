import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="relative z-10 backdrop-blur-sm bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Toxano Modules
              </h1>
              <p className="text-gray-400 font-medium">
                Hikka & Heroku Userbot Modules
              </p>
            </div>
          </div>
          <a
            href="https://t.me/Toxano_modules"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center gap-2"
          >
            <Icon name="Send" size={18} />
            Telegram канал
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
