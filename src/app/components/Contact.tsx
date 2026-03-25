import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "849 823 400 / 878 010 444",
    href: "tel:849823400",
    color: "#1BAFD6",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@centromedicocamuazu.com",
    href: "mailto:info@centromedicocamuazu.com",
    color: "#E02020",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Filipe Samuel Magaia, 324\nR/C Direito, Bairro Muatala, Nampula",
    color: "#1BAFD6",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda a Sábado: 07h – 20h\nDomingo e Feriados: 08h – 14h",
    color: "#E02020",
  },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
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
            Contacte-Nos
          </div> */}
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Marque a Sua{" "}
            <span className="text-[#E02020]">Consulta</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Entre em contacto connosco e agende a sua consulta. Estamos aqui para ajudar!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon size={20} style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">{info.label}</div>
                  {info.href ? (
                    <a href={info.href} className="text-gray-800 text-sm hover:text-[#1BAFD6] transition-colors" style={{ fontWeight: 600 }}>
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-800 text-sm whitespace-pre-line" style={{ fontWeight: 600 }}>
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map Embed placeholder */}
            <div className="rounded-2xl overflow-hidden h-52 bg-gray-100 relative">
              <iframe
                title="Localização Centro Médico Camuazu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d39.2795!3d-15.1165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA2JzU5LjQiUyAzOcKwMTYnNDYuMiJF!5e0!3m2!1spt!2smz!4v1700000000000!5m2!1spt!2smz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 pointer-events-none border border-gray-200 rounded-2xl" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#03224C] rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-white mb-6" style={{ fontWeight: 700, fontSize: "1.3rem" }}>
              Formulário de Marcação
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 size={56} className="text-[#1BAFD6] mb-4" />
                <p className="text-white text-lg" style={{ fontWeight: 700 }}>Pedido enviado!</p>
                <p className="text-white/60 text-sm mt-2">
                  Entraremos em contacto brevemente para confirmar a sua consulta.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-xs mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="O seu nome"
                      className="w-full bg-white/10 border border-white/10 focus:border-[#1BAFD6] rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs mb-2">Telefone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="8X XXXX XXX"
                      className="w-full bg-white/10 border border-white/10 focus:border-[#1BAFD6] rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-xs mb-2">Especialidade</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-white/10 border border-white/10 focus:border-[#1BAFD6] rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm appearance-none"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" className="bg-[#03224C]">Selecione a especialidade</option>
                    <option value="geral" className="bg-[#03224C]">Clínica Geral</option>
                    <option value="pediatria" className="bg-[#03224C]">Pediatria</option>
                    <option value="cardiologia" className="bg-[#03224C]">Cardiologia</option>
                    <option value="ortopedia" className="bg-[#03224C]">Ortopedia</option>
                    <option value="ecografia" className="bg-[#03224C]">Ecografia</option>
                    <option value="analises" className="bg-[#03224C]">Análises Clínicas</option>
                    <option value="outro" className="bg-[#03224C]">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-xs mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Descreva brevemente o motivo da consulta..."
                    className="w-full bg-white/10 border border-white/10 focus:border-[#1BAFD6] rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#E02020] hover:bg-[#c01818] text-white py-4 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send size={16} />
                  Enviar Pedido de Consulta
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
