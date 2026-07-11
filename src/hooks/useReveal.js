import { useEffect } from "react";

/**
 * Adds the `in` class to every `.reveal` element as it scrolls into view,
 * which triggers the fade-and-rise CSS transition. Falls back to showing
 * everything immediately when IntersectionObserver is unavailable.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}
