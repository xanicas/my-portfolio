import { useEffect, useState } from "react";

const HEADLINE_PRIMARY = "Hi, I'm Alexandra.";
const HEADLINE_TAGLINE = "I build the parts you click.";

const TYPE_START_MS = 450;
const TYPE_INTERVAL_MS = 75;

function useTypewriter(text) {
    const [typed, setTyped] = useState("");

    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduceMotion) {
            setTyped(text);
            return undefined;
        }

        let intervalId;
        const startId = window.setTimeout(() => {
            let i = 0;
            intervalId = window.setInterval(() => {
                i += 1;
                setTyped(text.slice(0, i));
                if (i >= text.length) {
                    window.clearInterval(intervalId);
                }
            }, TYPE_INTERVAL_MS);
        }, TYPE_START_MS);

        return () => {
            window.clearTimeout(startId);
            if (intervalId) window.clearInterval(intervalId);
        };
    }, [text]);

    return typed;
}

export default function Hero() {
    const typed = useTypewriter(HEADLINE_PRIMARY);
    const isDone = typed.length === HEADLINE_PRIMARY.length;

    return (
        <section id="top" className="hero" aria-labelledby="hero-heading">
            <div className="hero__atmosphere" aria-hidden="true" />
            <div className="hero__main">
                <p className="hero__eyebrow">
                    <span className="hero__eyebrow-dot" aria-hidden="true" />
                    Frontend Developer
                    <span className="hero__eyebrow-sep" aria-hidden="true">
                        ·
                    </span>
                    Lisbon
                </p>
                    <h1
                        id="hero-heading"
                        className="hero__headline"
                        aria-label={`${HEADLINE_PRIMARY} ${HEADLINE_TAGLINE}`}
                    >
                        <span className="hero__type-line" aria-hidden="true">
                            <span>{typed}</span>
                            <span
                                className={
                                    isDone
                                        ? "hero__caret hero__caret--blink"
                                        : "hero__caret"
                                }
                            />
                        </span>
                        <span
                            aria-hidden="true"
                            className={
                                isDone
                                    ? "hero__tagline hero__tagline--in"
                                    : "hero__tagline"
                            }
                        >
                            {HEADLINE_TAGLINE}
                        </span>
                    </h1>
                <p className="hero__byline">
                    Building with React and TypeScript for 6+ years, focused
                    on performance, maintainability, and the details users
                    feel. Currently leading frontend initiatives at BHOUT.
                </p>
                <div className="hero__actions">
                    <a className="btn btn--primary" href="#projects">
                        View work
                    </a>
                    <a
                        className="btn btn--ghost"
                        href={`${import.meta.env.BASE_URL}CV_Alexandra_Silva_2026.pdf`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download CV
                        <span aria-hidden="true" className="btn__icon">
                            ↓
                        </span>
                    </a>
                    <a className="btn btn--ghost" href="#contact">
                        Get in touch
                    </a>
                </div>
            </div>
        </section>
    );
}
