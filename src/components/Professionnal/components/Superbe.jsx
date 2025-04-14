import React from "react";

const SuperbeSofia = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie gauche - Contenu principal */}
        <div className="w-3/4 p-10 flex flex-col items-center justify-center">
          {/* Titre principal avec emoji */}
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">👋</span>
            <h1 className="text-4xl font-bold text-gray-800">Superbe Sofia !</h1>
          </div>

          {/* Message d'introduction */}
          <p className="text-xl text-black font-bold mb-12">
            Je vais te poser quelques questions, OK ?
          </p>
        </div>

        {/* Partie droite - Progression */}
        <div className="w-1/4 bg-blue-700 p-6 flex flex-col items-center justify-center rounded-l-3xl text-white">
          <div className="w-full mb-8">
            <div className="w-full h-3 bg-white bg-opacity-30 rounded-full">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '20%' }} />
            </div>
            <p className="text-lg text-center mt-4">20%</p>
            <p className="text-lg font-medium text-center mt-2">On y est presque</p>
          </div>
        </div>
      </div>

       {/* Boutons de navigation */}
      <div className="flex justify-end gap-2 mt-6">
        <button className="px-6 py-2  text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 text-sm font-medium">
          Revenir
        </button>
       <button className="px-6 py-2 bg-[black] text-white rounded-full hover:bg-[black] text-sm font-medium">
         Continuer
        </button>
      </div>
    </div>
  );
};

export default SuperbeSofia;