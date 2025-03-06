import React from "react";
import "./resume.css"

const Resume = ({ onClose }) => {
  return (
        <div className="resume-section">
            <header>
                <button>Abrir Resumo em PDF</button>
                <button onClick={onClose}>X</button>
            </header>
            <section>
              <div className="div-name">
                <h2 className="title-name">Anderson Joel</h2>
                <p className="title-phrase">Sou um desenvolvedor web e acadêmico de ADS. Entusiasta estudante de tecnologias sempre em busca de novos conhecimentos.</p>
              </div>
              <div className="div-dados">
                <a>andsjoel@gmail.com</a>
                <a>+55 61 9 99760064</a>
                <a>github.com/andsjoel</a>
                <a>linkedin.com/in/andsjoel</a>
              </div>
            </section>
        </div>
  );
};

export default Resume;
