import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote, TrendingUp, Users, ThumbsUp } from "lucide-react";

const indicators = [
  { value: "100%", label: "Atendimento", desc: "avaliaram como Bom ou Muito Bom", icon: ThumbsUp, color: "#1BAFD6" },
  { value: "96,6%", label: "Recepção", desc: "classificaram como Boa ou Muito Boa", icon: Users, color: "#E02020" },
  { value: "90%", label: "Recomendam", desc: "voltariam ao CAMUAZU", icon: TrendingUp, color: "#1BAFD6" },
];

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
            A Confiança dos Nossos Utentes
          </div>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            A Confiança dos Nossos{" "}
            <span className="text-[#1BAFD6]">Utentes</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A confiança dos nossos utentes é o reflexo da qualidade dos cuidados que prestamos. Desde a abertura em Novembro de 2024, trabalhamos diariamente para proporcionar um atendimento humanizado, seguro e de excelência.
          </p>
        </motion.div>

        {/* Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {indicators.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${ind.color}12` }}
              >
                <ind.icon size={24} style={{ color: ind.color }} />
              </div>
              <div className="text-4xl font-bold mb-1" style={{ color: ind.color }}>
                {ind.value}
              </div>
              <div className="text-gray-900 font-semibold text-sm mb-1">{ind.label}</div>
              <p className="text-gray-400 text-xs">{ind.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Improvement message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#03224C]/5 rounded-2xl p-8 mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-600 leading-relaxed italic">
            "A opinião dos nossos utentes orienta a melhoria contínua dos nossos serviços. Cada elogio reforça o nosso compromisso e cada sugestão representa uma oportunidade para evoluirmos, garantindo cuidados de saúde cada vez mais seguros, humanizados e de qualidade."
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
