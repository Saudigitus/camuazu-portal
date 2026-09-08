import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { User, GraduationCap, Briefcase } from "lucide-react";

const team = [
  {
    name: "Dr. Carlos Matsinhe",
    specialty: "Clínica Geral & Medicina Interna",
    formation: "Faculdade de Medicina - UDM",
    experience: "15+ anos de experiência",
    color: "#1BAFD6",
  },
  {
    name: "Dra. Ana Tembe",
    specialty: "Pediatria",
    formation: "Faculdade de Medicina - UEM",
    experience: "10+ anos de experiência",
    color: "#E02020",
  },
  {
    name: "Dr. Miguel Santos",
    specialty: "Cardiologia",
    formation: "Universidade de São Paulo",
    experience: "12+ anos de experiência",
    color: "#1BAFD6",
  },
  {
    name: "Dra. Fátima Namuera",
    specialty: "Ginecologia & Obstetrícia",
    formation: "Faculdade de Medicina - UDM",
    experience: "8+ anos de experiência",
    color: "#E02020",
  },
  {
    name: "Dr. João Macamo",
    specialty: "Ortopedia",
    formation: "Universidade Eduardo Mondlane",
    experience: "14+ anos de experiência",
    color: "#1BAFD6",
  },
  {
    name: "Dra. Sara Cossa",
    specialty: "Oftalmologia",
    formation: "Faculdade de Medicina - UEM",
    experience: "9+ anos de experiência",
    color: "#E02020",
  },
];

export function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#E02020]/10 text-[#E02020] px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E02020]" />
            Equipa Médica
          </div>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Profissionais{" "}
            <span className="text-[#E02020]">Qualificados</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Uma equipa dedicada de médicos e profissionais de saúde comprometidos com o seu bem-estar.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: `${member.color}12` }}
              >
                <User size={32} style={{ color: member.color }} />
              </div>

              {/* Info */}
              <h3 className="text-gray-900 text-lg font-bold mb-1">{member.name}</h3>
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: member.color }}
              >
                {member.specialty}
              </p>

              {/* Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <GraduationCap size={14} className="shrink-0" />
                  <span>{member.formation}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Briefcase size={14} className="shrink-0" />
                  <span>{member.experience}</span>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-300"
                style={{ backgroundColor: member.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
