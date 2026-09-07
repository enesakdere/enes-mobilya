import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { formatPrice, site, type Deal } from '@/lib/site'

export function DealCard({ deal }: { deal: Deal }) {
  const message = `Merhaba, "${deal.name}" (${formatPrice(
    deal.price,
  )}) fırsat ürünü hakkında bilgi almak istiyorum.`
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    message,
  )}`

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={deal.image || '/placeholder.svg'}
          alt={deal.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            deal.sold ? 'grayscale' : ''
          }`}
        />

        <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-foreground">
          Fırsat
        </span>

        {deal.sold && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/45">
            <span className="rotate-[-8deg] rounded-md border-2 border-background px-6 py-2 text-2xl font-extrabold uppercase tracking-widest text-background">
              Satıldı
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-semibold text-card-foreground">
          {deal.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
          {deal.description}
        </p>

        <div className="mt-4 flex items-end gap-2">
          {deal.oldPrice && (
            <span className="text-sm font-medium text-muted-foreground line-through">
              {formatPrice(deal.oldPrice)}
            </span>
          )}
          <span className="text-xl font-bold text-gold">
            {formatPrice(deal.price)}
          </span>
        </div>

        {deal.sold ? (
          <span className="mt-4 inline-flex h-11 items-center justify-center rounded-md border border-border bg-secondary px-4 text-sm font-semibold text-muted-foreground">
            Satıldı
          </span>
        ) : (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp&apos;tan Sor
          </a>
        )}
      </div>
    </article>
  )
}
