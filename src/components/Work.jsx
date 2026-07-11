import { ArrowUpRight, Github } from "lucide-react";
import { DATA } from "../data/portfolioData.js";
import ProjectVideo from "./ProjectVideo.jsx";

export default function Work() {
  return (
    <section className="pf-section" id="work">
      <div className="pf-head reveal">
        <span className="pf-kicker">03 — Selected work</span>
        <h2 className="pf-h2">Things I’ve shipped</h2>
      </div>
      <div className="pf-projects">
        {DATA.projects.map((p, i) => (
          <article
            className="pf-project reveal"
            style={{ transitionDelay: `${(i % 2) * 90}ms` }}
            key={p.title}
          >
            <ProjectVideo project={p} />
            <div className="pf-project-body">
              <div className="pf-project-head">
                <h3>
                  {p.title} <span>— {p.subtitle}</span>
                </h3>
                <span className="pf-year">{p.year}</span>
              </div>
              <p className="pf-project-blurb">{p.blurb}</p>
              <div className="pf-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="pf-project-links">
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live <ArrowUpRight size={14} />
                </a>
                <a href={p.code} target="_blank" rel="noreferrer">
                  Code <Github size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
