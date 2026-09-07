'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice, type Product } from '@/lib/site'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem(product.id, qty)
    setAdded(true)
    setQty(1)
    window.setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-semibold text-card-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
          {product.description}
        </p>

        <p className="mt-4 text-xl font-bold text-foreground">
          {formatPrice(product.price)}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center rounded-md border border-border">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="inline-flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
              aria-label="Adet azalt"
              disabled={qty <= 1}
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
            </button>
            <span
              className="w-8 text-center text-sm font-semibold tabular-nums"
              aria-live="polite"
            >
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="inline-flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-secondary"
              aria-label="Adet artır"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {added ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                Eklendi
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                Sepete Ekle
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
