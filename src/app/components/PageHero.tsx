import { motion } from "motion/react";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  highlight?: string;
  description: string;
  bg?: string;
  children?: ReactNode;
}

export function PageHero({ title, highlight, description, bg, children }: PageHeroProps) {
  return (
    <section className="relative py-36 bg-[#03224C] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, #1BAFD6 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1BAFD6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#E02020]/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-48 h-48 rounded-full border border-white/10 hidden lg:block" />
      <div className="absolute bottom-20 right-40 w-32 h-32 rounded-full border border-[#1BAFD6]/20 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-4 py-2 rounded-full text-sm mb-6 border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#1BAFD6] animate-pulse" />
              Centro Médico Camuazu
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1 }}
            >
              {title}{" "}
              {highlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1BAFD6] to-[#1BAFD6]/70">
                  {highlight}
                </span>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed max-w-xl"
            >
              {description}
            </motion.p>
          </div>

          {/* Optional extra content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 30C1200 65 960 5 720 35C480 65 240 5 0 30L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
