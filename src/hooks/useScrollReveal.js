import { useEffect } from "react";

/**
 * Adds an "is-visible" class to every `.reveal` element when it scrolls into
 * view, so CSS can fade/slide it in. Falls back to showing everything if
 * IntersectionObserver isn't available or the user prefers reduced motion.
 */
export default function useScrollReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reduceMotion || !("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}
