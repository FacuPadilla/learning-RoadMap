// src/components/RoadmapSection.jsx
import React, { Suspense } from "react";
import { roadmapData } from "../data/roadmapData";

import StepHTML from "../components/Steps/StepHTML";
import StepCSSIntro from "../components/Steps/StepCSSIntro";
import StepJSBasic from "../components/Steps/StepJSBasic";
import StepCSSAdvanced from "../components/Steps/StepCSSAdvanced";
import StepJSIntermediate from "../components/Steps/StepJSIntermediate";
import StepReact from "../components/Steps/StepReact";
import StepFinalProject from "../components/Steps/StepFinalProject";

function StepFallback({ step }) {
  return (
    <section className="px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {step.title}
          </h2>
          <p className="mt-3 text-white/70">
            Este bloque usa el componente genérico. Creá un componente dedicado
            en
            <span className="font-mono text-white/80"> src/components/</span> y
            agregalo al registro.
          </p>
        </div>
      </div>
    </section>
  );
}

const componentRegistry = {
  1: StepHTML,
  2: StepCSSIntro,
  3: StepCSSAdvanced,
  4: StepJSBasic,
  5: StepJSIntermediate,
  6: StepReact,
  7: StepFinalProject,
};

function resolveStepComponent(step) {
  const ById = componentRegistry[step.id];
  return ById || StepFallback;
}

export default function RoadmapSection() {
  const steps = roadmapData?.steps ?? [];
  return (
    <main className="w-full">
      {/* Contenedor con gap vertical uniforme */}
      <div className="flex flex-col gap-y-12 sm:gap-y-20 lg:gap-y-24">
        <Suspense fallback={null}>
          {steps.map((step, idx) => {
            const Cmp = resolveStepComponent(step);
            return <Cmp key={step.id} step={step} index={idx} />;
          })}
        </Suspense>
      </div>
    </main>
  );
}
