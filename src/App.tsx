import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Webinars} from "./components/Webinars";
import { Navbar } from "./components/Navbar";
import { ViveComplianceMagazine } from "./components/ViveComplianceMaganize";
import { Contact } from "./components/Contact";
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
      <Testimonials />
      <ViveComplianceMagazine />
      <Webinars/>
      <Newsletter />
      <Cta />
      <Team />
      <Contact />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
