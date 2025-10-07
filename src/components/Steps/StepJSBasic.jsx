// src/components/StepJSBasicAligned.jsx

import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Star,
  Timer,
  BookOpenCheck,
  Braces,
  FunctionSquare,
  Repeat,
} from "lucide-react";
import { Pill, StatusPill, SubtaskBadge, EASE, getProgress } from "../Commons";
import SubtasksAccordion from "../SubtasksAccordion";

/** Visual: Code Preview animado */
function TypingLine({ text, delay = 0, idx = 0 }) {
  const chars = useMemo(() => text.split(""), [text]);
  return (
    <div className="whitespace-pre text-[13px] leading-6 font-mono text-primary-100/90">
      {chars.map((c, i) => (
        <motion.span
          key={`${idx}-${i}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.02, delay: delay + i * 0.02 }}
        >
          {c}
        </motion.span>
      ))}
    </div>
  );
}

function CodePreview() {
  const lines = [
    "let total = 0;",
    "const items = [1, 2, 3];",
    "for (const n of items) {",
    "  total += n;",
    "}",
    "function doble(x) {",
    "  return x * 2;",
    "}",
    "console.log(doble(total)); // 12",
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative rounded-3xl overflow-hidden order-2 md:order-1"
    >
      <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] backdrop-blur-xl">
        <div className="px-4 py-3 flex items-center gap-2 border-b border-white/10 bg-neutral-900/60">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[11px] text-white/60">playground.js</span>
        </div>
        <div className="p-4 bg-neutral-900/40">
          {lines.map((t, i) => (
            <TypingLine key={i} text={t} delay={0.18 * i} idx={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function StepJSBasicAligned({ step, index }) {
  const { title, subtasks = [], status } = step;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const progress = getProgress(subtasks);

  return (
    <section className="relative px-6 sm:px-8 lg:px-12 py-14 sm:py-20">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <div className="absolute -inset-20 blur-3xl bg-gradient-to-r from-primary-600/15 to-secondary-600/15" />
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Contenido primero en mobile, también primero en desktop (izquierda) */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="order-1 md:order-2"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Pill>
              <Star className="w-4 h-4 text-accent-400" />
              Step {index + 1}
            </Pill>
            <StatusPill status={status} />
            <span className="text-xs text-white/70">Progreso {progress}%</span>
            <span className="inline-flex h-2 w-28 rounded-full bg-white/10 overflow-hidden">
              <motion.span
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE }}
              />
            </span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 text-transparent bg-clip-text">
            {title}
          </h2>

          <p className="mt-4 text-lg text-white/90 font-medium">
            Fundamentos de JavaScript para crear lógica clara y predecible.
          </p>
          <p className="mt-3 text-white/70 max-w-xl leading-relaxed">
            Declaraciones seguras de variables, funciones expresivas y patrones
            de iteración confiables. Vas a entender cómo estructurar cálculos y
            componer comportamientos sin efectos colaterales.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Pill>
              <BookOpenCheck className="w-4 h-4 text-accent-400" />
              Prerrequisito: HTML/CSS básico
            </Pill>
            <Pill>
              <Timer className="w-4 h-4 text-accent-400" />
              Duración estimada: 4–6 h
            </Pill>
          </div>

          {/* Contenidos (subtasks) vínculados a tu JSON */}
          <div className="mt-8">
            <h4 className="text-white/90 font-semibold">
              Contenidos del módulo
            </h4>
            <SubtasksAccordion
              items={subtasks}
              singleOpen={true} //  true para abrir solo uno a la vez
              fallbackDescription="Descripción en preparación."
            />
          </div>
        </motion.div>

        {/* Code Preview después en mobile, a la derecha en desktop */}
        <CodePreview />
      </div>
    </section>
  );
}
