
import React, { useState } from 'react';

const TonExpertise = () => {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const expertises = [
    { id: 'data_it', name: 'Data, IT & Tech' },
    { id: 'marketing', name: 'Marketing & communication' },
    { id: 'strategie', name: 'Stratégie & business' },
    { id: 'produit', name: 'Produit & design' },
    { id: 'juridique', name: 'Juridique & administration' },
    { id: 'management', name: 'Management & organisation' }
  ];

  const roles = [
    { id: 'business_dev', name: 'Business developer' },
    { id: 'consultant', name: 'Consultant €' },
    { id: 'business_analyst', name: 'Business Analyste' },
    { id: 'consultant_mgmt', name: 'Consultant management' },
    { id: 'expert finance et controle de gestion', name: 'Expert finance & controle de gestion' }
  ];

  return (
    <div className="flex min-h-screen  bg-primary font-inter">
      {/* Formulaire à gauche */}
      <div className="flex-1 p-10">
        {/* Section Expertise */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black mb-6">Ton expertise</h1>
          <div className="flex flex-wrap gap-4 mb-8">
            {expertises.map((expertise) => (
              <button
                key={expertise.id}
                onClick={() => setSelectedExpertise(expertise.id)}
                className={`px-4 py-2 rounded-md border transition-colors ${
                  selectedExpertise === expertise.id
                    ? 'bg-purple-700 text-white border-purple-700'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{expertise.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section Rôle */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black mb-6">Rôle</h1>
          <div className="flex flex-wrap gap-3">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`px-4 py-2 rounded-md border transition-colors ${
                  selectedRole === role.id
                    ? 'bg-purple-700 text-white border-purple-700'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{role.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Boutons de navigation */}
        <div className="flex justify-end gap-2 mt-6">
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
            <div className="h-full bg-green-500 rounded-full" style={{ width: '35%' }} />
          </div>
          <p className="text-sm mt-2 text-left">35%</p>
          <p className="text-sm font-medium text-left">On y presque</p>
        </div>
      </div>
    </div>
  );
};

export default TonExpertise;
