import React, { useState } from 'react';

const ConfirmationLinkedin = () => {
  const [webLink, setWebLink] = useState('');
  const [linkedinPage, setLinkedinPage] = useState('');
  const [videoLink, setVideoLink] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie Gauche - Contenu principal */}
        <div className="w-3/4 p-10 flex flex-col justify-between">
          <div>
          <div>
                <label className="block font-bold text-black mb-1">Raison sociale</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:ring-primary focus:outline-none"
                />
            </div>

            {/* Lien site web */}
            <div className="mb-10">
              <label className="block text-xl font-semibold text-gray-700 mb-4">
                Lien site web entreprise ?
              </label>
              <input
                type="url"
                value={webLink}
                onChange={(e) => setWebLink(e.target.value)}
                className="w-full p-4 border-2 bg-white border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="https://www.votre-entreprise.com"
              />
            </div>

            {/* Séparateur */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Page LinkedIn */}
            <div className="mb-10">
              <label className="block text-xl font-medium text-gray-700 mb-4">
                Page Linkedin
              </label>
              <input
                type="url"
                value={linkedinPage}
                onChange={(e) => setLinkedinPage(e.target.value)}
                className="w-full p-4 border-2 bg-white border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="https://www.linkedin.com/company/votre-entreprise"
              />
            </div>

            {/* Vidéo présentation */}
            <div className="mb-10">
              <label className="block text-xl font-semibold text-gray-700 mb-4">
                Vidéo démo de ton produit
              </label>
              <input
                type="url"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                className="w-full p-4 border-2 bg-white border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="https://youtube.com/lien-video"
              />
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

        {/* Partie Droite - Progression (optionnelle) */}
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
    </div>
  );
};

export default ConfirmationLinkedin;