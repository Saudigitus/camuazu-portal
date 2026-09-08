import { Routes, Route } from 'react-router'
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Timeline } from "./components/Timeline";
import { Partners } from "./components/Partners";
import { Team } from "./components/Team";
import { PageHero } from "./components/PageHero";
import { ContactosPage } from "./pages/ContactosPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services layout="carousel" />
      <WhyUs />
      <Partners />
      <Testimonials />
    </>
  );
}

function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre"
        highlight="Nós"
        description="Conheça a nossa história, a nossa equipa e o compromisso que temos com a saúde da comunidade de Nampula."
      >
        <div className="flex gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#1BAFD6]">300+</div>
            <div className="text-white/50 text-xs">Pacientes</div>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <div className="text-3xl font-bold text-[#E02020]">10+</div>
            <div className="text-white/50 text-xs">Especialidades</div>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <div className="text-3xl font-bold text-[#1BAFD6]">2024</div>
            <div className="text-white/50 text-xs">Fundação</div>
          </div>
        </div>
      </PageHero>
      <About />
      <Timeline />
      <Team />
      <Partners />
    </>
  );
}

function ServicosPage() {
  return (
    <>
      <PageHero
        title="Os Nossos"
        highlight="Serviços"
        description="Oferecemos uma oferta integrada de serviços de saúde para indivíduos, famílias e empresas, garantindo qualidade, segurança e atendimento humanizado."
      >
        <div className="flex gap-3 flex-wrap">
          {["Consultas", "Laboratório", "Exames", "Urgência", "Farmácia"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </PageHero>
      <Services />
      <Team />
      <Partners />
    </>
  );
}

function NotFoundPage() {
  return (
    <PageHero
      title="Página"
      highlight="Não Encontrada"
      description="A página que procura não existe ou foi movida."
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/contactos" element={<ContactosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
