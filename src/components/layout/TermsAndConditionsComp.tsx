import React from 'react';

const TermsAndConditionsComp: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6"> 
      {/* Título de la página */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Términos y Condiciones</h1>
        <p className="text-lg text-gray-600 mt-2">Última actualización: Junio 2025</p>
      </div>

      {/* Sección de introducción */}
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Bienvenido a nuestra plataforma. Al acceder y utilizar nuestros servicios, aceptas estar sujeto a los siguientes
          términos y condiciones. Por favor, lee detenidamente este documento antes de utilizar nuestros servicios.
        </p>
      </div>

      {/* Sección de aceptación de términos */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">1. Aceptación de los términos</h2>
        <p className="text-gray-700 leading-relaxed">
          Al acceder a nuestro sitio web y utilizar nuestros servicios, aceptas que has leído, comprendido y estás de acuerdo con
          estos Términos y Condiciones. Si no aceptas estos términos, por favor, no utilices nuestros servicios.
        </p>
      </div>

      {/* Sección de uso del servicio */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">2. Uso del Servicio</h2>
        <p className="text-gray-700 leading-relaxed">
          Nuestro servicio está disponible para usuarios mayores de 18 años. Al utilizar nuestros servicios, aceptas cumplir con
          todas las leyes locales y regulaciones vigentes.
        </p>
      </div>

      {/* Sección de responsabilidades del usuario */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">3. Responsabilidades del Usuario</h2>
        <p className="text-gray-700 leading-relaxed">
          Eres responsable de todo el contenido que subas y compartas a través de nuestros servicios. No debes utilizar el
          servicio para actividades ilegales, difamatorias o cualquier actividad que infrinja los derechos de terceros.
        </p>
      </div>

      {/* Sección de propiedad intelectual */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">4. Propiedad Intelectual</h2>
        <p className="text-gray-700 leading-relaxed">
          Todo el contenido, incluidas las imágenes, textos, marcas y logotipos, es propiedad de la plataforma o sus
          licenciantes. Queda prohibido copiar, distribuir o modificar dicho contenido sin permiso expreso.
        </p>
      </div>

      {/* Sección de limitación de responsabilidad */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">5. Limitación de Responsabilidad</h2>
        <p className="text-gray-700 leading-relaxed">
          La plataforma no será responsable de ningún daño directo, indirecto o consecuente derivado del uso de nuestros
          servicios, incluida la pérdida de datos o ingresos.
        </p>
      </div>

      {/* Sección de modificaciones */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">6. Modificaciones</h2>
        <p className="text-gray-700 leading-relaxed">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos de cualquier cambio
          mediante una publicación en el sitio web o por correo electrónico.
        </p>
      </div>

      {/* Sección de contacto */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">7. Contacto</h2>
        <p className="text-gray-700 leading-relaxed">
          Si tienes alguna pregunta o inquietud respecto a estos términos, puedes ponerte en contacto con nosotros a través
          de nuestro correo electrónico: <strong>soporte@tuempresa.com</strong>.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>&copy; 2025 TuEmpresa. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default TermsAndConditionsComp;
