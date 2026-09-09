import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden mb-3"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Centro Médico Camuazu</div>
                  <div className="text-white/80 text-xs">Normalmente responde rapidamente</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-[#ECE5DD]">
              <div className="bg-white rounded-xl p-3 shadow-sm max-w-[85%]">
                <p className="text-gray-800 text-sm leading-relaxed">
                  Olá! Como podemos ajudá-lo? 🏥
                </p>
                <p className="text-gray-400 text-[10px] mt-1 text-right">agora</p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 space-y-2">
              <a
                href="https://wa.me/258849823400?text=Olá, gostaria de marcar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl text-sm font-semibold transition-colors w-full"
              >
                <MessageCircle size={16} />
                Marcar Consulta
              </a>
              <a
                href="tel:849823400"
                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl text-sm font-medium transition-colors w-full"
              >
                <Phone size={16} />
                Ligar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          open
            ? "bg-gray-700 shadow-gray-700/30"
            : "bg-[#25D366] shadow-[#25D366]/40"
        }`}
        aria-label={open ? "Fechar WhatsApp" : "Abrir WhatsApp"}
      >
        {open ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </motion.button>
    </div>
  );
}
