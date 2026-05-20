import { useRef, useEffect } from "react";

const services = [
  {
    title: "MARKET ENTRY CONSULTING",
    subtitle: "We Are Committed To Creating",
    tagline: "Life-Changing",
    icon: (
      // Mount Fuji SVG
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sun */}
        <circle cx="32" cy="14" r="6" stroke="#1a2657" strokeWidth="2.2" fill="none" />
        {/* Mountain body */}
        <path
          d="M8 52 L24 30 L28 34 L32 28 L36 34 L40 30 L56 52 Z"
          stroke="#1a2657"
          strokeWidth="2.2"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Snow cap */}
        <path
          d="M28 34 L32 28 L36 34 L34 36 L30 36 Z"
          fill="#1a2657"
        />
        {/* Base line */}
        <line x1="4" y1="52" x2="60" y2="52" stroke="#1a2657" strokeWidth="2.2" strokeLinecap="round" />
        {/* Water lines below base */}
        <line x1="10" y1="56" x2="54" y2="56" stroke="#1a2657" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="60" x2="48" y2="60" stroke="#1a2657" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "TRADE FACILITATION",
    subtitle: "We Are Committed To Creating",
    tagline: "Life-Changing",
    icon: (
      // Torii Gate SVG
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top cap (wide) */}
        <rect x="6" y="10" width="52" height="6" rx="2" fill="#1a2657" />
        {/* Second beam */}
        <rect x="13" y="20" width="38" height="5" rx="1.5" fill="#1a2657" />
        {/* Left pillar */}
        <rect x="16" y="25" width="6" height="32" rx="2" fill="#1a2657" />
        {/* Right pillar */}
        <rect x="42" y="25" width="6" height="32" rx="2" fill="#1a2657" />
        {/* Left foot */}
        <rect x="13" y="53" width="12" height="4" rx="1.5" fill="#1a2657" />
        {/* Right foot */}
        <rect x="39" y="53" width="12" height="4" rx="1.5" fill="#1a2657" />
      </svg>
    ),
  },
  {
    title: "BUSINESS DEVELOPMENT",
    subtitle: "We Are Committed To Creating",
    tagline: "Life-Changing",
    icon: (
      // Briefcase / building icon
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="22" width="48" height="34" rx="3" stroke="#1a2657" strokeWidth="2.2" fill="none" />
        <path d="M22 22V16a2 2 0 012-2h16a2 2 0 012 2v6" stroke="#1a2657" strokeWidth="2.2" fill="none" />
        <line x1="8" y1="36" x2="56" y2="36" stroke="#1a2657" strokeWidth="2.2" />
        <rect x="27" y="32" width="10" height="8" rx="1.5" fill="#1a2657" />
      </svg>
    ),
  },
  {
    title: "INVESTMENT ADVISORY",
    subtitle: "We Are Committed To Creating",
    tagline: "Life-Changing",
    icon: (
      // Chart/growth icon
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="8,52 20,36 30,44 44,24 56,16"
          stroke="#1a2657"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="56" cy="16" r="3.5" fill="#1a2657" />
        <line x1="8" y1="52" x2="56" y2="52" stroke="#1a2657" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="8" y1="16" x2="8" y2="52" stroke="#1a2657" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "CULTURAL INTEGRATION",
    subtitle: "We Are Committed To Creating",
    tagline: "Life-Changing",
    icon: (
      // Globe/bridge icon
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="22" stroke="#1a2657" strokeWidth="2.2" fill="none" />
        <ellipse cx="32" cy="32" rx="10" ry="22" stroke="#1a2657" strokeWidth="2.2" fill="none" />
        <line x1="10" y1="32" x2="54" y2="32" stroke="#1a2657" strokeWidth="2.2" />
        <line x1="14" y1="20" x2="50" y2="20" stroke="#1a2657" strokeWidth="1.6" />
        <line x1="14" y1="44" x2="50" y2="44" stroke="#1a2657" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "REGULATORY COMPLIANCE",
    subtitle: "We Are Committed To Creating",
    tagline: "Life-Changing",
    icon: (
      // Shield/document icon
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 8 L54 18 L54 36 C54 48 32 58 32 58 C32 58 10 48 10 36 L10 18 Z"
          stroke="#1a2657"
          strokeWidth="2.2"
          fill="none"
          strokeLinejoin="round"
        />
        <polyline
          points="22,32 28,38 42,26"
          stroke="#1a2657"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// Duplicate for seamless infinite scroll
const allServices = [...services, ...services];

export default function HomeServices() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.6; // px per frame

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current -= SPEED;
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#e8edcc",
        overflow: "hidden",
        padding: "18px 0",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to right, #e8edcc, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to left, #e8edcc, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0",
          willChange: "transform",
          width: "max-content",
        }}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        {allServices.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[0];
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "18px",
        padding: "10px 48px 10px 28px",
        flexShrink: 0,
        borderRight: "1px solid rgba(26,38,87,0.15)",
        cursor: "default",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background =
          "rgba(26,38,87,0.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "transparent";
      }}
    >
      {/* Icon */}
      <div style={{ flexShrink: 0, width: 64, height: 64 }}>
        {service.icon}
      </div>

      {/* Text */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span
          style={{
            fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#1a2657",
            textTransform: "uppercase" as const,
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </span>
        <span
          style={{
            fontFamily: "'Trebuchet MS', Georgia, serif",
            fontSize: "12px",
            color: "#1a2657",
            lineHeight: 1.5,
            opacity: 0.85,
          }}
        >
          {service.subtitle}
        </span>
        <span
          style={{
            fontFamily: "'Trebuchet MS', Georgia, serif",
            fontSize: "12px",
            color: "#1a2657",
            lineHeight: 1.5,
            opacity: 0.85,
          }}
        >
          {service.tagline}
        </span>
      </div>
    </div>
  );
}