import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote, TrendingUp, Users, ThumbsUp } from "lucide-react";


const testimonials = [
  {
    name: "Ana Beatriz Machava",
    role: "Paciente",
    text: "O atendimento é 5 estrelas. O acompanhamento do início ao fim foi muito bom. A Clínica transmite confiança à minha família.",
    initial: "A",
    color: "#1BAFD6",
  },
  {
    name: "Carlos Mendes Nhamussua",
    role: "Paciente",
    text: "Excelente equipa. O atendimento é muito bom, nota mil. Volto sempre, lá é a minha casa.",
    initial: "C",
    color: "#E02020",
  },
  {
    name: "João Alfredo Bila",
    role: "Paciente",
    text: "Na minha mente, o Centro Médico CAMUAZU é número um. Fui muito bem atendido e senti-me em casa. Vocês cumprem o vosso lema: 'Cuidamos de si e da sua família'.",
    initial: "J",
    color: "#1BAFD6",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-24 bg-gradient-to-b from-[#F0F8FF] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            A Confiança dos Nossos{" "}
            <span className="text-[#1BAFD6]">Utentes</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            "A opinião dos utentes melhora continuamente os nossos servicos — cada elogio confirma o nosso compromisso e cada sugestão faz-nos evoluir para cuidados mais seguros e humanizados".
          </p>
        </motion.div>



        {/* Testimonials Grid */}
        <div className="w-full md:w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote
                size={28}
                className="absolute top-4 right-4 opacity-10"
                style={{ color: t.color }}
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">"{t.text}"</p>

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