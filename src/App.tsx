import "./App.css";
import Aboutus from "./components/Aboutus";
import Header from "./components/Header";
import Nav from "./components/Nav/Nav";
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
        <Testimonials/>
      </main>
    </>
  );
};

export default App;
