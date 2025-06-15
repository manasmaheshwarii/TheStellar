import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Database, Stethoscope } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-stellar-800 mb-4">
              Services
            </h1>
            <div className="w-24 h-1 bg-stellar-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Tele-Reporting Section */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-stellar-600 to-stellar-700 text-white p-8">
                  <div className="flex items-center mb-6">
                    <Stethoscope className="w-8 h-8 mr-4" />
                    <div>
                      <h2 className="text-2xl font-bold uppercase tracking-wide">
                        Tele-Reporting
                      </h2>
                      <h3 className="text-xl font-semibold">
                        Built for Teleradiology
                      </h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-white/90 mb-6 leading-relaxed">
                        THE STELLAR is dedicated to moving teleradiology forward
                        by delivering forward thinking technologies and
                        services. By offering custom technology and intelligent
                        workflows, we're able to help radiology groups
                        streamline processes, lower costs, and improve patient
                        care. Currently we offer online interpretation and
                        reporting services of the following modalities.
                      </p>

                      <p className="text-white/90 leading-relaxed">
                        Interpreting emergent and non emergent case studies with
                        efficiency and better clarity, THE STELLAR is one-stop
                        service provider to meet online radiology reporting
                        services with at most precision, accuracy and quality.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        "X Ray",
                        "CT",
                        "MRI",
                        "Mammograms",
                        "Nuclear Scans (PET SCAN)",
                      ].map((service, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-white" />
                          <span className="text-white font-medium">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Medical Equipment Procurement Section */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-stellar-500 to-stellar-600 text-white p-8">
                  <div className="flex items-center mb-6">
                    <Database className="w-8 h-8 mr-4" />
                    <h2 className="text-2xl font-bold uppercase tracking-wide">
                      Medical Equipment Procurement
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-white/90 leading-relaxed">
                      An extensive database of hospital/medical equipment,
                      built-up over the period, enables the company to provide
                      relevant information on price/quality analysis,
                      facilitating competitive procurement. With an extensive
                      knowledge of the medical equipment market, we provide
                      clients a procurement service that delivers the most
                      suitable product and achieves best value for money.
                    </p>

                    <p className="text-white/90 leading-relaxed">
                      We source new and refurbished high quality medical imaging
                      equipment and systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
