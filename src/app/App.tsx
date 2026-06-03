import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChoose } from './components/WhyChoose';
import { CommunityImpact } from './components/CommunityImpact';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingChat } from './components/FloatingChat';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <HowItWorks />
        <WhyChoose />
        <CommunityImpact />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingChat />
      <ScrollToTop />
    </div>
  );
}