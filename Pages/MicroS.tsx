import { motion } from "framer-motion";
import { useEffect } from "react";
import { 
  FaBookReader, 
  FaHandHoldingUsd, 
  FaChartLine, 
  FaUserGraduate, 
  FaMapSigns, 
  FaSeedling,
  FaArrowRight
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./MicroS.css";

const images = [
  "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1683713552787-eb7843b46df8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function MicroS() {
  // Ensure we start at top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="micro-s">
      <div className="micro-s__jp-bg">
        マイクロサービス
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="micro-s__container"
      >
        <div className="micro-s__hero-header">
          <span className="micro-s__tag">Turu MicroService</span>
          <h1 className="micro-s__title">
            MicroService
          </h1>
          <h2 className="micro-s__subtitle">
            Education, microfinance & youth empowerment.
          </h2>
          <div className="micro-s__quote">
            "Your ambition shouldn't wait for your bank balance."
          </div>
        </div>

        {/* Hero Image */}
        <div className="micro-s__main-img-wrapper">
          <img src={images[0]} alt="Turu MicroService Youth" className="micro-s__main-img" />
        </div>

        <div className="micro-s__text micro-s__text--large">
          <p>
            <strong>Turu MicroService exists because we believe the most talented people are not always the most privileged.</strong> We remove financial barriers standing between determined Sri Lankan youth and life-changing opportunities — through microfinance, mentorship, financial literacy, and career guidance built for real people in real situations.
          </p>
          <p>
            Turu MicroService is our commitment to long-term social and economic development. We work alongside students, young professionals, and families who have the drive to grow but need the tools, guidance, and financial access to get started. From loan facilitation and budget planning to full career mentorship, we walk the journey with you — not just to Japan, but toward lasting financial independence.
          </p>
        </div>

        {/* Two smaller images */}
        <div className="micro-s__secondary-images">
          <img src={images[1]} alt="Turu MicroService Support" className="micro-s__secondary-img" />
          <img src={images[2]} alt="Turu MicroService Education" className="micro-s__secondary-img" />
        </div>

        <hr className="micro-s__divider" />

        <h3 className="micro-s__heading">
          Core Services
        </h3>

        <div className="micro-s__features">
          {/* Card 1 */}
          <div className="micro-s__feature-card">
            <div className="micro-s__feature-icon-wrapper">
              <FaBookReader className="micro-s__feature-icon" />
            </div>
            <h4 className="micro-s__feature-title">Free Language Training</h4>
            <p className="micro-s__feature-desc">
              Selected underprivileged youth receive fully sponsored Japanese language programs.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="micro-s__feature-card">
            <div className="micro-s__feature-icon-wrapper">
              <FaHandHoldingUsd className="micro-s__feature-icon" />
            </div>
            <h4 className="micro-s__feature-title">Loan Facilitation</h4>
            <p className="micro-s__feature-desc">
              We connect committed students to fair and structured loan support for Japan pathways.
            </p>
          </div>

          {/* Card 3 */}
          <div className="micro-s__feature-card">
            <div className="micro-s__feature-icon-wrapper">
              <FaChartLine className="micro-s__feature-icon" />
            </div>
            <h4 className="micro-s__feature-title">Financial Literacy</h4>
            <p className="micro-s__feature-desc">
              Budgeting, saving, and financial planning workshops designed for youth and families.
            </p>
          </div>

          {/* Card 4 */}
          <div className="micro-s__feature-card">
            <div className="micro-s__feature-icon-wrapper">
              <FaUserGraduate className="micro-s__feature-icon" />
            </div>
            <h4 className="micro-s__feature-title">Career Mentorship</h4>
            <p className="micro-s__feature-desc">
              One-on-one guidance from professionals who have walked the Japan pathway themselves.
            </p>
          </div>

          {/* Card 5 */}
          <div className="micro-s__feature-card">
            <div className="micro-s__feature-icon-wrapper">
              <FaMapSigns className="micro-s__feature-icon" />
            </div>
            <h4 className="micro-s__feature-title">Pathway Planning</h4>
            <p className="micro-s__feature-desc">
              Personalised roadmaps from where you are today to where you want to be in Japan.
            </p>
          </div>

          {/* Card 6 */}
          <div className="micro-s__feature-card">
            <div className="micro-s__feature-icon-wrapper">
              <FaSeedling className="micro-s__feature-icon" />
            </div>
            <h4 className="micro-s__feature-title">Youth Empowerment</h4>
            <p className="micro-s__feature-desc">
              Community programs that build confidence, discipline, and professional mindset.
            </p>
          </div>
        </div>

        <hr className="micro-s__divider" />

        <h3 className="micro-s__heading">
          How it works — 4 steps
        </h3>

        <div className="micro-s__steps">
          <div className="micro-s__step-card">
            <div className="micro-s__step-number">1</div>
            <h4 className="micro-s__step-title">Apply & assess</h4>
            <p className="micro-s__step-desc">Tell us your situation, your goals, and what you need. No judgement — just a conversation.</p>
          </div>
          <div className="micro-s__step-card">
            <div className="micro-s__step-number">2</div>
            <h4 className="micro-s__step-title">Build your plan</h4>
            <p className="micro-s__step-desc">We create a personalised financial and career roadmap tailored to your goals and timeline.</p>
          </div>
          <div className="micro-s__step-card">
            <div className="micro-s__step-number">3</div>
            <h4 className="micro-s__step-title">Access support</h4>
            <p className="micro-s__step-desc">Language training, loan facilitation, mentorship, and financial tools — all in one place.</p>
          </div>
          <div className="micro-s__step-card">
            <div className="micro-s__step-number">4</div>
            <h4 className="micro-s__step-title">Grow & go</h4>
            <p className="micro-s__step-desc">We stay with you — from Sri Lanka to Japan and beyond — until you reach independence.</p>
          </div>
        </div>

        <hr className="micro-s__divider" />

        <div className="micro-s__grid-2">
          <div className="micro-s__who-box">
            <h3 className="micro-s__heading" style={{ marginBottom: "24px", textAlign: "left" }}>
              Who we help
            </h3>
            <ul className="micro-s__who-list">
              <li><FaArrowRight className="micro-s__list-icon"/> School leavers</li>
              <li><FaArrowRight className="micro-s__list-icon"/> Underemployed youth</li>
              <li><FaArrowRight className="micro-s__list-icon"/> Rural students</li>
              <li><FaArrowRight className="micro-s__list-icon"/> First-generation earners</li>
              <li><FaArrowRight className="micro-s__list-icon"/> Japan-aspiring applicants</li>
              <li><FaArrowRight className="micro-s__list-icon"/> Families of students</li>
            </ul>
          </div>

          <div className="micro-s__mission-box">
            <h3 className="micro-s__heading" style={{ marginBottom: "24px", textAlign: "left" }}>
              Mission Statement
            </h3>
            <p className="micro-s__mission-text">
              Education and international opportunity can transform not just individuals — but entire families and communities. Turu MicroService exists to make that transformation possible for everyone, regardless of background.
            </p>

            <div className="micro-s__links">
              <a href="#" className="micro-s__link-btn">
                Application form <FiExternalLink />
              </a>
              <a href="#" className="micro-s__link-btn micro-s__link-btn--outline">
                Outreach flyer <FiExternalLink />
              </a>
            </div>
          </div>
        </div>

      </motion.div>
    </main>
  );
}
