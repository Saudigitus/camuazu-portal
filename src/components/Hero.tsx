import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { scrollTo } from "@/utils";
import internamentoImg from "@/assets/internamento.png";
import esperaImg from "@/assets/espera.png";
import consultorioImg from "@/assets/consultorio.png";
import exteriorImg from "@/assets/exterior.png";

const slides = [
  { img: exteriorImg, alt: "Centro Médico Camuazu", title: "", desc: "" },
  { img: internamentoImg, alt: "Sala de Internamento", title: "Sala de Internamento", desc: "Quartos equipados com camas médicas modernas e monitorização contínua" },
  { img: esperaImg, alt: "Sala de Espera", title: "Sala de Espera", desc: "Ambiente confortável e acolhedor para os nossos pacientes" },
  { img: consultorioImg, alt: "Consultório Médico", title: "Consultório Médico", desc: "Consultórios equipados com tecnologia de ponta para diagnóstico preciso" },
  { img: exteriorImg, alt: "Exterior da Clínica", title: "Exterior da Clínica", desc: "Localizado no Bairro Muatala, de fácil acesso em Nampula" },
];

const highlights = [
  "Atendimento Humanizado",
  "Equipamentos Modernos",
  "Equipa Especializada",
];

const INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const progressRef = useRef<ReturnType<typeof setInterval>>();
  const navigate = useNavigate();

  const total = slides.length;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + total) % total);
    setProgress(0);
  }, [total]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [next, paused]);

  // Progress bar
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = 100 / (INTERVAL / 50);
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 0;
        return p + step;
      });
    }, 50);
    return () => clearInterval(progressRef.current);
  }, [current, paused]);

  // Pointer handlers for drag/swipe
  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    startX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) next();
      else prev();
      dragging.current = false;
    }
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={slide.img}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03224C]/95 via-[#03224C]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03224C]/70 via-[#03224C]/20 to-transparent" />
      </div>

      {/* Drag Area */}
      <div
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      />

      {/* Decorative Circles */}
      <div className="absolute top-1/4 right-10 w-48 h-48 lg:w-72 lg:h-72 rounded-full border border-[#1BAFD6]/20 hidden md:block" aria-hidden="true" />
      <div className="absolute top-1/3 right-20 w-32 h-32 lg:w-48 lg:h-48 rounded-full border border-white/10 hidden md:block" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-5 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#1BAFD6]/10 blur-2xl hidden md:block" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-[8%] px-4 sm:px-6 lg:px-8 pt-28 pb-2 pointer-events-none">
        <div className="max-w-2xl relative" style={{ minHeight: "clamp(280px, 50vh, 380px)" }}>
          {/* Slide 0 - Hero Content */}
          <div
            className="transition-opacity duration-1000 ease-in-out"
            style={{ opacity: current === 0 ? 1 : 0, position: current === 0 ? "relative" : "absolute", pointerEvents: current === 0 ? "auto" : "none", top: 0, left: 0, right: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              <span className="text-[#1BAFD6] text-lg sm:text-xl font-bold tracking-tight uppercase">
                Clínica Camuazu
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15 }}
            >
              Cuidamos de{" "}
              <span className="text-[#1BAFD6]">Si</span>{" "}
              e da sua{" "}
              <span className="text-[#E02020]">Família</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                  <CheckCircle2 size={14} className="text-[#1BAFD6] shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <button
                onClick={() => navigate("/contactos")}
                className="flex items-center gap-2 cursor-pointer bg-[#E02020] hover:bg-[#c01818] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Marcar Consulta
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="flex items-center gap-2 cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-sm transition-all duration-200"
              >
                Ver Serviços
              </button>
            </motion.div>
          </div>

          {/* Slides 1-4 */}
          {slides.slice(1).map((slide, i) => (
            <div
              key={i + 1}
              className="transition-opacity duration-1000 ease-in-out"
              style={{ opacity: current === i + 1 ? 1 : 0, position: current === i + 1 ? "relative" : "absolute", pointerEvents: current === i + 1 ? "auto" : "none", top: 0, left: 0, right: 0 }}
            >
              <div className="mb-2">
                <span className="text-[#1BAFD6] text-lg sm:text-xl font-bold tracking-tight uppercase">
                  Clínica Camuazu
                </span>
              </div>

              <h1
                className="text-white mb-3"
                style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15 }}
              >
                {slide.title}
              </h1>

              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed">
                {slide.desc}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => navigate("/contactos")}
                  className="flex items-center gap-2 cursor-pointer bg-[#E02020] hover:bg-[#c01818] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Marcar Consulta
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollTo("#services")}
                  className="flex items-center gap-2 cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-sm transition-all duration-200"
                >
                  Ver Serviços
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div
          className="h-full bg-[#1BAFD6] transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2" role="tablist" aria-label="Slides">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={current === i}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === i
                ? "bg-[#1BAFD6] w-8"
                : "bg-white/40 hover:bg-white/60 w-2.5"
            }`}
          />
        ))}
      </div>

      {/* Arrow Left */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-md border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-sm pointer-events-auto"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Arrow Right */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-md border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-sm pointer-events-auto"
        aria-label="Próximo slide"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}
