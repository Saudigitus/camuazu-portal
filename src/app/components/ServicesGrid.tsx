import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Stethoscope, TestTube2, Scan, ShieldCheck, Syringe,
  Ambulance, BedDouble, Home, Eye, Pill, HeartPulse, Check, ChevronRight
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultas Médicas",
    desc: "Consultas em diversas especialidades com diagnóstico, tratamento e acompanhamento personalizado. A nossa equipa de médicos especialistas está disponível para cuidar da sua saúde com dedicação e competência.",
    color: "#1BAFD6",
    items: ["Medicina Geral", "Pediatria", "Ginecologia", "Cardiologia", "Neurologia", "Oncologia"],
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: TestTube2,
    title: "Laboratório de Análises",
    desc: "Exames laboratoriais com equipamentos modernos e resultados fiáveis. Realizamos análises clínicas completas com rapidez e precisão para o diagnóstico adequado.",
    color: "#E02020",
    items: ["Hematologia", "Bioquímica", "Imunologia", "Microbiologia", "Hormonas", "Carga Viral"],
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: Scan,
    title: "Exames de Diagnóstico",
    desc: "Exames complementares que apoiam o diagnóstico médico com rapidez e precisão. Equipamentos de última geração para resultados fiáveis.",
    color: "#1BAFD6",
    items: ["Ecografia", "Raio X", "Mamografia", "TAC", "ECG", "Espirometria"],
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Saúde Ocupacional",
    desc: "Serviços de saúde para empresas, promovendo ambientes de trabalho seguros e saudáveis. Exames ocupacionais e programas de saúde corporativos.",
    color: "#E02020",
    items: ["Exames de Admissão", "Exames Periódicos", "Avaliação de Aptidão", "Formação"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: Syringe,
    title: "Procedimentos Médicos",
    desc: "Procedimentos médicos e pequenas cirurgias em ambiente seguro e controlado. A nossa equipa garante a sua segurança e conforto.",
    color: "#1BAFD6",
    items: ["Curativos", "Suturas", "Biópsias", "Cirurgia", "Nebulização", "Partos"],
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: Ambulance,
    title: "Serviço de Urgência",
    desc: "Atendimento imediato para situações clínicas urgentes com avaliação rápida. Disponível todos os dias para cuidar de si.",
    color: "#E02020",
    items: ["Atendimento Médico", "Observação Clínica", "Estabilização", "Referência Hospitalar"],
    img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: BedDouble,
    title: "Internamento",
    desc: "Internamento para doentes que necessitam de vigilância clínica e tratamento contínuo. Quartos confortáveis com acompanhamento médico 24 horas.",
    color: "#1BAFD6",
    items: ["Monitorização Clínica", "Terapêutica", "Cuidados de Enfermagem", "Observação Médica"],
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: Home,
    title: "Atendimento Domiciliário",
    desc: "Cuidados de saúde levados até à casa dos pacientes com conforto e segurança. Para quem não pode deslocar-se até à clínica.",
    color: "#E02020",
    items: ["Consultas ao Domicílio", "Cuidados de Enfermagem", "Colheitas", "Cuidados Pós-Operatórios"],
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: Eye,
    title: "Centro de Óptica",
    desc: "Soluções completas para a saúde visual com consultas e produtos de qualidade. Cuide da sua visão com os nossos especialistas.",
    color: "#1BAFD6",
    items: ["Optometria", "Armações", "Lentes Oftálmicas", "Óculos de Sol"],
    img: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: Pill,
    title: "Farmácia",
    desc: "Acesso rápido e seguro aos medicamentos prescritos e produtos de saúde. Farmácia completa com preços acessíveis.",
    color: "#E02020",
    items: ["Medicamentos", "Material Médico", "Vitaminas", "Dispositivos Médicos"],
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=500&fit=crop&q=80",
  },
  {
    icon: HeartPulse,
    title: "Programas Preventivos",
    desc: "Check-ups e rastreios para prevenção e promoção da saúde. Invista na sua saúde com exames preventivos regulares.",
    color: "#1BAFD6",
    items: ["Check-up Executivo", "Check-up Feminino", "Check-up Masculino", "Rastreios"],
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&q=80",
  },
];

export function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const service = services[active];

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

        {/* Tabs Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-0 bg-white rounded-2xl border border-gray-200 overflow-hidden min-h-[600px]"
        >
          {/* Left - Tabs List */}
          <div className="bg-gray-50 border-r border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-gray-900 font-bold text-lg">Nossos Serviços</h3>
              <p className="text-gray-400 text-sm mt-1">{services.length} especialidades disponíveis</p>
            </div>
            <div className="overflow-y-auto max-h-[520px]">
              {services.map((s, i) => {
                const Icon = s.icon;
                const isActive = active === i;
                return (
                  <button
                    key={s.title}
                    onClick={() => setActive(i)}
                    className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-all duration-200 border-l-4 cursor-pointer ${
                      isActive
                        ? "bg-white border-l-[#1BAFD6]"
                        : "border-l-transparent hover:bg-white/50"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: isActive ? `${s.color}15` : "transparent" }}
                    >
                      <Icon size={18} style={{ color: isActive ? s.color : "#9CA3AF" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold truncate ${isActive ? "text-gray-900" : "text-gray-500"}`}>
                        {s.title}
                      </p>
                      <p className="text-xs text-gray-400 truncate">{s.items.length} áreas</p>
                    </div>
                    <ChevronRight size={16} className={`shrink-0 transition-transform ${isActive ? "text-[#1BAFD6] rotate-90" : "text-gray-300"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right - Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03224C]/80 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-end gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                      <service.icon size={22} style={{ color: service.color }} />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-8">{service.desc}</p>

                  <div>
                    <h4 className="text-gray-900 font-bold mb-4">Especialidades incluídas</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${service.color}12` }}
                          >
                            <Check size={14} style={{ color: service.color }} />
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className="mt-8 flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all hover:shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    Marcar Consulta
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
