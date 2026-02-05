import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Hero from "@/components/sections/Hero";
import Awards from "@/components/sections/Awards";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Freelance from "@/components/sections/Freelance";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Activities from "@/components/sections/Activities";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Awards />
        <About />
        <Skills />
        <Experience />
        <Freelance />
        <Projects />
        <Certifications />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
