import { About, Hero, Partners, Reability, Services, Stats, WhyUs } from "@/components";

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services layout="carousel" />
      <WhyUs />
      <Partners />
      <Reability />
    </>
  );
}