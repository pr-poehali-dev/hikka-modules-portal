import React from "react";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Профессиональные модули
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            для Hikka & Heroku
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Коллекция высококачественных модулей для расширения функционала вашего
          юзербота. Простая установка, надежная работа, регулярные обновления.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: "Rocket", text: "Быстрая установка" },
            { icon: "Settings", text: "Настраиваемые" },
            { icon: "Headphones", text: "Поддержка 24/7" },
            { icon: "Zap", text: "Регулярные обновления" },
          ].map((item, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Icon name={item.icon} size={16} className="mr-2" />
              {item.text}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
