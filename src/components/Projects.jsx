const projects = [
    {
        title: "BHOUT Website",
        description:
            "Led the redesign and rebuild of the company website with React, Next.js, and TypeScript — improving performance, SEO, and long-term maintainability.",
        stack: "Next.js · React · TypeScript",
        href: null,
    },
    {
        title: "BHOUT Web App",
        description:
            "Cross-platform web application embedded in the BHOUT mobile apps via WebViews, with reliable communication between the web and native layers.",
        stack: "React · TypeScript · WebViews",
        href: null,
    },
    {
        title: "BHOUT TV Displays",
        description:
            "Interactive TV display interfaces deployed across multiple physical club locations, designed for at-a-glance readability and live updates.",
        stack: "React · TypeScript · WebSockets",
        href: null,
    },
    {
        title: "EPIK",
        description:
            "Desktop application for creating educational games, built in React with a Node.js backend. Final project for my Master's thesis.",
        stack: "React · Node.js",
        href: null,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section reveal">
            <h2 className="section__title">Projects</h2>
            <p className="section__lead">
                A few things I&apos;ve worked on recently.
            </p>
            <ul className="project-grid reveal-children">
                {projects.map((p) => (
                    <li key={p.title}>
                        <article className="card">
                            <h3 className="card__title">{p.title}</h3>
                            <p className="card__meta">{p.stack}</p>
                            <p className="card__text">{p.description}</p>
                            {p.href && (
                                <a className="card__link" href={p.href}>
                                    Details →
                                </a>
                            )}
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}
