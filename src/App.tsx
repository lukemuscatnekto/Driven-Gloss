import { Contact } from './components/Contact'
import { CookieConsent } from './components/CookieConsent'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { JulyLaunchOffers } from './components/JulyLaunchOffers'
import { Launch } from './components/Launch'
import { LocalContact } from './components/LocalContact'
import { Navbar } from './components/Navbar'
import { ScrollLeadModal } from './components/ScrollLeadModal'
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
        <WhyDrivenGloss />
        <VisualBreak />
        <HowItWorks />
        <TrustBadges />
        <JulyLaunchOffers />
        <Launch />
        <Contact />
        <LocalContact />
      </main>
      <Footer />
      <StickyMobileCTA />
      <WhatsAppButton />
      <ScrollLeadModal />
      <CookieConsent />
    </>
  )
}
