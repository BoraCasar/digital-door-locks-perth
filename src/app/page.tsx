import { AccessMethodsSection } from "@/components/sections/AccessMethodsSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { DoorTypesSection } from "@/components/sections/DoorTypesSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { Hero } from "@/components/sections/Hero";
import { LockTypesSection } from "@/components/sections/LockTypesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WelcomeSection } from "@/components/sections/WelcomeSection";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <TrustStrip />
      <WelcomeSection />
      <ServicesSection />
      <LockTypesSection />
      <DoorTypesSection />
      <AccessMethodsSection />
      <CaseStudySection />
      <TestimonialsSection />
      <BrandsSection />
      <GuaranteeSection />
    </main>
  );
}
