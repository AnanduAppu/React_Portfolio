import React, { useEffect } from "react";
import "./App.css";
import About from "./pages/About";
import Card from "./pages/Card";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import data from "./assets/Data";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-2 px-3 sm:px-5 mt-2">
     
      <div data-aos="fade-down" data-aos-duration="800">
      <div className="block max-sm:ms-5 text-4xl font-extrabold leading-tight text-black hover:underline ">
               PORTFOLIO
       </div>
        <Card name={data.name} title={data.title} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Footer github={data.social.github} />
      </div>
    </div>
  );
}
export default App;
