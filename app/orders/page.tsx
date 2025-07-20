"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Package, Truck, Check, Clock, Eye, Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

const orders = [
  {
    id: "AC-2024-001234",
    date: "March 15, 2024",
    status: "delivered",
    total: 534.6,
    trackingNumber: "1Z999AA1234567890",
    estimatedDelivery: "March 22-24, 2024",
    items: [
      {
        id: 1,
        name: "Midnight Ceramic Vase",
        artisan: "Kenji Nakamura",
        price: 285,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      },
      {
        id: 2,
        name: "Alpaca Wool Throw",
        artisan: "Maria Quispe",
        price: 195,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "AC-2024-001198",
    date: "February 28, 2024",
    status: "shipped",
    total: 285.0,
    trackingNumber: "1Z999AA1234567891",
    estimatedDelivery: "March 5-7, 2024",
    items: [
      {
        id: 3,
        name: "Silver Pendant Necklace",
        artisan: "Elena Vasquez",
        price: 145,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "AC-2024-001156",
    date: "February 15, 2024",
    status: "processing",
    total: 420.0,
    trackingNumber: null,
    estimatedDelivery: "March 1-3, 2024",
    items: [
      {
        id: 4,
        name: "Damascus Chef's Knife",
        artisan: "Robert MacLeod",
        price: 420,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=100&h=100&fit=crop",
      },
    ],
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <Check className="w-4 h-4" />
    case "shipped":
      return <Truck className="w-4 h-4" />
    case "processing":
      return <Clock className="w-4 h-4" />
    default:
      return <Package className="w-4 h-4" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800"
    case "shipped":
      return "bg-blue-100 text-blue-800"
    case "processing":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.artisan.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    const matchesStatus = selectedStatus === "all" || order.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-light text-gray-900 mb-4">My Orders</h1>
          <p className="text-lg text-gray-600">Track and manage your handcrafted treasures</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search orders by ID, product, or artisan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Tabs value={selectedStatus} onValueChange={setSelectedStatus} className="w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h2>
                <p className="text-gray-600 mb-6">
                  {searchQuery ? "Try adjusting your search terms" : "You haven't placed any orders yet"}
                </p>
                <Link href="/collections">
                  <Button className="bg-amber-600 hover:bg-amber-700">Start Shopping</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            filteredOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">Order #{order.id}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">Placed on {order.date}</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                      <Badge className={`${getStatusColor(order.status)} flex items-center space-x-1`}>
                        {getStatusIcon(order.status)}
                        <span className="capitalize">{order.status}</span>
                      </Badge>
                      <span className="font-semibold text-lg">${order.total}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">by {item.artisan}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                    {order.trackingNumber && (
                      <div>
                        <span className="font-medium text-gray-900">Tracking Number:</span>
                        <p className="text-gray-600">{order.trackingNumber}</p>
                      </div>
                    )}
                    <div>
                      <span className="font-medium text-gray-900">Estimated Delivery:</span>
                      <p className="text-gray-600">{order.estimatedDelivery}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/orders/${order.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>

                    {order.trackingNumber && (
                      <Button variant="outline" size="sm">
                        <Truck className="w-4 h-4 mr-2" />
                        Track Package
                      </Button>
                    )}

                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download Invoice
                    </Button>

                    {order.status === "delivered" && (
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Reorder
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Help Section */}
        <Card className="mt-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Have questions about your order? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">Contact Support</Button>
              <Button variant="outline">Return Policy</Button>
              <Button variant="outline">Shipping Info</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
