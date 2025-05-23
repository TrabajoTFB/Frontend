import React from 'react';
import { useNavigate } from 'react-router-dom';

const FaqSection: React.FC = () => {
  const navigate = useNavigate();

  const handleFaqClick = () => {
    navigate('/faq');
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Hi! Si no has encontrado la respuesta a tu pregunta aquí, consulta nuestras FAQs para obtener más respuestas y házmelo saber cómo funcionan.
          </p>
          <button
            onClick={handleFaqClick}
            className="px-8 py-3 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-colors duration-300 font-medium"
          >
            Visitar FAQ
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
