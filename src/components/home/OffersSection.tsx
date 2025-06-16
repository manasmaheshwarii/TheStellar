import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Star } from "lucide-react";

const OffersSection = () => {
  const limitedOffers = [
    {
      id: 1,
      title: "Flash Sale: A4 Monochrome (Photocopier)",
      description: "Save up to 10% on premium digital radiography equipment",
      discount: "10% OFF",
      timeLeft: "2 days left",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      category: "Radiography",
      urgent: true,
    },
    {
      id: 2,
      title: "Deal: A4 Monochrome MFP (Photocopier)",
      description: "Get essential pathology equipment package at special price",
      discount: "10% OFF",
      timeLeft: "5 days left",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop",
      category: "Pathology",
      urgent: false,
    },
    {
      id: 3,
      title: "New Launch: A3 Monochrome MFP(Photocopier)",
      description:
        "Latest technology with advanced AI diagnostics capabilities",
      discount: "LAUNCH PRICE",
      timeLeft: "Limited stock",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop",
      category: "Cardiology",
      urgent: false,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-stellar-900 to-stellar-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-red-500 hover:bg-red-600 text-white mb-4 text-sm px-4 py-1">
            <Zap className="w-4 h-4 mr-1" />
            Limited Time Offers
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Special Deals & Promotions
          </h2>
          <p className="text-stellar-200 text-lg max-w-2xl mx-auto">
            Don't miss out on these exclusive offers for premium medical
            equipment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {limitedOffers.map((offer) => (
            <Card
              key={offer.id}
              className="bg-white text-stellar-800 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge
                    className={`${
                      offer.urgent
                        ? "bg-red-500 animate-pulse"
                        : "bg-stellar-600"
                    } text-white`}
                  >
                    {offer.discount}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white border-stellar-300 text-stellar-700"
                  >
                    {offer.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div
                    className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm ${
                      offer.urgent
                        ? "bg-red-500 text-white"
                        : "bg-stellar-600 text-white"
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{offer.timeLeft}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-stellar-600 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-stellar-600 mb-4 text-sm">
                  {offer.description}
                </p>

                {/* <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stellar-500">
                      Original Price:
                    </span>
                    <span className="text-stellar-400 line-through">
                      {offer.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Sale Price:</span>
                    <span className="text-2xl font-bold text-green-600">
                      {offer.salePrice}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 font-semibold">
                      You Save: $
                      {parseInt(offer.originalPrice.replace(/[$,]/g, "")) -
                        parseInt(offer.salePrice.replace(/[$,]/g, ""))}
                    </span>
                  </div>
                </div> */}

                <div className="flex gap-3">
                  <Link to={`/product/${offer.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-stellar-300 text-stellar-700 hover:bg-stellar-50"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Link to="/chat" className="flex-1">
                    <Button className="w-full bg-stellar-600 hover:bg-stellar-700 text-white">
                      Claim Offer
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stellar-200 mb-4">
            Need help choosing the right equipment?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-stellar-800 hover:bg-white "
              >
                Chat with Expert
              </Button>
            </Link>
            {/* <a href="tel:+15551234567">
              <Button
                size="lg"
                className="bg-stellar-600 hover:bg-stellar-500 text-white"
              >
                Call for Consultation
              </Button>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
