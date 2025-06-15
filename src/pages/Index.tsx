import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import OffersSection from "@/components/home/OffersSection";
import ComplaintSection from "@/components/home/ComplaintSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <OffersSection />
        <ComplaintSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
