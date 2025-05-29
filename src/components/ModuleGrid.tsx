import React from "react";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/data/modules";

const ModuleGrid = () => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Каталог модулей
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleGrid;
