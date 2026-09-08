import { useNavigate } from "react-router";
import { Phone, ArrowRight } from "lucide-react";

export function Cta() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#03224C] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="max-w-xl">
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Pronto para cuidar da sua{" "}
              <span className="text-[#1BAFD6]">saúde</span>?
            </h2>
            <p className="text-white/60 leading-relaxed">
              Marque a sua consulta hoje e descubra a diferença de um atendimento humanizado, seguro e de excelência.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => navigate("/contactos")}
              className="flex items-center justify-center gap-2 bg-[#E02020] hover:bg-[#c01818] text-white px-8 py-4 rounded-md text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Marcar Consulta
              <ArrowRight size={16} />
            </button>
            <a
              href="tel:849823400"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md text-sm font-semibold transition-all duration-200"
            >
              <Phone size={16} />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
