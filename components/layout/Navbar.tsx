"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/site-config";

/**
 * Navbar — fija, minimalista, con subrayado animado en el link activo/hover
 * (el "detalle innovador" pedido, sin volverse ruidoso) y menú mobile accesible.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/vector-icon-black.png"
            alt=""
            width={152}
            height={47}
            priority
            className="h-5 w-auto"
          />
          {/* Texto real (no raster) — nítido a cualquier tamaño */}
          <span className="text-lg font-bold tracking-wide text-vector-black">
            VECTOR
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue ${
                    isActive
                      ? "text-vector-black"
                      : "text-black/60 hover:text-vector-black"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-vector-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contacto"
          className="hidden rounded-full bg-vector-black px-5 py-2 text-sm font-medium text-vector-white transition-colors hover:bg-vector-blue md:inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
        >
          Trabajemos juntos
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <motion.span
              className="absolute left-0 h-[2px] w-5 bg-vector-black"
              animate={{ top: open ? 7 : 0, rotate: open ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 top-[7px] h-[2px] w-5 bg-vector-black"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute left-0 h-[2px] w-5 bg-vector-black"
              animate={{ top: open ? 7 : 14, rotate: open ? -45 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/5 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-2.5 text-base font-medium text-black/80 hover:bg-black/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contacto"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-vector-black px-5 py-2.5 text-center text-sm font-medium text-vector-white"
                >
                  Trabajemos juntos
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
