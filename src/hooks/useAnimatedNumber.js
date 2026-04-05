import { useEffect, useRef, useState } from "react";

/**
 * When `ref` element is in view, animates number 0 → target with easing.
 * Repeats from 0 after `pauseMs` if `loop` is true.
 */
export function useAnimatedNumber(target, options = {}) {
  const { duration = 2200, pauseMs = 4500, loop = true } = options;
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const clearAnim = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };

    const run = () => {
      clearAnim();
      setN(0);
      const t0 = performance.now();
      const tick = (now) => {
        const u = Math.min(1, (now - t0) / duration);
        const eased = 1 - (1 - u) ** 3;
        setN(Math.round(target * eased));
        if (u < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setN(target);
          if (loop) {
            timeoutRef.current = window.setTimeout(run, pauseMs);
          }
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          run();
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      clearAnim();
      startedRef.current = false;
    };
  }, [target, duration, pauseMs, loop]);

  return [n, ref];
}
