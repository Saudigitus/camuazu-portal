import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Stethoscope, Baby, Brain, Bone, Eye, Activity,
  Syringe, TestTube2, Heart, Smile
} from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Clínica Geral", desc: "Consultas de medicina geral e familiar para adultos e crianças.", color: "#1BAFD6" },
  { icon: Baby, title: "Pediatria", desc: "Cuidados especializados para bebés e crianças em todas as fases.", color: "#E02020" },
  { icon: Heart, title: "Cardiologia", desc: "Avaliação e tratamento de doenças do coração e sistema circulatório.", color: "#E02020" },
  { icon: Brain, title: "Neurologia", desc: "Diagnóstico e tratamento de distúrbios neurológicos e cerebrais.", color: "#1BAFD6" },
  { icon: Bone, title: "Ortopedia", desc: "Tratamento de lesões músculo-esqueléticas e doenças ósseas.", color: "#E02020" },
  { icon: Eye, title: "Oftalmologia", desc: "Cuidados visuais e tratamento de doenças dos olhos.", color: "#1BAFD6" },
  { icon: Activity, title: "Ecografia", desc: "Exames de ecografia e ultrassonografia diagnóstica avançada.", color: "#1BAFD6" },
  { icon: Syringe, title: "Vacinação", desc: "Programa completo de vacinação para crianças e adultos.", color: "#E02020" },
  { icon: TestTube2, title: "Análises Clínicas", desc: "Laboratório completo para análises e exames diagnósticos.", color: "#1BAFD6" },
  { icon: Smile, title: "Medicina Preventiva", desc: "Check-ups e programas de prevenção de doenças.", color: "#E02020" },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#F8FBFF] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center gap-2 bg-[#1BAFD6]/10 text-[#1BAFD6] px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1BAFD6]" />
            Os Nossos Serviços
          </div> */}
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Cuidados Médicos{" "}
            <span className="text-[#1BAFD6]">Completos</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Oferecemos uma ampla gama de especialidades médicas para garantir a saúde e bem-estar de toda a sua família.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1.5 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                {service.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{service.desc}</p>

              {/* Hover accent line */}
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-300"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
