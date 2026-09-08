import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield } from "lucide-react";

const partners = [
  { name: "Momentum Moçambique", color: "#1BAFD6" },
  { name: "Diamond Companhia de Seguros", color: "#E02020" },
  { name: "Better Care Seguros de Saúde", sub: "Palma Seguros", color: "#1BAFD6" },
  { name: "Allianz Care", color: "#E02020" },
  { name: "Prime Health Care", color: "#1BAFD6" },
];

export function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#1BAFD6]/10 text-[#1BAFD6] px-4 py-2 rounded-full text-sm mb-4">
            <Shield size={14} />
            Parceiros de Confiança
          </div>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Seguradoras e{" "}
            <span className="text-[#1BAFD6]">Parceiros</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Trabalhamos com as principais seguradoras para oferecer o melhor cuidado sem preocupações.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center justify-center bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${partner.color}10` }}
              >
                <Shield size={24} style={{ color: partner.color }} />
              </div>
              <h3 className="text-gray-800 text-sm font-semibold text-center leading-tight">
                {partner.name}
              </h3>
              {partner.sub && (
                <span className="text-gray-400 text-xs text-center mt-1">{partner.sub}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
