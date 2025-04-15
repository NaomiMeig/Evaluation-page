import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
const TaMission = () => {
  const [mission, setMission] = useState('');
  const [passion, setPassion] = useState('');
const navigate = useNavigate();
  return (
    <div className="flex min-h-screen  bg-primary font-inter">
      {/* Formulaire à gauche */}
      <div className="flex-1  items-center justify-end px-8">
        <div className="max-w-md w-full p-6 rounded-lg">
          {/* Titre principal */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Ta mission en une phrase ?</h1>

          {/* Champ mission */}
          <input
            type="text"
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 bg-white text-sm sm:text-base"
            placeholder=""
          />

          {/* Titre secondaire */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Qu'est-ce qui te passionne vraiment ?
          </h2>

          {/* Champ passion */}
          <textarea
            value={passion}
            onChange={(e) => setPassion(e.target.value)}
            className="w-full mb-8 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 bg-white text-sm sm:text-base"
            rows={4}
            placeholder=""
          />

          {/* Boutons navigation */}
          <div className="flex justify-end gap-2 mt-6">
            <button onClick={()=> navigate('/TonExpertise')} className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 text-sm font-medium">
              Revenir
            </button>
            <button onClick={()=> navigate('/ConfirmationDeuxF')} className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 text-sm font-medium">
              Continuer
            </button>
          </div>
        </div>
      </div>

      {/* Barre de progression à droite */}
      <div className="w-1/4 bg-[#1D00FF] rounded-l-3xl flex flex-col items-center justify-center text-white p-8">
        <div className="w-full">
          <div className="w-full h-2.5 bg-white rounded-full">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '40%' }} />
          </div>
          <p className="text-sm mt-2 text-left">40%</p>
          <p className="text-sm font-medium text-left">On y presque</p>
        </div>
      </div>
    </div>
  );
};

export default TaMission;
