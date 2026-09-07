import { DealCard } from '@/components/deal-card'
import { SectionHeading } from '@/components/section-heading'
import { deals } from '@/lib/site'

export function DealsSection() {
  return (
    <section
      id="firsatlar"
      className="scroll-mt-16 bg-secondary/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Fırsatlar"
          title="Fırsat Ürünleri & İkinci El"
          description="Uygun fiyatlı ikinci el ve fırsat ürünlerimiz. Beğendiğiniz ürün hakkında WhatsApp üzerinden hemen bilgi alabilirsiniz."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  )
}
