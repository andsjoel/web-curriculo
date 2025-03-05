import React, { useState } from "react";
import "./start.css"
import Resume from "../components/Resume";

const Start = () => {
    const [showResumo, setShowResumo] = useState(true);

    return (
        <section className="start-section">
            
            <div class="container">
                <a href="#inicio" class="inicio">Início</a>
                <a href="#about" class="sobre">Sobre</a>
                <div>
                    test
                </div>
                <a href="#resume" class="resumo">Resumo</a>
                <a href="#timeline" class="linha-tempo">Linha do Tempo</a>
                <a href="#certificates" class="certificados">Certificados</a>
                <a href="#skills" class="habilidades">Habilidades</a>
                <a href="#projects" class="projetos">Projetos</a>
                <a href="#contato" class="contato">Contato</a>
                
            </div>
            
            {showResumo && <Resume onClose={() => setShowResumo(false)} />}
        </section>
    );
}

export default Start;
