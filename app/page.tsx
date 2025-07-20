import HeroCarousel from "@/components/hero-carousel"
import FeaturedProducts from "@/components/featured-products"
import NewArrivals from "@/components/new-arrivals"
import ArtisanSpotlight from "@/components/artisan-spotlight"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedProducts />
        <ArtisanSpotlight />
        <NewArrivals />
      </div>
      <Footer />
    </main>
  )
}
