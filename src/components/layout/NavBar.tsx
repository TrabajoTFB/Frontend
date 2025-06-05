import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./css/NavBar.css";
import CartBadge from "../ui/CartBadge";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsUserMenuOpen(false);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsUserMenuOpen(false);
    };

    return (
        <nav className="nav-bar flex items-center justify-between px-6 py-2 bg-white shadow-sm">
            <Link to="/" className="logo bg-gray-800 rounded-full p-2">
                <img src="/images/logo.png" alt="Libroly Logo" height={40} />
            </Link>
            
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
                <li><Link to="/" className="hover:text-coral-500 transition-colors">Inicio</Link></li>
                <li><Link to="/books" className="hover:text-coral-500 transition-colors">Libros</Link></li>
                <li><Link to="/my-books" className="hover:text-coral-500 transition-colors">Mis Libros</Link></li>
                <li><Link to="/work-with-us" className="hover:text-coral-500 transition-colors">Trabaja con nosotros</Link></li>
                <li><Link to="/blog" className="hover:text-coral-500 transition-colors">Blog</Link></li>
                <li><Link to="/about-us" className="hover:text-coral-500 transition-colors">Sobre Nosotros</Link></li>
            </ul>

            {/* Botones de autenticación y carrito - Desktop */}
            <div className="hidden lg:flex gap-4 items-center">
                {isAuthenticated ? (
                    <>
                        {/* Carrito */}
                        <CartBadge />

                        {/* Usuario y menú desplegable */}
                        <div className="relative">
                            <button
                                onClick={toggleUserMenu}
                                className="flex items-center gap-2 text-gray-700 hover:text-coral-500 transition-colors"
                            >
                                <img 
                                    src="/images/profile.png" 
                                    alt="Profile" 
                                    className="w-8 h-8 rounded-full"
                                />
                                <span>{user?.nombre}</span>
                            </button>

                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                    <Link 
                                        to="/profile" 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsUserMenuOpen(false)}
                                    >
                                        Mi Perfil
                                    </Link>
                                    <Link 
                                        to="/my-orders" 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsUserMenuOpen(false)}
                                    >
                                        Mis Pedidos
                                    </Link>
                                    <Link 
                                        to="/my-sales" 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsUserMenuOpen(false)}
                                    >
                                        Mis Ventas
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <Link 
                            to="/login" 
                            className="text-gray-700 hover:text-coral-500 transition-colors"
                        >
                            Login
                        </Link>
                        <Link 
                            to="/signup" 
                            className="bg-coral-500 text-white px-4 py-2 rounded-md hover:bg-coral-600 transition-colors"
                        >
                            Sign up
                        </Link>
                    </>
                )}
            </div>

            {/* Menú móvil */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
                    <ul className="flex flex-col py-4">
                        <li><Link to="/" className="block px-6 py-2 hover:bg-gray-50">Inicio</Link></li>
                        <li><Link to="/books" className="block px-6 py-2 hover:bg-gray-50">Libros</Link></li>
                        <li><Link to="/about-us" className="block px-6 py-2 hover:bg-gray-50">Sobre Nosotros</Link></li>
                        <li><Link to="/contact" className="block px-6 py-2 hover:bg-gray-50">Contacto</Link></li>
                        <li><Link to="/blog" className="block px-6 py-2 hover:bg-gray-50">Blog</Link></li>
                        
                        {isAuthenticated ? (
                            <>
                                <li className="border-t mt-2 pt-2">
                                    <Link to="/cart" className="block px-6 py-2 hover:bg-gray-50">
                                        <div className="flex items-center gap-2">
                                            <i className="fas fa-shopping-cart"></i>
                                            <span>Carrito</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile" className="block px-6 py-2 hover:bg-gray-50">
                                        <div className="flex items-center gap-2">
                                            <img 
                                                src="/images/profile.png" 
                                                alt="Profile" 
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <span>{user?.nombre}</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-orders" className="block px-6 py-2 hover:bg-gray-50">
                                        Mis Pedidos
                                    </Link>
                                </li>
                                <li>
                                    <button 
                                        onClick={handleLogout}
                                        className="block w-full text-left px-6 py-2 hover:bg-gray-50"
                                    >
                                        Cerrar sesión
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="border-t mt-2 pt-2">
                                    <Link to="/login" className="block px-6 py-2 hover:bg-gray-50">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="block px-6 py-2 hover:bg-gray-50">Sign up</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;