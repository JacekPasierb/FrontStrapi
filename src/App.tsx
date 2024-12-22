import "./App.css";
import Aboutus from "./components/Aboutus";
import Header from "./components/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Aboutus />
        <Projects />
      </main>
    </>
  );
};

export default App;
