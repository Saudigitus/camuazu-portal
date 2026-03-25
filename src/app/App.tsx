import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Facilities } from "./components/Facilities";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Facilities />
      <WhyUs />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
