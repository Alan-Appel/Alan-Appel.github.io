"use client";

import { motion, type Variants } from "framer-motion";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { SiGithub, SiWhatsapp, SiFreecodecamp } from "react-icons/si";
import ContactForm from "@/components/forms/ContactForm";
import { socialLinks, siteConfig } from "@/lib/site-config";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ContactSection({
  defaultService = "",
}: {
  defaultService?: string;
}) {
  return (
    <section className="bg-vector-white">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="font-mono text-xs uppercase tracking-widest text-vector-blue"
            >
              Contacto
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.08}
              variants={fadeUp}
              className="mt-3 text-4xl font-bold tracking-tight text-vector-black sm:text-5xl"
            >
              Hablemos de tu proyecto
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              custom={0.16}
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-relaxed text-black/60 sm:text-lg"
            >
              Contame qué necesitás — una idea, un problema puntual o un
              proyecto ya definido — y te respondo para ver cómo lo
              encaramos.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.24}
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-8"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium text-vector-black transition-colors hover:text-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                <SiGithub aria-hidden="true" className="h-5 w-5 text-vector-blue" />
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium text-vector-black transition-colors hover:text-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                <FiLinkedin aria-hidden="true" className="h-5 w-5 text-vector-blue" />
                LinkedIn
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium text-vector-black transition-colors hover:text-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                <FiInstagram aria-hidden="true" className="h-5 w-5 text-vector-blue" />
                Instagram
              </a>
              <a
                href={socialLinks.freecodecamp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium text-vector-black transition-colors hover:text-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                <SiFreecodecamp aria-hidden="true" className="h-5 w-5 text-vector-blue" />
                freeCodeCamp
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium text-vector-black transition-colors hover:text-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                <SiWhatsapp aria-hidden="true" className="h-5 w-5 text-vector-blue" />
                WhatsApp
              </a>
              <a
                href={socialLinks.email}
                className="inline-flex items-center gap-3 text-sm font-medium text-vector-black transition-colors hover:text-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                <FiMail aria-hidden="true" className="h-5 w-5 text-vector-blue" />
                {socialLinks.emailDisplay}
              </a>
              <p className="mt-2 text-sm text-black/50">
                {siteConfig.location}
                {siteConfig.availableForWork && " · Disponible para nuevos proyectos"}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.32}
            variants={fadeUp}
          >
            <ContactForm variant="light" defaultService={defaultService} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
