import { useEffect, useState } from "react";

/**
 * Hides an element while the user scrolls down past `threshold` and
 * shows it again on the next upward scroll. Always shown near the top.
 *
 * - `threshold` (default 80px): how far we must be scrolled before any
 *   hide can happen at all.
 * - `delta` (default 6px): minimum px change between scroll events
 *   before we react — keeps tiny jitter / inertial scrolling stable.
 */
export default function useHideOnScroll({ threshold = 80, delta = 6 } = {}) {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const y = window.scrollY;
                const diff = y - lastY;

                if (y < threshold) {
                    setHidden(false);
                } else if (diff > delta) {
                    setHidden(true);
                } else if (diff < -delta) {
                    setHidden(false);
                }

                lastY = y;
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold, delta]);

    return hidden;
}
