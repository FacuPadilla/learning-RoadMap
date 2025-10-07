// src/components/SubtasksAccordion.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SubtaskBadge, EASE } from "./Commons";

export default function SubtasksAccordion({
  items = [],
  singleOpen = false,
  className = "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3",
  fallbackDescription = "Pronto más detalles.",
}) {
  const [openIds, setOpenIds] = useState(new Set());

  const toggle = (id) => {
    setOpenIds((prev) => {
      if (singleOpen) return new Set(prev.has(id) ? [] : [id]);
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className={className}>
      {items.map((st) => {
        const isOpen = openIds.has(st.id);
        const panelId = `st-panel-${st.id}`;
        const description = st?.description?.trim() || fallbackDescription;

        return (
          <div
            key={st.id}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur"
          >
            <button
              type="button"
              onClick={() => toggle(st.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-white/10 transition"
            >
              <span className="min-w-0">
                <SubtaskBadge st={st} />
              </span>
              <motion.span
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="ml-3 flex-shrink-0 text-white/70"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>

            <motion.div
              id={panelId}
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.28, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="px-3 pb-3 text-xs text-white/75 leading-relaxed">
                {description}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
