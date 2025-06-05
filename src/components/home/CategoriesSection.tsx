import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Office Automation",
      slug: "office-automation",
      description: "Photocopiers & Printers",
      productCount: "9+ Products",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      name: "Visual Solution",
      slug: "visual-solution",
      description: "Professional Display Systems & Touch Solutions",
      productCount: "6+ Products",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      name: "Purifiers",
      slug: "purifiers",
      description: "Home & Car Air Purification Systems",
      productCount: "7+ Products",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      gradient: "from-green-500 to-green-700",
    },
    {
      name: "Allans Medical",
      slug: "allans-medical",
      description: "X-Ray, Medical Equipment & Sonography",
      productCount: "13+ Products",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      name: "Adonis Medical",
      slug: "adonis-medical",
      description: "X-Ray & C-ARM Medical Machines",
      productCount: "8+ Products",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      gradient: "from-red-500 to-red-700",
    },
    {
      name: "COVID 19",
      slug: "covid-19",
      description: "Testing Solutions & Safety Equipment",
      productCount: "12+ Products",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      gradient: "from-cyan-500 to-cyan-700",
    },
    {
      name: "Unified Communications",
      slug: "unified-communications",
      description: "OpenScape Communication Systems",
      productCount: "13+ Products",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      name: "HP Series(EPABX)",
      slug: "hp-seriesepabx",
      description: "HP Communication & EPABX Solutions",
      productCount: "13+ Products",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      gradient: "from-teal-500 to-teal-700",
    },
  ];

  // ... keep existing code (return statement and JSX) the same
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-stellar-800 mb-4">
            Product Categories
          </h2>
          <p className="text-stellar-600 text-lg max-w-2xl mx-auto">
            Browse our comprehensive collection of products organized by
            category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.slug} to={`/category/${category.slug}`}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border-stellar-200 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">
                      {category.productCount}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-stellar-600 group-hover:text-stellar-700 transition-colors">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-stellar-600 group-hover:text-stellar-800 transition-colors">
                    <span className="text-sm font-medium">
                      Explore Category
                    </span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
