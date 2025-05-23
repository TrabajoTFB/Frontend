import React from "react";
import "./css/NavBar.css";

const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar">
            <a href="/" className="logo bg-gray-800 rounded-full p-2 ">
                <img src="/images/logo.png" alt="Libroly Logo" height={40} />
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