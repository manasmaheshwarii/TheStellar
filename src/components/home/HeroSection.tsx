import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-stellar-700 via-stellar-600 to-stellar-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Business Solutions for
              <span className="text-stellar-300"> Modern Enterprises</span>
            </h1>
            <p className="text-xl text-stellar-200 mb-8 leading-relaxed">
              Discover our comprehensive range of medical equipment,
              communication systems and medical consultation designed to enhance
              your business operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/category/office-automation">
                <Button
                  size="lg"
                  className="bg-stellar-600 hover:bg-stellar-500 text-white font-semibold px-8 py-3"
                >
                  Explore Products
                  <ArrowDown className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <div className="flex gap-3">
                <a href="tel:+15551234567">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white bg-transparent hover:bg-white hover:text-stellar-800"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <Link to="/chat">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white bg-transparent hover:bg-white hover:text-stellar-800"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-stellar-300">70+</div>
                <div className="text-stellar-200">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-stellar-300">24/7</div>
                <div className="text-stellar-200">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-stellar-300">10+</div>
                <div className="text-stellar-200">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-stellar-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-stellar-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">O</span>
                  </div>
                  <h3 className="font-semibold text-stellar-800 mb-2">
                    Medical Equipment
                  </h3>
                  <p className="text-stellar-600 text-sm">
                    Complete Healthcare solutions
                  </p>
                </div>

                <div className="bg-stellar-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-stellar-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">V</span>
                  </div>
                  <h3 className="font-semibold text-stellar-800 mb-2">Radio</h3>
                  <p className="text-stellar-600 text-sm">
                    CTI, MRI & CATH Lab
                  </p>
                </div>

                <div className="bg-stellar-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-stellar-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">M</span>
                  </div>
                  <h3 className="font-semibold text-stellar-800 mb-2">
                    Office Automation
                  </h3>
                  <p className="text-stellar-600 text-sm">
                    Printers & photocopiers
                  </p>
                </div>

                <div className="bg-stellar-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-stellar-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">T</span>
                  </div>
                  <h3 className="font-semibold text-stellar-800 mb-2">
                    Telephony
                  </h3>
                  <p className="text-stellar-600 text-sm">
                    Communication systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-stellar-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-stellar-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
