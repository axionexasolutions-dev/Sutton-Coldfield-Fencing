import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ReviewsSection } from "@/components/reviews-section";
import { AreasCoveredSection } from "@/components/areas-covered-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F4F3EC]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ReviewsSection />
      <AreasCoveredSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
