import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BuildSection from "./components/BuildSection";
import RubberVideoSection from "./components/RubberVideoSection";
import WhyVSRP from "./components/WhyVSRP";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import Insights from "./components/Insights";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />
        <About />
        <BuildSection />
        <RubberVideoSection />
        <WhyVSRP />
        <Industries />
        <Process />
        <Projects />
        <FAQ />
        <Insights />
        <CTASection />
        <Footer />

      </main>
    </>
  );
}

export default App;