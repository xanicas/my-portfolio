import { useCallback, useEffect, useState } from "react";

const TRANSITION_MS = 500;

/**
 * Reads/writes the current theme on `<html data-theme="...">`.
 * The initial value is set by an inline script in index.html so the
 * correct theme is painted before React mounts (no flash).
 *
 * On toggle, briefly applies a `.theme-transitioning` class so the CSS
 * can crossfade backgrounds, text, borders, etc. instead of snapping.
 */
export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof document === "undefined") return "light";
        return document.documentElement.dataset.theme === "dark"
            ? "dark"
            : "light";
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem("theme", theme);
        } catch (_e) {
            // localStorage may be unavailable (private mode); ignore.
        }
    }, [theme]);

    const toggle = useCallback(() => {
        const root = document.documentElement;
        root.classList.add("theme-transitioning");
        setTheme((current) => (current === "dark" ? "light" : "dark"));
        window.setTimeout(() => {
            root.classList.remove("theme-transitioning");
        }, TRANSITION_MS);
    }, []);

    return { theme, toggle };
}
