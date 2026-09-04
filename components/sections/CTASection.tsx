"use client";

import { motion, type Variants } from "framer-motion";
import { siteConfig, socialLinks } from "@/lib/site-config";
import ContactForm from "@/components/forms/ContactForm";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function CTASection() {
  return (
    <section className="border-t border-white/10 bg-vector-black">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
              className="mb-8 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-widest text-white/40"
            >
              {siteConfig.availableForWork && (
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vector-blue opacity-75 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-vector-blue" />
                  </span>
                  Disponible para proyectos
                </span>
              )}
              <span className="text-white/15">/</span>
              <span>{siteConfig.location}</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.1}
              variants={fadeUp}
              className="max-w-lg text-4xl font-bold leading-[1.05] tracking-tight text-vector-white sm:text-5xl"
            >
              ¿Tenés un proyecto en mente?{" "}
              <span className="text-transparent [-webkit-text-stroke:1.5px_white]">
                Hablemos.
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.22}
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-relaxed text-white/50 sm:text-lg"
            >
              Desarrollo web, e-commerce, software a medida y automatización.
              Contame qué necesitás y armamos el camino desde cero.
            </motion.p>

            <motion.a
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.34}
              variants={fadeUp}
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block font-mono text-sm text-white/50 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
            >
              o escribime directo por LinkedIn
            </motion.a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.18}
            variants={fadeUp}
          >
            <ContactForm variant="dark" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
