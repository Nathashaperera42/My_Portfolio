import { Code2, Server, Database, Smartphone } from "lucide-react";
import { DATA } from "../data/portfolioData.js";

// Maps a stack group's `icon` key to a lucide icon component.
const STACK_ICON = {
  frontend: Code2,
  backend: Server,
  database: Database,
  mobile: Smartphone,
};

export default function Stack() {
  return (
    <section className="pf-stack-section" id="stack">
      <div className="pf-section">
        <div className="pf-head reveal">
          <span className="pf-kicker">02 — Stack</span>
          <h2 className="pf-h2">The tools I reach for</h2>
        </div>
        <div className="pf-stack-grid">
          {DATA.stack.map((g, i) => {
            const Icon = STACK_ICON[g.icon] || Code2;
            return (
              <div
                className="pf-stack-card reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
                key={g.title}
              >
                <div className="pf-stack-top">
                  <Icon size={18} />
                  <h3>{g.title}</h3>
                </div>
                <ul>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
