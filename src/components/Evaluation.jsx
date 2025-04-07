import React, { useState } from "react";

const EvaluationForm = () => {
  const [startupName, setStartupName] = useState("");
  const [description, setDescription] = useState("");
  const [hasAssociates, setHasAssociates] = useState(null);
  const [numAssociates, setNumAssociates] = useState(1);
  const [stage, setStage] = useState("");

  return (
    <div className="min-h-screen bg-violet-100 w-full p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-3xl font-bold mb-6">Évaluation</h2>
        

        {/* Nom de la startup */}
        <div className="mb-6">
          <label className="block text-black font-bold text-sm sm:text-base">Le nom de la startup :</label>
          <input
            type="text"
            className="w-90 mt-2 p-3 border border-white rounded-md focus:ring-2 focus:ring-purple-500 bg-white text-sm sm:text-base"
            value={startupName}
            onChange={(e) => setStartupName(e.target.value)}
          />
        </div>

        {/* Description de la startup */}
        <div className="mb-6">
          <label className="block text-black  font-bold text-sm sm:text-base">Ta startup en une phrase :</label>
          <input
            type="text"
            className="w-200 mt-2 p-3 border border-white rounded-md focus:ring-2 focus:ring-purple-500 bg-white text-sm sm:text-base"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* A-t-il des associés ? */}
        <div className="mb-6">
          <label className="block text-black font-bold">T'as des associés ?</label>
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              className={`px-4 py-2  ${
                hasAssociates === true ? "bg-purple-600 text-white" : "bg-white"
              }`}
              onClick={() => setHasAssociates(true)}
            >
              Oui
            </button>
            <button
              className={`px-4 py-2 ${
                hasAssociates === false ? "bg-purple-600 text-white" : "bg-white"
              }`}
              onClick={() => setHasAssociates(false)}
            >
              Non
            </button>
          </div>
        </div>

        {hasAssociates && (
          <div className="mb-6">
            <label className="block text-black text-sm sm:text-base">Nombre d'associés :</label>
            <div className="flex flex-wrap gap-4 mt-4">
              {[1, 2, 3, 4, "+5"].map((num) => (
                <button
                  key={num}
                  className={`px-4 py-2  ${
                    numAssociates === num ? "bg-purple-600 text-white" : "bg-white"
                  }`}
                  onClick={() => setNumAssociates(num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stade de développement */}
        <div className="mb-6">
          <label className="block text-black font-bold">Stade de développement :</label>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Idée en cours de validation", "Prototype ou MVP prêt", "Produit lancé avec des utilisateurs/clients initiaux","Croissance:produit validé avec des revenus réguliers"].map(
              (option) => (
                <button
                  key={option}
                  className={`px-4 py-2 ${
                    stage === option ? "bg-purple-600 text-white" : "bg-white"
                  }`}
                  onClick={() => setStage(option)}
                >
                  {option}
                </button>
              )
            )}
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

export default EvaluationForm;