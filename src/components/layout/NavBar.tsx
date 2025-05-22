import React from "react";
import "./css/NavBar.css";

const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar">
            <a href="/" className="logo">
                <img src="/logo_ex.png" alt="Libroly Logo" height={40} />
            </a>
            <ul className="nav-list">
                <li><a href="/">Inicio</a></li>
                <li><a href="/books">Libros</a></li>
                <li><a href="/releases">Nuevos Lanzamientos</a></li>
                <li><a href="/about-us">Sobre Nosotros</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;