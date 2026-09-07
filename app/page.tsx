import { AboutSection } from '@/components/about-section'
import { BeforeAfterSection } from '@/components/before-after-section'
import { CartDrawer } from '@/components/cart-drawer'
import { ContactSection } from '@/components/contact-section'
import { DealsSection } from '@/components/deals-section'
import { HeroSection } from '@/components/hero-section'
import { ProductsSection } from '@/components/products-section'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
<BeforeAfterSection />
<ServicesSection />
<ProductsSection />
<DealsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <CartDrawer />
      <WhatsappFloat />
    </>
  )
}
