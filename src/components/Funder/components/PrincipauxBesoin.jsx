import { useState } from 'react';

const PrincipauxBesoin = () => {
  
  const [selectedRanges, setSelectedRanges] = useState([]);


  const categorieRanges = [
    { id: 'Soutiens financier', label: 'Soutiens financier' },
    { id: 'expert', label: 'Expertise technique ou strategique' },
    { id: 'dvp', label: 'Developpement commercial et acquissition de clients' },
    { id: 'Renforcement de l equipe', label: 'Renforcement de l equipe' }
   
  ];

 
  const toggleRange = (rangeId) => {
    setSelectedRanges(prev =>
      prev.includes(rangeId)
        ? prev.filter(id => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Formulaire à gauche */}
      <div className="flex-1 p-10  bg-primary font-inter">
        {/* Titre principal */}
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-6">
          Quels sont tes principaux  besoins pour booster la croissance de ta startup ?
        </h2>
        <p className="text-gray-500 mb-8">Plusieurs choix possibles</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {categorieRanges.map(range => (
            <button
              key={range.id}
              onClick={() => toggleRange(range.id)}
              className={`px-3 py-3 rounded-lg text-sm font-medium border
                ${selectedRanges.includes(range.id)
                  ? 'bg-[#6D28D9] text-white border-purple-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
            >
              {range.label}
            </button>
          ))}
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

      {/* Barre de progression à droite */}
      <div className="w-1/4 bg-[#1D00FF] rounded-l-3xl flex flex-col items-center justify-center text-white p-8">
        <div className="w-full">
          <div className="w-full h-2.5 bg-white rounded-full">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '15%' }} />
          </div>
          <p className="text-sm mt-2 text-left">15%</p>
          <p className="text-sm font-medium text-left">On y presque</p>
        </div>
      </div>
    </div>
  );
};

export default PrincipauxBesoin;
