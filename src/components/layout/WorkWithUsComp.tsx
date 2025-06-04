import React, { useState } from "react";

const WorkWithUsComp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    setSubmitStatus('success');

    // reset del formulario cada 3 segundos
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 30000);
  };

  const subjectOptions = [
    'Quiero unirme a Libroly',
    'Consultas sobre perfil de tienda',
    'Promoción y visibilidad',
    'Soporte técnico',
    'Otros'
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Eres una librería o editorial?
            </h1>
            <p className="text-gray-600 text-lg">
                <strong>Libroly</strong> es la plataforma que conecta a librerías y editoriales con lectores apasionados, ayudando a dar una segunda vida a libros que, de otro modo, serían destruidos por falta de venta o pequeñas imperfecciones.<br />
                Si tienes ejemplares que merecen una nueva oportunidad, ¡queremos ayudarte a encontrarlos un nuevo hogar y a impulsar tu negocio de forma sostenible!
            </p>
        </div>

        {/* Formulario */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de contacto
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
                placeholder="Nombre y apellido"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
                placeholder="empresa@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Motivo del contacto
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
              >
                <option value="">Selecciona una opción</option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Cuéntanos más
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
                placeholder="Háblanos de tu tienda, tus necesidades o cómo te gustaría colaborar con Libroly."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-coral-500 text-white py-3 px-6 rounded-md hover:bg-coral-600 transition-colors"
            >
              Enviar solicitud
            </button>

            {/* Mensajes al enviar */}
            {submitStatus === 'success' && (
              <div className="text-center p-4 bg-green-100 text-green-700 rounded-md">
                ¡Gracias por tu interés! Nos pondremos en contacto contigo muy pronto.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center p-4 bg-red-100 text-red-700 rounded-md">
                Ha ocurrido un error. Por favor, inténtalo de nuevo.
              </div>
            )}
          </form>
        </div>

        {/* Sección beneficios */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-leaf text-coral-500 text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Sostenibilidad</h3>
            <p className="text-gray-600">Reduce el desperdicio de libros y contribuye a un mundo más sostenible dando una segunda oportunidad a tus ejemplares.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-users text-coral-500 text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Nuevos lectores</h3>
            <p className="text-gray-600">Llega a una comunidad de lectores que valoran las oportunidades y buscan libros únicos a precios accesibles.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-hand-holding text-coral-500 text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Herramientas a medida</h3>
            <p className="text-gray-600">Incrementa tus ventas y visibilidad gestionando fácilmente tu inventario de libros con poco movimiento o pequeñas imperfecciones.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkWithUsComp;
