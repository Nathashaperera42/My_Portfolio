import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Figma } from "lucide-react";

export default function DesignCard({ design, style }) {
  const images = (design.images ?? []).filter(Boolean);
  const [index, setIndex] = useState(0);

  const go = (dir) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div className="pf-design reveal" style={style}>
      <div className="pf-design-imgwrap">
        {images.length > 0 ? (
          <img src={images[index]} alt={design.title} loading="lazy" />
        ) : (
          <div className="pf-design-placeholder" aria-hidden="true">
            <Figma size={26} />
          </div>
        )}

        {images.length > 1 && (
          <>
            <button type="button" className="pf-design-arrow prev" onClick={go(-1)} aria-label="Previous image">
              <ChevronLeft size={16} />
            </button>
            <button type="button" className="pf-design-arrow next" onClick={go(1)} aria-label="Next image">
              <ChevronRight size={16} />
            </button>
            <div className="pf-design-dots">
              {images.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  className={"pf-design-dot" + (i === index ? " active" : "")}
                  aria-label={`Show image ${i + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIndex(i);
                  }}
                />
              ))}
            </div>
          </>
        )}

        <a className="pf-design-overlay" href={design.link} target="_blank" rel="noreferrer">
          View in Figma <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="pf-design-body">
        <h3>{design.title}</h3>
        <span className="pf-design-sub">{design.subtitle}</span>
        <div className="pf-tags">
          {design.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
