import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import {
  Stethoscope, TestTube2, Scan, ShieldCheck, Syringe,
  Ambulance, BedDouble, Home, Eye, Pill, HeartPulse, ArrowRight, ChevronLeft, ChevronRight
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

const CARD_WIDTH = 296;

function ServiceCard({ service, i, inView, mode }: { service: typeof services[0]; i: number; inView: boolean; mode: "carousel" | "grid" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
        mode === "carousel" ? "shrink-0 w-[260px] sm:w-[280px]" : ""
      }`}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${service.color}12` }}
      >
        <service.icon size={22} style={{ color: service.color }} />
      </div>
      <h3 className="text-gray-900 mb-2" style={{ fontSize: "1rem", fontWeight: 700 }}>
        {service.title}
      </h3>
      <p className="text-gray-400 text-xs leading-relaxed mb-4">{service.desc}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {service.items.slice(0, 3).map((item) => (
          <span
            key={item}
            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
            style={{ backgroundColor: `${service.color}10`, color: service.color }}
          >
            {item}
          </span>
        ))}
        {service.items.length > 3 && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 font-medium">
            +{service.items.length - 3}
          </span>
        )}
      </div>

      <div
        className="h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-300"
        style={{ backgroundColor: service.color }}
      />
    </motion.div>
  );
}

export function Services({ layout = "grid" }: { layout?: "carousel" | "grid" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const allItems = [...services, null];

  const scrollBy = useCallback((dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * CARD_WIDTH, behavior: "smooth" });
  }, []);

  const scrollToStart = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "smooth" });
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (layout !== "carousel" || paused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, layout]);

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
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Cuidados Médicos{" "}
            <span className="text-[#1BAFD6]">Completos</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Oferecemos uma oferta integrada de serviços de saúde para indivíduos, famílias e empresas, garantindo qualidade, segurança e atendimento humanizado.
          </p>
        </motion.div>

        {/* Carousel */}
        {layout === "carousel" && (
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollBy(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-md bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#1BAFD6] hover:border-[#1BAFD6] transition-all duration-200 hidden sm:flex"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollBy(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-md bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#1BAFD6] hover:border-[#1BAFD6] transition-all duration-200 hidden sm:flex"
              aria-label="Próximo slide"
            >
              <ChevronRight size={20} />
            </button>

            {/* Scrollable Track */}
            <div
              ref={scrollRef}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="overflow-x-auto overflow-y-hidden mx-6 sm:mx-8 scrollbar-hide"
              style={{ scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex gap-5 w-max py-2">
                {allItems.map((item, i) => {
                  if (!item) {
                    return (
                      <motion.div
                        key="ver-mais"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.2, delay: services.length * 0.06 }}
                        onClick={() => navigate("/servicos")}
                        className="group bg-[#03224C] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shrink-0 w-[260px] sm:w-[280px] flex flex-col items-center justify-center text-center"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                          <ArrowRight size={24} className="text-[#1BAFD6]" />
                        </div>
                        <h3 className="text-white mb-2" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                          Ver Todos os Serviços
                        </h3>
                        <p className="text-white/50 text-xs leading-relaxed">
                          Explore todas as nossas especialidades e complete a lista de serviços.
                        </p>
                      </motion.div>
                    );
                  }
                  return <ServiceCard key={item.title} service={item} i={i} inView={inView} mode="carousel" />;
                })}
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        {layout === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} i={i} inView={inView} mode="grid" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
