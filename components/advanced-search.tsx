"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search, Filter, X, MapPin, Palette, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface SearchFilters {
  query: string
  priceRange: [number, number]
  categories: string[]
  materials: string[]
  locations: string[]
  techniques: string[]
  colors: string[]
}

interface AdvancedSearchProps {
  onSearch: (filters: SearchFilters) => void
  className?: string
}

const categories = ["Ceramics", "Textiles", "Metalwork", "Glass", "Woodwork", "Jewelry", "Leather"]
const materials = ["Clay", "Wool", "Steel", "Glass", "Wood", "Silver", "Leather", "Silk", "Cotton"]
const locations = ["Japan", "Peru", "Scotland", "Italy", "Canada", "India", "Mexico", "France"]
const techniques = ["Hand-thrown", "Woven", "Forged", "Blown", "Carved", "Cast", "Embroidered"]
const colors = ["Natural", "Blue", "Green", "Red", "Black", "White", "Brown", "Gold"]

export default function AdvancedSearch({ onSearch, className = "" }: AdvancedSearchProps) {
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    priceRange: [0, 1000],
    categories: [],
    materials: [],
    locations: [],
    techniques: [],
    colors: [],
  })

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Initialize search query from URL params
  useEffect(() => {
    const searchQuery = searchParams.get("search")
    if (searchQuery) {
      setFilters((prev) => ({ ...prev, query: searchQuery }))
    }
  }, [searchParams])

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onSearch(newFilters)
  }

  const handleArrayFilterToggle = (key: keyof SearchFilters, value: string) => {
    const currentArray = filters[key] as string[]
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value]

    handleFilterChange(key, newArray)
  }

  const clearFilters = () => {
    const clearedFilters: SearchFilters = {
      query: "",
      priceRange: [0, 1000],
      categories: [],
      materials: [],
      locations: [],
      techniques: [],
      colors: [],
    }
    setFilters(clearedFilters)
    onSearch(clearedFilters)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(filters)
  }

  const activeFiltersCount =
    filters.categories.length +
    filters.materials.length +
    filters.locations.length +
    filters.techniques.length +
    filters.colors.length

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Search Bar */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="search"
          placeholder="Search for unique creations, artisans, or techniques..."
          value={filters.query}
          onChange={(e) => handleFilterChange("query", e.target.value)}
          className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-amber-500 rounded-xl"
        />
      </form>

      {/* Filter Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="relative bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
                {activeFiltersCount > 0 && (
                  <Badge className="ml-2 bg-amber-600 text-white text-xs">{activeFiltersCount}</Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-6" align="start">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Advanced Filters</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>

                {/* Price Range */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                  </Label>
                  <Slider
                    value={filters.priceRange}
                    onValueChange={(value) => handleFilterChange("priceRange", value)}
                    max={1000}
                    step={10}
                    className="w-full"
                  />
                </div>

                {/* Categories */}
                <div>
                  <Label className="text-sm font-medium mb-3 block flex items-center">
                    <Hammer className="w-4 h-4 mr-1" />
                    Categories
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={filters.categories.includes(category)}
                          onCheckedChange={() => handleArrayFilterToggle("categories", category)}
                        />
                        <Label htmlFor={category} className="text-sm">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Materials</Label>
                  <div className="flex flex-wrap gap-2">
                    {materials.map((material) => (
                      <Badge
                        key={material}
                        variant={filters.materials.includes(material) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-amber-100"
                        onClick={() => handleArrayFilterToggle("materials", material)}
                      >
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <Label className="text-sm font-medium mb-3 block flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Origin
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <Badge
                        key={location}
                        variant={filters.locations.includes(location) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-amber-100"
                        onClick={() => handleArrayFilterToggle("locations", location)}
                      >
                        {location}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <Label className="text-sm font-medium mb-3 block flex items-center">
                    <Palette className="w-4 h-4 mr-1" />
                    Colors
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <Badge
                        key={color}
                        variant={filters.colors.includes(color) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-amber-100"
                        onClick={() => handleArrayFilterToggle("colors", color)}
                      >
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Quick Filters */}
          <div className="flex items-center space-x-2">
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-amber-100"
              onClick={() => handleFilterChange("priceRange", [0, 100])}
            >
              Under $100
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-amber-100"
              onClick={() => handleArrayFilterToggle("categories", "Ceramics")}
            >
              Ceramics
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-amber-100"
              onClick={() => handleArrayFilterToggle("locations", "Japan")}
            >
              Japanese Crafts
            </Badge>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.categories.map((category) => (
            <Badge key={category} variant="secondary" className="flex items-center gap-1">
              {category}
              <X className="w-3 h-3 cursor-pointer" onClick={() => handleArrayFilterToggle("categories", category)} />
            </Badge>
          ))}
          {filters.materials.map((material) => (
            <Badge key={material} variant="secondary" className="flex items-center gap-1">
              {material}
              <X className="w-3 h-3 cursor-pointer" onClick={() => handleArrayFilterToggle("materials", material)} />
            </Badge>
          ))}
          {filters.locations.map((location) => (
            <Badge key={location} variant="secondary" className="flex items-center gap-1">
              {location}
              <X className="w-3 h-3 cursor-pointer" onClick={() => handleArrayFilterToggle("locations", location)} />
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
