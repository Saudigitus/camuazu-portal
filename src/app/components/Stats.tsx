import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, Award, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Pacientes Atendidos", color: "#1BAFD6" },
  { icon: Award, value: "10+", label: "Especialidades Médicas", color: "#E02020" },
  { icon: Clock, value: "24h", label: "Atendimento de Urgência", color: "#1BAFD6" },
  { icon: Heart, value: "98%", label: "Satisfação dos Pacientes", color: "#E02020" },
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon size={26} style={{ color: stat.color }} />
              </div>
              <div
                className="text-3xl mb-1"
                style={{ fontWeight: 800, color: stat.color }}
              >
                {stat.value}
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: stat.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
