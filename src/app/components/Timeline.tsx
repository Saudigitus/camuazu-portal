import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, TrendingUp, Users } from "lucide-react";
import consultaImg from "@/assets/consulta.png";

export function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24"
          >
            <div className="text-center mb-6">
              <h3 className="text-gray-900 mb-3" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800 }}>
                A Nossa <span className="text-[#1BAFD6]">Jornada</span>
              </h3>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1BAFD6] via-[#1BAFD6]/50 to-[#E02020] -translate-x-1/2" />

              {/* Milestone 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative flex items-start gap-6 mb-12 md:justify-center"
              >
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#1BAFD6] shadow-lg shadow-[#1BAFD6]/30 shrink-0">
                  <Calendar size={20} className="text-white" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 md:w-80 md:text-right">
                  <div className="text-[#1BAFD6] text-xs font-bold uppercase tracking-wider mb-1">Novembro 2024</div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2">Início das Actividades</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    O Centro Médico Camuazu abriu as suas portas no Bairro Muatala, em Nampula, com a missão de oferecer cuidados de saúde acessíveis e de qualidade.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative flex items-start gap-6 mb-12 md:justify-center md:flex-row-reverse"
              >
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#1BAFD6] shadow-lg shadow-[#1BAFD6]/30 shrink-0">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 md:w-80">
                  <div className="text-[#1BAFD6] text-xs font-bold uppercase tracking-wider mb-1">18 Meses</div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2">Crescimento Contínuo</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Expansão dos serviços clínicos, consolidação da confiança da comunidade e incorporação de novas especialidades médicas.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="relative flex items-start gap-6 md:justify-center"
              >
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#E02020] shadow-lg shadow-[#E02020]/30 shrink-0">
                  <Users size={20} className="text-white" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 md:w-80 md:text-right">
                  <div className="text-[#E02020] text-xs font-bold uppercase tracking-wider mb-1">Hoje</div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2">300+ Pacientes Atendidos</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Mais de 300 pacientes confiam no Camuazu para o seu cuidado diário, num serviço em constante melhoria.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={consultaImg}
                alt="Consulta médica"
                loading="lazy"
                className="w-full h-[300px] md:h-[420px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03224C]/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#E02020] text-white rounded-2xl p-5 shadow-xl">
              <div className="text-xs text-white/80 mt-0.5">Desde</div>
              <div className="text-3xl" style={{ fontWeight: 800 }}>2024</div>
              <div className="text-xs text-white/80 mt-0.5">ao serviço da comunidade</div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-[#1BAFD6]/10 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#1BAFD6]/5 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
