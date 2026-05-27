import { motion } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import "./AboutUs.css";

const images = [
  "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504416285472-eccf03dd31eb?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1549124151-844d2a02fe9a?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function AboutUs() {
  // Ensure we start at top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="turu-about">
      <div className="turu-about__jp-bg">
        私たちについて
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="turu-about__container"
      >
        <h1 className="turu-about__title">
          About Us — Turu
        </h1>
        <h2 className="turu-about__subtitle">
          Where Sri Lanka Meets Japan
        </h2>

        <div className="turu-about__text">
          <p>
            At <a href="https://turu.lk?utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="turu-about__link">Turu.lk</a>, we are building more than a company — we are creating a trusted bridge between Sri Lanka and Japan through education, employment, investment, business consultation, and cultural experiences.
          </p>
          <p>
            Our mission is to create real opportunities for Sri Lankans while helping Japanese businesses, investors, and institutions connect confidently with Sri Lanka.
          </p>
          <p>
            With a highly experienced team that includes native and near-native Japanese speakers, industry professionals, educators, and business consultants, Turu provides end-to-end support with transparency, professionalism, and long-term commitment.
          </p>
        </div>

        {/* First Image Gallery */}
        <div className="turu-about__gallery">
          <img src={images[0]} alt="Japan Scenery" className="turu-about__gallery-img" />
          <img src={images[1]} alt="Japan Scenery" className="turu-about__gallery-img" />
          <img src={images[2]} alt="Japan Scenery" className="turu-about__gallery-img" />
        </div>

        <hr className="turu-about__divider" />

        <h2 className="turu-about__heading">
          Our Vision
        </h2>
        <div className="turu-about__text">
          <p>
            To become Sri Lanka’s most trusted Japan-focused organisation for education, career development, business consultation, and investment facilitation.
          </p>
        </div>

        <hr className="turu-about__divider" />

        <h2 className="turu-about__heading" style={{ marginBottom: '32px' }}>
          Our Mission
        </h2>
        <ul className="turu-about__list">
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Empower Sri Lankans through education and employment opportunities</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Build ethical and transparent pathways to Japan</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Support Japanese businesses investing in Sri Lanka</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Promote financial independence and professional development</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Deliver world-class Japanese experiences locally</span>
          </li>
        </ul>

        {/* Second Image Gallery */}
        <div className="turu-about__gallery" style={{ marginTop: '24px' }}>
          <img src={images[3]} alt="Japan Scenery" className="turu-about__gallery-img" />
          <img src={images[4]} alt="Japan Scenery" className="turu-about__gallery-img" />
          <img src={images[5]} alt="Japan Scenery" className="turu-about__gallery-img" />
        </div>

        <h3 className="turu-about__subheading" style={{ marginTop: '48px' }}>
          Experienced Japanese-Speaking Team
        </h3>
        <div className="turu-about__text" style={{ marginBottom: '32px' }}>
          <p>
            Our team includes fully qualified professionals with native and near-native Japanese language proficiency and extensive experience in:
          </p>
        </div>
        <ul className="turu-about__list">
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Japanese education</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Recruitment consultation</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Japanese business culture</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Investment coordination</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Career development</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Settlement support</span>
          </li>
        </ul>
        <div className="turu-about__text" style={{ marginTop: '16px' }}>
          <p>
            We understand both Sri Lankan and Japanese expectations, allowing us to guide students, professionals, and investors with confidence.
          </p>
        </div>

        <hr className="turu-about__divider" />

        <h3 className="turu-about__subheading">
          Ethical & Transparent Recruitment Support
        </h3>
        <div className="turu-about__text">
          <p>We work with trusted Sri Lanka Bureau of Foreign Employment-registered partners to provide properly trained and qualified workers for opportunities in Japan.</p>
          <p>Our focus is ethical recruitment, fair pricing, proper preparation, and long-term success rather than short-term placements.</p>
          <p>We aim to maintain some of the fairest and most transparent charges in the industry.</p>
        </div>

        <hr className="turu-about__divider" />

        <h3 className="turu-about__subheading">
          Student Visa & Japan Settlement Support
        </h3>
        <div className="turu-about__text" style={{ marginBottom: '32px' }}>
          <p>
            Our support continues even after arrival in Japan. We help students and workers with:
          </p>
        </div>
        <ul className="turu-about__list">
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Visa consultation</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Interview preparation</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Japanese language training</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Cultural orientation</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Financial guidance</span>
          </li>
          <li>
            <CheckCircle2 size={20} className="turu-about__list-icon" />
            <span>Settlement support after arriving in Japan</span>
          </li>
        </ul>
        <div className="turu-about__text" style={{ marginTop: '16px' }}>
          <p>
            This gives peace of mind to students, parents, and guardians throughout the entire journey.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
