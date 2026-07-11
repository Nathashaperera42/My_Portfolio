import { useState, useEffect } from "react";
import useReveal from "./hooks/useReveal.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import ProfilePanel from "./components/ProfilePanel.jsx";
import Stack from "./components/Stack.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Reveal-on-scroll for every element with the `reveal` class.
  useReveal();

  // Trigger the intro animations one frame after mount.
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={"pf-root" + (loaded ? " loaded" : "")}>
      <Navbar />
      <Hero />
      <Marquee />
      <ProfilePanel />
      <Stack />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
