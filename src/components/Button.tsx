import React, { useState } from "react";

type ButtonType = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  children: React.ReactNode;
}

const config = {
  primary: {
    bg: "#A0D585",
    text: "#263B6A",
    border: "#263B6A",
    hoverBg: "#263B6A",
    hoverText: "#A0D585",
  },
  secondary: {
    bg: "transparent",
    text: "#263B6A",
    border: "#263B6A",
    hoverBg: "#263B6A",
    hoverText: "#A0D585",
  },
};

export default function Button({
  buttonType = "primary",
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const c = config[buttonType];

  const combinedStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    minWidth: "160px",
    padding: "14px 38px",

    backgroundColor: hovered ? c.hoverBg : c.bg,
    color: hovered ? c.hoverText : c.text,
    border: `1.5px solid ${hovered ? c.hoverBg : c.border}`,

    fontFamily: "'Trebuchet MS', 'Gill Sans', 'Lucida Sans', sans-serif",
    fontSize: "12.5px",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    whiteSpace: "nowrap" as const,
    borderRadius: "0px",
    cursor: "pointer",
    outline: "none",

    transition: [
      "background-color 0.35s cubic-bezier(0.4,0,0.2,1)",
      "color 0.35s cubic-bezier(0.4,0,0.2,1)",
      "border-color 0.35s cubic-bezier(0.4,0,0.2,1)",
      "transform 0.15s ease",
      "box-shadow 0.35s cubic-bezier(0.4,0,0.2,1)",
    ].join(", "),

    transform: pressed
      ? "scale(0.96)"
      : hovered
      ? "translateY(-2px)"
      : "translateY(0)",

    boxShadow: hovered
      ? buttonType === "primary"
        ? "0 8px 28px rgba(38,59,106,0.30)"
        : "0 8px 28px rgba(160,213,133,0.25)"
      : "none",

    ...style,
  };

  return (
    <>
      <style>{`
        @keyframes btn-shimmer {
          0%   { left: -80%; }
          100% { left: 130%; }
        }
        .btn-shimmer-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -80%;
          width: 55%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.20) 50%,
            transparent 100%
          );
          transform: skewX(-18deg);
          animation: btn-shimmer 0.6s ease forwards;
          pointer-events: none;
        }
      `}</style>

      <button
        className={hovered ? "btn-shimmer-effect" : ""}
        style={combinedStyle}
        onMouseEnter={(e) => { setHovered(true); onMouseEnter?.(e); }}
        onMouseLeave={(e) => { setHovered(false); setPressed(false); onMouseLeave?.(e); }}
        onMouseDown={(e) => { setPressed(true); onMouseDown?.(e); }}
        onMouseUp={(e) => { setPressed(false); onMouseUp?.(e); }}
        {...props}
      >
        {children}
      </button>
    </>
  );
}