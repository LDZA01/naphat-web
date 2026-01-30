import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";
import PageTransition from "../../components/PageTransition";
import FloatingContact from "../../components/FloatingContact";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
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
