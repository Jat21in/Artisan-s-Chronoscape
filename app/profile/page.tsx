"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Calendar, Edit, Package, Heart, Settings, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const userProfile = {
  name: "Jatin Mittal",
  email: "jatin.mittal@email.com",
  phone: "+91 98760 12345",
  location: "Panchkula, Haryana, India",
  joinDate: "January 2023",
  avatar: "/jatin.jpg",
  membershipTier: "Gold Collector",
  totalOrders: 15,
  totalSpent: 3620,
  favoriteCategories: ["Woodwork", "Madhubani Art", "Metal Crafts"],
}


const recentOrders = [
  {
    id: "AC-2024-001234",
    date: "March 15, 2024",
    status: "Delivered",
    total: 534.6,
    items: [
      {
        name: "Midnight Ceramic Vase",
        artisan: "Kenji Nakamura",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop",
      },
      {
        name: "Alpaca Wool Throw",
        artisan: "Maria Quispe",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=80&h=80&fit=crop",
      },
    ],
  },
  {
    id: "AC-2024-001198",
    date: "February 28, 2024",
    status: "In Transit",
    total: 285.0,
    items: [
      {
        name: "Silver Pendant Necklace",
        artisan: "Elena Vasquez",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=80&h=80&fit=crop",
      },
    ],
  },
]

const wishlistItems = [
  {
    id: 3,
    name: "Damascus Chef's Knife",
    artisan: "Robert MacLeod",
    price: 420,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Hand-Blown Glass Bowl",
    artisan: "Isabella Rossi",
    price: 165,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=150&h=150&fit=crop",
  },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    phone: userProfile.phone,
    location: userProfile.location,
    bio: "Passionate collector of handcrafted ceramics and textiles. I love discovering unique pieces that tell a story.",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <Image
                  src={userProfile.avatar || "/placeholder.svg"}
                  alt={userProfile.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
                <Button
                  size="icon"
                  className="absolute -bottom-2 -right-2 rounded-full bg-amber-600 hover:bg-amber-700"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-serif font-light text-gray-900 mb-2">{userProfile.name}</h1>
                    <Badge className="bg-amber-600 mb-2">{userProfile.membershipTier}</Badge>
                    <p className="text-gray-600 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Member since {userProfile.joinDate}
                    </p>
                  </div>
                  <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "default" : "outline"}>
                    <Edit className="w-4 h-4 mr-2" />
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-amber-600">{userProfile.totalOrders}</div>
                    <div className="text-sm text-gray-600">Total Orders</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-amber-600">${userProfile.totalSpent.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Spent</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-amber-600">{wishlistItems.length}</div>
                    <div className="text-sm text-gray-600">Wishlist Items</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {isEditing ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={formData.bio}
                        onChange={(e) => handleInputChange("bio", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <span>{userProfile.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <span>{userProfile.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span>{userProfile.location}</span>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-medium text-gray-900 mb-2">About</h3>
                      <p className="text-gray-600">{formData.bio}</p>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-medium text-gray-900 mb-2">Favorite Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {userProfile.favoriteCategories.map((category) => (
                          <Badge key={category} variant="outline">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <div className="space-y-6">
              {recentOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>{order.status}</Badge>
                        <span className="font-semibold">${order.total}</span>
                      </div>
                    </div>

                    <div className="flex space-x-4 overflow-x-auto">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 flex items-center space-x-3 bg-gray-50 rounded-lg p-3"
                        >
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-gray-600">by {item.artisan}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm">
                        <Package className="w-4 h-4 mr-2" />
                        Track Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={150}
                        height={150}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                      </Button>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {item.artisan}</p>
                    <p className="font-semibold text-amber-600 mb-3">${item.price}</p>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="w-5 h-5" />
                    <span>Notifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order Updates</p>
                      <p className="text-sm text-gray-600">Get notified about order status changes</p>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Arrivals</p>
                      <p className="text-sm text-gray-600">Be the first to know about new products</p>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Artisan Stories</p>
                      <p className="text-sm text-gray-600">Weekly newsletter with artisan features</p>
                    </div>
                    <input type="checkbox" className="toggle" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Account Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Download My Data
                  </Button>
                  <Button variant="destructive" className="w-full justify-start">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
