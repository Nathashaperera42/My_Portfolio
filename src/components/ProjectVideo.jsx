import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

/**
 * Shows a muted, looping demo video for a project when `project.video`
 * (a Cloudinary public_id) is set, otherwise renders an accent-colored
 * gradient tile. The video only plays while it is on screen.
 */
export default function ProjectVideo({ project }) {
  const [failed, setFailed] = useState(!project.video);
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="pf-vidwrap">
      {!failed && (
        <video
          ref={ref}
          className="pf-vid"
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        >
          <source src={project.video} type="video/mp4" />
        </video>
      )}
      <div
        className={"pf-vidfallback" + (failed ? " show" : "")}
        style={{
          background: `radial-gradient(120% 120% at 30% 20%, ${project.accent[0]}33, transparent 60%), linear-gradient(140deg, ${project.accent[1]}, #0a0a0c)`,
        }}
        aria-hidden="true"
      >
        <span className="pf-vidtag">
          <Play size={13} /> {project.title}
        </span>
      </div>
    </div>
  );
}
