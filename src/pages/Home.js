import React, { useState } from "react";
import "./home.css"
import Start from "../sections/Start";
import About from "../sections/About";
import TimeLine from "../sections/TimeLine";
import Certificates from "../sections/Certificates";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      setCursorPosition({ x: posX, y: posY });
    };

      window.addEventListener("mousemove", handleMouseMove);

    return (
        <main>
            <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className="cursor-dot"></div>
            <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className="cursor-outline"></div>
            <Start />
            <About />
            <TimeLine />
            <Certificates />
            <Projects />
            <Skills />
        </main>
    );
}

export default Home;
