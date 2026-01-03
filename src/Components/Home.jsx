import React from "react";
import Navbar from "./Navbar";
import Skills from "./Skills";
import About from "./About";
import Footer from "./Footer";
import WordPressShowcase from "./WordPressShowcase";

function Home() {
    return (
        <>
            <Navbar />
            <About />
            <Skills />
            <Footer />
            <WordPressShowcase />
        </>
    );
}

export default Home;
