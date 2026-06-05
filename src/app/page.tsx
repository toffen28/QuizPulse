import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import LeaderboardPreview from '@/components/landing/LeaderboardPreview';
import SampleQuiz from '@/components/landing/SampleQuiz';
import Pricing from '@/components/landing/Pricing';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <Hero />
      <Features />
      <SampleQuiz />
      <LeaderboardPreview />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
