import {
  Armchair,
  Hammer,
  Layers,
  MessageCircle,
  Ruler,
  Sofa,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { services, site } from '@/lib/site'

const icons: LucideIcon[] = [Sofa, Armchair, Layers, Hammer, Ruler]

function quoteHref(serviceTitle: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Merhaba, "${serviceTitle}" hizmeti için fiyat teklifi almak istiyorum.`,
  )}`
}

export function ServicesSection() {
  return (
    <section id="hizmetler" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Ustalıkla Yapılan İşler"
          description="Yılların tecrübesiyle, her mobilyaya hak ettiği özeni gösteriyoruz."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={service.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-gold/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {service.description}
                </p>
                <a
                  href={quoteHref(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-gold underline-offset-4 hover:underline"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp&apos;tan Fiyat Teklifi Al
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
