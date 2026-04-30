export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">Portfolio</p>
      <h1 className="hero__title">Alexandra Silva</h1>
      <p className="hero__subtitle">
        Frontend developer focused on clear interfaces, solid UX, and
        maintainable React code.
      </p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="#projects">
          View work
        </a>
        <a className="btn btn--ghost" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  );
}
