import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  ShoppingCart,
  Package,
  AlertTriangle,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "₹125,430",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Active Orders",
      value: "24",
      change: "+3 new",
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Low Stock Items",
      value: "8",
      change: "2 critical",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      title: "Customer Inquiries",
      value: "15",
      change: "5 pending",
      icon: MessageCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const recentInquiries = [
    {
      id: 1,
      customer: "Dr. Smith",
      product: "X-Ray Machine Model X200",
      time: "2 hours ago",
      status: "pending",
    },
    {
      id: 2,
      customer: "City Hospital",
      product: "Surgical Instruments Set",
      time: "4 hours ago",
      status: "responded",
    },
    {
      id: 3,
      customer: "MedCare Clinic",
      product: "Blood Analysis Machine",
      time: "6 hours ago",
      status: "pending",
    },
    {
      id: 4,
      customer: "Dr. Johnson",
      product: "ECG Monitor",
      time: "1 day ago",
      status: "resolved",
    },
  ];

  const stockAlerts = [
    {
      product: "X-Ray Films (Box)",
      stock: 5,
      threshold: 20,
      status: "critical",
    },
    { product: "Surgical Gloves", stock: 12, threshold: 50, status: "low" },
    { product: "Blood Test Kits", stock: 8, threshold: 25, status: "critical" },
    { product: "Stethoscope Classic", stock: 15, threshold: 30, status: "low" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-stellar-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-stellar-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-stellar-800">
                    {stat.value}
                  </p>
                  <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Customer Inquiries */}
        <Card className="border-stellar-200">
          <CardHeader>
            <CardTitle className="text-stellar-800">
              Recent Customer Inquiries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="flex items-center justify-between p-3 bg-stellar-50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium text-stellar-800">
                      {inquiry.customer}
                    </p>
                    <p className="text-sm text-stellar-600">
                      {inquiry.product}
                    </p>
                    <p className="text-xs text-stellar-500">{inquiry.time}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      inquiry.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : inquiry.status === "responded"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {inquiry.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stock Alerts */}
        <Card className="border-stellar-200">
          <CardHeader>
            <CardTitle className="text-stellar-800">Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stockAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-stellar-50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium text-stellar-800">
                      {alert.product}
                    </p>
                    <p className="text-sm text-stellar-600">
                      Stock: {alert.stock} / Threshold: {alert.threshold}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      alert.status === "critical"
                        ? "bg-red-100 text-red-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {alert.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
