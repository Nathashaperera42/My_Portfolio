import { DATA } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="pf-footer">
      <span>
        © {new Date().getFullYear()} {DATA.name}
      </span>
      <span>
        {DATA.role} · {DATA.location}
      </span>
    </footer>
  );
}
