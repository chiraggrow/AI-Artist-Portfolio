"use client";

import { useCallback, useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const idsSet = new Set(ids);

    let frameId: number | null = null;

    const pickActive = () => {
      let best: string | null = null;
      let bestDist = Infinity;
      const mid = window.innerHeight / 2;

      for (const id of idsSet) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;

        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = id;
        }
      }

      if (best) {
        setActiveId((prev) => (prev === best ? prev : best));
      }
    };

    const requestTick = () => {
      if (frameId === null) {
        frameId = requestAnimationFrame(() => {
          frameId = null;
          pickActive();
        });
      }
    };

    pickActive();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);
    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [ids]);

  const setActive = useCallback((id: string) => setActiveId(id), []);

  return { activeId, setActive };
}
