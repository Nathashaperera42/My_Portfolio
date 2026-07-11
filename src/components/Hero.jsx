import { ArrowUpRight, ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { DATA, PORTRAIT } from "../data/portfolioData.js";

export default function Hero() {
  return (
    <section className="pf-hero" id="top">
      <div className="pf-hero-top">
        <div className="pf-tags-top">
          {DATA.heroTags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="pf-release">
          {DATA.available && <span className="pf-dot" />}
          Available {DATA.availableFrom}
        </div>
      </div>

      <div className="pf-credits" aria-hidden="true">
        {DATA.credits.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>

      <div className={"pf-stage" + (PORTRAIT ? "" : " no-portrait")}>
        <div className="pf-disc" aria-hidden="true" />
        <span className="pf-year-v" aria-hidden="true">[{DATA.year}]</span>
        <h1 className="pf-bigname" aria-label={DATA.name}>
          <span className="pf-line">
            <span className="pf-line-i">{DATA.name}</span>
          </span>
        </h1>
        {PORTRAIT && (
          <img className="pf-portrait" src={PORTRAIT} alt={DATA.name} draggable="false" />
        )}
      </div>

      <div className="pf-hero-foot">
        <p className="pf-tagline">{DATA.tagline}</p>
        <div className="pf-cta-row">
          <a href="#work" className="pf-btn pf-btn-primary">
            View my work <ArrowDown size={16} />
          </a>
          <a href={DATA.resumeUrl} className="pf-btn pf-btn-ghost" download>
            Download CV <Download size={15} />
          </a>
          <div className="pf-social">
            <a href={DATA.socials.github} aria-label="GitHub" target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
            <a href={DATA.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="pf-badge" aria-label={DATA.role}>
        <span>
          {DATA.location.split(",")[0]} · {DATA.role}
        </span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
