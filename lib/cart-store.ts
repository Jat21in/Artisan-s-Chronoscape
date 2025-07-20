import { create } from "zustand"
import { persist } from "zustand/middleware"

interface CartItem {
  id: number
  name: string
  artisan: string
  price: number
  quantity: number
  image: string
}

interface WishlistItem {
  id: number
  name: string
  artisan: string
  price: number
  image: string
}

interface CartStore {
  items: CartItem[]
  wishlist: WishlistItem[]
  addToCart: (product: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  addToWishlist: (product: WishlistItem) => void
  removeFromWishlist: (id: number) => void
  isInWishlist: (id: number) => boolean
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],

      addToCart: (product) => {
        const items = get().items
        const existingItem = items.find((item) => item.id === product.id)

        if (existingItem) {
          set({
            items: items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
          })
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }],
          })
        }
      },

      removeFromCart: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        })
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id)
          return
        }

        set({
          items: get().items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      addToWishlist: (product) => {
        const wishlist = get().wishlist
        if (!wishlist.find((item) => item.id === product.id)) {
          set({
            wishlist: [...wishlist, product],
          })
        }
      },

      removeFromWishlist: (id) => {
        set({
          wishlist: get().wishlist.filter((item) => item.id !== id),
        })
      },

      isInWishlist: (id) => {
        return get().wishlist.some((item) => item.id === id)
      },
    }),
    {
      name: "artisan-cart-storage",
    },
  ),
)
