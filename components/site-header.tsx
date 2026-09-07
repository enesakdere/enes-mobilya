'use client'

import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#ana-sayfa', label: 'Ana Sayfa' },
  { href: '#urunler', label: 'Ürünler' },
  { href: '#firsatlar', label: 'Fırsatlar' },
  { href: '#oncesi-sonrasi', label: 'Öncesi / Sonrası' },
  { href: '#hizmetler', label: 'Hizmetlerimiz' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#iletisim', label: 'İletişim' },
]

export function SiteHeader() {
  const { count, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#ana-sayfa"
          className="flex items-center"
          aria-label={`${site.name} ana sayfa`}
        >
          <img
            src="/enes-mobilya-logo.png"
            alt={`${site.name} logosu`}
            className="h-11 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary"
            aria-label={`Sepeti aç, ${count} ürün`}
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-gold-foreground">
                {count}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border/70 bg-background transition-all duration-300 lg:hidden',
          mobileOpen ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <nav
          className="flex flex-col px-4 py-2 sm:px-6"
          aria-label="Mobil menü"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-border/50 py-3 text-base font-medium text-foreground last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
