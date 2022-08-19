import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <About />
      <Skills />
    </div>
  );
}

export default App;
