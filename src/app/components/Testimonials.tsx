import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Beatriz Machava",
    role: "Paciente",
    stars: 5,
    text: "O Centro Médico Camuazu transformou a forma como vejo os cuidados de saúde. A equipa é extremamente profissional e atenciosa. Recomendo a todos!",
    initial: "A",
    color: "#1BAFD6",
  },
  {
    name: "Carlos Mendes Nhamussua",
    role: "Paciente",
    stars: 5,
    text: "Fui atendido rapidamente e com muito cuidado. As instalações são modernas e limpas. Sinto-me seguro ao trazer a minha família aqui.",
    initial: "C",
    color: "#E02020",
  },
  {
    name: "Fátima Jossefa",
    role: "Mãe de Paciente",
    stars: 5,
    text: "Trago os meus filhos regularmente ao Centro Médico Camuazu. O Dr. e toda a equipa são fantásticos com as crianças. Muito obrigada!",
    initial: "F",
    color: "#1BAFD6",
  },
  {
    name: "João Alfredo Bila",
    role: "Paciente",
    stars: 5,
    text: "Excelente atendimento do início ao fim. Os equipamentos são de última geração e os resultados dos exames são rápidos. Cinco estrelas!",
    initial: "J",
    color: "#E02020",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-gradient-to-b from-[#F0F8FF] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#E02020]/10 text-[#E02020] px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E02020]" />
            Testemunhos
          </div>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            O Que Dizem os Nossos{" "}
            <span className="text-[#1BAFD6]">Pacientes</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A satisfação dos nossos pacientes é a nossa maior conquista.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <Quote
                size={28}
                className="absolute top-4 right-4 opacity-10"
                style={{ color: t.color }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm shrink-0"
                  style={{ backgroundColor: t.color, fontWeight: 700 }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-gray-900 text-sm" style={{ fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
