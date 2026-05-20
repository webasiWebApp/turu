import { motion, type Variants } from "framer-motion";
import { JapaneseText } from "./ui/JapaneseRevealClean";
import heroImg from "../assets/sideImage.png";
import Button from "./Button";
import HomeServices from "./Homeservices";
import "./HeroSection.css";

const heroWords1 = [
  { id: "h1", en: "Building", ja: "構築" },
  { id: "h2", en: "Futures", ja: "未来" },
  { id: "h3", en: "Between", ja: "の間で" },
];

const heroWords2 = [
  { id: "h4", en: "Japan", ja: "日本" },
  { id: "h5", en: "And", ja: "と" },
  { id: "h6", en: "Sri Lanka", ja: "スリランカ" },
];

const stagger: Variants = { animate: { transition: { staggerChildren: 0.1 } } };
const wordAnim: Variants = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="turu-hero" id="hero">
      {/* Left Column (Green) */}
      <div className="turu-hero__left">
        <img src={heroImg} alt="Japan and Sri Lanka" className="turu-hero__illustration" />
        <div className="turu-hero__jp-vertical">日本とスリランカ</div>
      </div>

      {/* Right Column (Yellow) */}
      <div className="turu-hero__right">
        <div className="turu-hero__content-wrapper">
          {/* Background large Japanese text */}
          <div className="turu-hero__jp-bg">
            日本とス<br/>リランカ
          </div>

          <motion.div className="turu-hero__content" initial="initial" animate="animate" variants={stagger}>
            <motion.h1 className="turu-hero__heading" variants={wordAnim}>
              <JapaneseText words={heroWords1} circleRadius={32} />
              <br />
              <JapaneseText words={heroWords2} circleRadius={32} />
            </motion.h1>
            
            <motion.p className="turu-hero__sub" variants={wordAnim}>
              We Are Committed To Creating Life-Changing Opportunities For Students, Workers, And Entrepreneurs.
            </motion.p>
            
            <motion.div className="turu-hero__cta" variants={wordAnim}>
              <Button 
                buttonType="primary" 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
              <Button 
                buttonType="secondary" 
                onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Services Slider */}
        <div className="turu-hero__services">
          <HomeServices />
        </div>
      </div>
    </section>
  );
}
