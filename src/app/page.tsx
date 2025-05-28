import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Devis from "@/components/Devis";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <HeroSection />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Services />
      <Devis />
      <ContactForm />
      <Footer />
    </main>
  );
}
