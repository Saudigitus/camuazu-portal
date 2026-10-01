import { PageHero, Testimonials, Timeline } from "@/components";

export function About() {
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
      <Testimonials/>
    </>
  );
}
