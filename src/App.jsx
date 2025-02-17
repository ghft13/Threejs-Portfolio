import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="">
        <Navbar />

        <About />

        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
