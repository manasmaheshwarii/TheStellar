import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Clock, CheckCircle } from 'lucide-react';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Mock order data
  const mockOrders = {
    'ORD001': {
      id: 'ORD001',
      customerName: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@hospital.com',
      phone: '+1 (555) 123-4567',
      orderDate: '2024-01-15',
      totalAmount: '$45,000',
      items: [
        {
          name: 'Digital X-Ray System Pro',
          quantity: 1,
          price: '$45,000'
        }
      ],
      status: 'Ready for Pickup',
      statusHistory: [
        {
          status: 'Order Placed',
          date: '2024-01-15 10:30 AM',
          completed: true
        },
        {
          status: 'Processing',
          date: '2024-01-16 09:00 AM',
          completed: true
        },
        {
          status: 'Ready for Pickup',
          date: '2024-01-18 02:15 PM',
          completed: true
        },
        {
          status: 'Completed',
          date: '',
          completed: false
        }
      ]
    },
    'ORD002': {
      id: 'ORD002',
      customerName: 'Dr. Michael Chen',
      email: 'michael.chen@clinic.com',
      phone: '+1 (555) 987-6543',
      orderDate: '2024-01-20',
      totalAmount: '$32,000',
      items: [
        {
          name: 'Automated Blood Analyzer',
          quantity: 1,
          price: '$32,000'
        }
      ],
      status: 'Processing',
      statusHistory: [
        {
          status: 'Order Placed',
          date: '2024-01-20 11:45 AM',
          completed: true
        },
        {
          status: 'Processing',
          date: '2024-01-21 08:30 AM',
          completed: true
        },
        {
          status: 'Ready for Pickup',
          date: '',
          completed: false
        },
        {
          status: 'Completed',
          date: '',
          completed: false
        }
      ]
    }
  };

  const handleSearch = () => {
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const foundOrder = mockOrders[orderId.toUpperCase()];
      setOrderData(foundOrder || null);
      setIsSearching(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Order Placed':
        return 'bg-blue-500';
      case 'Processing':
        return 'bg-yellow-500';
      case 'Ready for Pickup':
        return 'bg-green-500';
      case 'Completed':
        return 'bg-stellar-600';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="w-5 h-5 text-white" />;
    }
    
    switch (status) {
      case 'Processing':
        return <Clock className="w-5 h-5 text-white" />;
      case 'Ready for Pickup':
      case 'Completed':
        return <Package className="w-5 h-5 text-white" />;
      default:
        return <Clock className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-stellar-800 mb-4">Track Your Order</h1>
          <p className="text-stellar-600">Enter your order ID to check the current status</p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 border-stellar-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter Order ID (e.g., ORD001)"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="border-stellar-200 focus:border-stellar-500"
                />
              </div>
              <Button 
                onClick={handleSearch}
                disabled={!orderId.trim() || isSearching}
                className="bg-stellar-600 hover:bg-stellar-700 text-white min-w-[120px]"
              >
                {isSearching ? (
                  'Searching...'
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Track Order
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Order Results */}
        {orderData && (
          <div className="space-y-6">
            {/* Order Details */}
            <Card className="border-stellar-200">
              <CardHeader>
                <CardTitle className="text-stellar-800">Order Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-stellar-800 mb-2">Order Information</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Order ID:</span> {orderData.id}</div>
                      <div><span className="font-medium">Order Date:</span> {orderData.orderDate}</div>
                      <div><span className="font-medium">Total Amount:</span> {orderData.totalAmount}</div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Status:</span>
                        <Badge className={`${getStatusColor(orderData.status)} text-white`}>
                          {orderData.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stellar-800 mb-2">Customer Information</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Name:</span> {orderData.customerName}</div>
                      <div><span className="font-medium">Email:</span> {orderData.email}</div>
                      <div><span className="font-medium">Phone:</span> {orderData.phone}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="border-stellar-200">
              <CardHeader>
                <CardTitle className="text-stellar-800">Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-stellar-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-stellar-800">{item.name}</h4>
                        <p className="text-sm text-stellar-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-lg font-semibold text-stellar-800">{item.price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Status Timeline */}
            <Card className="border-stellar-200">
              <CardHeader>
                <CardTitle className="text-stellar-800">Order Status Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.statusHistory.map((statusItem, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        statusItem.completed ? getStatusColor(statusItem.status) : 'bg-gray-300'
                      }`}>
                        {getStatusIcon(statusItem.status, statusItem.completed)}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${statusItem.completed ? 'text-stellar-800' : 'text-gray-500'}`}>
                          {statusItem.status}
                        </h4>
                        {statusItem.date && (
                          <p className="text-sm text-stellar-600">{statusItem.date}</p>
                        )}
                      </div>
                      {statusItem.completed && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Completed
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* No Order Found */}
        {orderId && orderData === null && !isSearching && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Order Not Found</h3>
              <p className="text-red-600">
                No order found with ID "{orderId}". Please check your order ID and try again.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Sample Order IDs */}
        <Card className="mt-8 border-stellar-200 bg-stellar-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-stellar-800 mb-2">Sample Order IDs for Testing:</h3>
            <div className="text-sm text-stellar-600 space-y-1">
              <div>• ORD001 - Ready for Pickup</div>
              <div>• ORD002 - Processing</div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default OrderTracking;