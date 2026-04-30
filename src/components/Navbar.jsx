const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        Alexandra Silva
      </a>
      <nav className="nav__links" aria-label="Primary">
        {links.map(({ href, label }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
