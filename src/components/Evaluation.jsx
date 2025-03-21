import React, { useState } from "react";

const EvaluationForm = () => {
  const [startupName, setStartupName] = useState("");
  const [description, setDescription] = useState("");
  const [hasAssociates, setHasAssociates] = useState(null);
  const [numAssociates, setNumAssociates] = useState(1);
  const [stage, setStage] = useState("");

  return (
    <div className="min-h-screen bg-purple-100">
        <h2 className="text-xl font-semibold text-purple-600 mb-4">Évaluation</h2>
        

        {/* Nom de la startup */}
        <div className="mb-4">
          <label className="block text-gray-700">Le nom de la startup :</label>
          <input
            type="text"
            className="w-90 mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            value={startupName}
            onChange={(e) => setStartupName(e.target.value)}
          />
        </div>

        {/* Description de la startup */}
        <div className="mb-4">
          <label className="block text-gray-700">Ta startup en une phrase :</label>
          <input
            type="text"
            className="w-200 mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* A-t-il des associés ? */}
        <div className="mb-4">
          <label className="block text-gray-700">T'as des associés ?</label>
          <div className="flex space-x-4 mt-2">
            <button
              className={`px-4 py-2 rounded-md ${
                hasAssociates === true ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setHasAssociates(true)}
            >
              Oui
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                hasAssociates === false ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setHasAssociates(false)}
            >
              Non
            </button>
          </div>
        </div>

        {hasAssociates && (
          <div className="mb-4">
            <label className="block text-gray-700">Nombre d'associés :</label>
            <div className="flex space-x-2 mt-2">
              {[1, 2, 3, 4, "5+"].map((num) => (
                <button
                  key={num}
                  className={`px-4 py-2 rounded-md ${
                    numAssociates === num ? "bg-purple-600 text-white" : "bg-gray-200"
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
          <label className="block text-gray-700">Stade de développement :</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Idée en cours de validation", "Prototype ou MVP prêt", "Produit lancé avec des utilisateurs/clients initiaux","Croissance:produit validé avec des revenus réguliers"].map(
              (option) => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded-md ${
                    stage === option ? "bg-purple-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setStage(option)}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>

        
        <div className="flex justify-end gap-3">
          <button className="w-64 bg-purple-300 text-white py-2 rounded-md hover:bg-black">
            Revenir
          </button>
          <button className="w-64 bg-purple-300 text-white py-2 rounded-md hover:bg-black">
            Continuer
          </button>

        </div>
    </div>
  );
};

export default EvaluationForm;
