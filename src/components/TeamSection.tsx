// src/components/TeamSection.tsx
import { motion, type Variants } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useNavigate } from "react-router-dom";

const memberImg = "https://www.hiroshima-u.ac.jp/system/files/91104/sempai36_01.jpg";

const teamMembers = [
  { id: "member-1", name: "Hiroshi Tanaka" },
  { id: "member-2", name: "Aiko Sato" },
  { id: "member-3", name: "Kenji Nakamura" },
  { id: "member-4", name: "Yuki Takahashi" },
  { id: "member-5", name: "Mayumi Ito" },
  { id: "member-6", name: "Takeshi Watanabe" },
  { id: "member-7", name: "Sakura Kobayashi" },
  { id: "member-8", name: "Daiki Kato" },
  { id: "member-9", name: "Emi Yoshida" },
];

export default function TeamSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const navigate = useNavigate();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="section team" id="team" ref={ref as React.LegacyRef<HTMLElement>}>
      <div className="section__inner team__layout">
        
        {/* Avatars on Left */}
        <motion.div 
          className="team__avatars" 
          variants={fadeUp} 
          initial="hidden" 
          animate={inView ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-card" 
              onClick={() => navigate(`/team/${member.id}`)}
            >
              <div className="team-card__img-wrap">
                <img src={memberImg} alt={member.name} className="team-card__img" />
              </div>
              <div className="team-card__name-wrap">
                <span className="team-card__name">{member.name}</span>
                <span className="team-card__underline"></span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Content on Right */}
        <motion.div 
          className="team__content" 
          variants={fadeUp} 
          initial="hidden" 
          animate={inView ? "visible" : "hidden"} 
          transition={{ delay: 0.2 }}
        >
          <div className="jp-ghost" aria-hidden="true">講演チーム</div>
          <h2 className="team__heading">Experienced Japanese-Speaking Team</h2>
          <p className="team__body">
            Our team combines decades of cross-cultural expertise with deep roots in both
            Sri Lanka and Japan. We speak the language — literally and figuratively —
            of every client we serve.
          </p>
          <button className="primary-btn">Join Our Team</button>
        </motion.div>

      </div>
    </section>
  );
}
