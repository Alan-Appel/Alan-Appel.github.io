"use client";

import { useId, useState } from "react";
import { socialLinks } from "@/lib/site-config";
import { services } from "@/lib/services";

/**
 * Envío vía Web3Forms — sin backend propio, sin cuenta con contraseña.
 * La access key es pública por diseño (uso client-side documentado por
 * Web3Forms); igual la sacamos de una env var para poder rotarla sin tocar
 * código. Hay que reemplazar el placeholder por la key real antes de lanzar
 * (ver README / mensaje de configuración más abajo).
 */
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

// Nombres tomados de lib/services.ts (única fuente real de servicios) + una
// opción abierta para quien no tenga claro cuál encaja.
const SERVICE_OPTIONS = [...services.map((s) => s.name), "No estoy seguro / otro"];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  variant = "light",
  defaultService = "",
}: {
  variant?: "light" | "dark";
  /** Nombre exacto de un servicio (de lib/services.ts) para preseleccionar el <select>, ej. desde /contacto?servicio=ecommerce */
  defaultService?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const formId = useId();
  const isDark = variant === "dark";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = isDark
    ? "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-vector-white placeholder:text-white/35 outline-none transition-colors focus:border-vector-blue"
    : "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-vector-black placeholder:text-black/35 outline-none transition-colors focus:border-vector-blue";

  const labelClass = isDark
    ? "mb-2 block font-mono text-xs uppercase tracking-widest text-white/50"
    : "mb-2 block font-mono text-xs uppercase tracking-widest text-black/50";

  if (status === "success") {
    return (
      <div
        className={
          isDark
            ? "rounded-2xl border border-white/15 bg-white/5 p-8 text-center"
            : "rounded-2xl border border-black/10 bg-black/[0.02] p-8 text-center"
        }
      >
        <p
          className={
            isDark
              ? "text-lg font-bold text-vector-white"
              : "text-lg font-bold text-vector-black"
          }
        >
          ¡Mensaje enviado!
        </p>
        <p className={isDark ? "mt-2 text-sm text-white/60" : "mt-2 text-sm text-black/60"}>
          Gracias por escribirme — te voy a responder a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-xl">
      {/* Honeypot anti-spam — invisible para personas, Web3Forms lo descarta si viene lleno */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <input type="hidden" name="subject" value="Nuevo contacto — Vector portfolio" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className={labelClass}>
            Nombre
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={`${formId}-service`} className={labelClass}>
          Servicio de interés
        </label>
        <select
          id={`${formId}-service`}
          name="service"
          defaultValue={defaultService || ""}
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            Elegí una opción
          </option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor={`${formId}-message`} className={labelClass}>
          Mensaje
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={4}
          placeholder="Contame sobre tu proyecto..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-vector-blue px-7 py-3 text-sm font-medium text-vector-white transition-colors hover:bg-vector-blue-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue disabled:opacity-60"
        >
          {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
        </button>

        {status === "error" && (
          <p className={isDark ? "text-sm text-white/60" : "text-sm text-black/60"}>
            Hubo un problema al enviar. Probá de nuevo en un momento o escribime
            directo por{" "}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-current/40 underline-offset-4 hover:decoration-current"
            >
              LinkedIn
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
