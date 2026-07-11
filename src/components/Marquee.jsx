import { DATA } from "../data/portfolioData.js";

export default function Marquee() {
  return (
    <div className="pf-marquee" aria-hidden="true">
      <div className="pf-marquee-track">
        {[...DATA.marquee, ...DATA.marquee].map((m, i) => (
          <span className="pf-marquee-item" key={i}>
            {m}
            <i className="pf-diamond" />
          </span>
        ))}
      </div>
    </div>
  );
}
