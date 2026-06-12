export default function Contact() {
    return (
        <section id="contact" className="section section--footer reveal">
            <h2 className="section__title">Contact</h2>
            <p className="section__lead">
                Based in Lisbon — open to interesting frontend roles and
                collaborations. Say hello.
            </p>
            <ul className="contact-list">
                <li>
                    <a href="mailto:alexa.as@hotmail.com">Email</a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/alexandra-silva-482966b3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/xanicas"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </li>
            </ul>
            <p className="fineprint">
                © {new Date().getFullYear()} Alexandra Silva. All rights
                reserved.
            </p>
        </section>
    );
}
