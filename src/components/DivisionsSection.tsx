// src/components/DivisionsSection.tsx
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useEffect, useRef, useState, UIEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "../assets/hero.png";

const divisions = [
  {
    tag: "Education",
    title: "Japanese by Turu",
    desc: "Free language training programs for selected underprivileged youth.",
    img: "https://images.unsplash.com/photo-1695500745190-92eca7c35732?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    tag: "Finance",
    title: "Turu Micro Finance",
    desc: "Financial guidance and mentorship.",
    img: "https://images.unsplash.com/photo-1631067958462-6a9c2b9c0f60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    tag: "Business",
    title: "Turu Investment",
    desc: "Japan–Sri Lanka Business & Investment Consultation.",
    img: "https://images.unsplash.com/photo-1653237977850-795ef6b11342?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    tag: "Gastronomy",
    title: "Turu Live Kitchen",
    desc: "Customers can experience authentic Japanese cuisine while watching food being freshly prepared by experienced chefs.",
    img: "https://images.unsplash.com/photo-1580827929620-e1a34bc162fd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 },
  }),
};

export default function DivisionsSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let intervalId: ReturnType<typeof setInterval>;
    let isHovered = false;

    const startScroll = () => {
      intervalId = setInterval(() => {
        if (isHovered) return;
        
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const cardWidth = (el.firstChild as HTMLElement)?.offsetWidth || 300;
          el.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
        }
      }, 4000);
    };

    startScroll();

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("touchstart", handleMouseEnter, { passive: true });
    el.addEventListener("touchend", handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("touchstart", handleMouseEnter);
      el.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const cardWidth = (el.firstChild as HTMLElement)?.offsetWidth + 20 || 300;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const cardWidth = (el.firstChild as HTMLElement)?.offsetWidth || 300;
    el.scrollBy({ left: -(cardWidth + 20), behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const cardWidth = (el.firstChild as HTMLElement)?.offsetWidth || 300;
    el.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
  };

  const scrollTo = (index: number) => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const cardWidth = (el.firstChild as HTMLElement)?.offsetWidth + 20 || 300;
    el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="section divisions" id="divisions" ref={ref as React.LegacyRef<HTMLElement>}>
      <div className="section__inner divisions__layout">
        <div className="divisions__content">
          <motion.div className="divisions__header" variants={fadeUp} custom={0}
            initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="jp-ghost" aria-hidden="true">当社の各部門</div>
            <h2 className="divisions__heading">Our Divisions</h2>
            <p className="divisions__sub">
              Our specialized divisions — all united by a single mission to build lasting
              connections between Japan and Sri Lanka.
            </p>
            
            <div className="divisions__controls">
              <div className="divisions__arrows">
                <button className="divisions__arrow" onClick={scrollPrev} aria-label="Previous card">
                  <ChevronLeft size={20} />
                </button>
                <button className="divisions__arrow" onClick={scrollNext} aria-label="Next card">
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="divisions__bullets">
                {divisions.map((_, i) => (
                  <button 
                    key={i} 
                    className={`divisions__bullet ${activeIndex === i ? "active" : ""}`}
                    onClick={() => scrollTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="divisions__carousel-wrap">
          <motion.div 
            className="divisions__cards" 
            ref={carouselRef}
            onScroll={handleScroll}
            variants={fadeUp} custom={1}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            {divisions.map((d, i) => (
              <div key={i} className="division-card">
                <img src={d.img} alt={d.title} className="division-card__img" />
                <div className="division-card__overlay"></div>
                <div className="division-card__body">
                  <span className="division-card__tag">{d.tag}</span>
                  <div className="division-card__title">{d.title}</div>
                  <div className="division-card__hidden-content">
                    <p className="division-card__desc">{d.desc}</p>
                    <button className="division-card__btn">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
