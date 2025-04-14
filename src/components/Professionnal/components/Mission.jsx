import React, { useState } from 'react';

const MissionStatement = () => {
  const [description, setDescription] = useState("");
  const [mission, setMission] = useState('');


  return (
    <div className="min-h-screen flex flex-col bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie Gauche - Contenu principal */}
        <div className="w-3/4 p-10 flex flex-col justify-between">
          <div>
            <div>
            <label className="block text-black  font-bold text-lg sm:text-base">Ta mission en une phrase :</label>
              <input
                type="text"
                className="w-200 mt-2 p-3 border border-white rounded-md focus:ring-2 focus:ring-purple-500 bg-white text-sm sm:text-base"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
            <p className="text-lg text-black font-bold mb-8">Un résumé de vos activités au sein de l'entreprise</p>
            {/* Champ de texte */}
            <div className="mb-10">
              <textarea
                value={mission}
                onChange={(e) => setMission(e.target.value)}
                className="w-full h-40 p-4 border-2 border-white bg-white rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
              />
            </div>
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
        </div>

        {/* Partie Droite - Progression */}
        <div className="w-1/4 bg-blue-700 p-6 flex flex-col items-center justify-center rounded-l-3xl text-white">
          <div className="w-full mb-8">
            <div className="w-full h-3 bg-white bg-opacity-30 rounded-full">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '40%' }} />
            </div>
            <p className="text-lg text-center mt-4">40%</p>
            <p className="text-lg font-medium text-center mt-2">On y partage</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MissionStatement;