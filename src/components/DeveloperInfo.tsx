import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DeveloperInfo = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10 shadow-2xl">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-purple-500/30">
            <Icon name="Code" className="text-white" size={32} />
          </div>
          <h3 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              О разработчике
            </span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Опытный разработчик модулей для Hikka и Heroku юзерботов.
            Специализируюсь на создании надежных, производительных и удобных
            решений для автоматизации Telegram.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://t.me/Toxano_modules"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center gap-3"
            >
              <Icon name="Send" size={20} />
              Telegram канал
            </a>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 flex items-center gap-3"
              size="lg"
            >
              <Icon name="MessageCircle" size={20} />
              Поддержка
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperInfo;
