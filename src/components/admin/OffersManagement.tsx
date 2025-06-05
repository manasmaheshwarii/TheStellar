import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Calendar, Percent } from "lucide-react";

// Define the Offer type
interface Offer {
  id: number;
  title: string;
  description: string;
  discount: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  products: string[];
}

interface NewOfferForm {
  title: string;
  description: string;
  discount: string;
  startDate: string;
  endDate: string;
  products: string;
}

const OffersManagement = () => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "New Year Medical Equipment Sale",
      description: "Get 20% off on all X-Ray machines and diagnostic equipment",
      discount: 20,
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      isActive: true,
      products: ["X-Ray Machine Model X200", "Blood Analysis Machine"],
    },
    {
      id: 2,
      title: "Surgical Instruments Bundle",
      description: "Buy 2 surgical instrument sets and get 1 free",
      discount: 33,
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      isActive: true,
      products: ["Surgical Instruments Set"],
    },
    {
      id: 3,
      title: "End of Year Clearance",
      description: "Up to 40% off on selected pathology equipment",
      discount: 40,
      startDate: "2023-12-15",
      endDate: "2023-12-31",
      isActive: false,
      products: ["Blood Test Kits", "Microscopes"],
    },
  ]);

  const [isAddingOffer, setIsAddingOffer] = useState(false);
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null);

  const [newOffer, setNewOffer] = useState({
    title: "",
    description: "",
    discount: "",
    startDate: "",
    endDate: "",
    products: "",
  });

  const handleAddOffer = () => {
    if (
      newOffer.title &&
      newOffer.description &&
      newOffer.discount &&
      newOffer.startDate &&
      newOffer.endDate
    ) {
      const offer = {
        id: Date.now(),
        title: newOffer.title,
        description: newOffer.description,
        discount: parseInt(newOffer.discount),
        startDate: newOffer.startDate,
        endDate: newOffer.endDate,
        isActive: new Date(newOffer.endDate) > new Date(),
        products: newOffer.products.split(",").map((p) => p.trim()),
      };
      setOffers([...offers, offer]);
      setNewOffer({
        title: "",
        description: "",
        discount: "",
        startDate: "",
        endDate: "",
        products: "",
      });
      setIsAddingOffer(false);
    }
  };

  const handleEditOffer = (offer: Offer) => {
    setEditingOffer(offer);
    setNewOffer({
      title: offer.title,
      description: offer.description,
      discount: offer.discount.toString(),
      startDate: offer.startDate,
      endDate: offer.endDate,
      products: offer.products.join(", "),
    });
  };

  const handleUpdateOffer = () => {
    if (editingOffer) {
      setOffers(
        offers.map((o) =>
          o.id === editingOffer.id
            ? {
                ...editingOffer,
                title: newOffer.title,
                description: newOffer.description,
                discount: parseInt(newOffer.discount),
                startDate: newOffer.startDate,
                endDate: newOffer.endDate,
                isActive: new Date(newOffer.endDate) > new Date(),
                products: newOffer.products.split(",").map((p) => p.trim()),
              }
            : o
        )
      );
      setEditingOffer(null);
      setNewOffer({
        title: "",
        description: "",
        discount: "",
        startDate: "",
        endDate: "",
        products: "",
      });
    }
  };

  const handleDeleteOffer = (id: number) => {
    setOffers(offers.filter((o) => o.id !== id));
  };

  const toggleOfferStatus = (id: number) => {
    setOffers(
      offers.map((o) => (o.id === id ? { ...o, isActive: !o.isActive } : o))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-stellar-800">
            Offers Management
          </h2>
          <p className="text-stellar-600">
            Create and manage limited-time offers
          </p>
        </div>
        <Button
          onClick={() => setIsAddingOffer(true)}
          className="bg-stellar-600 hover:bg-stellar-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Offer
        </Button>
      </div>

      {/* Add/Edit Offer Form */}
      {(isAddingOffer || editingOffer) && (
        <Card className="border-stellar-200">
          <CardHeader>
            <CardTitle className="text-stellar-800">
              {editingOffer ? "Edit Offer" : "Create New Offer"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Offer Title</Label>
              <Input
                id="title"
                value={newOffer.title}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, title: e.target.value })
                }
                placeholder="Enter offer title"
                className="border-stellar-200"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newOffer.description}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, description: e.target.value })
                }
                placeholder="Describe the offer details"
                className="border-stellar-200"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="discount">Discount (%)</Label>
                <Input
                  id="discount"
                  type="number"
                  value={newOffer.discount}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, discount: e.target.value })
                  }
                  placeholder="Enter discount percentage"
                  className="border-stellar-200"
                />
              </div>
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={newOffer.startDate}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, startDate: e.target.value })
                  }
                  className="border-stellar-200"
                />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={newOffer.endDate}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, endDate: e.target.value })
                  }
                  className="border-stellar-200"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="products">
                Applicable Products (comma-separated)
              </Label>
              <Input
                id="products"
                value={newOffer.products}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, products: e.target.value })
                }
                placeholder="Product 1, Product 2, Product 3"
                className="border-stellar-200"
              />
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={editingOffer ? handleUpdateOffer : handleAddOffer}
                className="bg-stellar-600 hover:bg-stellar-700"
              >
                {editingOffer ? "Update Offer" : "Create Offer"}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddingOffer(false);
                  setEditingOffer(null);
                  setNewOffer({
                    title: "",
                    description: "",
                    discount: "",
                    startDate: "",
                    endDate: "",
                    products: "",
                  });
                }}
                className="border-stellar-200"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Offers List */}
      <div className="grid grid-cols-1 gap-4">
        {offers.map((offer) => (
          <Card key={offer.id} className="border-stellar-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-stellar-800">
                      {offer.title}
                    </h3>
                    <Badge
                      className={
                        offer.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {offer.isActive ? "Active" : "Inactive"}
                    </Badge>
                    <Badge className="bg-stellar-100 text-stellar-800">
                      <Percent className="w-3 h-3 mr-1" />
                      {offer.discount}% OFF
                    </Badge>
                  </div>
                  <p className="text-stellar-600 mb-3">{offer.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-stellar-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {offer.startDate} to {offer.endDate}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-stellar-700">
                      Applicable Products:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {offer.products.map((product, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-stellar-200 text-stellar-600"
                        >
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleOfferStatus(offer.id)}
                    className={
                      offer.isActive
                        ? "border-red-200 text-red-600"
                        : "border-green-200 text-green-600"
                    }
                  >
                    {offer.isActive ? "Deactivate" : "Activate"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditOffer(offer)}
                    className="border-stellar-200"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteOffer(offer.id)}
                    className="border-red-200 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OffersManagement;
