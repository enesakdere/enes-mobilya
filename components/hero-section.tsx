import Image from 'next/image'
import { MessageCircle, Phone } from 'lucide-react'
import { site } from '@/lib/site'

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'Merhaba, mobilya yenileme / fiyat bilgisi almak istiyorum.',
)}`

export function HeroSection() {
  return (
    <section id="ana-sayfa" className="relative scroll-mt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-sofa.png"
          alt="Yenilenmiş premium koltuk ile şık bir oturma odası"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <span className="mb-5 inline-flex w-fit items-center rounded-full border border-gold/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-gold">
          Konya · Mobilya Yenileme & Satış
        </span>

        <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-background text-balance sm:text-6xl lg:text-7xl">
          ENES MOBİLYA
        </h1>

        <p className="mt-5 max-w-xl font-serif text-2xl italic text-gold text-pretty sm:text-3xl">
          “{site.slogan}”
        </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-background/80 text-pretty sm:text-lg">
          Koltuk döşeme, sünger değişimi, köşe takımı dönüşümü ve mobilya
          satışı. Eskiyen mobilyalarınızı özenle yeniliyor, evinize yeniden
          değer katıyoruz.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-lg shadow-foreground/20 transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp&apos;tan Fiyat Al
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-md border border-background/40 px-7 py-4 text-base font-semibold text-background transition-colors hover:bg-background/10"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
