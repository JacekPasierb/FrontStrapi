import { lazy, Suspense, useEffect } from "react";
import "./App.css";
const Aboutus = lazy(() => import("./components/Aboutus"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const Location = lazy(() => import("./components/Location"));
const Nav = lazy(() => import("./components/Nav/Nav"));
const News = lazy(() => import("./components/News"));
const PreFooter = lazy(() => import("./components/PreFooter"));
const Pricing = lazy(() => import("./components/Pricing"));
const Projects = lazy(() => import("./components/Projects"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));

const App = () => {
  useEffect(() => {
    const target = document.querySelector("#navbar-example");
    if (typeof window !== "undefined" && window.bootstrap && target) {
      new window.bootstrap.ScrollSpy(document.body, { target });
    }
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
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
