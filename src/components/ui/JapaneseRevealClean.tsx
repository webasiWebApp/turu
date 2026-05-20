// src/components/ui/JapaneseRevealClean.tsx
import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

interface MousePos { x: number; y: number; }
interface WordDef { id: string; en: string; ja: string; }

const MouseContext = createContext<MousePos>({ x: -300, y: -300 });

export function JapaneseRevealProvider({ children }: { children: ReactNode }) {
  const [pos, setPos] = useState<MousePos>({ x: -300, y: -300 });
  useEffect(() => {
    const h = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return (
    <MouseContext.Provider value={pos}>
      <OutlineCursor pos={pos} />
      {children}
    </MouseContext.Provider>
  );
}

function OutlineCursor({ pos }: { pos: MousePos }) {
  const mx = useMotionValue(pos.x);
  const my = useMotionValue(pos.y);
  const x = useSpring(mx, { damping: 22, stiffness: 280, mass: 0.4 });
  const y = useSpring(my, { damping: 22, stiffness: 280, mass: 0.4 });
  useEffect(() => { mx.set(pos.x); }, [pos.x, mx]);
  useEffect(() => { my.set(pos.y); }, [pos.y, my]);
  return (
    <motion.div
      style={{
        position: "fixed", top: 0, left: 0, x, y,
        translateX: "-50%", translateY: "-50%",
        width: 48, height: 48, borderRadius: "50%",
        border: "1.5px solid var(--color-accent)",
        pointerEvents: "none", zIndex: 9999, opacity: 0.6,
        mixBlendMode: "difference",
      }}
    />
  );
}

export function JapaneseText({ words, circleRadius = 30, className = "" }: {
  words: WordDef[]; circleRadius?: number; className?: string;
}) {
  const mousePos = useContext(MouseContext);
  const wordRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const [activeIds, setActiveIds] = useState(new Set<string>());
  const fadeTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    const next = new Set<string>();
    words.forEach(({ id }) => {
      const el = wordRefs.current[id];
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dist = Math.hypot(mousePos.x - cx, mousePos.y - cy);
      if (dist < circleRadius + r.width * 0.5) {
        next.add(id);
        clearTimeout(fadeTimers.current[id]);
        delete fadeTimers.current[id];
      }
    });
    setActiveIds(prev => {
      prev.forEach(id => {
        if (!next.has(id) && !fadeTimers.current[id]) {
          fadeTimers.current[id] = setTimeout(() => {
            setActiveIds(cur => { const s = new Set(cur); s.delete(id); return s; });
            delete fadeTimers.current[id];
          }, 150);
        }
      });
      return next.size > 0 || prev.size > 0 ? new Set([...next]) : prev;
    });
  }, [mousePos, words, circleRadius]);

  return (
    <span className={className}>
      {words.map((word, idx) => (
        <span key={word.id}>
          <span ref={el => { wordRefs.current[word.id] = el; }} style={{ display: "inline-block", position: "relative" }}>
            <AnimatePresence mode="wait">
              {activeIds.has(word.id) ? (
                <motion.span key="ja"
                  initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3, transition: { duration: 0.5 } }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  style={{ display: "inline-block", fontFamily: "var(--font-japanese)" }}
                >{word.ja}</motion.span>
              ) : (
                <motion.span key="en"
                  initial={{ opacity: 0, y: -3 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4, transition: { duration: 0.22 } }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  style={{ display: "inline-block" }}
                >{word.en}</motion.span>
              )}
            </AnimatePresence>
          </span>
          {idx < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
