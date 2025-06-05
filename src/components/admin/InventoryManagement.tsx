import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Search } from "lucide-react";

// Define the Product type
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
}

interface NewProductForm {
  name: string;
  category: string;
  price: string;
  stock: string;
  description: string;
}

const InventoryManagement = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "X-Ray Machine Model X200",
      category: "Radiography",
      price: 45000,
      stock: 5,
      description: "High-resolution digital X-ray machine",
    },
    {
      id: 2,
      name: "Blood Analysis Machine",
      category: "Pathology",
      price: 28000,
      stock: 3,
      description: "Automated blood chemistry analyzer",
    },
    {
      id: 3,
      name: "Surgical Instruments Set",
      category: "OT Equipment",
      price: 1200,
      stock: 25,
      description: "Complete surgical instruments kit",
    },
  ]);

  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleAddProduct = () => {
    if (
      newProduct.name &&
      newProduct.category &&
      newProduct.price &&
      newProduct.stock
    ) {
      const product = {
        id: Date.now(),
        name: newProduct.name,
        category: newProduct.category,
        price: parseInt(newProduct.price),
        stock: parseInt(newProduct.stock),
        description: newProduct.description,
      };
      setProducts([...products, product]);
      setNewProduct({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
      });
      setIsAddingProduct(false);
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
      description: product.description,
    });
  };
  const handleUpdateProduct = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...editingProduct,
                name: newProduct.name,
                category: newProduct.category,
                price: parseInt(newProduct.price),
                stock: parseInt(newProduct.stock),
                description: newProduct.description,
              }
            : p
        )
      );
      setEditingProduct(null);
      setNewProduct({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
      });
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-stellar-800">
            Inventory Management
          </h2>
          <p className="text-stellar-600">
            Add, edit, and manage your product inventory
          </p>
        </div>
        <Button
          onClick={() => setIsAddingProduct(true)}
          className="bg-stellar-600 hover:bg-stellar-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stellar-400 w-4 h-4" />
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-stellar-200"
        />
      </div>

      {/* Add/Edit Product Form */}
      {(isAddingProduct || editingProduct) && (
        <Card className="border-stellar-200">
          <CardHeader>
            <CardTitle className="text-stellar-800">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  placeholder="Enter product name"
                  className="border-stellar-200"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  placeholder="Enter category"
                  className="border-stellar-200"
                />
              </div>
              <div>
                <Label htmlFor="price">Price (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  placeholder="Enter price"
                  className="border-stellar-200"
                />
              </div>
              <div>
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input
                  id="stock"
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: e.target.value })
                  }
                  placeholder="Enter stock quantity"
                  className="border-stellar-200"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
                placeholder="Enter product description"
                className="border-stellar-200"
              />
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={
                  editingProduct ? handleUpdateProduct : handleAddProduct
                }
                className="bg-stellar-600 hover:bg-stellar-700"
              >
                {editingProduct ? "Update Product" : "Add Product"}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddingProduct(false);
                  setEditingProduct(null);
                  setNewProduct({
                    name: "",
                    category: "",
                    price: "",
                    stock: "",
                    description: "",
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

      {/* Products List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="border-stellar-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-stellar-800">
                    {product.name}
                  </h3>
                  <p className="text-stellar-600">{product.category}</p>
                  <p className="text-sm text-stellar-500 mt-1">
                    {product.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-lg font-bold text-stellar-800">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ₹{
                      product.stock < 10 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}
                    >
                      Stock: {product.stock}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditProduct(product)}
                    className="border-stellar-200"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteProduct(product.id)}
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

export default InventoryManagement;
