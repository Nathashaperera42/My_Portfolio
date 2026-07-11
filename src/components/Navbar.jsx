import { ArrowUpRight } from "lucide-react";
import { DATA } from "../data/portfolioData.js";

export default function Navbar() {
  return (
    <header className="pf-nav">
      <a href="#top" className="pf-logo" aria-label="Home">
        <span className="pf-logo-mark">{DATA.initials}</span>
        <span className="pf-logo-text">{DATA.name}</span>
      </a>
      <nav className="pf-links" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#stack">Stack</a>
        <a href="#about">About</a>
        <a href="#contact" className="pf-nav-cta">
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
