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
import { Module } from "@/types/module";
import { copyToClipboard } from "@/utils/clipboard";

interface ModuleCardProps {
  module: Module;
  index: number;
}

const ModuleCard = ({ module, index }: ModuleCardProps) => {
  return (
    <Card
      className="group backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name={module.icon} className="text-white" size={20} />
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
  );
};

export default ModuleCard;
