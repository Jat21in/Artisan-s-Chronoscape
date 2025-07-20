"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Sparkles, Package, Heart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  suggestions?: string[]
  products?: Array<{
    id: number
    name: string
    price: number
    image: string
    artisan: string
  }>
}

const quickActions = [
  { icon: Search, label: "Find unique gifts", query: "Show me unique gift ideas" },
  { icon: Package, label: "Track my order", query: "I want to track my order" },
  { icon: Heart, label: "Wishlist help", query: "Help me with my wishlist" },
  { icon: Sparkles, label: "Surprise me", query: "Surprise me with something special" },
]

const sampleProducts = [
  {
    id: 1,
    name: "Midnight Ceramic Vase",
    price: 285,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    artisan: "Kenji Nakamura",
  },
  {
    id: 2,
    name: "Alpaca Wool Throw",
    price: 195,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
    artisan: "Maria Quispe",
  },
]

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hello! I'm your personal Artisan Concierge. I'm here to help you discover unique handcrafted treasures and assist with your shopping journey. How can I help you today?",
      timestamp: new Date(),
      suggestions: ["Find unique gifts", "Track my order", "Tell me about artisans", "Help me choose"],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase()

    // Gift recommendations
    if (lowerMessage.includes("gift") || lowerMessage.includes("present") || lowerMessage.includes("surprise")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "I'd love to help you find the perfect gift! Here are some exceptional pieces that make wonderful presents. Each comes with a Certificate of Authenticity and beautiful gift packaging.",
        timestamp: new Date(),
        products: sampleProducts,
        suggestions: ["Show more gifts", "Filter by price", "Gift wrapping options", "Personalization available?"],
      }
    }

    // Order tracking
    if (lowerMessage.includes("track") || lowerMessage.includes("order") || lowerMessage.includes("shipping")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "I can help you track your order! Please provide your order number, and I'll show you the beautiful journey your handcrafted piece is taking from the artisan's studio to your doorstep.",
        timestamp: new Date(),
        suggestions: ["Enter order number", "View recent orders", "Shipping information", "Contact support"],
      }
    }

    // Artisan information
    if (lowerMessage.includes("artisan") || lowerMessage.includes("maker") || lowerMessage.includes("creator")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "Our artisans are master craftspeople from around the world, each with their own unique story and traditional techniques. Would you like to learn about a specific artisan or explore by craft type?",
        timestamp: new Date(),
        suggestions: ["Browse by artisan", "Ceramic artists", "Textile weavers", "Metalworkers"],
      }
    }

    // Product search
    if (lowerMessage.includes("ceramic") || lowerMessage.includes("pottery") || lowerMessage.includes("vase")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "Ceramics are one of our most popular categories! Our ceramic artists use traditional techniques passed down through generations. Here are some beautiful pieces:",
        timestamp: new Date(),
        products: [sampleProducts[0]],
        suggestions: ["View all ceramics", "Japanese pottery", "Modern ceramics", "Functional pieces"],
      }
    }

    // Default response
    return {
      id: Date.now().toString(),
      type: "bot",
      content:
        "I understand you're looking for something special. Could you tell me more about what you have in mind? I can help you find the perfect handcrafted piece based on style, price range, or occasion.",
      timestamp: new Date(),
      suggestions: ["Browse collections", "Price under $100", "Price $100-300", "Luxury pieces $300+"],
    }
  }

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(message)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const handleQuickAction = (query: string) => {
    handleSendMessage(query)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg transition-all duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-amber-600 to-orange-600 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Artisan Concierge</h3>
              <p className="text-xs text-white/80">Your personal shopping assistant</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 h-[400px] p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.type === "user" ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>

                  {/* Product Recommendations */}
                  {message.products && (
                    <div className="mt-3 space-y-2">
                      {message.products.map((product) => (
                        <div key={product.id} className="flex items-center space-x-3 bg-white rounded-lg p-2">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-xs font-medium text-gray-900">{product.name}</p>
                            <p className="text-xs text-gray-500">by {product.artisan}</p>
                            <p className="text-xs font-semibold text-amber-600">${product.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {message.suggestions.map((suggestion, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-amber-50 text-xs"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="p-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="justify-start text-xs h-8 bg-transparent"
                  onClick={() => handleQuickAction(action.query)}
                >
                  <action.icon className="w-3 h-3 mr-1" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 text-sm"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(inputValue)
                }
              }}
            />
            <Button
              size="icon"
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
