import { useEffect, useState } from "react";
import useHideOnScroll from "../hooks/useHideOnScroll";
import useTheme from "../hooks/useTheme";

const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

function SunIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const hidden = useHideOnScroll();
    const [menuOpen, setMenuOpen] = useState(false);
    const isDark = theme === "dark";

    useEffect(() => {
        document.body.classList.toggle("nav-open", menuOpen);
        return () => document.body.classList.remove("nav-open");
    }, [menuOpen]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        const onResize = () => {
            if (window.innerWidth > 768) setMenuOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const closeMenu = () => setMenuOpen(false);

    const navClass = [
        "nav",
        hidden && !menuOpen ? "nav--hidden" : "",
        menuOpen ? "nav--menu-open" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <>
            <header className={navClass}>
                <a
                    className="nav__brand"
                    href="#top"
                    aria-label="Alexandra Silva, home"
                    onClick={closeMenu}
                >
                    AS<span className="nav__brand-dot">.</span>
                </a>
                <div className="nav__right">
                    <nav className="nav__links" aria-label="Primary">
                        {links.map(({ href, label }) => (
                            <a key={href} href={href}>
                                {label}
                            </a>
                        ))}
                    </nav>
                    <div className="nav__actions">
                        <button
                            type="button"
                            className="theme-toggle"
                            onClick={toggle}
                            aria-label={
                                isDark
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            title={
                                isDark
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                        >
                            {isDark ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <button
                            type="button"
                            className={
                                menuOpen
                                    ? "nav__toggle nav__toggle--open"
                                    : "nav__toggle"
                            }
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>
            <div
                id="mobile-menu"
                className={
                    menuOpen ? "nav__drawer nav__drawer--open" : "nav__drawer"
                }
                aria-hidden={!menuOpen}
                onClick={closeMenu}
            >
                <nav
                    className="nav__drawer-links"
                    aria-label="Mobile"
                    onClick={(event) => event.stopPropagation()}
                >
                    {links.map(({ href, label }) => (
                        <a key={href} href={href} onClick={closeMenu}>
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
