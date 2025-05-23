import React, { useState } from 'react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-12 h-12 bg-coral-500 text-white rounded-full shadow-lg hover:bg-coral-600 transition-colors duration-300 flex items-center justify-center z-[1100]"
        aria-label="Abrir chat de recomendaciones"
      >
        <i className="fas fa-book text-lg"></i>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-72 bg-white rounded-lg shadow-xl overflow-hidden z-[1100]">
          <div className="bg-coral-500 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold text-sm">Libroly - Asistente de Lectura</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
              aria-label="Cerrar chat"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="h-80 p-3 overflow-y-auto bg-gray-50">
            <div className="flex items-start mb-4">
              <div className="w-7 h-7 rounded-full bg-coral-500 flex items-center justify-center text-white mr-2">
                <i className="fas fa-robot text-sm"></i>
              </div>
              <div className="bg-white p-2.5 rounded-lg shadow max-w-[80%]">
                <p className="text-sm">¡Hola! Soy Libroly, tu asistente de recomendación de libros. ¿En qué puedo ayudarte hoy?</p>
              </div>
            </div>
          </div>

          <div className="p-3 border-t">
            <div className="flex">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-1.5 border rounded-l-lg focus:outline-none focus:border-coral-500 text-sm"
                disabled
              />
              <button
                className="px-3 py-1.5 bg-coral-500 text-white rounded-r-lg hover:bg-coral-600 transition-colors duration-300 disabled:opacity-50"
                disabled
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              El chat estará disponible próximamente
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;