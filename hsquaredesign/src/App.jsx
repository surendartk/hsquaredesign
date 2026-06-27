import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
