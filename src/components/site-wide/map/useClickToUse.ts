// File: src/components/site-wide/map/useClickToUse.ts
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Manages a "click to use" lock for a map (or any interactive region).
 * - Starts locked (overlay visible).
 * - Call `unlock()` (e.g., on overlay click) to enable the map.
 * - While unlocked, clicking anywhere outside the container will `lock()` again.
 */
export function useClickToUse(options?: { initialLocked?: boolean }) {
  const { initialLocked = true } = options ?? {};
  const [locked, setLocked] = useState<boolean>(initialLocked);

  /** Attach this ref to the element that defines your interactive area (the map wrapper). */
  const containerRef = useRef<HTMLDivElement | null>(null);

  const lock = useCallback(() => setLocked(true), []);
  const unlock = useCallback(() => setLocked(false), []);

  useEffect(() => {
    if (locked) return; // Only watch for outside clicks when unlocked

    function handlePointerDown(ev: MouseEvent | TouchEvent) {
      const root = containerRef.current;
      if (!root) return;

      // Resolve the event target node
      const target = ev.target as Node | null;
      if (!target) return;

      // Support Shadow DOM: composedPath may include the host
      const path = (ev as Event).composedPath?.();

      // If the click/tap is outside the container, re-lock
      const inside =
        root === target ||
        root.contains(target) ||
        (Array.isArray(path) && path.includes(root));

      if (!inside) {
        setLocked(true);
      }
    }

    // Use capture to ensure we catch it before it’s stopped by other handlers
    document.addEventListener("mousedown", handlePointerDown, true);
    document.addEventListener("touchstart", handlePointerDown, true);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown, true);
      document.removeEventListener("touchstart", handlePointerDown, true);
    };
  }, [locked]);

  return {
    /** Attach to the map wrapper element */
    containerRef,
    /** Whether the overlay should be shown and interactions disabled */
    locked,
    /** Force-lock (show overlay) */
    lock,
    /** Unlock (hide overlay, enable interactions) */
    unlock,
  };
}
