"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2, Share2, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const wishlistItems = [
  {
    id: 3,
    name: "Damascus Chef's Knife",
    artisan: "Robert MacLeod",
    price: 420,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop",
    category: "Metalwork",
    location: "Scotland",
    inStock: true,
    addedDate: "2024-03-10",
  },
  {
    id: 4,
    name: "Hand-Blown Glass Bowl",
    artisan: "Isabella Rossi",
    price: 165,
    originalPrice: 195,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
    category: "Glass",
    location: "Italy",
    inStock: true,
    addedDate: "2024-03-08",
  },
  {
    id: 5,
    name: "Silk Scarf Collection",
    artisan: "Priya Sharma",
    price: 89,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
    category: "Textiles",
    location: "India",
    inStock: false,
    addedDate: "2024-03-05",
  },
  {
    id: 6,
    name: "Ceramic Tea Set",
    artisan: "Liu Wei",
    price: 185,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    category: "Ceramics",
    location: "China",
    inStock: true,
    addedDate: "2024-03-03",
  },
  {
    id: 7,
    name: "Leather Journal",
    artisan: "Sarah Mitchell",
    price: 95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    category: "Leather",
    location: "USA",
    inStock: true,
    addedDate: "2024-03-01",
  },
]

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)
  const [sortBy, setSortBy] = useState("recent")
  const [filterBy, setFilterBy] = useState("all")

  const removeFromWishlist = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const addToCart = (item: any) => {
    // Add to cart logic here
    console.log("Added to cart:", item.name)
  }

  const filteredItems = items.filter((item) => {
    if (filterBy === "all") return true
    if (filterBy === "in-stock") return item.inStock
    if (filterBy === "out-of-stock") return !item.inStock
    return item.category.toLowerCase() === filterBy.toLowerCase()
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      case "recent":
      default:
        return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-light text-gray-900 mb-4">My Wishlist</h1>
          <p className="text-lg text-gray-600">
            {items.length} {items.length === 1 ? "item" : "items"} saved for later
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Start adding items you love to keep track of them</p>
            <Link href="/collections">
              <Button className="bg-amber-600 hover:bg-amber-700">Explore Collections</Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <Select value={filterBy} onValueChange={setFilterBy}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Items</SelectItem>
                      <SelectItem value="in-stock">In Stock</SelectItem>
                      <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                      <SelectItem value="ceramics">Ceramics</SelectItem>
                      <SelectItem value="textiles">Textiles</SelectItem>
                      <SelectItem value="metalwork">Metalwork</SelectItem>
                      <SelectItem value="glass">Glass</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recently Added</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" className="bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Wishlist
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent"
                  onClick={() => {
                    const inStockItems = items.filter((item) => item.inStock)
                    inStockItems.forEach((item) => addToCart(item))
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add All to Cart
                </Button>
              </div>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Link href={`/products/${item.id}`}>
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={400}
                          height={400}
                          className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                      </Button>
                      {!item.inStock && <Badge className="absolute top-3 left-3 bg-red-600">Out of Stock</Badge>}
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <Link href={`/products/${item.id}`}>
                          <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600">by {item.artisan}</p>
                        <p className="text-xs text-gray-500">{item.location}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">${item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          className="flex-1 bg-amber-600 hover:bg-amber-700"
                          disabled={!item.inStock}
                          onClick={() => addToCart(item)}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {item.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => removeFromWishlist(item.id)}
                          className="bg-transparent"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <p className="text-xs text-gray-500">Added {new Date(item.addedDate).toLocaleDateString()}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recommendations */}
            <section className="mt-16">
              <h2 className="text-2xl font-serif font-light text-gray-900 mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Add recommended items here */}
                <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop"
                      alt="Recommended item"
                      width={300}
                      height={300}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-medium text-gray-900 mb-1">Woven Basket</h3>
                    <p className="text-sm text-gray-600 mb-2">by Anna Johansson</p>
                    <p className="font-semibold text-amber-600">$65</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
