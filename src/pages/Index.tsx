import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const modules = [
    {
      id: 1,
      name: "AutoResponder",
      description: "Автоматические ответы на сообщения",
      functionality:
        "Настраиваемые автоответы, фильтры по ключевым словам, временные интервалы",
      installLink: "dl mod AutoResponder",
      version: "v2.1",
      category: "Утилиты",
      author: "Toxano",
      icon: "MessageSquare",
    },
    {
      id: 2,
      name: "MessageCleaner",
      description: "Массовое удаление сообщений",
      functionality:
        "Удаление по количеству, временному диапазону, типу контента",
      installLink: "dl mod MessageCleaner",
      version: "v1.8",
      category: "Модерация",
      author: "Toxano",
      icon: "Trash2",
    },
    {
      id: 3,
      name: "UserTracker",
      description: "Отслеживание активности пользователей",
      functionality: "Статистика сообщений, время онлайн, история никнеймов",
      installLink: "dl mod UserTracker",
      version: "v3.0",
      category: "Аналитика",
      author: "Toxano",
      icon: "BarChart3",
    },
    {
      id: 4,
      name: "MediaDownloader",
      description: "Скачивание медиа из чатов",
      functionality:
        "Автоскачивание фото/видео, сортировка по папкам, фильтры размера",
      installLink: "dl mod MediaDownloader",
      version: "v1.5",
      category: "Медиа",
      author: "Toxano",
      icon: "Download",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header */}
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

      {/* Hero Section */}
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
            Коллекция высококачественных модулей для расширения функционала
            вашего юзербота. Простая установка, надежная работа, регулярные
            обновления.
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

      {/* Modules Grid */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Каталог модулей
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card
                key={module.id}
                className="group backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                        <Icon
                          name={module.icon}
                          className="text-white"
                          size={20}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                          {module.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400 mt-1 text-base">
                          {module.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-purple-300">
                        {module.category}
                      </Badge>
                      <span className="text-sm text-gray-500 font-mono">
                        {module.version}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Icon name="Cpu" size={16} />
                      Функционал:
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {module.functionality}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900/50 border border-purple-500/20">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Icon name="Terminal" size={16} />
                      Команда установки:
                    </h4>
                    <div className="flex items-center gap-3">
                      <code className="flex-1 text-purple-300 font-mono bg-black/30 p-3 rounded text-sm">
                        {module.installLink}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400"
                        onClick={() => copyToClipboard(module.installLink)}
                      >
                        <Icon name="Copy" size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Icon name="User" size={16} />
                      Автор:{" "}
                      <span className="font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {module.author}
                      </span>
                    </span>
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Info */}
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

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-sm bg-white/5 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Toxano Modules. Все модули разработаны с{" "}
            <span className="text-red-400">❤️</span> для сообщества Hikka &
            Heroku
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
