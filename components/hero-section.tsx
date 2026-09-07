import Image from 'next/image'
import { site } from '@/lib/site'

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'Merhaba, mobilya yenileme / fiyat bilgisi almak istiyorum.',
)}`

export function HeroSection() {
  return (
    <section id="ana-sayfa" className="w-full scroll-mt-16 bg-black">
      <div className="relative mx-auto aspect-[3/2] w-full max-w-[1536px]">
        <Image
          src="/DB0DE30A-B764-4454-A505-E95FB3B49B65.png"
          alt="Enes Mobilya - Evinizi Yeniliğe Açın"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp'tan fiyat al"
          className="absolute z-10"
          style={{
            left: '3.7%',
            top: '64%',
            width: '20.5%',
            height: '8.5%',
          }}
        />

        <a
          href={`tel:${site.phoneTel}`}
          aria-label={`Enes Mobilya'yı ara: ${site.phoneDisplay}`}
          className="absolute z-10"
          style={{
            left: '25%',
            top: '64%',
            width: '16.5%',
            height: '8.5%',
          }}
        />
      </div>
    </section>
  )
}
