"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
      <Contact />
      <FAQ />
    </div>
  );
}

