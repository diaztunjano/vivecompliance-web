import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
// import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ViveComplianceMagazine } from "./components/ViveComplianceMaganize";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Features } from "./components/Features";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Features />
      {/* <HowItWorks /> */}
      <Testimonials />
      <ViveComplianceMagazine />
      <Cta />
      <Team />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
