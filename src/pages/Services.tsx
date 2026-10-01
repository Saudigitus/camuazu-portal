import { PageHero, ServicesGrid, Team } from "@/components";

export function Services() {
  return (
    <>
      <PageHero
        title="Os Nossos"
        highlight="Serviços"
        subtitle="Especialidades"
        description="Oferecemos uma oferta integrada de serviços de saúde para indivíduos, famílias e empresas, garantindo qualidade, segurança e atendimento humanizado."
      />
      {/* </PageHero> */}
      <div className="flex gap-3 flex-wrap">
        {["Consultas", "Laboratório", "Exames", "Urgência", "Farmácia"].map((tag) => (
          <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
            {tag}
          </span>
        ))}
      </div>
      <ServicesGrid />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Team />
      </div>
    </>
  );
}
