import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const featuredStory = {
  id: 1,
  title: "The Last Master of Raku: Kenji Nakamura's 40-Year Journey",
  excerpt:
    "In the quiet hills of Kyoto, where morning mist dances through ancient pine trees, Kenji Nakamura continues a pottery tradition that spans over 400 years...",
  author: "Sarah Chen",
  publishDate: "March 10, 2024",
  readTime: "8 min read",
  category: "Master Profiles",
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=500&fit=crop",
  featured: true,
}

const stories = [
  {
    id: 2,
    title: "From Alpaca to Art: The Textile Traditions of the Andes",
    excerpt:
      "High in the Peruvian mountains, Maria Quispe transforms raw alpaca wool into stunning textiles using techniques passed down through generations.",
    author: "Michael Rodriguez",
    publishDate: "March 8, 2024",
    readTime: "6 min read",
    category: "Cultural Heritage",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "The Art of Damascus Steel: Ancient Secrets in Modern Hands",
    excerpt:
      "Scottish blacksmith Robert MacLeod reveals the mysteries behind creating authentic Damascus steel blades in his Highland forge.",
    author: "Emma Thompson",
    publishDate: "March 5, 2024",
    readTime: "10 min read",
    category: "Craft Techniques",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Venetian Glass: Where Fire Meets Art",
    excerpt:
      "On the island of Murano, Isabella Rossi continues her family's 200-year tradition of creating exquisite hand-blown glass pieces.",
    author: "Alessandro Bianchi",
    publishDate: "March 3, 2024",
    readTime: "7 min read",
    category: "Master Profiles",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "The Silver Artisans of Taxco: Preserving Mexican Heritage",
    excerpt:
      "Elena Vasquez and her fellow silversmiths keep alive the rich tradition of Mexican silver work in the colonial town of Taxco.",
    author: "Carlos Mendoza",
    publishDate: "February 28, 2024",
    readTime: "9 min read",
    category: "Cultural Heritage",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Sustainable Craftsmanship: The Future of Artisan Work",
    excerpt:
      "How modern artisans are embracing eco-friendly practices while preserving traditional techniques for future generations.",
    author: "Dr. Lisa Park",
    publishDate: "February 25, 2024",
    readTime: "12 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
  },
]

const categories = [
  "All Stories",
  "Master Profiles",
  "Cultural Heritage",
  "Craft Techniques",
  "Sustainability",
  "Behind the Scenes",
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-light text-gray-900 mb-6">Artisan Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the passionate craftspeople behind every creation. Each story reveals the dedication, tradition,
              and artistry that transforms raw materials into treasured works of art.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={featuredStory.image || "/placeholder.svg"}
                alt={featuredStory.title}
                width={800}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <Badge className="absolute top-4 left-4 bg-amber-600">Featured Story</Badge>
            </div>
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-3">
                  {featuredStory.category}
                </Badge>
                <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">{featuredStory.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{featuredStory.excerpt}</p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredStory.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredStory.publishDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredStory.readTime}</span>
                </div>
              </div>

              <Link href={`/stories/${featuredStory.id}`}>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
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

        {/* Stories Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <Link href={`/stories/${story.id}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700 text-xs">{story.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{story.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>{story.author}</span>
                        <span>{story.publishDate}</span>
                      </div>
                      <span>{story.readTime}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Stories
          </Button>
        </div>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-serif font-light mb-4">Stay Connected to Our Stories</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest artisan stories, behind-the-scenes content, and exclusive interviews delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8">Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
