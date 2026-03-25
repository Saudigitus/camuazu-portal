import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Clock, UserCheck, Microscope, MapPin, Phone } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Segurança & Confiança",
    desc: "Protocolos médicos rigorosos e equipamentos esterilizados para garantir a sua segurança.",
    color: "#1BAFD6",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    desc: "Marcação eficiente e tempos de espera reduzidos para o seu conforto.",
    color: "#E02020",
  },
  {
    icon: UserCheck,
    title: "Equipa Especializada",
    desc: "Médicos e enfermeiros qualificados, comprometidos com o seu bem-estar.",
    color: "#1BAFD6",
  },
  {
    icon: Microscope,
    title: "Tecnologia Avançada",
    desc: "Equipamentos de diagnóstico modernos para resultados precisos e rápidos.",
    color: "#E02020",
  },
  {
    icon: MapPin,
    title: "Localização Central",
    desc: "Situados no Bairro Muatala, facilmente acessível a toda a população de Nampula.",
    color: "#1BAFD6",
  },
  {
    icon: Phone,
    title: "Apoio Contínuo",
    desc: "Equipa disponível para responder às suas dúvidas e necessidades de saúde.",
    color: "#E02020",
  },
];

export function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#03224C] relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1BAFD6]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E02020]/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center gap-2 bg-[#1BAFD6]/20 border border-[#1BAFD6]/30 text-[#7DD8F0] px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1BAFD6]" />
            Porque Nos Escolher
          </div> */}
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            A Sua Saúde em{" "}
            <span className="text-[#1BAFD6]">Boas Mãos</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            No Centro Médico Camuazu, cada detalhe é pensado para proporcionar a melhor experiência de saúde.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${reason.color}20` }}
              >
                <reason.icon size={22} style={{ color: reason.color }} />
              </div>
              <h3 className="text-white mb-2" style={{ fontWeight: 700, fontSize: "1rem" }}>
                {reason.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
