import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const newArrivals = [
  {
    id: 5,
    name: "Carved Wooden Bowl",
    artisan: "Thomas Anderson",
    price: 125,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    daysAgo: 2,
  },
  {
    id: 6,
    name: "Silk Scarf Collection",
    artisan: "Priya Sharma",
    price: 89,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
    daysAgo: 1,
  },
  {
    id: 7,
    name: "Copper Wind Chimes",
    artisan: "David Kim",
    price: 78,
    image: "/dana.jpeg",
    daysAgo: 3,
  },
  {
    id: 8,
    name: "Leather Journal",
    artisan: "Sarah Mitchell",
    price: 95,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
    daysAgo: 1,
  },
  {
    id: 9,
    name: "Ceramic Tea Set",
    artisan: "Liu Wei",
    price: 185,
    image: "/dana.jpeg",
    daysAgo: 4,
  },
  {
    id: 10,
    name: "Woven Basket",
    artisan: "Anna Johansson",
    price: 65,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    daysAgo: 2,
  },
  {
    id: 11,
    name: "Silver Pendant Necklace",
    artisan: "Elena Vasquez",
    price: 145,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
    daysAgo: 1,
  },
  {
    id: 12,
    name: "Handmade Soap Set",
    artisan: "Marie Dubois",
    price: 35,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
    daysAgo: 2,
  },
]

export default function NewArrivals() {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-serif font-light text-gray-900 mb-4">New Arrivals</h2>
          <p className="text-lg text-gray-600">Fresh creations from our community of master artisans</p>
        </div>
        <Button variant="outline">View All New</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {newArrivals.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <Link href={`/products/${product.id}`}>
              <div className="relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-700 text-xs">
                  {product.daysAgo}d ago
                </Badge>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500">by {product.artisan}</p>
                <p className="font-semibold text-gray-900">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
