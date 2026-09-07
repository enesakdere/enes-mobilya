import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'Merhaba, bilgi almak istiyorum.',
)}`
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address,
)}`

export function ContactSection() {
  return (
    <section id="iletisim" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="İletişim"
          title="Bize Ulaşın"
          description="Ücretsiz keşif ve fiyat teklifi için hemen arayın ya da WhatsApp’tan yazın."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-gold/60"
            >
              <Phone className="h-6 w-6 text-gold" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">Telefon</span>
              <span className="font-serif text-lg font-semibold text-card-foreground">
                {site.phoneDisplay}
              </span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-gold/60"
            >
              <MessageCircle className="h-6 w-6 text-gold" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">WhatsApp</span>
              <span className="font-serif text-lg font-semibold text-card-foreground">
                Mesaj Gönder
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-gold/60"
            >
              <Mail className="h-6 w-6 text-gold" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">E-posta</span>
              <span className="font-serif text-base font-semibold text-card-foreground break-all">
                {site.email}
              </span>
            </a>

            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
              <Clock className="h-6 w-6 text-gold" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">
                Çalışma Saatleri
              </span>
              <span className="text-sm font-medium text-card-foreground text-pretty">
                {site.hours}
              </span>
            </div>
          </div>

          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between gap-6 rounded-xl border border-border bg-foreground p-8 text-background"
          >
            <MapPin className="h-8 w-8 text-gold" aria-hidden="true" />
            <div>
              <span className="text-sm text-background/60">Adres</span>
              <p className="mt-2 font-serif text-xl font-semibold leading-snug text-pretty">
                {site.address}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-gold underline-offset-4 group-hover:underline">
                Haritada Aç →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
