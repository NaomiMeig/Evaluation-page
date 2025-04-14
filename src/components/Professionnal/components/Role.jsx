import React, { useState } from 'react';

const RoleSelection = () => {
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const functions = [
    "Manager",
    "Analyste",
    "Coordinateur",
    "Expert",
    "Mentor"
  ];

  const roles = [
    "Responsable de programme d'incubation",
    "Responsable de l'accélération Startups",
    "Manager de programmes d'innovation",
    "Responsable des programmes d'incubation et d'accélération",
    "Responsable de l'innovation et des startups",
    "Responsable des programmes Startups"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie Gauche - Contenu principal */}
        <div className="w-3/4 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Votre fonction ?</h1>

            {/* Liste des fonctions */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mt-4">
                {functions.map((func) => (
                  <button
                    key={func}
                    type="button"
                    onClick={() => setSelectedFunction(func)}
                    className={`px-6 py-3 rounded-lg border-2 text-lg ${
                      selectedFunction === func
                        ? ' bg-purple-200 text-secondary'
                        : 'bg-white border-white text-gray-500'
                    }`}
                  >
                    {func}
                  </button>
                ))}
              </div>
            </div>

            {/* Section Rôle */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rôle</h2>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {roles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`px-4 py-2  text-left p-4 rounded-lg border-2 ${
                      selectedRole === role
                        ? 'bg-purple-200 text-secondary'
                        : 'bg-white border-white text-gray-500'
                    }`}
                  >
                    {role}
                  </button>
                ))}
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
              <div className="h-full bg-green-500 rounded-full" style={{ width: '35%' }} />
            </div>
            <p className="text-lg text-center mt-4">35%</p>
            <p className="text-lg font-medium text-center mt-2">On y arrive</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RoleSelection;