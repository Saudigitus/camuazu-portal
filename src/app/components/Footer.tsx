import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logoImg from "figma:asset/bd0c47f6cb2435126e2924d6c298e7f1bb4f338f.png";

const footerLinks = {
  services: [
    "Clínica Geral",
    "Pediatria",
    "Cardiologia",
    "Ortopedia",
    "Ecografia",
    "Análises Clínicas",
  ],
  quick: [
    { label: "Sobre Nós", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Instalações", href: "#facilities" },
    { label: "Marcar Consulta", href: "#contact" },
  ],
};

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020F2A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-3 inline-block mb-5">
              <img src={logoImg} alt="Centro Médico Camuazu" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Cuidamos de si e da sua família com dedicação, profissionalismo e tecnologia moderna.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1BAFD6] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-5" style={{ fontWeight: 700, fontSize: "0.95rem" }}>
              Especialidades
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((s) => (
                <li key={s}>
                  <span className="text-white/50 text-sm hover:text-[#1BAFD6] transition-colors cursor-default flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#1BAFD6]" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-5" style={{ fontWeight: 700, fontSize: "0.95rem" }}>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 text-sm hover:text-[#1BAFD6] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E02020]" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-5" style={{ fontWeight: 700, fontSize: "0.95rem" }}>
              Contactos
            </h4>
            <div className="space-y-4">
              <a href="tel:849823400" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#1BAFD6]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-[#1BAFD6]" />
                </div>
                <div>
                  <div className="text-white/30 text-xs mb-0.5">Telefone</div>
                  <div className="text-white/70 text-sm group-hover:text-[#1BAFD6] transition-colors">
                    849 823 400 / 878 010 444
                  </div>
                </div>
              </a>
              <a href="mailto:info@centromedicocamuazu.com" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#E02020]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-[#E02020]" />
                </div>
                <div>
                  <div className="text-white/30 text-xs mb-0.5">Email</div>
                  <div className="text-white/70 text-sm group-hover:text-[#1BAFD6] transition-colors break-all">
                    info@centromedicocamuazu.com
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1BAFD6]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#1BAFD6]" />
                </div>
                <div>
                  <div className="text-white/30 text-xs mb-0.5">Endereço</div>
                  <div className="text-white/70 text-sm">
                    Rua Filipe Samuel Magaia, 324<br />
                    Bairro Muatala, Nampula
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Centro Médico Camuazu. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#1BAFD6]" />
            <span className="text-white/30 text-xs">Cuidamos de Si e da Sua Família</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
