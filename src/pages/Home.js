import React, { useState } from "react";import "./home.css"
import Start from "../sections/Start";
import About from "../sections/About";
import TimeLine from "../sections/TimeLine";
import Certificates from "../sections/Certificates";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Header from "../components/Header";
import Resume from "../components/Resume";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showResumo, setShowResumo] = useState(true);
    


    const clickTag = (e) => {      
        const scrollTop = e.target.scrollTop;
        setIsVisible(scrollTop > 100);
        if (scrollTop => 1) {
            setShowResumo(false)
        }
    };

    return (
        <main onScroll={ clickTag } id="main">
            <Header isVisible={isVisible} />
            {showResumo && <Resume onClose={() => setShowResumo(false)} />}
            <Start />
            <About />
            <TimeLine />
            <Certificates />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}

export default Home;
