import { Module } from "@/types/module";

export const modules: Module[] = [
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
