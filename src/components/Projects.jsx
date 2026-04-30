const projects = [
  {
    title: "Project one",
    description:
      "Short summary of what you built, the problem it solved, and your role.",
    stack: "React · Vite",
    href: "#",
  },
  {
    title: "Project two",
    description:
      "Another highlight: stack, impact, or a feature you are proud of.",
    stack: "JavaScript · CSS",
    href: "#",
  },
  {
    title: "Project three",
    description: "Replace these placeholders with your real case studies.",
    stack: "Web",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Projects</h2>
      <p className="section__lead">
        A few things I have shipped. Swap in links and copy when you are ready.
      </p>
      <ul className="project-grid">
        {projects.map((p) => (
          <li key={p.title}>
            <article className="card">
              <h3 className="card__title">{p.title}</h3>
              <p className="card__meta">{p.stack}</p>
              <p className="card__text">{p.description}</p>
              <a className="card__link" href={p.href}>
                Details →
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
