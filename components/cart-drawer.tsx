'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice, site } from '@/lib/site'
import { cn } from '@/lib/utils'

function buildWhatsappOrder(
  items: { product: { name: string; price: number }; quantity: number }[],
  total: number,
) {
  const lines = items
    .map(
      (i) =>
        `• ${i.product.name} x${i.quantity} — ${formatPrice(
          i.product.price * i.quantity,
        )}`,
    )
    .join('\n')
  const message = `Merhaba, sipariş vermek istiyorum:\n\n${lines}\n\nToplam: ${formatPrice(
    total,
  )}`
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function CartDrawer() {
  const {
    items,
    isOpen,
    total,
    count,
    closeCart,
    increment,
    decrement,
    removeItem,
    clear,
  } = useCart()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeCart])

  return (
    <>
      <div
        onClick={closeCart}
        className={cn(
          'fixed inset-0 z-50 bg-foreground/50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden="true"
      />

      <aside
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Sepet"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            Sepetim ({count})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary"
            aria-label="Sepeti kapat"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag
              className="h-12 w-12 text-muted-foreground/50"
              aria-hidden="true"
            />
            <p className="text-muted-foreground">Sepetiniz henüz boş.</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 text-sm font-semibold text-gold underline-offset-4 hover:underline"
            >
              Ürünlere göz atın
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-4 py-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-secondary">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-foreground text-pretty">
                        {item.product.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id)}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                        aria-label={`${item.product.name} ürününü kaldır`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-md border border-border">
                        <button
                          type="button"
                          onClick={() => decrement(item.product.id)}
                          className="inline-flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:bg-secondary"
                          aria-label="Adet azalt"
                        >
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <span className="w-7 text-center text-sm font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increment(item.product.id)}
                          className="inline-flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:bg-secondary"
                          aria-label="Adet artır"
                        >
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-foreground">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border px-5 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Toplam</span>
                <span className="font-serif text-2xl font-bold text-foreground">
                  {formatPrice(total)}
                </span>
              </div>
              <a
                href={buildWhatsappOrder(items, total)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-base font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
              >
                WhatsApp ile Sipariş Ver
              </a>
              <button
                type="button"
                onClick={clear}
                className="mt-2 w-full py-2 text-sm text-muted-foreground transition-colors hover:text-destructive"
              >
                Sepeti Temizle
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
