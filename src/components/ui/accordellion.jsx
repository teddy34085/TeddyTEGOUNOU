
import { useLanguage } from "./languageContext";
import fr from "../../service/fr";
import en from "../../service/en";

import { useId, useState } from "react";



export function Accordellion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? null : index));

  const { translations } = useLanguage();
  const items = translations.faq.question;

  return (
      <div className="w-full h-auto mx-auto flex flex-col gap-4">
        {items.map((item, index) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
  );
}


 function FaqItem({ question, answer, isOpen, onToggle }) {
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div className="rounded-xl border border-sidebar-border bg-card shadow transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] motion-reduce:transition-none">
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 rounded-xl p-5 text-left text-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
        >
          <p>{question}</p>

          {/* Icône + qui devient − à l'ouverture */}
          <span
            aria-hidden="true"
            className="relative block h-4 w-4 shrink-0 text-neutral-400"
          >
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-muted-foreground" />
            <span
              className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </span>
        </button>

      {/* Animation de hauteur : grid-rows 0fr -> 1fr (pas besoin de connaître la hauteur) */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className={`text-xl leading-relaxed text-muted-foreground ${isOpen ? "pt-0 p-5" : "p-5"}`}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}