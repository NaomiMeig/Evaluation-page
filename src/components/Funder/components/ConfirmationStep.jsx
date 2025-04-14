import React from 'react';

const ConfirmationStep = ({ name = "Adam" }) => {
  return (
    <div className="flex h-screen w-full  bg-primary font-inter">
      {/* Partie gauche */}
      <div className="flex flex-col justify-center items-center w-3/4">
        <div className="text-center">
        
          <h2 className="text-xl font-bold mb-2">Merci {name} !</h2>
          <p className="text-lg font-bold mb-2">Prêt pour nous en dire plus sur toi ?</p>
        </div>
        <div className="flex gap-4 mt-10">

            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 text-sm font-medium">
            Revenir
          </button>
          <button
           
            className="px-6 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800"
          >
            Continuer
          </button>
        </div>
      </div>

      {/* Partie droite - Barre de progression */}
      <div className="w-1/4 bg-[#1D00FF] rounded-l-3xl flex flex-col items-center justify-center text-white p-8">
        <div className="w-full">
          <div className="w-full h-2.5 bg-white rounded-full">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '10%' }} />
          </div>
          <p className="text-sm mt-2 text-left">10%</p>
          <p className="text-sm font-medium text-left">On y presque</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
