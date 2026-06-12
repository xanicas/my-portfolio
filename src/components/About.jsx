const experience = [
    {
        role: "Frontend Developer",
        company: "BHOUT",
        dates: "Feb 2025 – Present",
        summary:
            "Leading frontend architecture and the website rebuild in Next.js, alongside cross-platform web/mobile integrations and interactive TV displays for club locations.",
    },
    {
        role: "Full-stack Developer",
        company: "Nearshore Portugal",
        dates: "Jul 2019 – Jan 2025",
        summary:
            "Delivered Vue.js and Node.js applications across multiple client domains, owning frontend features end-to-end and contributing to UI/UX decisions.",
    },
];

export default function About() {
    return (
        <section id="about" className="section section--tight reveal">
            <h2 className="section__title">About</h2>
            <div className="prose">
                <p>
                    I&apos;ve been building for the web for 6+ years, mostly
                    in the React and TypeScript ecosystem, with a stretch of
                    full-stack work in Vue and Node.js before that. I enjoy
                    owning frontend architecture, driving technical decisions,
                    and shipping interfaces that are clean, accessible, and
                    pleasant to use.
                </p>
                <p>
                    Outside of writing code, I like collaborating closely with
                    product and design and mentoring teammates on best
                    practices.
                </p>
            </div>
            <h3 className="about__subtitle">Experience</h3>
            <ol className="experience reveal-children">
                {experience.map((item) => (
                    <li key={item.company} className="experience__item">
                        <div className="experience__header">
                            <span className="experience__role">
                                {item.role}
                            </span>
                            <span className="experience__sep" aria-hidden="true">
                                ·
                            </span>
                            <span className="experience__company">
                                {item.company}
                            </span>
                            <span className="experience__dates">
                                {item.dates}
                            </span>
                        </div>
                        <p className="experience__summary">{item.summary}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
