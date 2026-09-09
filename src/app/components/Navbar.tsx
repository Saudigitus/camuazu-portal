import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { scrollTo } from "@/utils";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "/", type: "page" },
  { label: "Serviços", href: "/servicos", type: "page" },
  { label: "Sobre Nós", href: "/sobre", type: "page" },
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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNav = (href: string, type: string) => {
    setMenuOpen(false);
    if (type === "page") {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
          : "bg-white"
      }`}
      aria-label="Menu principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("/", "page")}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#1BAFD6]/30 rounded-lg cursor-pointer shrink-0"
            aria-label="Ir para o início"
          >
            <img src={logoImg} alt="Centro Médico Camuazu" className="h-14 sm:h-16 md:h-20 w-auto object-contain" />
          </button>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href, link.type)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm tracking-wide transition-colors duration-200 hover:text-[#1BAFD6] cursor-pointer ${
                    isActive ? "text-[#1BAFD6] font-semibold" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA - Right */}
          <div className="hidden md:flex shrink-0">
            <button
              onClick={() => navigate("/contactos")}
              className="flex items-center cursor-pointer gap-2 bg-[#E02020] hover:bg-[#c01818] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Marcar Consulta
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1BAFD6]/30 ${
              "text-gray-700"
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
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href, link.type)}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
                className={`text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                  isActive
                    ? "bg-[#1BAFD6]/10 text-[#1BAFD6] font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href="tel:849823400"
            role="menuitem"
            className="flex items-center justify-center gap-2 bg-[#E02020] text-white px-5 py-3 rounded-lg text-sm font-semibold mt-2"
          >
            <Phone size={15} />
            Marcar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
}
