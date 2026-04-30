export default function Contact() {
  return (
    <section id="contact" className="section section--footer">
      <h2 className="section__title">Contact</h2>
      <p className="section__lead">
        Open to collaborations and interesting roles. Say hello.
      </p>
      <ul className="contact-list">
        <li>
          <a href="mailto:your.email@example.com">Email</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexandrasilva"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/alexandrasilva"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <p className="fineprint">
        © {new Date().getFullYear()} Alexandra Silva. All rights reserved.
      </p>
    </section>
  );
}
