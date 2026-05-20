// src/components/TestimonialsSection.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Tab = "STUDENTS" | "INVESTORS" | "OTHERS";

const testimonials: Record<Tab, { quote: string; name: string; role: string; initials: string }[]> = {
  STUDENTS: [
    { quote: "Turu's language academy gave me the foundation I needed to pass the JLPT N3. Within eight months I was enrolled at a university in Osaka.", name: "Kasun Perera", role: "Student, Osaka University", initials: "KP" },
    { quote: "The cultural orientation program was priceless. I landed in Japan feeling prepared rather than overwhelmed.", name: "Nimasha Silva", role: "Graduate Student, Tokyo", initials: "NS" },
    { quote: "Every step of my visa process was handled with care. Turu's team treated me like family.", name: "Dilanka Fernando", role: "Language Student, Kyoto", initials: "DF" },
  ],
  INVESTORS: [
    { quote: "Turu connected us with the right partners in Colombo. Our joint venture was signed within six months of the first introduction.", name: "Hiroshi Tanaka", role: "Director, Tanaka Holdings", initials: "HT" },
    { quote: "Their market-entry analysis saved us from costly mistakes. An invaluable resource for any Japanese company looking at Sri Lanka.", name: "Yuki Yamamoto", role: "CEO, YY Ventures", initials: "YY" },
    { quote: "The trade facilitation team understands regulations on both sides and makes cross-border commerce seamless.", name: "Priya Wickramasinghe", role: "CFO, Lanka Export Co.", initials: "PW" },
  ],
  OTHERS: [
    { quote: "As a freelance translator, Turu's network helped me find steady work bridging communications between Japanese and Sri Lankan firms.", name: "Akane Sato", role: "Freelance Translator", initials: "AS" },
    { quote: "The cultural exchange workshops run by Turu are brilliant — I've attended three and learned something new every time.", name: "Thilina Bandara", role: "Cultural Educator", initials: "TB" },
    { quote: "A rare organisation that genuinely cares about the communities it serves on both ends of the bridge.", name: "Mika Kobayashi", role: "NGO Coordinator", initials: "MK" },
  ],
};

export default function TestimonialsSection() {
  const [tab, setTab] = useState<Tab>("STUDENTS");
  const tabs: Tab[] = ["STUDENTS", "INVESTORS", "OTHERS"];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="section__inner">
        <div className="jp-ghost jp-ghost--light" aria-hidden="true">お客様の声</div>
        <h2 className="testimonials__heading">Voice Of Our Partners</h2>

        <div className="testimonials__tabs">
          {tabs.map(t => (
            <button key={t} className={`tab-btn${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="testimonials__grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
          >
            {testimonials[tab].map(t => (
              <div className="testi-card" key={t.name}>
                <p className="testi-card__quote">"{t.quote}"</p>
                <div className="testi-card__author">
                  <div className="testi-card__avatar">{t.initials}</div>
                  <div>
                    <div className="testi-card__name">{t.name}</div>
                    <div className="testi-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
