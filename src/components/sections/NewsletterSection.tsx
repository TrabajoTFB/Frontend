import React from 'react';
import { useNewsletter } from '../../hooks/useNewsletter';

const NewsletterSection: React.FC = () => {
  const { email, handleEmailChange, handleSubmit } = useNewsletter();

  return (
    <section className="bg-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Suscríbete a nuestro Newsletter
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Mantente actualizado con las últimas novedades, recomendaciones de libros
            y ofertas especiales directamente en tu bandeja de entrada.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Suscribirse
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
