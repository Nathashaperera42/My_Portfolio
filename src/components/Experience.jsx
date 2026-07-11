import { DATA } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section className="pf-section" id="experience">
      <div className="pf-head reveal">
        <span className="pf-kicker">04 — Experience</span>
        <h2 className="pf-h2">Where I’ve worked</h2>
      </div>
      <div className="pf-timeline">
        {DATA.experience.map((e, i) => (
          <div
            className="pf-exp reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
            key={e.role + e.company}
          >
            <div className="pf-exp-num">{String(i + 1).padStart(2, "0")}</div>
            <div className="pf-exp-main">
              <div className="pf-exp-top">
                <h3>
                  {e.role} <span>· {e.company}</span>
                </h3>
                <span className="pf-exp-period">{e.period}</span>
              </div>
              <ul>
                {e.points.map((pt, k) => (
                  <li key={k}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
