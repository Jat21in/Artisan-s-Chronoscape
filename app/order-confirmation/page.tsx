"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Package, Truck, MapPin, Calendar, Download, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const orderDetails = {
  orderNumber: "AC-2024-001234",
  orderDate: "March 15, 2024",
  estimatedDelivery: "March 22-24, 2024",
  trackingNumber: "1Z999AA1234567890",
  items: [
    {
      id: 1,
      name: "Midnight Ceramic Vase",
      artisan: "Kenji Nakamura",
      price: 285,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      certificateId: "AC-CERT-001234-A",
    },
    {
      id: 2,
      name: "Alpaca Wool Throw",
      artisan: "Maria Quispe",
      price: 195,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
      certificateId: "AC-CERT-001234-B",
    },
  ],
  shipping: {
    address: "123 Main Street, San Francisco, CA 94102",
    method: "Standard Shipping",
    cost: 15,
  },
  payment: {
    subtotal: 480,
    shipping: 15,
    tax: 39.6,
    total: 534.6,
  },
}

const journeySteps = [
  {
    id: 1,
    title: "Order Confirmed",
    description: "Your order has been received",
    completed: true,
    date: "Mar 15, 2:30 PM",
  },
  {
    id: 2,
    title: "Artisan Notified",
    description: "Craftspeople are preparing your items",
    completed: true,
    date: "Mar 15, 3:15 PM",
  },
  {
    id: 3,
    title: "Items Crafted",
    description: "Your pieces are being carefully finished",
    completed: false,
    date: "Expected Mar 18",
  },
  {
    id: 4,
    title: "Quality Check",
    description: "Final inspection and packaging",
    completed: false,
    date: "Expected Mar 19",
  },
  {
    id: 5,
    title: "Shipped",
    description: "Your collection begins its journey",
    completed: false,
    date: "Expected Mar 20",
  },
  {
    id: 6,
    title: "Delivered",
    description: "Your treasures arrive at your doorstep",
    completed: false,
    date: "Expected Mar 22-24",
  },
]

export default function OrderConfirmationPage() {
  const [confettiVisible, setConfettiVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setConfettiVisible(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Confetti Animation */}
      {confettiVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-serif font-light text-gray-900 mb-4">Thank You for Your Order!</h1>
          <p className="text-xl text-gray-600 mb-2">Your handcrafted treasures are being prepared with care</p>
          <p className="text-lg text-amber-600 font-medium">Order #{orderDetails.orderNumber}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-5 h-5" />
                  <span>Your Collection</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">by {item.artisan}</p>
                      <p className="text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          Certificate: {item.certificateId}
                        </Badge>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${item.price}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Journey Tracker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Your Order Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {journeySteps.map((step, index) => (
                    <div key={step.id} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {step.completed ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <span className="text-sm font-medium">{step.id}</span>
                          )}
                        </div>
                        {index < journeySteps.length - 1 && (
                          <div className={`w-0.5 h-8 ml-4 mt-2 ${step.completed ? "bg-green-200" : "bg-gray-200"}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <h3 className={`font-medium ${step.completed ? "text-gray-900" : "text-gray-500"}`}>
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                <Truck className="w-4 h-4 mr-2" />
                Track Your Order
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share Your Find
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${orderDetails.payment.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>${orderDetails.payment.shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${orderDetails.payment.tax}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${orderDetails.payment.total}</span>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="w-5 h-5" />
                  <span>Shipping Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">Delivery Address</p>
                  <p className="text-sm text-gray-600">{orderDetails.shipping.address}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Shipping Method</p>
                  <p className="text-sm text-gray-600">{orderDetails.shipping.method}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Estimated Delivery</p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {orderDetails.estimatedDelivery}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What's Next */}
            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>Order confirmation sent to your email</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>Artisans notified to begin crafting</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Package className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p>You'll receive updates as your items are prepared</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Truck className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p>Tracking information will be sent when shipped</p>
                </div>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <Card className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Discover More Treasures</h3>
                <p className="text-sm mb-4 opacity-90">
                  Explore more unique handcrafted pieces from our artisan community
                </p>
                <Link href="/collections">
                  <Button variant="secondary" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
