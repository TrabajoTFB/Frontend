import React, { useState } from "react";
import axios from "axios";

type PlanType = 'basic' | 'pro' | 'premium';

interface Plan {
  name: string;
  price: string;
  type: PlanType;
  perks: string[];
  color: string;
  highlight: boolean;
}

interface ApiResponse {
  checkout_url: string;
}

interface AxiosResponse {
  data: ApiResponse;
}

const WorkWithUsComp = () => {
  const [loadingPlan, setLoadingPlan] = useState<PlanType | null>(null);

  const handleSubscribe = async (planType: PlanType) => {
    try {
      setLoadingPlan(planType);
      const response = await axios.post('http://localhost:5000/create-subscription', 
        { plan: planType },
        { withCredentials: true }
      );
      
      if (response.data.checkout_url) {
        // Store the selected plan in localStorage so we can access it on success
        localStorage.setItem('selectedPlan', planType);
        window.location.href = response.data.checkout_url;
      } else {
        throw new Error('No se recibió la URL de checkout');
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      alert('Lo sentimos, ha ocurrido un error al procesar tu suscripción. Por favor, inténtalo de nuevo más tarde o contacta con soporte si el problema persiste.');
    } finally {
      setLoadingPlan(null);
    }
  };

  const plans: Plan[] = [
    {
      name: 'Libroly Basic',
      price: '4,99',
      type: 'basic' as PlanType,
      perks: [
        'Verificado en tu cuenta',
        'Soporte por email',
        'Aparece en búsquedas',
        'Acceso a estadísticas básicas',
      ],
      color: 'from-gray-100 to-gray-200',
      highlight: false,
    },
    {
      name: 'Libroly Plus',
      price: '9,99',
      type: 'pro' as PlanType,
      perks: [
        'Verificado en tu cuenta',
        'Soporte prioritario 24/7',
        'Aparece primero en ventas',
        'Estadísticas avanzadas',
      ],
      color: 'from-coral-100 to-coral-200',
      highlight: true,
    },
    {
      name: 'Libroly Pro',
      price: '19,99',
      type: 'premium' as PlanType,
      perks: [
        'Verificado en tu cuenta',
        'Soporte premium 24/7',
        'Destacado en la home',
        'Aparece primero en ventas',
        'Asesoría personalizada',
        'Acceso a campañas exclusivas',
      ],
      color: 'from-yellow-100 to-yellow-200',
      highlight: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Libroly Pro</h1>
          <p className="text-gray-600 text-lg">
            Elige el plan que mejor se adapta a tu librería o editorial y accede a ventajas exclusivas para potenciar tus ventas y visibilidad en Libroly.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 bg-gradient-to-br ${plan.color} shadow-lg flex flex-col items-center border-2 ${plan.highlight ? 'border-coral-500 scale-105 z-10' : 'border-gray-100'} transition-transform`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow">Más popular</span>
              )}
              <h2 className="text-2xl font-bold mb-2 text-coral-600">{plan.name}</h2>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">€{plan.price}<span className="text-lg font-normal text-gray-500">/mes</span></div>
              <ul className="text-left space-y-2 mb-6 mt-4 w-full max-w-xs mx-auto">
                {plan.perks.map((perk: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-gray-800">
                    <span className="text-green-500"><i className="fas fa-check-circle"></i></span>
                    {perk}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleSubscribe(plan.type)}
                disabled={loadingPlan === plan.type}
                className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition-colors 
                  ${plan.highlight ? 'bg-coral-500 hover:bg-coral-600' : 'bg-gray-400 hover:bg-gray-500'}
                  ${loadingPlan === plan.type ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {loadingPlan === plan.type ? 'Procesando...' : 'Elegir'}
              </button>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto text-center text-gray-700 text-lg mt-10">
          <p>
            Todos los planes incluyen <span className="font-semibold text-coral-600">verificado</span>, asistencia 24/7, prioridad en ventas y soporte personalizado. Elige el plan que más se adapte a tu negocio y haz crecer tu librería con <span className="font-bold text-coral-500">Libroly Pro</span>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default WorkWithUsComp;
