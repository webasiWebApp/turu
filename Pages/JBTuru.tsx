import { motion } from "framer-motion";
import { useEffect } from "react";
import { 
  FaChalkboardTeacher, 
  FaLaptop, 
  FaUsers, 
  FaGlobeAsia, 
  FaRocket, 
  FaUserTie,
  FaArrowRight
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./JBTuru.css";

const images = [
  "https://images.unsplash.com/photo-1591219233007-4ac041f8c2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1617721926586-4eecce739745?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1518707332890-e05af3c6bfff?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function JBTuru() {
  // Ensure we start at top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="jb-turu">
      <div className="jb-turu__jp-bg">
        日本語
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="jb-turu__container"
      >
        <div className="jb-turu__hero-header">
          <span className="jb-turu__tag">Japanese Language Academy</span>
          <h1 className="jb-turu__title">
            Japanese by Turu
          </h1>
          <h2 className="jb-turu__subtitle">
            From first words to fluency — with native-level guidance.
          </h2>
          <div className="jb-turu__quote">
            "Learn Japanese the way it was meant to be learned — from those who live it."
          </div>
        </div>

        {/* Hero Image */}
        <div className="jb-turu__main-img-wrapper">
          <img src={images[0]} alt="Japanese Language Academy" className="jb-turu__main-img" />
        </div>

        <div className="jb-turu__text jb-turu__text--large">
          <p>
            <strong>Japanese by Turu is Sri Lanka's most authentic Japanese language learning experience.</strong> Whether you are starting from zero or preparing for your JLPT exam, our native and near-native instructors bring the real language — not just textbook grammar — into every class. Language is the first step to Japan. Let us help you take it with confidence.
          </p>
          <p>
            At Turu's Japanese Language Academy, we go far beyond vocabulary lists and grammar drills. Our courses are built around real-world communication — the Japanese you will use in classrooms, workplaces, restaurants, and daily life in Japan. With small group sizes, intensive formats, and cultural immersion woven into every lesson, our students don't just pass exams. They arrive in Japan ready to belong.
          </p>
        </div>

        {/* Two smaller images */}
        <div className="jb-turu__secondary-images">
          <img src={images[1]} alt="Japanese Students" className="jb-turu__secondary-img" />
          <img src={images[2]} alt="Japanese Class" className="jb-turu__secondary-img" />
        </div>

        <hr className="jb-turu__divider" />

        <h3 className="jb-turu__heading">
          Course levels
        </h3>

        <div className="jb-turu__table-wrapper">
          <table className="jb-turu__table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Suited for</th>
                <th>Pathway</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>JLPT N5</strong></td>
                <td>Complete beginners. Hiragana, katakana, basic conversation.</td>
                <td><span className="jb-turu__badge">Foundation</span></td>
              </tr>
              <tr>
                <td><strong>JLPT N4</strong></td>
                <td>Elementary learners ready for simple daily interactions.</td>
                <td><span className="jb-turu__badge">Student visa ready</span></td>
              </tr>
              <tr>
                <td><strong>JLPT N3</strong></td>
                <td>Intermediate. Employment & education prep begins here.</td>
                <td><span className="jb-turu__badge">Work pathway ready</span></td>
              </tr>
              <tr>
                <td><strong>JLPT N2</strong></td>
                <td>Advanced. Required for most professional work visas.</td>
                <td><span className="jb-turu__badge">Tokutei Ginou prep</span></td>
              </tr>
              <tr>
                <td><strong>JLPT N1</strong></td>
                <td>Near-native fluency. Academic and corporate positions.</td>
                <td><span className="jb-turu__badge">Business / Elite</span></td>
              </tr>
              <tr>
                <td><strong>JFT Basic</strong></td>
                <td>Specific preparation for the JFT-Basic certification exam.</td>
                <td><span className="jb-turu__badge">SSW visa track</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="jb-turu__divider" />

        <h3 className="jb-turu__heading">
          What makes us different
        </h3>

        <div className="jb-turu__features">
          <div className="jb-turu__feature-card">
            <div className="jb-turu__feature-icon-wrapper">
              <FaChalkboardTeacher className="jb-turu__feature-icon" />
            </div>
            <h4 className="jb-turu__feature-title">Native instructors</h4>
            <p className="jb-turu__feature-desc">Learn from teachers with native and near-native Japanese fluency. No shortcuts.</p>
          </div>
          
          <div className="jb-turu__feature-card">
            <div className="jb-turu__feature-icon-wrapper">
              <FaLaptop className="jb-turu__feature-icon" />
            </div>
            <h4 className="jb-turu__feature-title">Physical & online</h4>
            <p className="jb-turu__feature-desc">Flexible learning — in-person at our Negombo centre or live online classes.</p>
          </div>

          <div className="jb-turu__feature-card">
            <div className="jb-turu__feature-icon-wrapper">
              <FaUsers className="jb-turu__feature-icon" />
            </div>
            <h4 className="jb-turu__feature-title">Small groups</h4>
            <p className="jb-turu__feature-desc">Maximum attention, real conversations. Every student is seen and heard.</p>
          </div>

          <div className="jb-turu__feature-card">
            <div className="jb-turu__feature-icon-wrapper">
              <FaGlobeAsia className="jb-turu__feature-icon" />
            </div>
            <h4 className="jb-turu__feature-title">Cultural immersion</h4>
            <p className="jb-turu__feature-desc">Language and culture together. Learn how Japan thinks, not just how it speaks.</p>
          </div>

          <div className="jb-turu__feature-card">
            <div className="jb-turu__feature-icon-wrapper">
              <FaRocket className="jb-turu__feature-icon" />
            </div>
            <h4 className="jb-turu__feature-title">Intensive programs</h4>
            <p className="jb-turu__feature-desc">Fast-track options for students with upcoming visa deadlines or exam dates.</p>
          </div>

          <div className="jb-turu__feature-card">
            <div className="jb-turu__feature-icon-wrapper">
              <FaUserTie className="jb-turu__feature-icon" />
            </div>
            <h4 className="jb-turu__feature-title">Interview coaching</h4>
            <p className="jb-turu__feature-desc">Practical preparation for Japanese university and employer interviews in Japanese.</p>
          </div>
        </div>

        <hr className="jb-turu__divider" />

        <div className="jb-turu__grid-2">
          <div className="jb-turu__who-box">
            <h3 className="jb-turu__heading" style={{ marginBottom: "24px", textAlign: "left" }}>
              Who enrolls with us
            </h3>
            <ul className="jb-turu__who-list">
              <li><FaArrowRight className="jb-turu__list-icon"/> JLPT exam candidates</li>
              <li><FaArrowRight className="jb-turu__list-icon"/> Student visa applicants</li>
              <li><FaArrowRight className="jb-turu__list-icon"/> SSW / Tokutei Ginou workers</li>
              <li><FaArrowRight className="jb-turu__list-icon"/> Business professionals</li>
              <li><FaArrowRight className="jb-turu__list-icon"/> Japanese culture enthusiasts</li>
              <li><FaArrowRight className="jb-turu__list-icon"/> Underprivileged youth (free)</li>
              <li><FaArrowRight className="jb-turu__list-icon"/> Corporate teams</li>
            </ul>
          </div>

          <div className="jb-turu__mission-box">
            <h3 className="jb-turu__heading" style={{ marginBottom: "24px", textAlign: "left" }}>
              Promise to students
            </h3>
            <p className="jb-turu__mission-text">
              When you leave our academy, you will not just have a certificate. You will have the confidence to walk into a Japanese classroom, a Japanese workplace, or a Japanese neighbourhood — and belong. That is what Japanese by Turu is built for.
            </p>

            <div className="jb-turu__links">
              <a href="#" className="jb-turu__link-btn">
                Course outline <FiExternalLink />
              </a>
              <a href="#" className="jb-turu__link-btn jb-turu__link-btn--outline">
                Student brochure <FiExternalLink />
              </a>
            </div>
          </div>
        </div>

      </motion.div>
    </main>
  );
}
