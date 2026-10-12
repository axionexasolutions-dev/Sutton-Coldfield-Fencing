import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F4F3EC]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
    </main>
  );
}
