import React, { useState } from "react";
import "./start.css"
import Resume from "../components/Resume";

const Start = () => {
    const [showResumo, setShowResumo] = useState(true);

    return (
        <section className="start-section">
            
                <ul>
                    <li className="li-inicio">Início</li>
                    <li className="li-sobre">Sobre</li>
                    <li className="li-timeline">Linha do Tempo</li>
                    <li className="li-resumo">Resumo</li>
                    <li className="li-certif">Certificados</li>
                    <li className="li-projetos">Projetos</li>
                    <li className="li-contato">Contato</li>
                </ul>
            
            {showResumo && <Resume onClose={() => setShowResumo(false)} />}
        </section>
    );
}

export default Start;
