import { motion } from "motion/react";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  highlight?: string;
  description: string;
  bg?: string;
  children?: ReactNode;
  subtitle?: string
}

export function PageHero({ title, highlight, description, subtitle, bg, children }: PageHeroProps) {
  return (
    <section className="relative pt-44 pb-40 md:pt-64 md:pb-50 bg-[#03224C] overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              <span className="text-[#1BAFD6] text-md font-bold tracking-tight uppercase">
                {subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-5"
              style={{ fontSize: "clamp(2.2rem, 3vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1 }}
            >

              {title}{" "}
              {highlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1BAFD6] to-[#1BAFD6]/70">
                  {highlight}
                </span>
              )}
              <span className="block w-15 h-1 my-5 rounded-full bg-gradient-to-r from-[#1BAFD6] to-[#1BAFD6]/70" />
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-sm leading-relaxed max-w-xl"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
