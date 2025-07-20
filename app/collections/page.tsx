"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Grid3X3, List, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AdvancedSearch from "@/components/advanced-search"

const products = [
  {
  id: 1,
  name: "Midnight Ceramic Vase",
  artisan: "Kenji Nakamura",
  price: 285,
  originalPrice: null,
  image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop",
  alt: "Dark handcrafted ceramic vase on a wooden table",
  category: "Ceramics",
  material: "Stoneware",
  location: "Japan",
  badge: "Master's Choice",
  rating: 4.9,
  reviews: 27,
},
  {
    id: 2,
    name: "Alpaca Wool Throw",
    artisan: "Maria Quispe",
    price: 195,
    originalPrice: 245,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop",
    alt: "Soft alpaca wool throw blanket with colorful patterns",
    category: "Textiles",
    material: "Alpaca Wool",
    location: "Peru",
    badge: "Limited Edition",
    rating: 4.8,
    reviews: 34,
  },
  {
  id: 3,
  name: "Damascus Chef's Knife",
  artisan: "Robert MacLeod",
  price: 420,
  originalPrice: null,
  image: "/dana.jpeg",
  alt: "Damascus steel chef's knife with a patterned blade on a dark background",
  category: "Metalwork",
  material: "Damascus Steel",
  location: "Scotland",
  badge: "Artisan's Pick",
  rating: 5.0,
  reviews: 18,
},
  {
    id: 4,
    name: "Hand-Blown Glass Bowl",
    artisan: "Isabella Rossi",
    price: 165,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=400&fit=crop",
    alt: "Colorful hand-blown glass bowl with swirling patterns",
    category: "Glass",
    material: "Borosilicate Glass",
    location: "Italy",
    badge: "New Arrival",
    rating: 4.7,
    reviews: 22,
  },
  {
    id: 5,
    name: "Carved Teak Wood Bowl",
    artisan: "Wayan Sutrisno",
    price: 145,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop",
    alt: "Hand-carved teak wood bowl with natural grain",
    category: "Woodwork",
    material: "Teak Wood",
    location: "Indonesia",
    badge: "Eco-Friendly",
    rating: 4.6,
    reviews: 31,
  },
  {
    id: 6,
    name: "Moroccan Leather Journal",
    artisan: "Fatima Al-Zahra",
    price: 89,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    alt: "Hand-stitched Moroccan leather journal with embossed cover",
    category: "Leather",
    material: "Full Grain Leather",
    location: "Morocco",
    badge: "Handstitched",
    rating: 4.8,
    reviews: 45,
  },
  {
    id: 7,
    name: "Sterling Silver Pendant",
    artisan: "Elena Vasquez",
    price: 225,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    alt: "Sterling silver pendant necklace on a white background",
    category: "Jewelry",
    material: "Sterling Silver",
    location: "Mexico",
    badge: "Trending",
    rating: 4.9,
    reviews: 52,
  },
  {
    id: 8,
    name: "Organic Soap Collection",
    artisan: "Marie Dubois",
    price: 65,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=400&fit=crop",
    alt: "Handmade organic soap bars with natural ingredients",
    category: "Bath & Body",
    material: "Natural Oils",
    location: "France",
    badge: "Natural",
    rating: 4.5,
    reviews: 78,
  },
  {
    id: 9,
    name: "Copper Wind Chimes",
    artisan: "David Kim",
    price: 78,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop",
    alt: "Handcrafted copper wind chimes hanging outdoors",
    category: "Metalwork",
    material: "Pure Copper",
    location: "Korea",
    badge: null,
    rating: 4.3,
    reviews: 19,
  },
  {
  id: 10,
  name: "Handwoven Silk Scarf",
  artisan: "Priya Sharma",
  price: 125,
  originalPrice: null,
  image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop",
  alt: "Handwoven silk scarf in bright colors draped on a table",
  category: "Textiles",
  material: "Mulberry Silk",
  location: "India",
  badge: null,
  rating: 4.7,
  reviews: 36,
},
  {
    id: 11,
    name: "Ceramic Tea Set",
    artisan: "Liu Wei",
    price: 185,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
    alt: "Elegant ceramic tea set with teapot and cups",
    category: "Ceramics",
    material: "Porcelain",
    location: "China",
    badge: "Master's Choice",
    rating: 4.8,
    reviews: 23,
  },
  {
    id: 12,
    name: "Woven Reed Basket",
    artisan: "Anna Johansson",
    price: 65,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=400&fit=crop",
    alt: "Handwoven reed basket with natural finish",
    category: "Textiles",
    material: "Natural Reed",
    location: "Sweden",
    badge: null,
    rating: 4.2,
    reviews: 14,
  },
  {
    id: 13,
    name: "Forged Iron Candle Holders",
    artisan: "Giuseppe Romano",
    price: 95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop",
    alt: "Rustic forged iron candle holders on a wooden table",
    category: "Metalwork",
    material: "Wrought Iron",
    location: "Italy",
    badge: "Rustic",
    rating: 4.6,
    reviews: 28,
  },
  {
    id: 14,
    name: "Blown Glass Ornaments",
    artisan: "Hans Mueller",
    price: 45,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=400&fit=crop",
    alt: "Colorful hand-blown glass ornaments",
    category: "Glass",
    material: "Crystal Glass",
    location: "Germany",
    badge: "Holiday Special",
    rating: 4.4,
    reviews: 67,
  },
  {
    id: 15,
    name: "Carved Mahogany Box",
    artisan: "Carlos Mendez",
    price: 155,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop",
    alt: "Intricately carved mahogany wood box",
    category: "Woodwork",
    material: "Mahogany Wood",
    location: "Guatemala",
    badge: "Intricate",
    rating: 4.9,
    reviews: 19,
  },
  {
    id: 16,
    name: "Beaded Necklace Set",
    artisan: "Amara Okafor",
    price: 75,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    alt: "Handmade beaded necklace set with colorful beads",
    category: "Jewelry",
    material: "Glass Beads",
    location: "Nigeria",
    badge: "Cultural",
    rating: 4.5,
    reviews: 41,
  },
]

