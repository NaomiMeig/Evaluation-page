import React, { useState } from 'react';

const MissionHelp = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const helpOptions = [
    "Identification et sélection des startups alignées à vos objectifs",
    "Mise en relation avec des investisseurs ou partenaires stratégiques",
    "Accès à notre plateforme de e-learning",
    "Suivi et évaluation des performances des startups",
    "Accès à des outils et contenus spécifiques",
    "Accroître la visibilité de votre programme",
  ];

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie Gauche - Contenu principal */}
        <div className="w-3/4 p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Comment pouvons-nous t'aider à réussir ta mission ?</h2>
            
            <p className="text-gray-500 mb-8">Plusieurs choix possibles</p>

            {/* Options d'aide */}
            <div className="space-y-4">
              {helpOptions.map((option) => (
                <div 
                  key={option}
                  onClick={() => toggleOption(option)}
                  className={`px-4 py-3 rounded-lg border-2 text-lg ${
                    selectedOptions.includes(option)
                      ? 'bg-purple-200 text-secondary'
                      : 'bg-white border-white text-gray-500'
                  }`}
                >
                  {option.startsWith('**') && option.endsWith('**') ? (
                    <span className="font-semibold">{option.replace(/\*\*/g, '')}</span>
                  ) : (
                    option
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
                <label className="block font-bold text-black mb-1">Autres</label>
                <input
                  type="text"
                  className="w-100 bg-white border border-gray-300 rounded px-3 py-2 focus:ring-primary focus:outline-none"
                />
            </div>

            {/* Navigation */}
            <div className="flex justify-end mt-10 gap-2">
             <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 text-sm font-medium">
               Revenir
             </button>
             <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 text-sm font-medium">
                Continuer
             </button>
        </div>
        </div>

        {/* Partie Droite - Progression (optionnelle) */}
        <div className="w-1/4 bg-blue-700 p-6 flex flex-col items-center justify-center rounded-l-3xl text-white">
          <div className="w-full mb-8">
            <div className="w-full h-3 bg-white bg-opacity-30 rounded-full">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '50%' }} />
            </div>
            <p className="text-lg text-center mt-4">40%</p>
            <p className="text-lg font-medium text-center mt-2">On y est presque</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MissionHelp;