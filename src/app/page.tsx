import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import KPISection from '@/components/KPISection';
import MissionSection from '@/components/MissionSection';
import UpcomingEventPreview from '@/components/UpcomingEventPreview';
import WhyJoinSection from '@/components/WhyJoinSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <KPISection />
      <MissionSection />
      <UpcomingEventPreview />
      <WhyJoinSection />
      <CTASection />
      <Footer />
    </>
  );
}
