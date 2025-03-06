import React from "react";
import "./header.css"

const Header = ({ isVisible }) => {
    // const [isVisible, setIsVisible] = useState(false);


    return (
        <header className={`header ${isVisible ? "visible" : ""}`}>
            <nav>
                <ul>
                    <li><a href="#inicio" className="inicio">Início</a></li>
                    <li><a href="#about" className="sobre">Sobre</a></li>
                    <li><a href="#resume" className="resumo">Resumo</a></li>
                    <li><a href="#timeline" className="linha-tempo">Linha do Tempo</a></li>
                    <li><a href="#certificates" className="certificados">Certificados</a></li>
                    <li><a href="#skills" className="habilidades">Habilidades</a></li>
                    <li><a href="#projects" className="projetos">Projetos</a></li>
                    <li><a href="#contact" className="contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
