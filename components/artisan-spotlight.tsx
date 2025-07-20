import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ArtisanSpotlight() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl my-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-amber-600 font-medium">Artisan Spotlight</p>
              <h2 className="text-4xl font-serif font-light text-gray-900">Meet Elena Vasquez</h2>
              <p className="text-xl text-gray-600">Third-generation silversmith from Taxco, Mexico</p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                Elena learned the ancient art of silver working from her grandmother, who taught her that every piece
                must tell a story. Her jewelry combines traditional Mesoamerican motifs with contemporary elegance.
              </p>
              <p>
                "Each piece I create carries the spirit of my ancestors and the dreams of those who will wear it. Silver
                is not just metal to me—it's a bridge between past and future."
              </p>
            </div>

            <div className="flex space-x-4">
              <Button className="bg-amber-600 hover:bg-amber-700">View Elena's Collection</Button>
              <Button variant="outline">Read Her Story</Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop"
              alt="Elena Vasquez at work"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-sm font-medium text-gray-900">Creating since 1998</p>
              <p className="text-xs text-gray-600">Over 2,000 unique pieces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
