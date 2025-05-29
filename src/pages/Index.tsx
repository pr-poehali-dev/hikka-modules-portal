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
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Toxano Modules
                </h1>
                <p className="text-sm text-gray-600">
                  Hikka & Heroku Userbot Modules
                </p>
              </div>
            </div>
            <a
              href="https://t.me/Toxano_modules"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              📱 Telegram канал
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Профессиональные модули для
            <span className="text-orange-500"> Hikka & Heroku</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Коллекция высококачественных модулей для расширения функционала
            вашего юзербота. Простая установка, надежная работа, регулярные
            обновления.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-3 py-1">
              🚀 Быстрая установка
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              🔧 Настраиваемые
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              📱 Поддержка 24/7
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              ⚡ Регулярные обновления
            </Badge>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Каталог модулей
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Card
                key={module.id}
                className="hover:shadow-lg transition-shadow border-orange-100 hover:border-orange-200"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {module.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {module.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant="outline"
                        className="border-orange-200 text-orange-700"
                      >
                        {module.category}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {module.version}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Функционал:
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {module.functionality}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Команда установки:
                      </h4>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <code className="text-sm font-mono text-gray-800">
                          {module.installLink}
                        </code>
                        <Button
                          size="sm"
                          variant="outline"
                          className="ml-2 h-7 px-2"
                          onClick={() => copyToClipboard(module.installLink)}
                        >
                          📋 Копировать
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-gray-500">
                        Автор:{" "}
                        <span className="font-medium text-orange-600">
                          {module.author}
                        </span>
                      </span>
                      <Button
                        variant="default"
                        className="bg-orange-500 hover:bg-orange-600"
                      >
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Info */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">T</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              О разработчике
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Опытный разработчик модулей для Hikka и Heroku юзерботов.
              Специализируюсь на создании надежных, производительных и удобных
              решений для автоматизации Telegram.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://t.me/Toxano_modules"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                📱 Telegram канал
              </a>
              <Button
                variant="outline"
                className="border-orange-200 text-orange-700 hover:bg-orange-50"
              >
                💬 Поддержка
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-orange-100 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2024 Toxano Modules. Все модули разработаны с ❤️ для сообщества
            Hikka & Heroku
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
