import React from "react";
import "./css/NavBar.css";

const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar flex items-center justify-between px-6 py-2">
            <a href="/profile" className="logo bg-gray-800 rounded-full p-2 ">
                <img src="/images/logo.png" alt="Libroly Logo" height={40} />
            </a>
            <ul className="nav-list flex gap-6">
                <li><a href="/">Inicio</a></li>
                <li><a href="/books">Libros</a></li>
                <li><a href="/about-us">Sobre Nosotros</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
            <div className="flex gap-4">
                <a href="/login">Login</a>
                <a href="/signup">Sign up</a>
            </div>
        </nav>
    );
};

export default NavBar;