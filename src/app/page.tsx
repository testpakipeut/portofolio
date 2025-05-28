import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <ContactForm />
    </main>
  );
}
