import { useEffect, useState } from 'react';
import sakura2 from '../assets/sakura2.png';


interface Petal {
  id: number;
  src: string;
  top: number; // percentage of container height
  left: number; // percentage of container width
  size: number; // width in pixels
  rotation: number; // degrees
  opacity: number;
  duration: number; // animation duration in seconds
  delay: number; // animation delay in seconds
}

export default function SakuraScattering() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const images = [sakura2];
    // Generate between 25 and 35 petals
    const count = Math.floor(Math.random() * 11) + 15;
    const generatedPetals: Petal[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      src: images[Math.floor(Math.random() * images.length)],
      top: Math.random() * 92 + 4, // Keep away from extreme edges
      left: Math.random() * 90 + 5,
      size: Math.random() * 15 + 20, // 20px to 35px
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.3 + 0.35, // Subtle opacity (0.35 to 0.65)
      duration: Math.random() * 8 + 12, // 12s to 20s for smooth, slow sway
      delay: Math.random() * -15, // Negative delay so animation is already running
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div
      className="sakura-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        display:'none',
        zIndex: 2,
      }}
    >
      {petals.map((petal) => (
        <img
          key={petal.id}
          src={petal.src}
          alt=""
          className="sakura-petal"
          style={{
            position: 'absolute',
            top: `${petal.top}%`,
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: 'auto',
            opacity: petal.opacity,
            transform: `rotate(${petal.rotation}deg)`,
            animation: `sakuraSway ${petal.duration}s ease-in-out ${petal.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
