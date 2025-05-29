import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModuleGrid from "@/components/ModuleGrid";
import DeveloperInfo from "@/components/DeveloperInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <Header />
      <Hero />
      <ModuleGrid />
      <DeveloperInfo />
      <Footer />
    </div>
  );
};

export default Index;
