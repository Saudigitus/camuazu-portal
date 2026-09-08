import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { scrollTo } from "@/utils";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#hero", type: "scroll" },
  { label: "Sobre Nós", href: "/sobre", type: "page" },
  { label: "Serviços", href: "/servicos", type: "page" },
  { label: "Contacto", href: "/contactos", type: "page" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string, type: string) => {
    setMenuOpen(false);
    if (type === "page") {
      navigate(href);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollTo(href), 100);
      } else {
        scrollTo(href);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="Menu principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero", "scroll")}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#1BAFD6]/30 rounded-lg cursor-pointer"
            aria-label="Ir para o início"
          >
            <img src={logoImg} alt="Centro Médico Camuazu" className="h-16 w-auto object-contain" />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.type === "page" && location.pathname === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href, link.type)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm tracking-wide transition-colors duration-200 hover:text-[#1BAFD6] cursor-pointer ${
                    isActive ? "text-[#1BAFD6] font-semibold" : scrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1BAFD6]/30 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = link.type === "page" && location.pathname === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href, link.type)}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
                className={`text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                  isActive
                    ? "bg-[#1BAFD6]/10 text-[#1BAFD6] font-semibold"
                    : "text-gray-700 hover:bg-[#1BAFD6]/10 hover:text-[#1BAFD6]"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href="tel:849823400"
            role="menuitem"
            className="flex items-center justify-center gap-2 bg-[#E02020] text-white px-5 py-3 rounded-full text-sm mt-2"
          >
            <Phone size={15} />
            Marcar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
}
