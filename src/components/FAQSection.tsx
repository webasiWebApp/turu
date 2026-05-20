// src/components/FAQSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const faqs = [
  { q: "What services does Turu offer?", a: "Turu provides Japanese language education, market-entry consulting for Sri Lankan businesses expanding into Japan, workforce placement for skilled professionals, and cultural exchange programs bridging both nations." },
  { q: "Do I need prior Japanese language experience to enroll?", a: "No — our Language Academy accepts complete beginners through to advanced learners. We assess your current level and place you in the appropriate cohort." },
  { q: "How long does the visa process take?", a: "Depending on visa category and individual circumstances, the process typically takes between 4 and 12 weeks. Our consultants guide you through every document requirement to minimize delays." },
  { q: "Can businesses in Japan use Turu to find Sri Lankan partners?", a: "Absolutely. We work both directions — connecting Japanese companies with reliable Sri Lankan manufacturers, suppliers, and service providers through our trade facilitation network." },
  { q: "What is the cost of the language programs?", a: "Pricing varies by program duration and intensity. We offer flexible monthly and semester-based plans. Please contact us for a tailored quote." },
  { q: "Is Turu accredited by any Japanese or Sri Lankan authority?", a: "We work in partnership with accredited language institutions in both countries and our consulting services are registered under Sri Lankan commercial law. Specific accreditations are listed on our Programs page." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section faq" id="faq" ref={ref as React.LegacyRef<HTMLElement>}>
      <div className="section__inner">
        <div className="jp-ghost" aria-hidden="true">よくある質問</div>
        <motion.h2 className="faq__heading"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Frequently Asked Questions
        </motion.h2>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
              <div className="faq-item__header" onClick={() => setOpen(open === i ? null : i)}>
                <span className="faq-item__question">{f.q}</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
