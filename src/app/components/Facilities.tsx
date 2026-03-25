import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import patientRoomImg from "figma:asset/1adf03808092d9e0d1067b4d078f3e620e857e3c.png";
import waitingRoomImg from "figma:asset/aee0b42a5025c5cb14dda4e36321428e64fa7236.png";
import officeImg from "figma:asset/1f777484ee2dd1feef27a81e75b0114875dc5d1a.png";
import exteriorImg from "figma:asset/c50ae334707ba9b1825aa0dc1f7c57af4bac43d1.png";

const facilities = [
  {
    img: patientRoomImg,
    title: "Sala de Internamento",
    desc: "Quartos equipados com camas médicas modernas e monitorização contínua",
    badge: "Internamento",
    badgeColor: "#1BAFD6",
  },
  {
    img: waitingRoomImg,
    title: "Sala de Espera",
    desc: "Ambiente confortável e acolhedor para os nossos pacientes",
    badge: "Recepção",
    badgeColor: "#E02020",
  },
  {
    img: officeImg,
    title: "Consultório Médico",
    desc: "Consultórios equipados com tecnologia de ponta para diagnóstico preciso",
    badge: "Consultas",
    badgeColor: "#1BAFD6",
  },
  {
    img: exteriorImg,
    title: "Exterior da Clínica",
    desc: "Localizado no Bairro Muatala, de fácil acesso em Nampula",
    badge: "Localização",
    badgeColor: "#E02020",
  },
];

export function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" className="py-24 bg-gradient-to-b from-white to-[#F0F8FF]" ref={ref}>
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
            As Nossas Instalações
          </div> */}
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Ambiente Moderno e{" "}
            <span className="text-[#E02020]">Confortável</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Conheça as nossas instalações, projetadas para proporcionar o máximo conforto e segurança durante o seu tratamento.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility, i) => {
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
                ? { height: "100%", minHeight: "580px" }
                : i === 2
                ? { height: "100%", minHeight: "100%" }
                : { height: "280px", minHeight: "280px" };

            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 cursor-default ${gridClass}`}
                style={cardStyle}
              >
                <img
                  src={facility.img}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03224C]/80 via-[#03224C]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs text-white"
                  style={{ backgroundColor: facility.badgeColor }}
                >
                  {facility.badge}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white mb-2" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
                    {facility.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{facility.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}