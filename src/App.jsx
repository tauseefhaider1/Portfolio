import React from "react";
import Navbar from "./Navbar";
import Herosec from "./Herosec";   // Home section
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

const App = () => {
  return (
    <div>
      <Navbar />
      
      {/* Home Section */}
      <section id="home">
        <Herosec />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Project />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
