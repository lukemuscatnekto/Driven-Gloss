import { BeforeAfterGallery } from './components/BeforeAfterGallery'
import { Contact } from './components/Contact'
import { CookieConsent } from './components/CookieConsent'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { GoogleReviews } from './components/GoogleReviews'
import { LocalContact } from './components/LocalContact'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { StickyMobileCTA } from './components/StickyMobileCTA'
import { TrustBadges } from './components/TrustBadges'
import { VisualBreak } from './components/VisualBreak'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WhyDrivenGloss } from './components/WhyDrivenGloss'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfterGallery />
        <Pricing />
        <WhyDrivenGloss />
        <VisualBreak />
        <HowItWorks />
        <TrustBadges />
        <GoogleReviews />
        <Contact />
        <LocalContact />
      </main>
      <Footer />
      <StickyMobileCTA />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}
