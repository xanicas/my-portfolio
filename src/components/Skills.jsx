const skillCategories = [
    {
        title: "Core Stack",
        items: [
            "React",
            "Next.js",
            "Vue",
            "TypeScript",
            "JavaScript (ES6+)",
            "Redux",
        ],
    },
    {
        title: "UI, UX & Accessibility",
        items: [
            "HTML",
            "CSS",
            "Responsive Design",
            "Animations",
            "Accessibility (WCAG)",
            "Figma",
        ],
    },
    {
        title: "Testing & Tooling",
        items: [
            "Jest",
            "Vitest",
            "React Testing Library",
            "Vite",
            "Git",
            "GitHub Actions",
            "Docker",
        ],
    },
    {
        title: "Backend & Integrations",
        items: ["Node.js", "MySQL", "REST APIs", "WebSockets", "Keycloak"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section section--tight reveal">
            <h2 className="section__title">Skills</h2>
            <p className="section__lead">
                The tools I reach for most often when shipping interfaces.
            </p>
            <div className="skills-grid reveal-children">
                {skillCategories.map((cat) => (
                    <div key={cat.title} className="skill-group">
                        <h3 className="skill-group__title">{cat.title}</h3>
                        <ul className="skill-tags" aria-label={cat.title}>
                            {cat.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
