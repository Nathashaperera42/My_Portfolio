import { DATA, PORTRAIT } from "../data/portfolioData.js";

export default function ProfilePanel() {
  return (
    <section className="pf-reel" id="about">
      <div className="pf-reel-top">
        <div className="pf-chips">
          {DATA.stats.map((s, i) => (
            <div
              className={"pf-chip reveal" + (i === 1 ? " pf-chip-accent" : "")}
              style={{ transitionDelay: `${i * 90}ms` }}
              key={s.label}
            >
              <span className="pf-chip-l">{s.label.split(" ")[0]}</span>
              <span className="pf-chip-v">{s.value}</span>
            </div>
          ))}
        </div>
        <p className="pf-quote">“{DATA.quote}”</p>
      </div>

      <div className="pf-reel-main">
        <span className="pf-reel-kicker">01 — Profile</span>

        <div className="pf-reel-info">
          <h2 className="pf-built reveal">{DATA.name}</h2>
          <p className="pf-built-sub reveal">{DATA.about}</p>
          <ul className="pf-facts reveal">
            <li>
              <span>Role</span>
              {DATA.role}
            </li>
            <li>
              <span>Based in</span>
              {DATA.location}
            </li>
            <li>
              <span>Education</span>
              {DATA.education.degree} · {DATA.education.institution}
            </li>
            <li>
              <span>Available</span>
              {DATA.available ? `From ${DATA.availableFrom}` : "Not open to work"}
            </li>
          </ul>
        </div>

        {PORTRAIT && (
          <div className="pf-reel-portrait reveal" aria-hidden="true">
            <img src={PORTRAIT} className="pf-slice s1" alt="" />
            <img src={PORTRAIT} className="pf-slice s2" alt="" />
            <img src={PORTRAIT} className="pf-slice s3" alt="" />
          </div>
        )}
      </div>
    </section>
  );
}
