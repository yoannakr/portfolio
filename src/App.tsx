import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <About />
    </div>
  );
}

export default App;
