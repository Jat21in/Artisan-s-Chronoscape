"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Share2, Star, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCartStore } from "@/lib/cart-store"
import ShareModal from "@/components/share-modal"

// Mock product data - in real app this would come from API
const product = {
  id: 1,
  name: "Midnight Ceramic Vase",
  artisan: {
    name: "Kenji Nakamura",
    location: "Kyoto, Japan",
    experience: "25 years",
    bio: "Kenji learned the ancient art of Raku pottery from his grandfather, a master potter who served the imperial court. His work combines traditional Japanese techniques with contemporary minimalist aesthetics.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop",
  },
  price: 285,
  originalPrice: null,
  images: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
  ],
  description:
    "A stunning piece that captures the essence of Japanese minimalism, this vase represents the perfect harmony between form and function.",
  details: {
    materials: "High-fired stoneware clay, natural ash glaze",
    dimensions: '12" H x 6" W',
    weight: "2.3 lbs",
    technique: "Wheel-thrown, Raku fired",
    origin: "Kyoto, Japan",
    craftingTime: "3 days",
  },
  story:
    "This vase was created during the quiet hours of dawn, when the studio is filled with soft morning light. Each piece is shaped by hand on the potter's wheel, then fired in a traditional Raku kiln at temperatures exceeding 1800°F. The distinctive midnight finish is achieved through a secret glaze recipe passed down through three generations of the Nakamura family.",
  process: [
    "Clay preparation and centering on the wheel",
    "Hand-shaping using traditional techniques",
    "First firing (bisque) at 1800°F",
    "Glaze application using ancestral recipe",
    "Final Raku firing with rapid cooling",
    "Hand-finishing and quality inspection",
  ],
  inStock: true,
  quantity: 3,
  rating: 4.9,
  reviews: 27,
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, items } = useCartStore()

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        artisan: product.artisan.name,
        price: product.price,
        image: product.images[0],
      })
    }
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        artisan: product.artisan.name,
        price: product.price,
        image: product.images[0],
      })
    }
  }

  const isInCart = items.some((item) => item.id === product.id)
  const cartQuantity = items.find((item) => item.id === product.id)?.quantity || 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImage === index ? "border-amber-600" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2 bg-amber-600">Master's Choice</Badge>
            <h1 className="text-3xl font-serif font-light text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-4">
              by <span className="font-medium">{product.artisan.name}</span> • {product.artisan.location}
            </p>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-semibold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-500">Only {product.quantity} available</span>
              {isInCart && <span className="text-sm text-green-600 font-medium">({cartQuantity} in cart)</span>}
            </div>

            <div className="flex space-x-4">
              <Button size="lg" className="flex-1 bg-amber-600 hover:bg-amber-700" onClick={handleAddToCart}>
                Add to Collection
              </Button>
              <Button variant="outline" size="lg" onClick={toggleWishlist}>
                <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "text-red-500 fill-current" : ""}`} />
              </Button>
              <ShareModal
                title={product.name}
                description={`${product.description} - Handcrafted by ${product.artisan.name}`}
                image={product.images[0]}
                trigger={
                  <Button variant="outline" size="lg">
                    <Share2 className="w-5 h-5" />
                  </Button>
                }
              />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
            <div className="text-center">
              <Truck className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Free shipping on orders over $200</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Certificate of authenticity included</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="story" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="story">The Story</TabsTrigger>
            <TabsTrigger value="artisan">The Artisan</TabsTrigger>
            <TabsTrigger value="process">The Process</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>

          <TabsContent value="story" className="mt-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-serif font-light mb-4">The Story Behind This Creation</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{product.story}</p>
            </div>
          </TabsContent>

          <TabsContent value="artisan" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Image
                  src={product.artisan.image || "/placeholder.svg"}
                  alt={product.artisan.name}
                  width={200}
                  height={200}
                  className="rounded-2xl w-full"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-light mb-2">{product.artisan.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {product.artisan.location} • {product.artisan.experience} of experience
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">{product.artisan.bio}</p>
                <Button variant="outline">View All Works by {product.artisan.name}</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="process" className="mt-8">
            <div>
              <h3 className="text-2xl font-serif font-light mb-6">The Creation Process</h3>
              <div className="space-y-4">
                {product.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif font-light mb-6">Product Specifications</h3>
                <dl className="space-y-4">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div key={key}>
                      <dt className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</dt>
                      <dd className="text-gray-700">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-light mb-6">Care Instructions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hand wash with mild soap and warm water</li>
                  <li>• Avoid extreme temperature changes</li>
                  <li>• Display away from direct sunlight</li>
                  <li>• Handle with care - this is a handmade piece</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
