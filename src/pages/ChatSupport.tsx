import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";

const ChatSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-stellar-800 mb-4">
            Contact Support
          </h1>
          <p className="text-stellar-600 text-lg">
            Get in touch with our expert team for any medical equipment
            inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp Contact */}
          <Card className="border-stellar-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-stellar-800 mb-4">
                WhatsApp Support
              </h3>
              <p className="text-stellar-600 mb-6">
                Chat with our support team instantly on WhatsApp for quick
                assistance.
              </p>
              <div className="space-y-3">
                <p className="text-stellar-700 font-medium">+ 91 9491399000</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Phone Contact */}
          <Card className="border-stellar-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-stellar-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-stellar-600" />
              </div>
              <h3 className="text-xl font-semibold text-stellar-800 mb-4">
                Phone Support
              </h3>
              <p className="text-stellar-600 mb-6">
                Speak directly with our medical equipment specialists for
                detailed consultations.
              </p>
              <div className="space-y-3">
                <p className="text-stellar-700 font-medium">+91 40 35564758</p>
                <Button
                  variant="outline"
                  className="w-full border-stellar-300 text-stellar-700 hover:bg-stellar-50"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <Card className="mt-8 border-stellar-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-stellar-800 mb-4">
              Support Hours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stellar-600">
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM EST</p>
              </div>
              <div>
                <p className="font-medium">Saturday</p>
                <p>10:00 AM - 4:00 PM EST</p>
              </div>
              <div>
                <p className="font-medium">Sunday</p>
                <p>Emergency support only</p>
              </div>
              <div>
                <p className="font-medium">Response Time</p>
                <p>Within 1 hour during business hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ChatSupport;
