import React from "react";
import "./resume.css"

const Resume = ({ onClose }) => {
  return (
        <div className="resume-section">
            <header>
                <button>Abrir Resumo em PDF</button>
                <button onClick={onClose}>X</button>
            </header>
            <h2 className="">Resumo</h2>
            <p className="">Sou um desenvolvedor apaixonado por tecnologia!</p>
        </div>
  );
};

export default Resume;
