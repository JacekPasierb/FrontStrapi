import "./App.css";
import Aboutus from "./components/Aboutus";
import Header from "./components/Header";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Aboutus />
      </main>
    </>
  );
};

export default App;
