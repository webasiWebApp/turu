/**
 * JapaneseReveal — Clean Fade Variant
 * -------------------------------------
 * - Plain outline circle (30px radius) replaces cursor
 * - English fades out → Japanese fades in on hover
 * - Slowly fades back to English when cursor leaves
 *
 * Requirements:
 *   npm install framer-motion
 *   Tailwind CSS configured in your project
 *
 * Usage:
 *   1. Wrap your layout with <JapaneseRevealProvider>
 *   2. Use <JapaneseText words={[...]} /> anywhere inside it
 */

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

// ─── Context ────────────────────────────────────────────────────────────────

const MouseContext = createContext({ x: -300, y: -300 });

export function JapaneseRevealProvider({ children }: { children: ReactNode }) {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <MouseContext.Provider value={pos}>
      {/* Hide default cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>
      <OutlineCursor pos={pos} />
      {children}
    </MouseContext.Provider>
  );
}

// ─── Cursor ──────────────────────────────────────────────────────────────────

function OutlineCursor({ pos }: { pos: { x: number; y: number } }) {
  const x = useSpringValue(pos.x, { damping: 22, stiffness: 280, mass: 0.4 });
  const y = useSpringValue(pos.y, { damping: 22, stiffness: 280, mass: 0.4 });

  useEffect(() => { x.set(pos.x); }, [pos.x]);
  useEffect(() => { y.set(pos.y); }, [pos.y]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: 60,
        height: 60,
        borderRadius: "50%",
        border: "1.5px solid currentColor",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0.7,
      }}
    />
  );
}

// Tiny hook — spring-animates a MotionValue
function useSpringValue(initial: number, config?: any) {
  const mv = useMotionValue(initial);
  return useSpring(mv, config);
}

// ─── JapaneseText ────────────────────────────────────────────────────────────

interface WordItem {
  id: string;
  en: string;
  ja: string;
}

interface JapaneseTextProps {
  words: WordItem[];
  circleRadius?: number;
  className?: string;
}

/**
 * Props:
 *   words        — Array<{ id: string; en: string; ja: string }>
 *                  e.g. [{ id: "w1", en: "Hello", ja: "こんにちは" }]
 *   circleRadius — number, default 30 (px). Match your cursor width/2.
 *   className    — extra classes for the wrapper <span>
 */
export function JapaneseText({ words, circleRadius = 30, className = "" }: JapaneseTextProps) {
  const mousePos = useContext(MouseContext);
  const wordRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set());
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
      const hit = dist < circleRadius + r.width * 0.5;

      if (hit) {
        next.add(id);
        clearTimeout(fadeTimers.current[id]);
        delete fadeTimers.current[id];
      }
    });

    setActiveIds((prev) => {
      // Words that just lost hover → start fade timer
      prev.forEach((id) => {
        if (!next.has(id) && !fadeTimers.current[id]) {
          fadeTimers.current[id] = setTimeout(() => {
            setActiveIds((cur) => {
              const s = new Set(cur);
              s.delete(id);
              return s;
            });
            delete fadeTimers.current[id];
          }, 150); // short delay before fade starts
        }
      });
      return next.size > 0 || prev.size > 0 ? new Set([...next]) : prev;
    });
  }, [mousePos, words, circleRadius]);

  return (
    <span className={className}>
      {words.map((word, idx) => (
        <span key={word.id}>
          <span
            ref={(el) => { wordRefs.current[word.id] = el; }}
            style={{ display: "inline-block", position: "relative" }}
          >
            <AnimatePresence mode="wait">
              {activeIds.has(word.id) ? (
                <motion.span
                  key="ja"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3, transition: { duration: 0.65, ease: "easeIn" } }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  style={{
                    display: "inline-block",
                    fontFamily: "'Hiragino Sans', 'Yu Gothic', 'Noto Sans JP', sans-serif",
                  }}
                >
                  {word.ja}
                </motion.span>
              ) : (
                <motion.span
                  key="en"
                  initial={{ opacity: 0, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4, transition: { duration: 0.28, ease: "easeIn" } }}
                  transition={{ duration: 0.65, ease: "easeOut" }} // slow fade back
                  style={{ display: "inline-block" }}
                >
                  {word.en}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          {idx < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

// ─── Demo Page ───────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: "hero",
    label: "ABOUT",
    className: "text-5xl md:text-7xl font-light italic leading-tight tracking-tight",
    words: [
      { id: "h1", en: "We", ja: "私は" },
      { id: "h2", en: "craft", ja: "作る" },
      { id: "h3", en: "digital", ja: "デジタル" },
      { id: "h4", en: "experiences", ja: "体験を" },
      { id: "h5", en: "that", ja: "が" },
      { id: "h6", en: "transcend", ja: "超える" },
      { id: "h7", en: "boundaries.", ja: "境界。" },
    ],
  },
  {
    id: "sub",
    label: null,
    className: "text-lg md:text-xl tracking-widest text-neutral-400 font-mono",
    words: [
      { id: "s1", en: "Design", ja: "デザイン" },
      { id: "s2", en: "meets", ja: "出会う" },
      { id: "s3", en: "technology", ja: "技術" },
      { id: "s4", en: "in", ja: "で" },
      { id: "s5", en: "perfect", ja: "完璧な" },
      { id: "s6", en: "harmony.", ja: "調和。" },
    ],
  },
  {
    id: "mission",
    label: "MISSION",
    className: "text-3xl md:text-5xl font-normal leading-snug",
    words: [
      { id: "m1", en: "Build", ja: "構築" },
      { id: "m2", en: "the", ja: "その" },
      { id: "m3", en: "future,", ja: "未来を、" },
      { id: "m4", en: "one", ja: "ひとつ" },
      { id: "m5", en: "pixel", ja: "ピクセル" },
      { id: "m6", en: "at", ja: "ずつ" },
      { id: "m7", en: "a", ja: "一" },
      { id: "m8", en: "time.", ja: "時間。" },
    ],
  },
  {
    id: "quote",
    label: "PHILOSOPHY",
    className: "text-2xl md:text-3xl font-light italic leading-relaxed text-neutral-500 border-l-2 border-neutral-200 pl-5",
    words: [
      { id: "q1", en: "The", ja: "その" },
      { id: "q2", en: "code", ja: "コード" },
      { id: "q3", en: "you", ja: "あなたが" },
      { id: "q4", en: "write", ja: "書く" },
      { id: "q5", en: "today", ja: "今日" },
      { id: "q6", en: "becomes", ja: "なる" },
      { id: "q7", en: "tomorrow's", ja: "明日の" },
      { id: "q8", en: "foundation.", ja: "基盤。" },
    ],
  },
];

export default function App() {
  return (
    <JapaneseRevealProvider>
      <div className="min-h-screen bg-[#fafaf8] text-[#1a1a18]" style={{ fontFamily: "Georgia, serif" }}>
        <div className="max-w-4xl mx-auto px-8 py-24 space-y-24">

          <header className="flex justify-between items-center border-b border-neutral-200 pb-5">
            <span className="text-xs tracking-[.4em] text-neutral-400 font-mono">HOVER · ホバー</span>
            <span className="text-xs tracking-[.4em] text-neutral-300 font-mono">文字変換</span>
          </header>

          {SECTIONS.map((sec) => (
            <section key={sec.id} className="space-y-3">
              {sec.label && (
                <span className="block text-[10px] tracking-[.5em] text-neutral-300 font-mono">
                  {sec.label}
                </span>
              )}
              <p className={sec.className}>
                <JapaneseText words={sec.words} circleRadius={30} />
              </p>
            </section>
          ))}

          <footer className="border-t border-neutral-100 pt-8 space-y-2">
            <p className="text-xs tracking-[.4em] text-neutral-300 font-mono">INSTRUCTIONS · 使い方</p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              Move your cursor over any text. English fades out as Japanese fades in.
              Move away and the text gently returns to English.
            </p>
          </footer>

        </div>
      </div>
    </JapaneseRevealProvider>
  );
}