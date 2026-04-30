export default function About() {
  return (
    <section id="about" className="section section--tight">
      <h2 className="section__title">About</h2>
      <div className="prose">
        <p>
          I enjoy turning complex requirements into simple, fast web
          experiences. This site is a small Vite + React setup you can extend
          with your story, CV, and real project links.
        </p>
        <p>
          Update the copy in each component under{" "}
          <code className="inline-code">src/components</code> to match your
          background and tone.
        </p>
      </div>
    </section>
  );
}
