import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
//@ts-ignore
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#hero", type: "scroll" },
  { label: "Sobre Nós", href: "#about", type: "scroll" },
  { label: "Serviços", href: "/servicos", type: "page" },
  { label: "Contacto", href: "#contact", type: "scroll" },
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
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
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
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav("#hero", "scroll")}>
            <img src={logoImg} alt="Centro Médico Camuazu" className="h-16 w-auto object-contain" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href, link.type)}
                className={`text-sm tracking-wide transition-colors duration-200 hover:text-[#1BAFD6] ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
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
              onClick={() => handleNav(link.href, link.type)}
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
