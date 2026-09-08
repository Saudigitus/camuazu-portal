import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, Award, Clock, ArrowRight } from "lucide-react";

const stats = [
  { icon: Users, value: "300+", label: "Pacientes Atendidos", color: "#1BAFD6", desc: "A comunidade confia no nosso trabalho", link: "#about" },
  { icon: Award, value: "10+", label: "Especialidades Médicas", color: "#E02020", desc: "Cobertura completa para a sua saúde", link: "#services" },
  { icon: Clock, value: "Das 8h às 24h", label: "Todos os dias", color: "#1BAFD6", desc: "Sempre disponível quando precisa", link: "#contact" },
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white border-y border-gray-200" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => scrollTo(stat.link)}
              className={`group py-10 pl-8 pr-6 md:pl-10 cursor-pointer transition-colors duration-300 hover:bg-gray-50 ${
                i < stats.length - 1 ? "md:border-r border-gray-200" : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}12` }}
              >
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
              <div
                className="text-2xl mb-1"
                style={{ fontWeight: 800, color: stat.color }}
              >
                {stat.value}
              </div>
              <p className="text-gray-900 font-medium text-sm mb-1">{stat.label}</p>
              <p className="text-gray-400 text-xs mb-3">{stat.desc}</p>
              <span
                className="inline-flex items-center gap-1 text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                style={{ color: stat.color }}
              >
                Saber mais <ArrowRight size={12} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
