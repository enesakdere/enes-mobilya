import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://enesmobilya.com.tr'),
  title: {
    default: 'Enes Mobilya | Konya Mobilya Yenileme, Koltuk Döşeme ve Satış',
    template: '%s | Enes Mobilya',
  },
  description:
    'Enes Mobilya Konya — mobilya yenileme, koltuk döşeme, sünger değişimi, köşe takımı dönüşümü ve mobilya satışı. Eskisini yeniliyor, evinize değer katıyoruz.',
  keywords: [
    'Enes Mobilya',
    'Konya mobilya yenileme',
    'koltuk döşeme Konya',
    'sünger değişimi',
    'köşe takımı dönüşümü',
    'mobilya satışı Konya',
    'Karatay mobilya',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    title: 'Enes Mobilya | Konya Mobilya Yenileme ve Koltuk Döşeme',
    description:
      'Eskisini yeniliyor, evinize değer katıyoruz. Konya’da mobilya yenileme, koltuk döşeme ve satış.',
    siteName: 'Enes Mobilya',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1a1a17',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="tr"
      className={`light ${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <CartProvider>{children}</CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
