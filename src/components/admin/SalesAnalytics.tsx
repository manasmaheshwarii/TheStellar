import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Package } from "lucide-react";

const SalesAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly");

  const dailySalesData = [
    { date: "Jan 15", sales: 25000, orders: 5 },
    { date: "Jan 16", sales: 18000, orders: 3 },
    { date: "Jan 17", sales: 32000, orders: 7 },
    { date: "Jan 18", sales: 45000, orders: 8 },
    { date: "Jan 19", sales: 28000, orders: 6 },
    { date: "Jan 20", sales: 35000, orders: 9 },
    { date: "Jan 21", sales: 42000, orders: 12 },
  ];

  const weeklySalesData = [
    { week: "Week 1", sales: 125000, orders: 24 },
    { week: "Week 2", sales: 145000, orders: 32 },
    { week: "Week 3", sales: 165000, orders: 28 },
    { week: "Week 4", sales: 185000, orders: 35 },
  ];

  const monthlySalesData = [
    { month: "Oct", sales: 450000, orders: 95 },
    { month: "Nov", sales: 520000, orders: 115 },
    { month: "Dec", sales: 620000, orders: 135 },
    { month: "Jan", sales: 580000, orders: 125 },
  ];

  const categoryData = [
    { name: "Radiography", value: 35, color: "#3b82f6" },
    { name: "Pathology", value: 25, color: "#10b981" },
    { name: "OT Equipment", value: 20, color: "#f59e0b" },
    { name: "Cardiology", value: 12, color: "#ef4444" },
    { name: "Dental", value: 8, color: "#8b5cf6" },
  ];

  const topProducts = [
    { name: "X-Ray Machine Model X200", sales: 225000, units: 5, trend: "up" },
    { name: "Blood Analysis Machine", sales: 168000, units: 6, trend: "up" },
    {
      name: "Surgical Instruments Set",
      sales: 96000,
      units: 80,
      trend: "down",
    },
    { name: "ECG Monitor", sales: 84000, units: 12, trend: "up" },
    { name: "Ultrasound Machine", sales: 72000, units: 3, trend: "up" },
  ];

  const chartConfig = {
    sales: {
      label: "Sales (₹)",
      color: "#3b82f6",
    },
    orders: {
      label: "Orders",
      color: "#10b981",
    },
  };

  const getCurrentData = () => {
    switch (selectedPeriod) {
      case "daily":
        return dailySalesData;
      case "weekly":
        return weeklySalesData;
      case "monthly":
        return monthlySalesData;
      default:
        return weeklySalesData;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-stellar-800">Sales Analytics</h2>
        <p className="text-stellar-600">
          Daily, weekly, and monthly sales insights with graphical trends
        </p>
      </div>

      <Tabs
        value={selectedPeriod}
        onValueChange={setSelectedPeriod}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-3 bg-stellar-100">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Trend Chart */}
          <Card className="border-stellar-200">
            <CardHeader>
              <CardTitle className="text-stellar-800">Sales Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={getCurrentData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey={
                        selectedPeriod === "daily"
                          ? "date"
                          : selectedPeriod === "weekly"
                          ? "week"
                          : "month"
                      }
                    />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke={chartConfig.sales.color}
                      strokeWidth={2}
                      dot={{ fill: chartConfig.sales.color }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Orders Chart */}
          <Card className="border-stellar-200">
            <CardHeader>
              <CardTitle className="text-stellar-800">Orders Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={getCurrentData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey={
                        selectedPeriod === "daily"
                          ? "date"
                          : selectedPeriod === "weekly"
                          ? "week"
                          : "month"
                      }
                    />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="orders"
                      fill={chartConfig.orders.color}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Distribution */}
          <Card className="border-stellar-200">
            <CardHeader>
              <CardTitle className="text-stellar-800">
                Sales by Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-₹{index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload[0]) {
                        return (
                          <div className="bg-white p-3 border border-stellar-200 rounded-lg shadow-lg">
                            <p className="font-medium">
                              {payload[0].payload.name}
                            </p>
                            <p className="text-stellar-600">
                              {payload[0].value}% of sales
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm text-stellar-600">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="border-stellar-200">
            <CardHeader>
              <CardTitle className="text-stellar-800">
                Top Selling Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-stellar-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-stellar-800">
                          {product.name}
                        </span>
                        {product.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-3 h-3 text-stellar-500" />
                          <span className="text-sm text-stellar-600">
                            ₹{product.sales.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Package className="w-3 h-3 text-stellar-500" />
                          <span className="text-sm text-stellar-600">
                            {product.units} units
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-stellar-100 text-stellar-800">
                      #{index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  );
};

export default SalesAnalytics;
