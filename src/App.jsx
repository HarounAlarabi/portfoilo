import React from "react";

import About from "./components/About";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Technologies from "./components/tech/Technologies";
import Projects from "./components/projects/Projects";
import Popoup from "./components/projects/Popup";

const siteProps = {
  greeting: "Hello, I'm",
  name: "Haroun Alarabi",
  title: "Full-Stack & Software Developer",
  email: "alarabiharoun.com",
  gitHub: "HarounAlarabi",
  linkedIn: "HarounAlarabi",
};



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home name={siteProps.name} title={siteProps.title} greeting={siteProps.greeting} />
        <About />

        <Technologies />
        <Projects />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
