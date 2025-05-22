import React from 'react';
import { useNavigate } from 'react-router-dom';

const FaqSection: React.FC = () => {
  const navigate = useNavigate();

  const handleFaqClick = () => {
    navigate('/faq');
  };

  return (
    <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Tienes preguntas?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm">
            Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma,
            servicios y cómo comenzar tu viaje de lectura con nosotros.
          </p>
          <button
            onClick={handleFaqClick}
            className="bg-purple-600 text-white px-6 py-2 text-sm rounded-lg hover:bg-purple-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Visitar FAQ
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