const categories = [
  "All",
  "Ceramics",
  "Textiles",
  "Metalwork",
  "Glass",
  "Woodwork",
  "Jewelry",
  "Leather",
  "Bath & Body",
]
const materials = [
  "All",
  "Stoneware",
  "Alpaca Wool",
  "Damascus Steel",
  "Borosilicate Glass",
  "Teak Wood",
  "Mulberry Silk",
  "Sterling Silver",
  "Natural Oils",
  "Pure Copper",
  "Full Grain Leather",
  "Porcelain",
  "Natural Reed",
  "Wrought Iron",
  "Crystal Glass",
  "Mahogany Wood",
  "Glass Beads",
]
const locations = [
  "All",
  "Japan",
  "Peru",
  "Scotland",
  "Italy",
  "Indonesia",
  "Morocco",
  "Mexico",
  "France",
  "Korea",
  "India",
  "China",
  "Sweden",
  "Germany",
  "Guatemala",
  "Nigeria",
]

export default function CollectionsPage() {
  const searchParams = useSearchParams()
  const categoryFilter = searchParams.getAll("category")
  const materialFilter = searchParams.getAll("material")
  const locationFilter = searchParams.getAll("location")
  const searchFilter = searchParams.get("search") || ""

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryFilter)
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(materialFilter)
  const [selectedLocations, setSelectedLocations] = useState<string[]>(locationFilter)
  const [searchQuery, setSearchQuery] = useState(searchFilter)

  const filteredProducts = products.filter((product) => {
    const searchTerm = searchQuery.toLowerCase()

    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm) ||
      product.artisan.toLowerCase().includes(searchTerm)

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)

    const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material)

    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(product.location)

    return matchesSearch && matchesCategory && matchesMaterial && matchesLocation
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      case "artisan":
        return a.artisan.localeCompare(b.artisan)
      default:
        return 0
    }
  })

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleMaterialChange = (material: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials([...selectedMaterials, material])
    } else {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
    }
  }

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location])
    } else {
      setSelectedLocations(selectedLocations.filter((l) => l !== location))
    }
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.slice(1).map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={category} className="text-sm font-normal">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Materials</h3>
        <div className="space-y-2">
          {materials.slice(1).map((material) => (
            <div key={material} className="flex items-center space-x-2">
              <Checkbox
                id={material}
                checked={selectedMaterials.includes(material)}
                onCheckedChange={(checked) => handleMaterialChange(material, checked as boolean)}
              />
              <Label htmlFor={material} className="text-sm font-normal">
                {material}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Origin</h3>
        <div className="space-y-2">
          {locations.slice(1).map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox
                id={location}
                checked={selectedLocations.includes(location)}
                onCheckedChange={(checked) => handleLocationChange(location, checked as boolean)}
              />
              <Label htmlFor={location} className="text-sm font-normal">
                {location}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-light text-gray-900 mb-4">All Collections</h1>
        <p className="text-lg text-gray-600">Discover exceptional handcrafted pieces from master artisans worldwide</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <FilterContent />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex items-center justify-between mb-4">
            <AdvancedSearch
              onSearch={(filters) => {
                setSearchQuery(filters.query)
                setSelectedCategories(filters.categories)
                setSelectedMaterials(filters.materials)
                setSelectedLocations(filters.locations)
              }}
              className="w-full lg:w-auto"
            />

            <div className="flex items-center space-x-4">
              <Select onValueChange={setViewMode}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="View" defaultValue="grid" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grid">
                    <div className="flex items-center">
                      <Grid3X3 className="mr-2 h-4 w-4" />
                      Grid
                    </div>
                  </SelectItem>
                  <SelectItem value="list">
                    <div className="flex items-center">
                      <List className="mr-2 h-4 w-4" />
                      List
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" defaultValue="featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">
                    <div className="flex items-center">
                      <Star className="mr-2 h-4 w-4" />
                      Featured
                    </div>
                  </SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="artisan">Artisan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-6">
            Showing {sortedProducts.length} of {products.length} pieces
          </p>

          {/* Products Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <Badge className="absolute top-4 left-4 bg-amber-600 hover:bg-amber-700">{product.badge}</Badge>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        by {product.artisan} • {product.location}
                      </p>
                      <p className="text-sm text-gray-600">{product.material}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="flex space-x-6">
                      <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="w-32 h-32 object-cover"
                        />
                        {product.badge && (
                          <Badge className="absolute top-2 left-2 bg-amber-600 hover:bg-amber-700 text-xs">
                            {product.badge}
                          </Badge>
                        )}
                      </div>

                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-500">
                          by {product.artisan} • {product.location}
                        </p>
                        <p className="text-gray-600">
                          {product.category} • {product.material}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-semibold text-gray-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Load More */}
          {sortedProducts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Creations
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
