"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, CreditCard, Truck, Shield, Gift, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const orderItems = [
  {
    id: 1,
    name: "Midnight Ceramic Vase",
    artisan: "Kenji Nakamura",
    price: 285,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    estimatedDelivery: "5-7 days",
  },
  {
    id: 2,
    name: "Alpaca Wool Throw",
    artisan: "Maria Quispe",
    price: 195,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
    estimatedDelivery: "7-10 days",
  },
]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })
  const [giftMessage, setGiftMessage] = useState("")
  const [saveInfo, setSaveInfo] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 15
  const tax = (subtotal + shipping) * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    // Simulate payment processing
    setCurrentStep(4)

    // In a real app, this would integrate with Stripe or another payment processor
    setTimeout(() => {
      window.location.href = "/order-confirmation"
    }, 2000)
  }

  const steps = [
    { id: 1, name: "Information", icon: Truck },
    { id: 2, name: "Shipping", icon: Truck },
    { id: 3, name: "Payment", icon: CreditCard },
    { id: 4, name: "Complete", icon: Check },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Cart</span>
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AC</span>
            </div>
            <span className="font-serif text-xl font-semibold text-gray-900">Artisan's Chronoscape</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.id ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span
                  className={`ml-2 text-sm font-medium ${currentStep >= step.id ? "text-amber-600" : "text-gray-500"}`}
                >
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 ml-4 ${currentStep > step.id ? "bg-amber-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" checked={newsletter} onCheckedChange={setNewsletter} />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for artisan stories and exclusive offers
                    </Label>
                  </div>

                  <Button className="w-full" onClick={() => setCurrentStep(2)}>
                    Continue to Shipping
                  </Button>
                </CardContent>
              </Card>
            )}

            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-medium text-amber-900 mb-2">Shipping Options</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border border-amber-200 rounded bg-white">
                        <div className="flex items-center space-x-2">
                          <input type="radio" name="shipping" defaultChecked />
                          <div>
                            <p className="font-medium text-sm">Standard Shipping</p>
                            <p className="text-xs text-gray-500">5-7 business days</p>
                          </div>
                        </div>
                        <span className="font-medium">$15</span>
                      </div>
                      <div className="flex items-center justify-between p-2 border border-gray-200 rounded">
                        <div className="flex items-center space-x-2">
                          <input type="radio" name="shipping" />
                          <div>
                            <p className="font-medium text-sm">Express Shipping</p>
                            <p className="text-xs text-gray-500">2-3 business days</p>
                          </div>
                        </div>
                        <span className="font-medium">$25</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" onClick={() => setCurrentStep(3)}>
                    Continue to Payment
                  </Button>
                </CardContent>
              </Card>
            )}

            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="card" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                    </TabsList>

                    <TabsContent value="card" className="space-y-4 mt-6">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input
                          id="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={(e) => handleInputChange("nameOnCard", e.target.value)}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="saveInfo" checked={saveInfo} onCheckedChange={setSaveInfo} />
                        <Label htmlFor="saveInfo" className="text-sm">
                          Save payment information for future purchases
                        </Label>
                      </div>
                    </TabsContent>

                    <TabsContent value="paypal" className="mt-6">
                      <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">You'll be redirected to PayPal to complete your payment</p>
                        <Button className="bg-blue-600 hover:bg-blue-700">Continue with PayPal</Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="apple" className="mt-6">
                      <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">Use Touch ID or Face ID to pay with Apple Pay</p>
                        <Button className="bg-black hover:bg-gray-800 text-white">Pay with Apple Pay</Button>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6">
                    <Label htmlFor="giftMessage">Gift Message (Optional)</Label>
                    <textarea
                      id="giftMessage"
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg resize-none"
                      rows={3}
                      placeholder="Add a personal message for the recipient..."
                    />
                  </div>

                  <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700" onClick={handleSubmit}>
                    Complete Order
                  </Button>
                </CardContent>
              </Card>
            )}

            {currentStep === 4 && (
              <Card>
                <CardContent className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Processing Your Order</h2>
                  <p className="text-gray-600 mb-4">
                    Thank you for your purchase! We're preparing your handcrafted treasures.
                  </p>
                  <div className="animate-spin w-6 h-6 border-2 border-amber-600 border-t-transparent rounded-full mx-auto"></div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-8">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex space-x-3">
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <Badge className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">by {item.artisan}</p>
                      <p className="text-xs text-gray-400 flex items-center mt-1">
                        <Truck className="w-3 h-3 mr-1" />
                        {item.estimatedDelivery}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="w-4 h-4 text-amber-600" />
                    <span>Certificate of Authenticity included</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Gift className="w-4 h-4 text-amber-600" />
                    <span>Premium packaging & care instructions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Truck className="w-4 h-4 text-amber-600" />
                    <span>Tracked shipping with journey updates</span>
                  </div>
                </div>

                <div className="text-xs text-gray-500 text-center">
                  <p>Your order supports traditional artisans</p>
                  <p>and helps preserve cultural heritage</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
