import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Users, ThumbsUp } from "lucide-react";

const indicators = [
  { value: "100%", label: "Atendimento", desc: "avaliaram como Bom ou Muito Bom", icon: ThumbsUp, color: "#1BAFD6" },
  { value: "96,6%", label: "Recepção", desc: "classificaram como Boa ou Muito Boa", icon: Users, color: "#E02020" },
  { value: "90%", label: "Recomendam", desc: "voltariam ao CAMUAZU", icon: TrendingUp, color: "#1BAFD6" },
];

export function Reability() {
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
            A confiança dos nossos utentes é o reflexo da qualidade dos cuidados que prestamos. Trabalhamos para proporcionar um atendimento humanizado, seguro e de excelência.
          </p>
        </motion.div>

        {/* Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-100 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            {indicators.map((ind, i) => (
              <div key={ind.label} className="flex items-center gap-8 md:gap-10">
                {/* Indicator */}
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${ind.color}12` }}
                  >
                    <ind.icon size={20} style={{ color: ind.color }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: ind.color }}>
                    {ind.value}
                  </div>
                  <div className="text-gray-900 font-semibold text-sm mb-1">{ind.label}</div>
                  <p className="text-gray-400 text-xs">{ind.desc}</p>
                </div>

                {/* Vertical Line */}
                {i < indicators.length - 1 && (
                  <div className="hidden md:block w-px h-20 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
