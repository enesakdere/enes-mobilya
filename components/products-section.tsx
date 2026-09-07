import { ProductCard } from '@/components/product-card'
import { SectionHeading } from '@/components/section-heading'
import { products } from '@/lib/site'

export function ProductsSection() {
  return (
    <section id="urunler" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Ürünler"
          title="Satıştaki Mobilyalar"
          description="Beğendiğiniz ürünü sepete ekleyin, siparişinizi WhatsApp üzerinden kolayca tamamlayın."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
