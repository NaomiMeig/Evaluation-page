import React from 'react';

const ConfirmationDeuxF = ({ name }) => {
  return (
    <div className="flex min-h-screen">
      {/* Contenu principal à gauche */}
      <div className="flex flex-col items-center justify-center flex-1  bg-primary font-inter">
        <div className="w-full max-w-md mx-auto rounded-xl p-10 text-center">
          <div className="mb-6">
            <span className="text-4xl"></span>
          </div>
          <h2 className="text-xl font-bold mb-2">Superbe Adam{name} !</h2>
          <p className="text-lg font-bold mb-2">Je vais te poser quelques questions sur ta startup, OK ?</p>

          <div className="flex justify-end gap-2 mt-6">
            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 text-sm font-medium">
              Revenir
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 text-sm font-medium">
              Continuer
            </button>
          </div>
        </div>
      </div>

      {/* Barre de progression à droite */}
      <div className="w-1/4 bg-[#1D00FF] rounded-l-3xl flex flex-col items-center justify-center text-white p-8">
        <div className="w-full">
          <div className="w-full h-2.5 bg-white rounded-full">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '20%' }} />
          </div>
          <p className="text-sm mt-2 text-left">20%</p>
          <p className="text-sm font-medium text-left">On y presque</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDeuxF;
