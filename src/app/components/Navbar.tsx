import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "figma:asset/bd0c47f6cb2435126e2924d6c298e7f1bb4f338f.png";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre Nós", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Instalações", href: "#facilities" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav("#hero")}>
            <img src={logoImg} alt="Centro Médico Camuazu" className="h-14 w-auto object-contain" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm tracking-wide transition-colors duration-200 hover:text-[#1BAFD6] ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:849823400"
              className="flex items-center gap-2 bg-[#E02020] hover:bg-[#c01818] text-white px-5 py-2.5 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone size={15} />
              Marcar Consulta
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-gray-700 text-left px-4 py-3 rounded-lg hover:bg-[#1BAFD6]/10 hover:text-[#1BAFD6] transition-colors text-sm"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:849823400"
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
