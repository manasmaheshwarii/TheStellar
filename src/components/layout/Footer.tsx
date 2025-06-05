import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stellar-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-stellar-400 to-stellar-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold">THE STELLAR</span>
            </div>
            <p className="text-stellar-300 mb-4">
              Your trusted partner for high-quality medical equipment and
              healthcare solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-stellar-300">
                <Phone className="w-4 h-4" />
                <span>+ 91 9491399000</span>
              </div>
              <div className="flex items-center space-x-2 text-stellar-300">
                <Mail className="w-4 h-4" />
                <span>sales@thestellar.in</span>
              </div>
              <div className="flex items-center space-x-2 text-stellar-300">
                <MapPin className="w-4 h-4" />
                <span>123 Medical District, Healthcare City</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/radiography"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Radiography
                </Link>
              </li>
              <li>
                <Link
                  to="/category/pathology"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Pathology
                </Link>
              </li>
              <li>
                <Link
                  to="/category/ot-equipment"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  OT Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="/category/cardiology"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Cardiology
                </Link>
              </li>
              <li>
                <Link
                  to="/category/dental"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Dental Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="/category/laboratory"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Laboratory
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/chat"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Chat Support
                </Link>
              </li>
              <li>
                <Link
                  to="/tracking"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/warranty"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-stellar-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
            <p className="text-stellar-300 mb-4">
              Need immediate assistance? Contact us now!
            </p>
            <div className="space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-2 bg-stellar-800 hover:bg-stellar-700 rounded-lg p-3 transition-colors"
              >
                <Phone className="w-5 h-5 text-stellar-300" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/15551234567"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 rounded-lg p-3 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stellar-800 mt-8 pt-8 text-center">
          <p className="text-stellar-400">
            © 2025 The Stellar. All rights reserved. | Designed for healthcare
            professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
