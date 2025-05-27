import React from 'react';
import { FaCheck, FaUser, FaUsers, FaRegLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    icon: <FaRegLightbulb className="text-[#49BBBD] text-lg" />,
    label: 'Like a pussy',
    price: 'Free',
    frequency: '/ FOREVER',
    features: [
      'Components-driven system',
      'Sales-boosting landing pages',
      'Awesome Feather icons pack',
    ],
    buttonText: 'Try for free',
    buttonStyle: 'border border-gray-600 text-[#49BBBD] hover:bg-gray-50',
    iconBg: 'bg-gray-200',
    highlight: false,
  },
  {
    icon: <FaUser className="text-[#49BBBD] text-lg" />,
    label: 'Individual',
    price: '$24',
    frequency: '/ MONTH',
    features: [
      'Components-driven system',
      'Sales-boosting landing pages',
      'Awesome Feather icons pack',
      'Themed into 3 different styles',
      'Will help to learn Figma',
    ],
    buttonText: 'Regular license',
    buttonStyle: 'bg-[#49BBBD] text-white hover:bg-[#3da7a9]',
    iconBg: 'bg-amber-400',
    highlight: true,
    badge: 'BEST!',
  },
  {
    icon: <FaUsers className="text-[#49BBBD] text-lg" />,
    label: 'Corporate',
    price: '$12',
    frequency: '/ EDITOR',
    features: [
      'Components-driven system',
      'Sales-boosting landing pages',
      'Awesome Feather icons pack',
      'Themed into 3 different styles',
    ],
    buttonText: 'Extended license',
    buttonStyle: 'border border-gray-600 text-[#49BBBD] hover:bg-gray-50',
    iconBg: 'bg-green-400',
    highlight: false,
  },
];

const PricingCard = ({ plan }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (plan.buttonText === 'Regular license' || plan.buttonText === 'Extended license') {
      navigate('/checkout', { state: { planType: plan.label, price: plan.price } });
    }
  };

  return (
    <div className={`p-8 rounded-lg relative ${plan.highlight ? 'shadow-lg transform scale-105 z-10 bg-white' : 'bg-white'}`}>
      {plan.badge && (
        <div className="absolute right-8 bg-gray-100 px-1 py-1 rounded-full text-xs font-semibold">
          {plan.badge}
        </div>
      )}

      <div className="flex items-center gap-2 mb-1">
        {plan.icon}
        <p className="text-[#49BBBD] text-sm">{plan.label}</p>
      </div>

      <div className="flex items-baseline">
        <h2 className="text-4xl font-bold mr-2">{plan.price}</h2>
        <span className="text-black-500 text-sm">{plan.frequency}</span>
      </div>

      <div className="mt-8 space-y-4">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className={`${plan.iconBg} p-1 rounded-full`}>
              <FaCheck className="text-black-600 text-xs" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={handleButtonClick}
        className={`w-full py-3 px-4 rounded-lg mt-12 transition ${plan.buttonStyle}`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="py-20 px-4 mt-20">
      <h1 className="text-5xl font-bold text-center text-[#49BBBD] mb-16">
        Affordable pricing
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
