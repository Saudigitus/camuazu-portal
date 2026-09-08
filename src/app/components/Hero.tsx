import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
//@ts-ignore
import internamentoImg from "@/assets/internamento.png";
//@ts-ignore
import esperaImg from "@/assets/espera.png";
//@ts-ignore
import consultorioImg from "@/assets/consultorio.png";
//@ts-ignore
import exteriorImg from "@/assets/exterior.png";
//@ts-ignore
import clinicImg from "@/assets/exterior.png";

const slides = [
  { img: clinicImg, alt: "Centro Médico Camuazu", tag: "", tagColor: "", title: "", subtitle: "", desc: "" },
  { img: internamentoImg, alt: "Sala de Internamento", tag: "Internamento", tagColor: "#1BAFD6", title: "Sala de Internamento", subtitle: "Ambiente Moderno e Confortável", desc: "Quartos equipados com camas médicas modernas e monitorização contínua" },
  { img: esperaImg, alt: "Sala de Espera", tag: "Recepção", tagColor: "#E02020", title: "Sala de Espera", subtitle: "Ambiente Moderno e Confortável", desc: "Ambiente confortável e acolhedor para os nossos pacientes" },
  { img: consultorioImg, alt: "Consultório Médico", tag: "Consultas", tagColor: "#1BAFD6", title: "Consultório Médico", subtitle: "Ambiente Moderno e Confortável", desc: "Consultórios equipados com tecnologia de ponta para diagnóstico preciso" },
  { img: exteriorImg, alt: "Exterior da Clínica", tag: "Localização", tagColor: "#E02020", title: "Exterior da Clínica", subtitle: "Ambiente Moderno e Confortável", desc: "Localizado no Bairro Muatala, de fácil acesso em Nampula" },
];

const highlights = [
  "Atendimento Humanizado",
  "Equipamentos Modernos",
  "Equipa Especializada",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.img}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03224C]/90 via-[#03224C]/75 to-[#1BAFD6]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03224C]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full border border-[#1BAFD6]/20 opacity-60 hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full border border-white/10 opacity-40 hidden lg:block" />
      <div className="absolute bottom-1/4 right-5 w-32 h-32 rounded-full bg-[#1BAFD6]/10 blur-2xl hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-[8%] px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-2xl relative" style={{ minHeight: "380px" }}>
          {/* Slide 0 - Original Hero Content */}
          <div
            className="transition-opacity duration-1000 ease-in-out"
            style={{ opacity: current === 0 ? 1 : 0, position: current === 0 ? "relative" : "absolute", pointerEvents: current === 0 ? "auto" : "none", top: 0, left: 0, right: 0 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15 }}
            >
              Cuidamos de{" "}
              <span className="text-[#1BAFD6]">si</span>{" "}
              e da sua{" "}
              <span className="text-[#E02020]">Família</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle2 size={16} className="text-[#1BAFD6]" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 bg-[#E02020] hover:bg-[#c01818] text-white px-8 py-4 rounded-md text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Marcar Consulta
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md text-sm transition-all duration-200"
              >
                Ver Serviços
              </button>
            </motion.div>
          </div>

          {/* Slides 1-4 - Facilities Content */}
          {slides.slice(1).map((slide, i) => (
            <div
              key={i + 1}
              className="transition-opacity duration-1000 ease-in-out"
              style={{ opacity: current === i + 1 ? 1 : 0, position: current === i + 1 ? "relative" : "absolute", pointerEvents: current === i + 1 ? "auto" : "none", top: 0, left: 0, right: 0 }}
            >
              <div
                className="inline-block px-3 py-1.5 rounded-full text-xs text-white font-medium mb-4"
                style={{ backgroundColor: slide.tagColor }}
              >
                {slide.tag}
              </div>

              <h1
                className="text-white mb-3"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15 }}
              >
                {slide.title}
              </h1>

              <p className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed">
                {slide.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="flex items-center gap-2 bg-[#E02020] hover:bg-[#c01818] text-white px-8 py-4 rounded-md text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Marcar Consulta
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollTo("#services")}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md text-sm transition-all duration-200"
                >
                  Ver Serviços
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#1BAFD6] w-8" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={slide.alt}
          />
        ))}
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 30C1200 70 960 10 720 40C480 70 240 0 0 30L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
