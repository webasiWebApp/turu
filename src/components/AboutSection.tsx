// src/components/AboutSection.tsx
import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import aboutImg from "../assets/aboutImg.png";
import japanMap from "../assets/japan.png";
import Button from "./Button";
import "./AboutSection.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inViewRef, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Merge refs
  const setRef = (el: HTMLElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
    (inViewRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  return (
    <section className="turu-about" id="about" ref={setRef}>
      <div className="turu-about__grid">
        {/* Left Image */}
        <motion.div 
          className="turu-about__left" 
          variants={fadeUp} 
          initial="hidden" 
          animate={inView ? "visible" : "hidden"}
        >
          <img src={aboutImg} alt="Japanese By Turu" className="turu-about__img" />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="turu-about__right" 
          variants={fadeUp} 
          initial="hidden"
          animate={inView ? "visible" : "hidden"} 
          transition={{ delay: 0.15 }}
        >
          <div className="turu-about__jp-ghost" aria-hidden="true">私たちについて</div>
          
          <h2 className="turu-about__heading">Where Sri Lanka Meets<br />Japan</h2>
          
          <p className="turu-about__text">
            At Turu, We Are Building More Than A Company — We Are Creating A Trusted 
            Bridge Between Sri Lanka And Japan Through Education, Employment, 
            Investment, Business Consultation, And Cultural Experiences.
          </p>
          <p className="turu-about__text">
            Our Mission Is To Create Real Opportunities For Sri Lankans While Helping 
            Japanese Businesses, Investors, And Institutions Connect Confidently With Sri 
            Lanka.
          </p>
          <p className="turu-about__text">
            With A Highly Experienced Team That Includes Native And Near-Native 
            Japanese Speakers, Industry Professionals, Educators, And Business 
            Consultants, Turu Provides End-To-End Support With Transparency, 
            Professionalism, And Long-Term Commitment.
          </p>
          
          <div className="turu-about__cta">
            <Button buttonType="primary">
              Learn More
            </Button>
          </div>

          <img src={japanMap} alt="Japan Map" className="turu-about__japan-map" />
        </motion.div>
      </div>
    </section>
  );
}
