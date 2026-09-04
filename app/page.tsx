import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ClientLogos from "@/components/sections/ClientLogos";
import TechGrid from "@/components/sections/TechGrid";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ClientLogos />
      <TechGrid />
      <CTASection />
    </>
  );
}
