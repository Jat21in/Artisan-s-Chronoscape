"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Discover Timeless Artistry",
    subtitle: "Handcrafted Treasures from Master Artisans",
    description: "Each piece tells a story of tradition, skill, and passion passed down through generations",
    image: "/1.jpg",
    alt: "Handmade ceramic pots displayed in a sunlit studio",
    cta: "Explore Collections",
    ctaLink: "/collections",
    featured: "Ceramic Collection",
  },
  {
    id: 2,
    title: "Woven with Love",
    subtitle: "Authentic Textiles from Around the World",
    description: "From Peruvian alpaca wool to Indian silk, discover textiles that connect cultures",
    image: "/2.jpg",
    alt: "Vibrant handmade textiles on display in a traditional setup",
    cta: "Shop Textiles",
    ctaLink: "/collections?category=Textiles",
    featured: "Textile Collection",
  },
  {
    id: 3,
    title: "Forged in Fire",
    subtitle: "Masterful Metalwork & Blades",
    description: "Experience the ancient art of metalworking with Damascus steel and handforged pieces",
    image: "/3.jpg",
    alt: "Blacksmith working with glowing metal and hammer",
    cta: "View Metalwork",
    ctaLink: "/collections?category=Metalwork",
    featured: "Metal Collection",
  },
  {
    id: 4,
    title: "Blown by Hand",
    subtitle: "Exquisite Glass Artistry",
    description: "Venetian techniques meet contemporary design in these stunning glass creations",
    image:"/4.jpg",
    alt: "Molten glass being shaped by artisan using traditional tools",
    cta: "Discover Glass",
    ctaLink: "/collections?category=Glass",
    featured: "Glass Collection",
  },
];


export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-amber-600/90 text-sm font-medium rounded-full mb-4">
                  {slide.featured}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-light mb-4 leading-tight">{slide.title}</h1>
              <h2 className="text-xl md:text-2xl font-light mb-6 text-gray-200">{slide.subtitle}</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={slide.ctaLink}>
                  <Button
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-medium group"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/artisans">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-medium bg-transparent"
                  >
                    Meet the Artisans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-amber-600 w-8" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
