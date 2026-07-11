import { ArrowUpRight } from "lucide-react";
import { DATA } from "../data/portfolioData.js";

export default function Contact() {
  return (
    <section className="pf-contact" id="contact">
      <div className="reveal">
        <span className="pf-kicker">05 — Contact</span>
        <h2 className="pf-contact-h">
          Let’s build
          <br />
          something good.
        </h2>
        <a href={`mailto:${DATA.email}`} className="pf-mail">
          {DATA.email} <ArrowUpRight size={22} />
        </a>
        <div className="pf-contact-links">
          <a href={DATA.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={DATA.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={DATA.resumeUrl} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
