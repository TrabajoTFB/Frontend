import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Título de la página */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900">Términos y Condiciones</h1>
        <p className="text-lg text-gray-600 mt-3">Última actualización: Junio 2025</p>
      </div>

      {/* Introducción */}
      <div className="space-y-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Bienvenido a nuestra plataforma. Al acceder y utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones.
          Por favor, lee detenidamente este documento antes de utilizar nuestros servicios. Si no aceptas estos términos, te pedimos que no utilices el sitio.
        </p>
      </div>

      {/* Sección 1 - Aceptación de los términos */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">1. Aceptación de los Términos</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Al utilizar nuestro sitio web y nuestros servicios, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con ellos, por favor,
          no utilices el sitio.
        </p>
      </div>

      {/* Sección 2 - Uso del servicio */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">2. Uso del Servicio</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nuestro servicio está destinado a usuarios mayores de 18 años. Al utilizarlo, te comprometes a cumplir con todas las leyes locales y regulaciones
          vigentes en tu jurisdicción. El acceso a nuestro sitio es por cuenta y riesgo del usuario.
        </p>
      </div>

      {/* Sección 3 - Responsabilidades del usuario */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">3. Responsabilidades del Usuario</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Como usuario, eres responsable de la veracidad y la legalidad del contenido que subas o compartas a través de nuestros servicios. Estás de acuerdo
          en no utilizar el sitio para actividades ilícitas o que infrinjan los derechos de terceros.
        </p>
      </div>

      {/* Sección 4 - Propiedad intelectual */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">4. Propiedad Intelectual</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Todos los contenidos y materiales en el sitio, incluidos los textos, imágenes, logotipos y marcas, son propiedad de la plataforma o de sus
          licenciantes. Queda estrictamente prohibido copiar, distribuir o modificar cualquier contenido sin la debida autorización.
        </p>
      </div>

      {/* Sección 5 - Limitación de responsabilidad */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">5. Limitación de Responsabilidad</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          La plataforma no se hace responsable de ningún daño directo o indirecto derivado del uso de nuestros servicios, incluida la pérdida de datos, 
          interrupciones en el servicio o problemas técnicos. El uso del sitio es bajo tu propio riesgo.
        </p>
      </div>

      {/* Sección 6 - Modificaciones */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">6. Modificaciones</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor tan pronto como sean publicadas
          en el sitio. Te recomendamos revisar periódicamente esta página para estar al tanto de cualquier cambio.
        </p>
      </div>

      {/* Sección 7 - Contacto */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">7. Contacto</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Si tienes preguntas o inquietudes sobre estos términos, puedes ponerte en contacto con nosotros a través del correo electrónico:
          <strong> soporte@tuempresa.com</strong>. Estaremos encantados de ayudarte.
        </p>
      </div>

      {/* Footer (Este se reemplaza por tu componente de Footer existente) */}
      <div className="mt-16 text-center text-sm text-gray-500">
        <p>&copy; 2025 TuEmpresa. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
