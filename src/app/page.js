import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Reviews from '@/components/Reviews';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
// import ThemeToggle from '@/components/ThemeToggle';
export default function Home() {
  return (
    <div>
      {/* <ThemeToggle /> */}
      <Hero />
      <About/>
      <Experience/>
      <Skills/>
      <Reviews/>
      <Projects/>
      <Contact/>
      <FAQ />
    </div>
  );
}
