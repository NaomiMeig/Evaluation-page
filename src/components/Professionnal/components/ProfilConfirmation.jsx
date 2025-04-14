import React from 'react';


const ProfileConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie Gauche - Contenu principal */}
        <div className="w-3/4 p-10 flex flex-col justify-center items-center text-center">
          <div className="max-w-2xl">
            {/* Titre avec emoji */}
            <div className="flex items-center justify-center mb-6">
    
              <h1 className="text-5xl font-bold text-gray-800 mr-3">TOP!</h1>
              <span className="text-4xl">🎉</span>
            </div>
            
            {/* Message de confirmation */}
            <p className="text-xl font-semibold text-gray-700 mb-8">
              Ton profil a été créé.
            </p>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-12">
              Vous aurez accès à la crème des Startups pour répondre à vos besoins spécifiques et participer aux challenges que vous lancerez.
            </p>
          </div>
        </div>

        {/* Partie Droite - Progression complète */}
        <div className="w-1/4 bg-blue-700 p-6 flex flex-col items-center justify-center rounded-l-3xl text-white">
          <div className="w-full mb-8">
            {/* Barre de progression 100% */}
            <div className="w-full h-3 bg-white bg-opacity-30 rounded-full">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }} />
            </div>
            <p className="text-2xl text-center mt-4">100%</p>
            <p className="text-xl font-medium text-center mt-2">C'est terminé!</p>
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

export default ProfileConfirmation;