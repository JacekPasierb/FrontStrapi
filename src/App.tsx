import "./App.css";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Location from "./components/Location";
import Nav from "./components/Nav/Nav";
import News from "./components/News";
import PreFooter from "./components/PreFooter";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Aboutus />
        <Projects />
        <Services />
        <Pricing />
        <Testimonials />
        <News />
        <Location />
        <PreFooter />
      </main>
      <Footer />
    </>
  );
};

export default App;
