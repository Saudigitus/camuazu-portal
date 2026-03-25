import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import clinicImg from "figma:asset/c50ae334707ba9b1825aa0dc1f7c57af4bac43d1.png";

const highlights = [
  "Atendimento Humanizado",
  "Equipamentos Modernos",
  "Equipa Especializada",
];

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={clinicImg}
          alt="Centro Médico Camuazu"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03224C]/90 via-[#03224C]/75 to-[#1BAFD6]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03224C]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full border border-[#1BAFD6]/20 opacity-60 hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full border border-white/10 opacity-40 hidden lg:block" />
      <div className="absolute bottom-1/4 right-5 w-32 h-32 rounded-full bg-[#1BAFD6]/10 blur-2xl hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15 }}
          >
            Saúde de{" "}
            <span className="text-[#1BAFD6]">Qualidade</span>{" "}
            para Toda a{" "}
            <span className="text-[#E02020]">Família</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed"
          >
            No Centro Médico Camuazu, oferecemos serviços médicos integrados com tecnologia moderna e atendimento personalizado. Sua saúde é a nossa prioridade.
          </motion.p>

          {/* Highlights */}
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 bg-[#E02020] hover:bg-[#c01818] text-white px-8 py-4 rounded-full text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Marcar Consulta
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-sm transition-all duration-200"
            >
              Ver Serviços
            </button>
          </motion.div>
        </div>
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
