import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import consultationImg from "figma:asset/7d8ae26c0e3a71d4a1985b6256dd0f4e7238d8c5.png";

const features = [
  "Equipa médica altamente qualificada e especializada",
  "Equipamentos de diagnóstico de última geração",
  "Ambiente acolhedor e humanizado",
  "Localizado no coração de Nampula",
  "Atendimento em múltiplas especialidades",
  "Compromisso com a saúde familiar",
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={consultationImg}
                alt="Consulta médica"
                className="w-full h-[520px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#03224C]/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#E02020] text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl" style={{ fontWeight: 800 }}>15+</div>
              <div className="text-xs text-white/80 mt-0.5">Anos de Experiência</div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-[#1BAFD6]/10 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#1BAFD6]/5 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <div className="inline-flex items-center gap-2 bg-[#E02020]/10 text-[#E02020] px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02020]" />
              Sobre o Centro Médico Camuazu
            </div> */}

            <h2 className="text-gray-900 mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Dedicados à Sua{" "}
              <span className="text-[#1BAFD6]">Saúde</span>{" "}
              e Bem-Estar
            </h2>

            <p className="text-gray-500 mb-6 leading-relaxed">
              O Centro Médico Camuazu nasceu com a missão de oferecer cuidados de saúde acessíveis e de qualidade à população de Nampula e arredores. Com uma equipa dedicada de profissionais e instalações modernas, estamos aqui para cuidar de si e da sua família.
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Acreditamos que a saúde é um direito fundamental. Por isso, combinamos tecnologia avançada com um atendimento humanizado, garantindo que cada paciente receba o melhor cuidado possível.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-[#1BAFD6] shrink-0" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 bg-[#1BAFD6] hover:bg-[#0d9bbf] text-white px-8 py-4 rounded-full text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Saber Mais
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
