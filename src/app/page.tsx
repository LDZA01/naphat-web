import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Certificates from "../../components/Certificates";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";
import PageTransition from "../../components/PageTransition";
import FloatingContact from "../../components/FloatingContact";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen text-[var(--ink)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certificates />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <FloatingContact />
      </div>
    </PageTransition>
  );
}
