import Image from "next/image"
import Link from "next/link"
import { MapPin, Award, Calendar, Users, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredArtisan = {
  id: 1,
  name: "Kenji Nakamura",
  craft: "Master Potter",
  location: "Kyoto, Japan",
  experience: "40 years",
  bio: "Kenji learned the ancient art of Raku pottery from his grandfather, a master potter who served the imperial court. His work combines traditional Japanese techniques with contemporary minimalist aesthetics.",
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop",
  rating: 4.9,
  reviews: 127,
  products: 23,
  specialties: ["Raku Pottery", "Ceramic Vases", "Tea Sets"],
  awards: ["Japan Pottery Excellence Award 2023", "Traditional Craft Master 2020"],
}

const artisans = [
  {
    id: 2,
    name: "Maria Quispe",
    craft: "Textile Weaver",
    location: "Cusco, Peru",
    experience: "25 years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 89,
    products: 18,
    specialties: ["Alpaca Wool", "Traditional Patterns"],
    featured: false,
  },
  {
    id: 3,
    name: "Robert MacLeod",
    craft: "Blacksmith",
    location: "Highlands, Scotland",
    experience: "30 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    rating: 5.0,
    reviews: 45,
    products: 12,
    specialties: ["Damascus Steel", "Kitchen Knives"],
    featured: true,
  },
  {
    id: 4,
    name: "Isabella Rossi",
    craft: "Glass Artist",
    location: "Murano, Italy",
    experience: "20 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    products: 31,
    specialties: ["Hand-blown Glass", "Venetian Techniques"],
    featured: false,
  },
  {
    id: 5,
    name: "Elena Vasquez",
    craft: "Silversmith",
    location: "Taxco, Mexico",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    rating: 4.9,
    reviews: 203,
    products: 45,
    specialties: ["Sterling Silver", "Traditional Jewelry"],
    featured: true,
  },
  {
    id: 6,
    name: "Thomas Anderson",
    craft: "Woodworker",
    location: "Vancouver, Canada",
    experience: "18 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 78,
    products: 22,
    specialties: ["Carved Bowls", "Furniture"],
    featured: false,
  },
  {
    id: 7,
    name: "Priya Sharma",
    craft: "Silk Weaver",
    location: "Varanasi, India",
    experience: "22 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 134,
    products: 28,
    specialties: ["Silk Scarves", "Traditional Patterns"],
    featured: false,
  },
  {
    id: 8,
    name: "Liu Wei",
    craft: "Porcelain Artist",
    location: "Jingdezhen, China",
    experience: "35 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    rating: 4.9,
    reviews: 167,
    products: 34,
    specialties: ["Fine Porcelain", "Tea Sets"],
    featured: true,
  },
]

const craftCategories = [
  "All Crafts",
  "Ceramics & Pottery",
  "Textiles & Weaving",
  "Metalwork",
  "Glasswork",
  "Woodworking",
  "Jewelry Making",
]

export default function ArtisansPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-light text-gray-900 mb-6">Master Artisans</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate craftspeople behind every creation. Each artisan brings decades of experience,
              traditional techniques, and an unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Artisan */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="bg-amber-600 mb-4">Featured Master</Badge>
            <h2 className="text-3xl font-serif font-light text-gray-900">Artisan Spotlight</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={featuredArtisan.image || "/placeholder.svg"}
                alt={featuredArtisan.name}
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-semibold">{featuredArtisan.rating}</span>
                  <span className="text-gray-500 text-sm">({featuredArtisan.reviews} reviews)</span>
                </div>
                <p className="text-sm text-gray-600">{featuredArtisan.products} unique pieces</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-light text-gray-900 mb-2">{featuredArtisan.name}</h3>
                <p className="text-xl text-amber-600 mb-4">{featuredArtisan.craft}</p>
                <div className="flex items-center space-x-6 text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{featuredArtisan.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArtisan.experience} experience</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">{featuredArtisan.bio}</p>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredArtisan.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Recent Awards</h4>
                <div className="space-y-2">
                  {featuredArtisan.awards.map((award) => (
                    <div key={award} className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span className="text-gray-700">{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Link href={`/artisans/${featuredArtisan.id}`}>
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    View Full Profile
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href={`/collections?artisan=${featuredArtisan.name}`}>
                  <Button variant="outline">View Their Work</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {craftCategories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="hover:bg-amber-50 hover:border-amber-300 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Artisans Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <Card key={artisan.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <Image
                      src={artisan.image || "/placeholder.svg"}
                      alt={artisan.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {artisan.featured && <Badge className="absolute top-3 left-3 bg-amber-600">Featured</Badge>}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {artisan.name}
                      </h3>
                      <p className="text-amber-600 font-medium">{artisan.craft}</p>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{artisan.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{artisan.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="font-medium">{artisan.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm">({artisan.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Users className="w-3 h-3" />
                        <span>{artisan.products} pieces</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {artisan.specialties.slice(0, 2).map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link href={`/artisans/${artisan.id}`} className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          View Profile
                        </Button>
                      </Link>
                      <Link href={`/collections?artisan=${artisan.name}`} className="flex-1">
                        <Button className="w-full bg-amber-600 hover:bg-amber-700">View Work</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Artisans
          </Button>
        </div>

        {/* Become an Artisan CTA */}
        <section className="mt-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-serif font-light mb-4">Join Our Artisan Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Are you a master craftsperson? Share your creations with collectors who appreciate authentic artistry.
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Apply to Become an Artisan
          </Button>
        </section>
      </div>
    </div>
  )
}
