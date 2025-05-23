import React from "react";

const Footer: React.FC = () => {
    return (
    <footer className="bg-[#F15941] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        <div className="max-w-sm">
          <div className="mb-4">
            <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
          </div>
          <p className="text-sm mb-6">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com" target="_blank"><i className="fab fa-x-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

         <div>
          <h3 className="text-lg font-bold mb-4">PÁGINAS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/">INICIO</a></li>
            <li><a href="/books">LIBROS</a></li>
            <li><a href="/releases">NUEVOS LANZAMIENTOS</a></li>
            <li><a href="/about-us">SOBRE NOSOTROS</a></li>
            <li><a href="/contact">CONTACTO</a></li>
            <li><a href="/blog">BLOG</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">ENLACES</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy-policy">POLÍTICA DE PRIVACIDAD</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="terms-conditions">TÉRMINOS Y CONDICIONES</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white mt-10 pt-6 text-center text-sm">
        <p>© 2025 Libroly. Todos los derechos reservados.</p>
        <p className="mt-2">
          <a href="/privacy-policy">Política de privacidad</a> | <a href="terms-conditions">Términos y condiciones</a>
        </p>
        </div>

    </footer>
    );
}

export default Footer;