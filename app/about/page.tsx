import Image from "next/image"
import { Heart, Globe, Users, Award, Leaf, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Heart,
    title: "Passion for Craftsmanship",
    description: "We believe in the power of human hands to create beauty that machines cannot replicate.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connecting artisans from every corner of the world with collectors who appreciate their work.",
  },
  {
    icon: Users,
    title: "Fair Partnership",
    description: "Ensuring artisans receive fair compensation and recognition for their exceptional skills.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Every piece is authenticated and comes with a certificate of craftsmanship.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Supporting eco-friendly techniques and materials that respect our planet.",
  },
  {
    icon: Shield,
    title: "Cultural Preservation",
    description: "Helping preserve traditional techniques for future generations.",
  },
]

const team = [
  {
  name: "Elena Rodriguez",
  role: "Founder & CEO",
  bio: "Former art curator with 15 years of experience connecting collectors with exceptional artisans worldwide.",
  image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop"
},
  {
    name: "Marcus Chen",
    role: "Head of Artisan Relations",
    bio: "Cultural anthropologist who has spent decades studying traditional crafts across six continents.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
  },
  {
    name: "Sophia Nakamura",
    role: "Chief Curator",
    bio: "Third-generation art dealer with an eye for exceptional craftsmanship and emerging talent.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
  },
]

const stats = [
  { number: "500+", label: "Master Artisans" },
  { number: "50+", label: "Countries" },
  { number: "10,000+", label: "Happy Collectors" },
  { number: "25+", label: "Craft Traditions" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-light text-gray-900 mb-6">
              Preserving Artistry, One Creation at a Time
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Artisan's Chronoscape was born from a simple belief: that in our digital age, the human touch in creation
              is more precious than ever. We bridge the gap between master craftspeople and those who treasure
              authentic, handmade beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-light text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  It began with a ceramic bowl. Not just any bowl, but one crafted by an elderly potter in a small
                  Japanese village, whose family had been making pottery for over 300 years. The weight of it in my
                  hands, the subtle imperfections that spoke of human touch, the story it carried—this was when I
                  realized what the world was losing.
                </p>
                <p>
                  In 2019, I founded Artisan's Chronoscape with a mission to create a bridge between these master
                  craftspeople and collectors who understand that true luxury lies not in mass production, but in the
                  irreplaceable value of human artistry.
                </p>
                <p>
                  Today, we work with over 500 artisans across 50 countries, each one a keeper of traditions that span
                  generations. Every piece in our collection carries not just beauty, but the weight of cultural
                  heritage and the promise of its preservation.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-lg font-medium text-gray-900">Elena Rodriguez</p>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=700&fit=crop"
                alt="Artisan at work"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-amber-600">2019</p>
                <p className="text-sm text-gray-600">Founded with a vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-light text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-light text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to preserving and celebrating artisan craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-light mb-8">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8">
            "To create a world where traditional craftsmanship thrives alongside modern innovation, where every
            artisan's story is heard, and where the beauty of human creation is celebrated and preserved for generations
            to come."
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Join Our Community
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-6">
            Have Questions? We'd Love to Hear From You
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're an artisan interested in joining our community or a collector looking for something special,
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              Become an Artisan Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
