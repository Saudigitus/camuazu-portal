import { AboutSection, Hero, Partners, Reability, Services, Stats, WhyUs } from "@/components";

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <Services layout="carousel" />
      <WhyUs />
      <Partners />
      <Reability />
    </>
  );
}