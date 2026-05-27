import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaVideo, FaEye, FaLeaf, FaStar, FaUtensils } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import "./TuruCafe.css";

const images = [
  "https://images.unsplash.com/photo-1538128844159-f08f41bfb169?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1750950388492-f803d12c4a8a?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1627901594749-3976f7677cb0?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function TuruCafe() {
  // Ensure we start at top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="turu-cafe">
      <div className="turu-cafe__jp-bg">
        ライブキッチン
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="turu-cafe__container"
      >
        <div className="turu-cafe__hero-header">
          <span className="turu-cafe__tag">Turu Live Kitchen</span>
          <h1 className="turu-cafe__title">
            Turu Cafe
          </h1>
          <h2 className="turu-cafe__subtitle">
            Premium Japanese dining. Transparent. Fresh. Authentic.
          </h2>
          <div className="turu-cafe__quote">
            "Five-star quality. Transparent preparation. Affordable luxury."
          </div>
        </div>

        {/* Hero Image */}
        <div className="turu-cafe__main-img-wrapper">
          <img src={images[0]} alt="Turu Cafe Live Kitchen" className="turu-cafe__main-img" />
        </div>

        <div className="turu-cafe__text">
          <p>
            <strong>Experience Japan on your plate — without leaving Sri Lanka.</strong> Turu Cafe brings you authentic Japanese cuisine prepared fresh in an open kitchen, where every ingredient, every technique, and every dish is crafted with the precision and care that defines Japanese culinary culture.
          </p>
          <p>
            Turu Cafe is not just a restaurant. It is a live Japanese culinary experience. Our open kitchen concept lets you watch every dish being prepared in real time — from ramen broth simmered for hours to sushi rice seasoned with Japanese precision. We believe great food is built on trust, and trust is built on transparency. That is why our kitchen is always visible, always live, and always honest.
          </p>
        </div>

        {/* Two smaller images */}
        <div className="turu-cafe__secondary-images">
          <img src={images[1]} alt="Turu Cafe Food" className="turu-cafe__secondary-img" />
          <img src={images[2]} alt="Turu Cafe Chef" className="turu-cafe__secondary-img" />
        </div>

        <hr className="turu-cafe__divider" />

        <h3 className="turu-cafe__heading">
          Key Experience Points
        </h3>

        <div className="turu-cafe__features">
          {/* Card 1 */}
          <div className="turu-cafe__feature-card">
            <div className="turu-cafe__feature-icon-wrapper">
              <FaVideo className="turu-cafe__feature-icon" />
            </div>
            <h4 className="turu-cafe__feature-title">Live Kitchen Streams</h4>
            <p className="turu-cafe__feature-desc">
              Watch our chefs cook in real time on TikTok, Instagram, and YouTube.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="turu-cafe__feature-card">
            <div className="turu-cafe__feature-icon-wrapper">
              <FaEye className="turu-cafe__feature-icon" />
            </div>
            <h4 className="turu-cafe__feature-title">Full Transparency</h4>
            <p className="turu-cafe__feature-desc">
              Open kitchen. No hidden processes. Every dish prepared in front of you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="turu-cafe__feature-card">
            <div className="turu-cafe__feature-icon-wrapper">
              <FaLeaf className="turu-cafe__feature-icon" />
            </div>
            <h4 className="turu-cafe__feature-title">Fresh Ingredients Daily</h4>
            <p className="turu-cafe__feature-desc">
              Sourced fresh every morning. Japanese quality standards. Zero compromise.
            </p>
          </div>

          {/* Card 4 */}
          <div className="turu-cafe__feature-card">
            <div className="turu-cafe__feature-icon-wrapper">
              <FaStar className="turu-cafe__feature-icon" />
            </div>
            <h4 className="turu-cafe__feature-title">Affordable Premium</h4>
            <p className="turu-cafe__feature-desc">
              Five-star quality, priced for everyone. Luxury dining made accessible.
            </p>
          </div>

          {/* Card 5 */}
          <div className="turu-cafe__feature-card">
            <div className="turu-cafe__feature-icon-wrapper">
              <FaUtensils className="turu-cafe__feature-icon" />
            </div>
            <h4 className="turu-cafe__feature-title">Authentic Ambience</h4>
            <p className="turu-cafe__feature-desc">
              Japanese-inspired interiors. A dining experience that transports you.
            </p>
          </div>

          {/* Card 6 */}
          <div className="turu-cafe__feature-card">
            <div className="turu-cafe__feature-icon-wrapper">
              <GiChefToque className="turu-cafe__feature-icon" />
            </div>
            <h4 className="turu-cafe__feature-title">Chef-Led Quality</h4>
            <p className="turu-cafe__feature-desc">
              Every dish approved by our lead chef. Consistent. Exceptional. Every time.
            </p>
          </div>
        </div>

      </motion.div>
    </main>
  );
}
