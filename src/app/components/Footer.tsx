import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router";
import logoImg from "@/assets/logo.png";

const quickLinks = [
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contactos", href: "/contactos" },
  { label: "Equipa Médica", href: "/sobre" },
];

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#020F2A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-xl p-2.5 inline-block mb-5">
              <img src={logoImg} alt="Centro Médico Camuazu" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Cuidamos de si e da sua família com dedicação, profissionalismo e tecnologia moderna.
            </p>
            <div className="flex items-center gap-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1BAFD6] flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E02020] flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Instagram">
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Specialties - Creative Link */}
          <div>
            <h4 className="text-white mb-5 text-sm font-bold uppercase tracking-wider">
              Especialidades
            </h4>
            <button
              onClick={() => navigate("/servicos")}
              className="group flex items-center gap-3 bg-white/5 hover:bg-[#1BAFD6]/10 rounded-xl p-4 transition-all duration-300 w-full text-left mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1BAFD6]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1BAFD6]/30 transition-colors">
                <span className="text-[#1BAFD6] text-lg font-bold">11</span>
              </div>
              <div>
                <div className="text-white/80 text-sm font-medium group-hover:text-[#1BAFD6] transition-colors">
                  Especialidades Médicas
                </div>
                <div className="text-white/40 text-xs">
                  Ver todas →
                </div>
              </div>
            </button>
            <p className="text-white/30 text-xs leading-relaxed">
              Consultas, exames, laboratório, urgência, internamento e muito mais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-5 text-sm font-bold uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-white/50 text-sm hover:text-[#1BAFD6] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E02020]/60" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-white mb-5 text-sm font-bold uppercase tracking-wider">
              Contactos
            </h4>
            <div className="space-y-3.5">
              <a href="tel:849823400" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#1BAFD6]/10 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#1BAFD6]" />
                </div>
                <div className="text-white/70 text-sm group-hover:text-[#1BAFD6] transition-colors">
                  849 823 400
                </div>
              </a>
              <a href="mailto:info@centromedicocamuazu.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#E02020]/10 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#E02020]" />
                </div>
                <div className="text-white/70 text-sm group-hover:text-[#1BAFD6] transition-colors break-all">
                  info@centromedicocamuazu.com
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1BAFD6]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#1BAFD6]" />
                </div>
                <div className="text-white/70 text-sm">
                  Rua Filipe Samuel Magaia, 324<br />
                  Bairro Muatala, Nampula
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E02020]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} className="text-[#E02020]" />
                </div>
                <div className="text-white/70 text-sm">
                  Todos os dias: 08h – 20h<br />
                  <span className="text-white/40">Incluindo domingos e feriados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Centro Médico Camuazu. Todos os direitos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-white/30 text-xs hover:text-[#1BAFD6] transition-colors"
            aria-label="Voltar ao topo"
          >
            Voltar ao topo
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
