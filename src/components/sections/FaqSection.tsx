import React from 'react';
import { useNavigate } from 'react-router-dom';

const FaqSection: React.FC = () => {
  const navigate = useNavigate();

  const handleFaqClick = () => {
    navigate('/faq');
  };

  return (
    <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma,
            servicios y cómo comenzar tu viaje de lectura con nosotros.
          </p>
          <button
            onClick={handleFaqClick}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Visitar FAQ
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
