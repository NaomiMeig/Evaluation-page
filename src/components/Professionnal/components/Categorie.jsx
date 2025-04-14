import React, { useState } from 'react';

const CategoriesProfessionnel = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);

  const categories = [
    "Agence",
    "Accompagnement entrepreneurial",
    "Institution",
    "Université",
    "Technologies",
    "Industrie",
    "Commerce en ligne",
    "Santé",
    "Energie",
    "Finance",
    "Jiton",
    "Immobilier",
    "Tourisme",
    "Agroalimentaire"
  ];

  const sectors = [
    "Incubation",
    "Accélération",
    "Mentorat et coaching",
    "Support en innovation",
    "Formations",
    "Levée de fonds et financement",
    "Réseautage et mise en relation",
    "Accompagnement juridique et administratif",
    "Développement produit"
  ];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleSector = (sector) => {
    if (selectedSectors.includes(sector)) {
      setSelectedSectors(selectedSectors.filter(s => s !== sector));
    } else {
      setSelectedSectors([...selectedSectors, sector]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie Gauche - Contenu principal */}
        <div className="w-3/4 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Catégorie professionnelle</h1>

            {/* Liste des catégories */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-lg border-2 ${
                      selectedCategories.includes(category)
                        ? 'bg-purple-200 text-secondary'
                        : 'bg-white border-white text-gray-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Section Secteur d'activités */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Secteur d'activités</h2>
              <p className="text-gray-500 mb-4">Plusieurs choix possibles</p>
              
              {/* Sous-sections */}
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-3">
                    {sectors.map((sector) => (
                      <button
                        key={sector}
                        type="button"
                        onClick={() => toggleSector(sector)}
                        className={`px-4 py-2 rounded-lg border-2 ${
                          selectedSectors.includes(sector)
                            ? 'bg-purple-200 text-secondary'
                            : 'bg-white border-white text-gray-500'
                        }`}
                      >
                        {sector}
                      </button>
                    ))}
                  </div>
                </div>
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
              <div className="h-full bg-green-500 rounded-full" style={{ width: '40%' }} />
            </div>
            <p className="text-lg text-center mt-4">15%</p>
            <p className="text-lg font-medium text-center mt-2">On y est presque</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CategoriesProfessionnel ;