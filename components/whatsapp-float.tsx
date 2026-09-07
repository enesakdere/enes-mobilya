import { MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'

const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'Merhaba, bilgi almak istiyorum.',
)}`

export function WhatsappFloat() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-xl shadow-foreground/25 transition-transform hover:scale-105"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
