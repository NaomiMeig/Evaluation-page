import React from 'react';
import {useNavigate} from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie Gauche - Contenu principal */}
        <div className="w-3/4 p-10 flex flex-col justify-center items-center text-center">
          <div className="max-w-2xl">
            {/* Titre avec emoji */}
            <div className="flex items-center justify-center mb-6">
    
              <h1 className="text-5xl font-bold text-gray-800 mr-3">TOP!</h1>
              
            </div>
            
            {/* Message de confirmation */}
            <p className="text-xl font-semibold text-gray-700 mb-8">
              Ton profil a été créé.
            </p>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-12">
             Tu pourras acceder à une sélection d'incubateurs pour t'accompagner en fonction de tes besoins.
            </p>
          </div>
        </div>

        {/* Partie Droite - Progression complète */}
        <div className="w-1/4 bg-[#1D00FF] rounded-l-3xl flex flex-col items-center justify-center text-white p-8">
        <div className="w-full">
          <div className="w-full h-2.5 bg-white rounded-full">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }} />
          </div>
          <p className="text-sm mt-2 text-left">100%</p>
          <p className="text-sm font-medium text-left">C'est terminé!</p>
        </div>
      </div>
      </div>

       {/* Boutons de navigation */}
     <div className="flex justify-end gap-2 mt-6">
        <button onClick={()=> navigate('/confirmationlinkedin')} className="px-6 py-2  text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 text-sm font-medium">
          Revenir
        </button>
       <button className="px-6 py-2 bg-[black] text-white rounded-full hover:bg-[black] text-sm font-medium">
         Terminer
        </button>
      </div>
    </div>
  );
};

export default Top;