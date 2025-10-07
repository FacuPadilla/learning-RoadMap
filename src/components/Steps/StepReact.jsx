// src/components/StepReact.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import stepReactAnim from "../../assets/Step6.json";
import { Atom, Settings2, PlugZap, Zap } from "lucide-react";
import { Pill, StatusPill, SubtaskBadge, EASE, getProgress } from "../Commons";
import SubtasksAccordion from "../SubtasksAccordion";

export default function StepReact({ step, index }) {
  const { title, subtasks = [], status } = step;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const progress = getProgress(subtasks);

  return (
    <section className="relative px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Columna izquierda: encabezado, meta y subtasks */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="order-1 md:order-2"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Pill>
              <Atom className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-400" />
              <span className="text-xs sm:text-sm">Step {index + 1}</span>
            </Pill>
            <StatusPill status={status} />
          </div>

          <div className="mt-3 flex items-center gap-3">
            <span className="text-xs text-white/70">Progreso {progress}%</span>
            <span className="flex-1 h-2 max-w-[200px] rounded-full bg-white/10 overflow-hidden">
              <motion.span
                className="block h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE }}
              />
            </span>
          </div>

          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 text-transparent bg-clip-text leading-tight">
            {title}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90 font-medium leading-relaxed">
            Construí interfaces modulares con componentes, administrá estado y
            flujos de datos y conectá eventos para lograr interacciones fluidas.
          </p>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
            Vas a crear componentes reutilizables con props, manejar estado con
            Hooks y coordinar efectos para sincronizar UI con datos externos.
          </p>

          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
            <Pill>
              <Settings2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-400" />
              <span className="text-xs">
                Prerrequisito: JavaScript Intermedio
              </span>
            </Pill>
            <Pill>
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-400" />
              <span className="text-xs">Duración estimada: 10–14 h</span>
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

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="order-1"
        >
          {/* Contenedor con tamaño máximo controlado */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
            <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden ">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Lottie
                  animationData={stepReactAnim}
                  loop
                  speed={0.5}
                  autoplay
                  aria-label="Animación Proyecto Final"
                  className="w-full h-full"
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid meet",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
