import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const points = [
  'Uygun fiyat, dürüst ve şeffaf çalışma',
  'Kaliteli kumaş ve birinci sınıf sünger',
  'Zamanında teslimat ve ücretsiz keşif',
  'Konya içi alım - teslim hizmeti',
]

export function AboutSection() {
  return (
    <section
      id="hakkimizda"
      className="scroll-mt-16 bg-foreground py-20 text-background sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Hakkımızda"
            title="Konya’nın Güvenilir Mobilya Ustası"
            tone="inverted"
          />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-background/75 text-pretty">
            <p>
              Enes Mobilya olarak, eskiyen mobilyalarınıza yeniden hayat vermek
              için buradayız. Koltuk döşemeden sünger değişimine, köşe takımı
              dönüşümünden özel ölçü işlerine kadar geniş bir hizmet yelpazesi
              sunuyoruz.
            </p>
            <p>
              Her işi kendi evimizmiş gibi titizlikle ele alıyor, kaliteli
              malzeme ve ustalıkla birleştirerek uzun ömürlü sonuçlar
              üretiyoruz. Ayrıca showroom’umuzdan yeni mobilya satışı da
              yapıyoruz.
            </p>
          </div>
        </div>

        <ul className="grid gap-4">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-xl border border-background/15 bg-background/5 p-5"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                aria-hidden="true"
              />
              <span className="text-base text-background/90 text-pretty">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
