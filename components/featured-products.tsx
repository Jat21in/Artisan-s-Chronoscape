"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/lib/cart-store"
import ShareModal from "./share-modal"

const featuredProducts = [
  {
    id: 1,
    name: "Midnight Ceramic Vase",
    artisan: "Kenji Nakamura",
    price: 285,
    originalPrice: null,
    image: "https://files.tofugu.com/articles/japan/2014-09-01-japanese-pottery/ceramic-dog.jpg",
    badge: "Master's Choice",
    description: "A stunning piece that captures the essence of Japanese minimalism with deep cobalt glazing",
    rating: 4.9,
    reviews: 27,
    category: "Ceramics",
    material: "Stoneware",
    location: "Japan",
    links: [
      "https://www.tofugu.com/japan/japanese-pottery/",
      "https://www.japan.travel/en/uk/experience/art-culture/pottery-towns/",
      "https://www.youtube.com/watch?v=yQ4lXc2z1x8"
    ]
  },
  {
    id: 2,
    name: "Alpaca Wool Throw",
    artisan: "Maria Quispe",
    price: 195,
    originalPrice: 245,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    badge: "Limited Edition",
    description: "Handwoven with traditional Andean patterns using the finest alpaca wool from the Andes",
    rating: 4.8,
    reviews: 34,
    category: "Textiles",
    material: "Alpaca Wool",
    location: "Peru",
    links: [
      "https://americanindian.si.edu/collections-search/objects/NMAI_246024",
      "https://www.amanoyarn.com/blogs/news/peruvian-alpaca",
      "https://www.youtube.com/watch?v=AjxbORvSkD4"
    ]
  },
  {
    id: 3,
    name: "Damascus Chef's Knife",
    artisan: "Robert MacLeod",
    price: 420,
    originalPrice: null,
    image: "https://cdn.britannica.com/52/143452-050-EDD04313/Knife-blade-Damascus-steel.jpg?w=300",
    badge: "Artisan's Pick",
    description: "Forged using 15th-century Scottish techniques with 67-layer Damascus steel construction",
    rating: 5.0,
    reviews: 18,
    category: "Metalwork",
    material: "Damascus Steel",
    location: "Scotland",
    links: [
      "https://www.britannica.com/technology/Damascus-steel",
      "https://www.nms.ac.uk/",
      "https://www.youtube.com/watch?v=xth2t6KcOWU"
    ]
  },
  {
    id: 4,
    name: "Hand-Blown Glass Bowl",
    artisan: "Isabella Rossi",
    price: 165,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
    badge: "New Arrival",
    description: "Venetian glassmaking tradition meets modern design in this luminous centerpiece",
    rating: 4.7,
    reviews: 22,
    category: "Glass",
    material: "Borosilicate Glass",
    location: "Italy",
    links: [
      "https://www.muranoglassitaly.com/murano-glass-history/",
      "https://www.corning.com/worldwide/en/products/technology/glass-ceramics/borosilicate-glass.html",
      "https://www.youtube.com/watch?v=IVV33OczuWk"
    ]
  },
  {
    id: 5,
    name: "Carved Teak Wood Bowl",
    artisan: "Wayan Sutrisno",
    price: 145,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    badge: "Eco-Friendly",
    description: "Sustainably sourced teak carved with traditional Balinese motifs",
    rating: 4.6,
    reviews: 31,
    category: "Woodwork",
    material: "Teak Wood",
    location: "Indonesia",
  },
  {
    id: 6,
    name: "Moroccan Leather Journal",
    artisan: "Fatima Al-Zahra",
    price: 89,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    badge: "Handstitched",
    description: "Full-grain leather journal with traditional Moroccan geometric patterns",
    rating: 4.8,
    reviews: 45,
    category: "Leather",
    material: "Full Grain Leather",
    location: "Morocco",
  },
  {
    id: 7,
    name: "Sterling Silver Pendant",
    artisan: "Elena Vasquez",
    price: 225,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    badge: "Trending",
    description: "Intricate filigree work inspired by ancient Aztec designs",
    rating: 4.9,
    reviews: 52,
    category: "Jewelry",
    material: "Sterling Silver",
    location: "Mexico",
  },
  {
    id: 8,
    name: "Organic Soap Collection",
    artisan: "Marie Dubois",
    price: 65,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    badge: "Natural",
    description: "Handcrafted soaps with lavender, rosemary, and olive oil from Provence",
    rating: 4.5,
    reviews: 78,
    category: "Bath & Body",
    material: "Natural Oils",
    location: "France",
  },
]

export default function FeaturedProducts() {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, items } = useCartStore()
  const [addedToCart, setAddedToCart] = useState<number[]>([])

  const toggleWishlist = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        artisan: product.artisan,
        price: product.price,
        image: product.image,
      })
    }
  }

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      artisan: product.artisan,
      price: product.price,
      image: product.image,
    })

    setAddedToCart((prev) => [...prev, product.id])

    // Remove the "added" state after 2 seconds
    setTimeout(() => {
      setAddedToCart((prev) => prev.filter((id) => id !== product.id))
    }, 2000)
  }

  const isInCart = (productId: number) => {
    return items.some((item) => item.id === productId)
  }

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-light text-gray-900 mb-4">Featured Creations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover exceptional pieces handpicked for their artistry, craftsmanship, and the stories they tell
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.slice(0, 4).map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <Badge className="absolute top-4 left-4 bg-amber-600 hover:bg-amber-700">{product.badge}</Badge>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault()
                    toggleWishlist(product)
                  }}
                >
                  <Heart
                    className={`w-4 h-4 ${isInWishlist(product.id) ? "text-red-500 fill-current" : "text-gray-600"}`}
                  />
                </Button>

                <ShareModal
                  title={product.name}
                  description={`${product.description} - Handcrafted by ${product.artisan}`}
                  url={`${typeof window !== "undefined" ? window.location.origin : ""}/products/${product.id}`}
                  image={product.image}
                  trigger={
                    <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                    </Button>
                  }
                />
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="space-y-2">
              <Link href={`/products/${product.id}`}>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-gray-500">
                by {product.artisan} • {product.location}
              </p>
              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>

              {/* Add to Cart Button */}
              <Button
                className={`w-full mt-3 ${
                  addedToCart.includes(product.id) || isInCart(product.id)
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-amber-600 hover:bg-amber-700"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  if (!isInCart(product.id)) {
                    handleAddToCart(product)
                  }
                }}
                disabled={addedToCart.includes(product.id) || isInCart(product.id)}
              >
                {addedToCart.includes(product.id) || isInCart(product.id) ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    {isInCart(product.id) ? "In Collection" : "Added to Collection"}
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Collection
                  </>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/collections">
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            View All Collections
          </Button>
        </Link>
      </div>
    </section>
  )
}
