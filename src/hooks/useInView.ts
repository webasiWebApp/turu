import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit & { triggerOnce?: boolean }) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const { triggerOnce = true, threshold = 0.15, rootMargin } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) obs.disconnect();
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, inView] as const;
}
