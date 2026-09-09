import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Stethoscope, TestTube2, Scan, ShieldCheck, Syringe,
  Ambulance, BedDouble, Home, Eye, Pill, HeartPulse, Check
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultas Médicas",
    desc: "Consultas em diversas especialidades com diagnóstico, tratamento e acompanhamento personalizado.",
    color: "#1BAFD6",
    items: ["Medicina Geral", "Pediatria", "Ginecologia", "Cardiologia", "Neurologia", "Oncologia"],
  },
  {
    icon: TestTube2,
    title: "Laboratório de Análises",
    desc: "Exames laboratoriais com equipamentos modernos e resultados fiáveis.",
    color: "#E02020",
    items: ["Hematologia", "Bioquímica", "Imunologia", "Microbiologia", "Hormonas", "Carga Viral"],
  },
  {
    icon: Scan,
    title: "Exames de Diagnóstico",
    desc: "Exames complementares que apoiam o diagnóstico médico com rapidez e precisão.",
    color: "#1BAFD6",
    items: ["Ecografia", "Raio X", "Mamografia", "TAC", "ECG", "Espirometria"],
  },
  {
    icon: ShieldCheck,
    title: "Saúde Ocupacional",
    desc: "Serviços de saúde para empresas, promovendo ambientes de trabalho seguros.",
    color: "#E02020",
    items: ["Exames de Admissão", "Exames Periódicos", "Avaliação de Aptidão", "Formação"],
  },
  {
    icon: Syringe,
    title: "Procedimentos Médicos",
    desc: "Procedimentos médicos e pequenas cirurgias em ambiente seguro e controlado.",
    color: "#1BAFD6",
    items: ["Curativos", "Suturas", "Biópsias", "Cirurgia", "Nebulização", "Partos"],
  },
  {
    icon: Ambulance,
    title: "Serviço de Urgência",
    desc: "Atendimento imediato para situações clínicas urgentes com avaliação rápida.",
    color: "#E02020",
    items: ["Atendimento Médico", "Observação Clínica", "Estabilização", "Referência Hospitalar"],
  },
  {
    icon: BedDouble,
    title: "Internamento",
    desc: "Internamento para doentes que necessitam de vigilância clínica e tratamento contínuo.",
    color: "#1BAFD6",
    items: ["Monitorização Clínica", "Terapêutica", "Cuidados de Enfermagem", "Observação Médica"],
  },
  {
    icon: Home,
    title: "Atendimento Domiciliário",
    desc: "Cuidados de saúde levados até à casa dos pacientes com conforto e segurança.",
    color: "#E02020",
    items: ["Consultas ao Domicílio", "Cuidados de Enfermagem", "Colheitas", "Cuidados Pós-Operatórios"],
  },
  {
    icon: Eye,
    title: "Centro de Óptica",
    desc: "Soluções completas para a saúde visual com consultas e produtos de qualidade.",
    color: "#1BAFD6",
    items: ["Optometria", "Armações", "Lentes Oftálmicas", "Óculos de Sol"],
  },
  {
    icon: Pill,
    title: "Farmácia",
    desc: "Acesso rápido e seguro aos medicamentos prescritos e produtos de saúde.",
    color: "#E02020",
    items: ["Medicamentos", "Material Médico", "Vitaminas", "Dispositivos Médicos"],
  },
  {
    icon: HeartPulse,
    title: "Programas Preventivos",
    desc: "Check-ups e rastreios para prevenção e promoção da saúde.",
    color: "#1BAFD6",
    items: ["Check-up Executivo", "Check-up Feminino", "Check-up Masculino", "Rastreios"],
  },
];

export function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1BAFD6]/10 text-[#1BAFD6] px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1BAFD6]" />
            Especialidades
          </div>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Cuidados Médicos{" "}
            <span className="text-[#1BAFD6]">Completos</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Oferecemos uma oferta integrada de serviços de saúde para indivíduos, famílias e empresas, garantindo qualidade, segurança e atendimento humanizado.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300"
            >
              {/* Top Color Bar */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: service.color }}
              />

              <div className="p-6 lg:p-8">
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}12` }}
                  >
                    <service.icon size={26} style={{ color: service.color }} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 text-lg font-bold leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mt-1">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Items */}
                <div className="border-t border-gray-100 pt-5">
                  <p className="text-gray-900 text-xs font-semibold uppercase tracking-wider mb-3">
                    Especialidades
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${service.color}12` }}
                        >
                          <Check size={12} style={{ color: service.color }} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
