import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, Package, Truck, CheckCircle } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  email: string;
  phone: string;
  products: string[];
  total: number;
  status: "processing" | "ready-for-pickup" | "completed";
  date: string;
  address: string;
}

const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      customer: "Dr. Sarah Johnson",
      email: "sarah.johnson@hospital.com",
      phone: "+1 (555) 123-4567",
      products: ["X-Ray Machine Model X200"],
      total: 45000,
      status: "processing",
      date: "2024-01-15",
      address: "123 Medical Center Dr, Healthcare City, HC 12345",
    },
    {
      id: "ORD-002",
      customer: "City General Hospital",
      email: "procurement@citygeneral.com",
      phone: "+1 (555) 987-6543",
      products: ["Surgical Instruments Set", "ECG Monitor"],
      total: 6800,
      status: "ready-for-pickup",
      date: "2024-01-14",
      address: "456 Hospital Ave, Medical District, MD 67890",
    },
    {
      id: "ORD-003",
      customer: "MedCare Clinic",
      email: "orders@medcare.com",
      phone: "+1 (555) 456-7890",
      products: ["Blood Analysis Machine"],
      total: 28000,
      status: "completed",
      date: "2024-01-12",
      address: "789 Clinic St, Healthcare Plaza, HP 54321",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "ready-for-pickup":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return Package;
      case "ready-for-pickup":
        return Truck;
      case "completed":
        return CheckCircle;
      default:
        return Package;
    }
  };

  const updateOrderStatus = (
    orderId: string,
    newStatus: "processing" | "ready-for-pickup" | "completed"
  ) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-stellar-800">
          Order Management
        </h2>
        <p className="text-stellar-600">View and update order status</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-stellar-800">All Orders</h3>
          {orders.map((order) => {
            const StatusIcon = getStatusIcon(order.status);
            return (
              <Card
                key={order.id}
                className="border-stellar-200 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent
                  className="p-6"
                  onClick={() => setSelectedOrder(order)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-stellar-100 rounded-full flex items-center justify-center">
                        <StatusIcon className="w-5 h-5 text-stellar-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stellar-800">
                          {order.id}
                        </h4>
                        <p className="text-sm text-stellar-600">
                          {order.customer}
                        </p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.replace("-", " ")}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-stellar-600">
                      Products: {order.products.join(", ")}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-stellar-800">
                        ₹{order.total.toLocaleString()}
                      </span>
                      <span className="text-sm text-stellar-500">
                        {order.date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Order Details */}
        {selectedOrder && (
          <Card className="border-stellar-200">
            <CardHeader>
              <CardTitle className="text-stellar-800 flex items-center justify-between">
                Order Details: {selectedOrder.id}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-stellar-200"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Full
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Customer Information */}
              <div>
                <h4 className="font-semibold text-stellar-800 mb-3">
                  Customer Information
                </h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {selectedOrder.customer}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {selectedOrder.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {selectedOrder.phone}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span>{" "}
                    {selectedOrder.address}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h4 className="font-semibold text-stellar-800 mb-3">
                  Order Items
                </h4>
                <div className="space-y-2">
                  {selectedOrder.products.map(
                    (product: string, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-stellar-50 rounded-lg"
                      >
                        <span className="text-stellar-800">{product}</span>
                        <span className="font-medium text-stellar-600">1x</span>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-4 pt-4 border-t border-stellar-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-stellar-800">
                      Total:
                    </span>
                    <span className="text-xl font-bold text-stellar-800">
                      ₹{selectedOrder.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Update */}
              <div>
                <h4 className="font-semibold text-stellar-800 mb-3">
                  Update Status
                </h4>
                <Select
                  value={selectedOrder.status}
                  onValueChange={(value) =>
                    updateOrderStatus(
                      selectedOrder.id,
                      value as "processing" | "ready-for-pickup" | "completed"
                    )
                  }
                >
                  <SelectTrigger className="border-stellar-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="ready-for-pickup">
                      Ready for Pickup
                    </SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
