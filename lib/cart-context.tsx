'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { products as catalog, type Product } from '@/lib/site'

export type CartItem = {
  product: Product
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  count: number
  total: number
  openCart: () => void
  closeCart: () => void
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  increment: (productId: string) => void
  decrement: (productId: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((productId: string, quantity = 1) => {
    const product = catalog.find((p) => p.id === productId)
    if (!product || quantity < 1) return
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === productId)
      if (existing) {
        return prev.map((i) =>
          i.product.id === productId
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        )
      }
      return [...prev, { product, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId))
  }, [])

  const increment = useCallback((productId: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    )
  }, [])

  const decrement = useCallback((productId: string) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.product.id === productId
            ? { ...i, quantity: i.quantity - 1 }
            : i,
        )
        .filter((i) => i.quantity > 0),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  )
  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity * i.product.price, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      count,
      total,
      openCart,
      closeCart,
      addItem,
      removeItem,
      increment,
      decrement,
      clear,
    }),
    [
      items,
      isOpen,
      count,
      total,
      openCart,
      closeCart,
      addItem,
      removeItem,
      increment,
      decrement,
      clear,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
