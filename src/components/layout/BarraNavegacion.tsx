import React from "react";
import "./BarraNavegacion.css";

const BarraNavegacion: React.FC = () => {
    return (
        <nav className="barra_navegacion">
            <a href="/" className="logo">
                <img src="/logo_ejemplo.png" alt="Libroly Logo" height={40} />
            </a>
            <ul className="nav-list">
                <li><a href="/">Inicio</a></li>
                <li><a href="/libros">Libros</a></li>
                <li><a href="/lanzamientos">Nuevos Lanzamientos</a></li>
                <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                <li><a href="/contacto">Contacto</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    );
};

export default BarraNavegacion;