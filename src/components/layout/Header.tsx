import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, Phone, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Office Automation",
    "Visual Solution",
    "Purifiers",
    "Allans Medical",
    "Adonis Medical",
    "COVID 19",
    "Unified Communications",
    "HP Series(EPABX)",
  ];

  // ... keep existing code (component JSX and return statement) the same
  return (
    <header className="bg-white shadow-lg border-b border-stellar-200">
      {/* Top Bar */}
      <div className="bg-stellar-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 40 35564758</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
          </div>
          {/* <div className="hidden md:block">
            <span>Free shipping on orders over $500</span>
          </div> */}
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-stellar-600 to-stellar-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-stellar-800">
              THE STELLAR
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search medical equipment..."
                className="pl-10 pr-4 py-2 w-full border-stellar-200 focus:border-stellar-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stellar-400 w-4 h-4" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/chat">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex items-center space-x-2 border-stellar-200 text-stellar-700 hover:bg-stellar-50"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Support</span>
              </Button>
            </Link>
            <Link to="/tracking">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-stellar-200 text-stellar-700 hover:bg-stellar-50"
              >
                Track Order
              </Button>
            </Link>
            <Link to="/admin">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex items-center space-x-2 border-stellar-200 text-stellar-700 hover:bg-stellar-50"
              >
                <Shield className="w-4 h-4" />
                <span>Admin</span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block mt-4">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-stellar-700 hover:text-stellar-800 font-medium transition-colors"
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/\(/g, "")
                  .replace(/\)/g, "")}`}
                className="text-stellar-600 hover:text-stellar-800 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-stellar-200">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search medical equipment..."
                  className="pl-10 pr-4 py-2 w-full border-stellar-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stellar-400 w-4 h-4" />
              </div>
              <nav className="space-y-2">
                <Link
                  to="/"
                  className="block text-stellar-700 hover:text-stellar-800 font-medium py-2"
                >
                  Home
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/\(/g, "")
                      .replace(/\)/g, "")}`}
                    className="block text-stellar-600 hover:text-stellar-800 py-2"
                  >
                    {category}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/chat" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-stellar-200 text-stellar-700"
                  >
                    Chat Support
                  </Button>
                </Link>
                <Link to="/tracking" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-stellar-200 text-stellar-700"
                  >
                    Track Order
                  </Button>
                </Link>
                <Link to="/admin" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-stellar-200 text-stellar-700"
                  >
                    Admin
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
