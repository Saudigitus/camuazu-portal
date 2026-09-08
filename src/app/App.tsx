import { Routes, Route } from 'react-router'
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
import { Timeline } from "./components/Timeline";
import { Partners } from "./components/Partners";
import { Team } from "./components/Team";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Timeline />
      <Services />
      {/* <Facilities /> */}
      <WhyUs />
      <Team />
      <Partners />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

function ServicosPage() {
  return (
    <div className="pt-24">
      <Services />
      <Team />
      <Partners />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
