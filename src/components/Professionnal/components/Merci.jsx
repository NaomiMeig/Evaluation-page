import React from "react";

const Merci = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie gauche */}
        <div className="w-3/4 p-0 flex flex-col justify-center items-center">
          {/* Emoji et titre principal */}
          <span className="text-6xl mb-4">🖤</span> {/* Emoji avec cœur noir */}
          <h1 className="text-3xl font-bold text-left text-gray-800">Merci Sofia !</h1>

          {/* Sous-titre */}
          <p className="text-lg text-left font-bold text-black">
            Prête pour nous en dire plus sur vous ?
          </p>
        </div>
      


             
        

        {/* Partie Droite - Progression */}
        <div className="w-1/4 bg-blue-700 p-6 flex flex-col items-center justify-center rounded-l-3xl text-white">
          <div className="w-full">
            <div className="w-full h-3 bg-white rounded-full">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '10%' }} />
            </div>
            <p className="text-sm text-center mt-2">10%</p>
            <p className="mb-2 text-sm font-medium text-center">On y est presque</p>
          </div>
        </div>
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-end gap-2 mt-6">
        <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 text-sm font-medium">
          Revenir
        </button>
        <button className="px-6 py-2 bg-[black] text-white rounded-full hover:bg-[black] text-sm font-medium">
          Continuer
        </button>
      </div>
    </div>
  );
};

export default Merci;
