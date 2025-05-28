import React, { useState } from "react";
import "./css/NavBar.css";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav-bar flex items-center justify-between px-6 py-2">
            <a href="/profile" className="logo bg-gray-800 rounded-full p-2">
                <img src="/images/logo.png" alt="Libroly Logo" height={40} />
            </a>
            
            {/* Botón hamburguesa para móvil */}
            <button 
                className="lg:hidden text-gray-700 hover:text-coral-500 transition-colors"
                onClick={toggleMenu}
                aria-label="Menú principal"
            >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>

            {/* Menú de navegación - Desktop */}
            <ul className="nav-list hidden lg:flex gap-6">
                <li><a href="/">Inicio</a></li>
                <li><a href="/books">Libros</a></li>
                <li><a href="/releases">Nuevos Lanzamientos</a></li>
                <li><a href="/about-us">Sobre Nosotros</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>

            {/* Botones de autenticación - Desktop */}
            <div className="hidden lg:flex gap-4">
                <a href="/login" className="text-gray-700 hover:text-coral-500 transition-colors">Login</a>
                <a href="/signup" className="text-gray-700 hover:text-coral-500 transition-colors">Sign up</a>
            </div>

            {/* Menú móvil */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
                    <ul className="flex flex-col py-4">
                        <li><a href="/" className="block px-6 py-2 hover:bg-gray-50">Inicio</a></li>
                        <li><a href="/books" className="block px-6 py-2 hover:bg-gray-50">Libros</a></li>
                        <li><a href="/releases" className="block px-6 py-2 hover:bg-gray-50">Nuevos Lanzamientos</a></li>
                        <li><a href="/about-us" className="block px-6 py-2 hover:bg-gray-50">Sobre Nosotros</a></li>
                        <li><a href="/contact" className="block px-6 py-2 hover:bg-gray-50">Contacto</a></li>
                        <li><a href="/blog" className="block px-6 py-2 hover:bg-gray-50">Blog</a></li>
                        <li className="border-t mt-2 pt-2">
                            <a href="/login" className="block px-6 py-2 hover:bg-gray-50">Login</a>
                        </li>
                        <li>
                            <a href="/signup" className="block px-6 py-2 hover:bg-gray-50">Sign up</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;