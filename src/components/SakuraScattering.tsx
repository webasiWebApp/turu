import { useEffect, useRef, useState } from 'react';
import sakura2 from '../assets/sakura2.png';

interface Petal {
  id: number;
  src: string;
  baseTop: number;   // % of container height
  baseLeft: number;  // % of container width
  size: number;
  rotation: number;
  opacity: number;
  duration: number;
  delay: number;
  // live offset driven by mouse
  dx: number;
  dy: number;
  // individual influence strength (parallax depth)
  depth: number;
}

const REPEL_RADIUS = 180; // px — distance at which the cursor starts nudging petals
const MAX_SHIFT   = 28;   // px — maximum displacement per petal

export default function SakuraScattering() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const petalsRef    = useRef<Petal[]>([]);
  const rafRef       = useRef<number>(0);
  const mouseRef     = useRef({ x: -9999, y: -9999 });

  // ── Generate petals once ────────────────────────────────────────────────
  useEffect(() => {
    const images = [sakura2];
    const count  = Math.floor(Math.random() * 5) + 8; // 8–12 petals
    const generated: Petal[] = Array.from({ length: count }).map((_, i) => ({
      id:       i,
      src:      images[Math.floor(Math.random() * images.length)],
      baseTop:  Math.random() * 88 + 4,
      baseLeft: Math.random() * 88 + 4,
      size:     Math.random() * 15 + 20,
      rotation: Math.random() * 360,
      opacity:  Math.random() * 0.35 + 0.35,
      duration: Math.random() * 8 + 12,
      delay:    Math.random() * -15,
      dx:       0,
      dy:       0,
      depth:    Math.random() * 0.6 + 0.4, // 0.4 – 1.0
    }));
    petalsRef.current = generated;
    setPetals(generated);
  }, []);

  // ── Track mouse position ────────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // ── Animation loop — spring toward target offset ────────────────────────
  useEffect(() => {
    if (petals.length === 0) return;

    const SPRING = 0.055; // spring stiffness
    const DAMP   = 0.72;  // velocity damping

    // velocity state lives outside React state for perf
    const vel = petals.map(() => ({ vx: 0, vy: 0 }));

    const tick = () => {
      const container = containerRef.current;
      if (!container) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const rect = container.getBoundingClientRect();
      const mx   = mouseRef.current.x - rect.left;
      const my   = mouseRef.current.y - rect.top;

      let needsUpdate = false;

      petalsRef.current = petalsRef.current.map((petal, i) => {
        // Petal centre in px
        const cx = (petal.baseLeft / 100) * rect.width  + petal.dx;
        const cy = (petal.baseTop  / 100) * rect.height + petal.dy;

        const distX  = cx - mx;
        const distY  = cy - my;
        const dist   = Math.sqrt(distX * distX + distY * distY);

        // How strongly the cursor affects this petal (falls off with distance)
        let targetDx = 0;
        let targetDy = 0;
        if (dist < REPEL_RADIUS && dist > 0) {
          const force  = (1 - dist / REPEL_RADIUS) * MAX_SHIFT * petal.depth;
          targetDx = (distX / dist) * force;
          targetDy = (distY / dist) * force;
        }

        // Spring physics
        const ax = (targetDx - petal.dx) * SPRING;
        const ay = (targetDy - petal.dy) * SPRING;
        vel[i].vx = (vel[i].vx + ax) * DAMP;
        vel[i].vy = (vel[i].vy + ay) * DAMP;

        const newDx = petal.dx + vel[i].vx;
        const newDy = petal.dy + vel[i].vy;

        if (Math.abs(newDx - petal.dx) > 0.01 || Math.abs(newDy - petal.dy) > 0.01) {
          needsUpdate = true;
        }

        return { ...petal, dx: newDx, dy: newDy };
      });

      if (needsUpdate) {
        setPetals([...petalsRef.current]);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [petals.length]);

  return (
    <div
      ref={containerRef}
      className="sakura-container"
      style={{
        position:      'absolute',
        top:           0,
        left:          0,
        right:         0,
        bottom:        0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        overflow:      'hidden',
        zIndex:        2,
      }}
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          style={{
            position:   'absolute',
            top:        `${petal.baseTop}%`,
            left:       `${petal.baseLeft}%`,
            transform:  `translate(${petal.dx}px, ${petal.dy}px)`,
            willChange: 'transform',
          }}
        >
          <img
            src={petal.src}
            alt=""
            className="sakura-petal"
            style={{
              display:   'block',
              width:     `${petal.size}px`,
              height:    'auto',
              opacity:   petal.opacity,
              transform: `rotate(${petal.rotation}deg)`,
              animation: `sakuraSway ${petal.duration}s ease-in-out ${petal.delay}s infinite`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
