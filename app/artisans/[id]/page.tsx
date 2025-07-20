import Image from "next/image"
import Link from "next/link"
import { MapPin, Award, Calendar, Users, Star, ArrowLeft, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock artisan data - in real app this would come from API based on ID
const getArtisanById = (id: string) => {
  const artisans = {
    "1": {
      id: 1,
      name: "Kenji Nakamura",
      craft: "Master Potter",
      location: "Kyoto, Japan",
      experience: "40 years",
      bio: "Kenji learned the ancient art of Raku pottery from his grandfather, a master potter who served the imperial court. His work combines traditional Japanese techniques with contemporary minimalist aesthetics. Each piece he creates carries the spirit of centuries-old traditions while speaking to modern sensibilities.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop",
      rating: 4.9,
      reviews: 127,
      products: 23,
      specialties: ["Raku Pottery", "Ceramic Vases", "Tea Sets", "Minimalist Design"],
      awards: [
        "Japan Pottery Excellence Award 2023",
        "Traditional Craft Master 2020",
        "Imperial Court Recognition 2018",
      ],
      story:
        "Born into a family of potters, Kenji's journey began at age seven when his grandfather first placed clay in his hands. The Nakamura family has been creating pottery for the imperial court for over 300 years, and Kenji represents the 12th generation of this proud lineage.",
      philosophy:
        "Every piece of clay has a story to tell. My role is simply to listen and help that story emerge through fire and earth.",
      techniques: ["Traditional Raku firing", "Wheel throwing", "Natural glazing", "Wood firing"],
      materials: ["High-fire stoneware", "Natural ash glazes", "Local Kyoto clay", "Traditional tools"],
    },
    "2": {
      id: 2,
      name: "Maria Quispe",
      craft: "Textile Weaver",
      location: "Cusco, Peru",
      experience: "25 years",
      bio: "Maria learned traditional Andean weaving techniques from her grandmother in the Sacred Valley. She specializes in creating textiles using alpaca wool and natural dyes, preserving ancient patterns that tell the stories of her ancestors.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop",
      rating: 4.8,
      reviews: 89,
      products: 18,
      specialties: ["Alpaca Wool Weaving", "Natural Dyes", "Traditional Patterns", "Andean Textiles"],
      awards: ["Peru Cultural Heritage Award 2022", "Master Weaver Recognition 2019"],
      story:
        "Growing up in the Sacred Valley, Maria was surrounded by the ancient traditions of her Quechua ancestors. She learned to weave before she could properly walk, sitting beside her grandmother as she worked the traditional backstrap loom.",
      philosophy:
        "Each thread carries the memory of our ancestors. When I weave, I am connecting the past with the present.",
      techniques: ["Backstrap loom weaving", "Natural dyeing", "Traditional spinning", "Pattern preservation"],
      materials: ["Alpaca wool", "Natural plant dyes", "Traditional looms", "Ancestral patterns"],
    },
    "3": {
      id: 3,
      name: "Robert MacLeod",
      craft: "Blacksmith",
      location: "Highlands, Scotland",
      experience: "30 years",
      bio: "Robert is a master blacksmith who specializes in creating Damascus steel blades using traditional Scottish techniques. His forge in the Scottish Highlands has been in his family for four generations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1200&h=400&fit=crop",
      rating: 5.0,
      reviews: 45,
      products: 12,
      specialties: ["Damascus Steel", "Kitchen Knives", "Traditional Forging", "Highland Craftsmanship"],
      awards: ["Scottish Craft Excellence 2023", "Master Blacksmith Guild 2021"],
      story:
        "The MacLeod forge has been operating in the same location for over 150 years. Robert learned the craft from his father, who learned from his father before him.",
      philosophy:
        "Steel has memory. It remembers every hammer blow, every fold, every moment in the fire. My job is to guide that memory into something beautiful and functional.",
      techniques: ["Damascus steel forging", "Pattern welding", "Traditional quenching", "Hand finishing"],
      materials: ["High carbon steel", "Traditional coal forge", "Hand tools", "Natural quenchants"],
    },
  }

  return artisans[id as keyof typeof artisans] || null
}

const artisanProducts = [
  {
    id: 1,
    name: "Midnight Ceramic Vase",
    price: 285,
    image: "/dana.jpeg",
    rating: 4.9,
    reviews: 27,
  },
  {
    id: 11,
    name: "Ceramic Tea Set",
    price: 185,
    image: "/dana.jpeg",
    rating: 4.8,
    reviews: 23,
  },
  {
    id: 13,
    name: "Raku Bowl Collection",
    price: 145,
    image: "/dana.jpeg",
    rating: 4.7,
    reviews: 18,
  },
]

export default function ArtisanProfilePage({ params }: { params: { id: string } }) {
  const artisan = getArtisanById(params.id)

  if (!artisan) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Artisan Not Found</h1>
          <p className="text-gray-600 mb-8">The artisan you're looking for doesn't exist.</p>
          <Link href="/artisans">
            <Button className="bg-amber-600 hover:bg-amber-700">Back to Artisans</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <Image
          src={artisan.coverImage || "/placeholder.svg"}
          alt={`${artisan.name} workshop`}
          width={1200}
          height={400}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute top-8 left-8">
          <Link href="/artisans">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Artisans
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-8 text-white">
          <Badge className="bg-amber-600 mb-4">Master Artisan</Badge>
          <h1 className="text-4xl font-serif font-light mb-2">{artisan.name}</h1>
          <p className="text-xl opacity-90">{artisan.craft}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="works">Works</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">About {artisan.name}</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">{artisan.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Philosophy</h3>
                    <blockquote className="border-l-4 border-amber-600 pl-6 italic text-gray-700 text-lg">
                      "{artisan.philosophy}"
                    </blockquote>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {artisan.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-sm">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Awards & Recognition</h3>
                    <div className="space-y-2">
                      {artisan.awards.map((award) => (
                        <div key={award} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-amber-600" />
                          <span className="text-gray-700">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="story" className="mt-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-light text-gray-900">The Journey</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">{artisan.story}</p>

                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Legacy</h3>
                    <p className="text-gray-700">
                      {artisan.name}'s work represents not just individual artistry, but the preservation of cultural
                      heritage that spans generations. Each piece created carries forward traditions that might
                      otherwise be lost to time.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="process" className="mt-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-light text-gray-900">Craft Process</h2>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Techniques</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {artisan.techniques.map((technique, index) => (
                        <div key={technique} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{technique}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Materials</h3>
                    <div className="flex flex-wrap gap-2">
                      {artisan.materials.map((material) => (
                        <Badge key={material} variant="outline" className="text-sm">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="works" className="mt-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-serif font-light text-gray-900">Featured Works</h2>
                    <Link href={`/collections?artisan=${artisan.name}`}>
                      <Button variant="outline">View All Works</Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {artisanProducts.map((product) => (
                      <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                        <Link href={`/products/${product.id}`}>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                          />
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-semibold text-amber-600">${product.price}</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-amber-400 fill-current" />
                                <span className="text-sm text-gray-600">
                                  {product.rating} ({product.reviews})
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Link>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Artisan Info Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <Image
                  src={artisan.image || "/placeholder.svg"}
                  alt={artisan.name}
                  width={150}
                  height={150}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{artisan.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{artisan.craft}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{artisan.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{artisan.experience} experience</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{artisan.products} unique pieces</span>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 mt-4 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="font-semibold">{artisan.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({artisan.reviews} reviews)</span>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
                    <Heart className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Commission Work</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Interested in a custom piece? {artisan.name} accepts select commissions for unique creations.
                </p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Request Commission</Button>
              </CardContent>
            </Card>

            {/* Workshop Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Visit the Workshop</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Experience the craft firsthand with guided workshop visits and hands-on learning sessions.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Schedule Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
