"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ShoppingBag, User, Menu, X, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import EnhancedCart from "./enhanced-cart"
import { useCartStore } from "@/lib/cart-store"

const searchSuggestions = [
  // Product categories
  { type: "category", text: "Ceramic vases", icon: "🏺" },
  { type: "category", text: "Japanese pottery", icon: "🏺" },
  { type: "category", text: "Alpaca wool throws", icon: "🧶" },
  { type: "category", text: "Damascus steel knives", icon: "🔪" },
  { type: "category", text: "Hand-blown glass", icon: "🫧" },
  { type: "category", text: "Silver jewelry", icon: "💍" },
  { type: "category", text: "Wooden bowls", icon: "🥣" },
  { type: "category", text: "Silk scarves", icon: "🧣" },
  { type: "category", text: "Leather journals", icon: "📖" },
  { type: "category", text: "Tea sets", icon: "🫖" },
  { type: "category", text: "Copper wind chimes", icon: "🎐" },
  { type: "category", text: "Handmade soaps", icon: "🧼" },
  { type: "category", text: "Woven baskets", icon: "🧺" },

  // Artisan names
  { type: "artisan", text: "Kenji Nakamura", icon: "👨‍🎨" },
  { type: "artisan", text: "Maria Quispe", icon: "👩‍🎨" },
  { type: "artisan", text: "Robert MacLeod", icon: "👨‍🎨" },
  { type: "artisan", text: "Isabella Rossi", icon: "👩‍🎨" },
  { type: "artisan", text: "Thomas Anderson", icon: "👨‍🎨" },
  { type: "artisan", text: "Priya Sharma", icon: "👩‍🎨" },
  { type: "artisan", text: "Elena Vasquez", icon: "👩‍🎨" },
  { type: "artisan", text: "Marie Dubois", icon: "👩‍🎨" },

  // Materials
  { type: "material", text: "Sterling silver", icon: "✨" },
  { type: "material", text: "Damascus steel", icon: "⚔️" },
  { type: "material", text: "Borosilicate glass", icon: "🫧" },
  { type: "material", text: "Walnut wood", icon: "🌳" },
  { type: "material", text: "Mulberry silk", icon: "🐛" },
  { type: "material", text: "Pure copper", icon: "🟤" },
  { type: "material", text: "Full grain leather", icon: "🐄" },

  // Trending searches
  { type: "trending", text: "Master's choice collection", icon: "🏆" },
  { type: "trending", text: "Limited edition pieces", icon: "💎" },
  { type: "trending", text: "New arrivals", icon: "✨" },
  { type: "trending", text: "Gift sets", icon: "🎁" },
]

const recentSearches = ["Ceramic bowls", "Japanese art", "Handwoven textiles"]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<typeof searchSuggestions>([])
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  // Get cart count from store
  const totalItems = useCartStore((state) => state.getTotalItems())

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = searchSuggestions
        .filter((suggestion) => suggestion.text.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 8)
      setFilteredSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/collections?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setIsSearchOpen(false)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
    router.push(`/collections?search=${encodeURIComponent(suggestion)}`)
  }

  const handleSearchFocus = () => {
    if (searchQuery.length === 0) {
      // Show trending and recent searches when focused with empty query
      const trending = searchSuggestions.filter((s) => s.type === "trending").slice(0, 3)
      const recent = recentSearches.map((text) => ({ type: "recent" as const, text, icon: "🕒" }))
      setFilteredSuggestions([...recent, ...trending])
      setShowSuggestions(true)
    }
  }

  const getSuggestionTypeLabel = (type: string) => {
    switch (type) {
      case "artisan":
        return "Artisan"
      case "category":
        return "Product"
      case "material":
        return "Material"
      case "trending":
        return "Trending"
      case "recent":
        return "Recent"
      default:
        return ""
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mr-8">
            {/* <-- Added mr-8 here */}
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AC</span>
            </div>
            <span className="font-serif text-xl font-semibold text-gray-900">Artisan's Chronoscape</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/collections" className="text-gray-700 hover:text-gray-900 transition-colors">
              Collections
            </Link>
            <Link href="/artisans" className="text-gray-700 hover:text-gray-900 transition-colors">
              Artisans
            </Link>
            <Link href="/stories" className="text-gray-700 hover:text-gray-900 transition-colors">
              Stories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>

          {/* Enhanced Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search artisans, products, materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-amber-500 focus:ring-amber-500"
              />

              {/* Enhanced Search Suggestions */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50 max-h-96 overflow-y-auto">
                  {searchQuery.length === 0 && (
                    <div className="px-4 py-2 text-xs font-medium text-gray-500 bg-gray-50 border-b">
                      Recent & Trending Searches
                    </div>
                  )}
                  {filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSuggestionClick(suggestion.text)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{suggestion.icon}</span>
                          <div>
                            <span className="text-sm font-medium text-gray-900">{suggestion.text}</span>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                {getSuggestionTypeLabel(suggestion.type)}
                              </span>
                              {suggestion.type === "trending" && <TrendingUp className="w-3 h-3 text-green-500" />}
                              {suggestion.type === "recent" && <Clock className="w-3 h-3 text-blue-500" />}
                            </div>
                          </div>
                        </div>
                        <Search className="w-3 h-3 text-gray-400" />
                      </div>
                    </button>
                  ))}
                  {searchQuery.length > 0 && (
                    <div className="px-4 py-2 text-center border-t border-gray-100">
                      <button
                        type="submit"
                        onClick={handleSearch}
                        className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                      >
                        Search for "{searchQuery}"
                      </button>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="w-5 h-5" />
            </Button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/orders" className="w-full">
                    My Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/wishlist" className="w-full">
                    Wishlist
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="w-full">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)}>
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/collections" className="text-lg font-medium">
                    Collections
                  </Link>
                  <Link href="/artisans" className="text-lg font-medium">
                    Artisans
                  </Link>
                  <Link href="/stories" className="text-lg font-medium">
                    Stories
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    About
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search for unique creations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </form>
          </div>
        )}
      </div>

      <EnhancedCart open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  )
}