import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "A3 Business Color MFP",
      category: "Office Automation",
      price: "₹8,500",
      originalPrice: "₹9,200",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop",
      inStock: true,
      isNew: true,
      description:
        "Professional A3 color multifunction printer for modern offices",
    },
    {
      id: 7,
      name: "FP-J80M-H Home Purifier",
      category: "Purifiers",
      price: "₹450",
      originalPrice: "₹520",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      inStock: true,
      isNew: false,
      description: "Advanced home air purification system with HEPA filtration",
    },
    {
      id: 11,
      name: "100 MA X-Ray Machine",
      category: "Allans Medical",
      price: "₹45,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      isNew: true,
      description:
        "High-capacity X-ray imaging system for professional healthcare",
    },
    {
      id: 15,
      name: "C-Arm High Frequency",
      category: "Adonis Medical",
      price: "₹85,000",
      originalPrice: "₹92,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      inStock: true,
      isNew: false,
      description:
        "High-frequency C-arm surgical imaging for precise operations",
    },
    {
      id: 17,
      name: "COVID 19 Testing AI Software",
      category: "COVID 19",
      price: "₹15,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      isNew: true,
      description: "AI-powered COVID testing solution with automated analysis",
    },
    {
      id: 21,
      name: "OpenScape Business",
      category: "Telephony",
      price: "₹12,000",
      originalPrice: "₹14,500",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      isNew: false,
      description:
        "Complete business communication solution with unified features",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-stellar-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-stellar-800 mb-4">
            Featured Products
          </h2>
          <p className="text-stellar-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium products designed to
            enhance your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border-stellar-200 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      New
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-white">
                      Sale
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={product.inStock ? "default" : "destructive"}
                    className={
                      product.inStock
                        ? "bg-stellar-600 hover:bg-stellar-700"
                        : ""
                    }
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge
                    variant="outline"
                    className="text-stellar-600 border-stellar-300"
                  >
                    {product.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-stellar-800 mb-2 group-hover:text-stellar-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-stellar-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-stellar-800">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-stellar-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                <Link to={`/product/${product.id}`} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-stellar-300 text-stellar-700 hover:bg-stellar-50"
                  >
                    View Details
                  </Button>
                </Link>
                <Link to="/chat" className="flex-1">
                  <Button
                    className="w-full bg-stellar-600 hover:bg-stellar-700 text-white"
                    disabled={!product.inStock}
                  >
                    Contact to Order
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/category/all">
            <Button
              size="lg"
              variant="outline"
              className="border-stellar-300 text-stellar-700 hover:bg-stellar-50 px-8"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
