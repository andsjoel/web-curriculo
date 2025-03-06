import React, { useState } from "react";
import "./start.css"
import Social from "../components/Social";

const Start = () => {

    const handleClick = () => {
        window.location.reload()
    }

    return (
        <section className="start-section">
            
            <div className="container">
                <a id="tag-a" href="#inicio" className="inicio">Início</a>
                <a id="tag-a" href="#about" className="sobre">Sobre</a>
                <Social />
                <a id="tag-a" onClick={ handleClick } href="#resume" className="resumo">Resumo</a>
                <a id="tag-a" href="#timeline" className="linha-tempo">Linha do Tempo</a>
                <a id="tag-a" href="#certificates" className="certificados">Certificados</a>
                <a id="tag-a" href="#skills" className="habilidades">Habilidades</a>
                <a id="tag-a" href="#projects" className="projetos">Projetos</a>
                <a id="tag-a" href="#contact" className="contato">Contato</a>
                
            </div>
        </section>
    );
}

export default Start;
