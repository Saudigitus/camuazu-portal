import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Calendar, TrendingUp, Users } from "lucide-react";
//@ts-ignore
import consultaImg from "@/assets/consulta.png";
//@ts-ignore
import internamentoImg from "@/assets/internamento.png";
//@ts-ignore
import esperaImg from "@/assets/espera.png";
//@ts-ignore
import consultorioImg from "@/assets/consultorio.png";

const gallery = [
  { img: consultaImg, alt: "Consulta médica" },
  { img: internamentoImg, alt: "Sala de Internamento" },
  { img: consultorioImg, alt: "Consultório Médico" },
  { img: esperaImg, alt: "Sala de Espera" },
];

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
    <section id="about" className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((item, i) => {
                const gridClass =
                  i === 0
                    ? "md:col-start-1 md:row-start-1 md:row-span-2"
                    : i === 1
                    ? "md:col-start-2 md:row-start-1"
                    : i === 2
                    ? "md:col-start-2 md:row-start-2 md:row-span-2"
                    : "md:col-start-1 md:row-start-3";

                const cardStyle =
                  i === 0
                    ? { minHeight: "320px" }
                    : i === 2
                    ? { minHeight: "100%" }
                    : { height: "155px", minHeight: "155px" };

                return (
                  <motion.div
                    key={item.alt}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className={`relative group overflow-hidden rounded-sm ${gridClass}`}
                    style={cardStyle}
                  >
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03224C]/70 via-[#03224C]/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-white text-sm font-semibold">{item.alt}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating badge */}
            {/* <div className="absolute -bottom-5 -right-5 bg-[#E02020] text-white rounded-2xl p-4 shadow-xl z-10">
              <div className="text-[10px] text-white/80">Desde</div>
              <div className="text-2xl" style={{ fontWeight: 800 }}>2024</div>
              <div className="text-[10px] text-white/80">ao serviço da comunidade</div>
            </div> */}

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-[#1BAFD6]/10 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-gray-900 mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Sobre nós
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
