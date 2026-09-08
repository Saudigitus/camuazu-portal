import { PageHero } from "../components/PageHero";
import { Contact } from "../components/Contact";

export function ContactosPage() {
  return (
    <>
      <PageHero
        title="Contacte"
        highlight="-Nos"
        description="Entre em contacto connosco para marcar uma consulta, esclarecer dúvidas ou obter informações sobre os nossos serviços."
      >
        <div className="flex gap-3 flex-wrap">
          {["Telefone", "Email", "WhatsApp"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </PageHero>
      <Contact />
    </>
  );
}
