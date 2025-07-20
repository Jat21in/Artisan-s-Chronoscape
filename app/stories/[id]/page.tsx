import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Mock story data - in real app this would come from API
const story = {
  id: 1,
  title: "The Last Master of Raku: Kenji Nakamura's 40-Year Journey",
  author: "Sarah Chen",
  publishDate: "March 10, 2024",
  readTime: "8 min read",
  category: "Master Profiles",
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=600&fit=crop",
  content: `
    In the quiet hills of Kyoto, where morning mist dances through ancient pine trees, Kenji Nakamura continues a pottery tradition that spans over 400 years. His weathered hands, stained with decades of clay and fire, move with the precision of a master who has dedicated his life to the ancient art of Raku pottery.

    "Each piece tells a story," Kenji says, his voice soft but filled with conviction as he shapes clay on his wheel. "Not just my story, but the story of my grandfather, his grandfather, and all the masters who came before."

    ## The Beginning of a Legacy

    Kenji's journey began at the age of seven, when his grandfather, Hiroshi Nakamura, first placed his small hands on the potter's wheel. The Nakamura family had been serving the imperial court for generations, creating tea ceremony vessels that embodied the Japanese aesthetic of wabi-sabi – finding beauty in imperfection.

    "My grandfather was strict," Kenji recalls with a gentle smile. "He would make me practice centering clay for hours before I was allowed to shape anything. 'The clay must trust you,' he would say, 'and you must trust the clay.'"

    ## The Art of Fire and Earth

    Raku pottery is unlike any other ceramic technique. The process involves removing pieces from the kiln while they're still glowing hot – around 1800°F – and placing them in containers filled with combustible materials. The rapid cooling and reduction atmosphere creates the distinctive crackled glazes and metallic lusters that Raku is famous for.

    "It's a dance with fire," Kenji explains, demonstrating the technique in his studio. "You have only seconds to make decisions. Too long, and the piece is ruined. Too quick, and you miss the magic moment when earth becomes art."

    ## Preserving Tradition in Modern Times

    In an age of mass production and digital everything, Kenji's commitment to traditional methods might seem anachronistic. Yet his work has never been more relevant. Collectors from around the world seek out his pieces, not just for their beauty, but for their authenticity – something increasingly rare in our modern world.

    "Young people today, they want everything fast," he observes. "But pottery teaches patience. It teaches you to work with nature, not against it. These are lessons the world needs now more than ever."

    ## The Next Generation

    At 67, Kenji is training his granddaughter, Yuki, in the family tradition. She represents the 15th generation of Nakamura potters, and like her great-great-grandfather before her, she's learning that mastery comes not from rushing, but from understanding.

    "She has good hands," Kenji says proudly, watching Yuki work at her own wheel. "But more importantly, she has patience. That's what makes a true artisan."

    ## A Living Heritage

    Today, Kenji's work can be found in museums and private collections worldwide. Each piece carries with it not just the beauty of its form, but the weight of centuries of tradition. In a world that often values the new over the enduring, Kenji Nakamura reminds us that some things are worth preserving.

    "When I'm gone," he says, his eyes twinkling with quiet humor, "the clay will remember. The fire will remember. And the tradition will continue."

    As the sun sets over the hills of Kyoto, casting long shadows across his studio, Kenji continues to work. His hands move with the same precision they've had for four decades, shaping clay into art, preserving a tradition that connects us to our past while inspiring our future.
  `,
  tags: ["Pottery", "Japanese Culture", "Traditional Crafts", "Raku", "Kyoto"],
}

const relatedStories = [
  {
    id: 2,
    title: "From Alpaca to Art: The Textile Traditions of the Andes",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    category: "Cultural Heritage",
  },
  {
    id: 3,
    title: "The Art of Damascus Steel: Ancient Secrets in Modern Hands",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop",
    category: "Craft Techniques",
  },
  {
    id: 4,
    title: "Venetian Glass: Where Fire Meets Art",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
    category: "Master Profiles",
  },
]

export default function StoryPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/stories">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stories
          </Button>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">{story.category}</Badge>
          <h1 className="text-4xl font-serif font-light text-gray-900 mb-6">{story.title}</h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{story.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{story.publishDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{story.readTime}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <Image
            src={story.image || "/placeholder.svg"}
            alt={story.title}
            width={1200}
            height={600}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">{story.content}</div>
        </article>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Related Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-light text-gray-900 mb-8">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.map((relatedStory) => (
              <Card key={relatedStory.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <Link href={`/stories/${relatedStory.id}`}>
                  <Image
                    src={relatedStory.image || "/placeholder.svg"}
                    alt={relatedStory.title}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {relatedStory.category}
                    </Badge>
                    <h3 className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                      {relatedStory.title}
                    </h3>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-serif font-light mb-4">Never Miss a Story</h2>
          <p className="mb-6 opacity-90">
            Subscribe to our newsletter for the latest artisan stories and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-amber-600 hover:bg-gray-100">Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
