import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const team = [
  {
    name: "Dr. Carlos Matsinhe",
    role: "Diretor Clínico",
    specialty: "Clínica Geral & Medicina Interna",
    areas: ["Doenças Cardiovasculares", "Hipertensão", "Diabetes"],
    formation: "Faculdade de Medicina - UDM",
    experience: "15+ anos de experiência",
    color: "#1BAFD6",
    initials: "CM",
    img: "https://i.pravatar.cc/400?img=11",
  },
  {
    name: "Dra. Ana Tembe",
    role: "Coordenadora de Pediatria",
    specialty: "Pediatria",
    areas: ["Pediatria Geral", "Vacinação", "Desenvolvimento Infantil"],
    formation: "Faculdade de Medicina - UEM",
    experience: "10+ anos de experiência",
    color: "#E02020",
    initials: "AT",
    img: "https://i.pravatar.cc/400?img=5",
  },
  {
    name: "Dr. Miguel Santos",
    role: "Especialista",
    specialty: "Cardiologia",
    areas: ["Ecocardiografia", "Electrocardiograma", "Doenças Cardíacas"],
    formation: "Universidade de São Paulo",
    experience: "12+ anos de experiência",
    color: "#1BAFD6",
    initials: "MS",
    img: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "Dra. Fátima Namuera",
    role: "Especialista",
    specialty: "Ginecologia & Obstetrícia",
    areas: ["Pré-natal", "Planeamento Familiar", "Cirurgia Ginecológica"],
    formation: "Faculdade de Medicina - UDM",
    experience: "8+ anos de experiência",
    color: "#E02020",
    initials: "FN",
    img: "https://i.pravatar.cc/400?img=9",
  },
  {
    name: "Dr. João Macamo",
    role: "Especialista",
    specialty: "Ortopedia",
    areas: ["Traumatologia", "Ortopedia Pediátrica", "Reabilitação"],
    formation: "Universidade Eduardo Mondlane",
    experience: "14+ anos de experiência",
    color: "#1BAFD6",
    initials: "JM",
    img: "https://i.pravatar.cc/400?img=13",
  },
  {
    name: "Dra. Sara Cossa",
    role: "Especialista",
    specialty: "Oftalmologia",
    areas: ["Consultas Oftalmológicas", "Cirurgia de Cataratas", "Glaucoma"],
    formation: "Faculdade de Medicina - UEM",
    experience: "9+ anos de experiência",
    color: "#E02020",
    initials: "SC",
    img: "https://i.pravatar.cc/400?img=4",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div
                  className="hidden absolute inset-0 w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: member.color }}
                >
                  <span className="text-white text-5xl font-bold">{member.initials}</span>
                </div>
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm font-semibold mb-1" style={{ color: member.color }}>
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm mb-4">{member.specialty}</p>

                {/* Areas */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.areas.map((area) => (
                    <span
                      key={area}
                      className="text-[11px] px-2 py-1 rounded-full font-medium"
                      style={{ backgroundColor: `${member.color}12`, color: member.color }}
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Info */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <GraduationCap size={13} className="shrink-0 text-gray-400" />
                    <span>{member.formation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Briefcase size={13} className="shrink-0 text-gray-400" />
                    <span>{member.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <MapPin size={13} className="shrink-0 text-gray-400" />
                    <span>Centro Médico Camuazu</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
