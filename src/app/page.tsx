import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Devis from "@/components/Devis";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <HeroSection />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Services />
      <Devis />
      <ContactForm />
    </main>
  );
}
