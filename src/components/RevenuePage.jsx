import { useState } from 'react';

export default function RevenueForm () {
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedRange, setSelectedRange] = useState(null);

  const revenueModels = [
    { id: 'subscriptions', label: 'Abonnements' },
    { id: 'sales', label: 'Ventes uniques' },
    { id: 'freemium', label: 'Freemium' },
    { id: 'ads', label: 'Publicité' }
  ];

  const revenueRanges = [
    { id: '0-10k', label: '0-10K MAD' },
    { id: '10-50k', label: '10-50K MAD' },
    { id: '50-100k', label: '50-100K MAD' },
    { id: '100-500k', label: '100-500K MAD' },
    { id: '500k+', label: 'Plus de 500K MAD' }
  ];

  const toggleModel = (modelId) => {
    setSelectedModels(prev =>
      prev.includes(modelId)
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    );
  };

  const selectRange = (rangeId) => {
    setSelectedRange(rangeId);
  };

  return (
    <div className="max-w-full p-10 bg-purple-100 ">
      {/* Titre principal */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-purle-600 mb-6">
        Comment tu gagnes de l'argent
      </h1>
      <p className="text-sm text-gray-500  mb-6">
        Plusieurs choix possibles
      </p>

      {/* Boutons des modèles de revenus */}
      <div className="flex flex-wrap gap-2 mb-8">
        {revenueModels.map(model => (
          <button
            key={model.id}
            onClick={() => toggleModel(model.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border
              ${selectedModels.includes(model.id)
                ? 'bg-[#6D28D9] text-white border-purple'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
          >
            {model.label}
          </button>
        ))}
      </div>

      {/* Titre section CA */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Combien de CA tu as fait pour l'instant
      </h2>

      {/* Boutons des cfiffre d'affaires de CA */}
      <div className="flex justify-start items-start flex-wrap gap-2 mb-8">
        {revenueRanges.map(range => (
          <button
            key={range.id}
            onClick={() => selectRange(range.id)}
            className={`py-2 px-1 rounded-lg text-sm font-medium border
              ${selectedRange === range.id
                ? 'bg-[#6D28D9] text-white border-purple'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-end gap-2 mt-6">
  <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 text-sm font-medium">
    Revenir
  </button>
  <button className="px-6 py-2 bg-[black] text-white rounded-full hover:bg-[black] text-sm font-medium">
    Continuer
  </button>
</div>
    </div>
  );
};

