import React, { useState } from 'react';


const WelcomeForm = () => {
  const [role, setRole] = useState('Professionnel');
  const [gender, setGender] = useState(null);

  const cities = [
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Fès',
    'Tanger',
    'Agadir',
    'Oujda',
    'Meknès',
    'Tétouan',
    'Laâyoune',
    'Autre'
  ];
  

  return (
    <div className="min-h-screen w-full bg-primary font-inter">
      <div className="flex flex-grow">
        {/* Partie Gauche */}
        <div className="w-3/4 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-6xl font-bold text-black mb-1">Hello Sofia !</h1>
            <p className="text-3xl font-bold text-black mb-6">Faisons connaissance :)</p>

            {/* Choix de rôle */}
            <div className="mb-6">
              <div className="flex gap-3">
                {['Founder', 'Professionnel', 'Investisseur'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`px-4 py-2 rounded border ${
                      role === r
                        ? 'bg-purple-200 text-secondary'
                        : ' bg-white border-white text-gray-500'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Formulaires */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-6">
              <div>
                <label className="block font-bold text-black mb-1">Nom de famille</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <div className="relative w-full sm:w-1/3">
                <label className="block font-bold text-black mb-1">Localisation</label>
                  <select
                    className="w-full mt-2 p-3 pr-8 border border-white rounded-md focus:ring-2 focus:ring-purple-500 bg-white text-sm appearance-none"
                    defaultValue="">
                    <option value="" disabled></option>
                      {cities.map((city) => (
                    <option key={city} value={city.toLowerCase()}>
                    {city}
                    </option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-xs pointer-events-none">
                    ▼
                 </span>

              </div>
              <div>
                <label className="block font-bold text-black mb-1">Numéro de téléphone</label>
                <input
                  type="tel"
                  className="w-full bg-white border border-white rounded px-3 py-2 focus:ring-primary focus:outline-none"
                />
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
        <div className="w-1/4 bg-blue-700 p-8 flex flex-col items-center justify-center rounded-l-3xl text-white">
          <div className="w-full">
            <div className="w-full h-2.5 bg-white rounded-full">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '5%' }} />
            </div>
            <p className="text-sm text-center mt-2">5%</p>
            <p className="mb-2 text-sm font-medium text-center">On y est presque</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;
