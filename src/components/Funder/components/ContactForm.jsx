import { useState } from "react";

const roles = ["Founder", "Professionnel", "Investisseur"];

const countries = [
  "Maroc", "France", "USA", "Allemagne", "Espagne", "Italie", "Canada",
  "Brésil", "Chine", "Japon", "Inde", "Russie", "Royaume-Uni", "Portugal",
  "Pays-Bas", "Turquie", "Australie", "Mexique", "Egypte", "Emirats Arabes Unis",
  "Argentine", "Suisse", "Belgique", "Suède", "Norvège", "Pologne", "Sénégal",
  "Côte d'Ivoire", "Cameroun", "Afrique du Sud", "Corée du Sud"
];

export default function ContactForm() {
  const [selectedRole, setSelectedRole] = useState("Founder");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen w-full flex bg-purple-100">
      
      {/* Colonne gauche - Formulaire */}
      <div className="w-3/4 px-10 py-10 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-1">Hello Adam !</h1>
          <p className="text-md font-semibold mb-8 text-black">Faisons connaissance :-)</p>

          {/* Rôles */}
          <div className="flex flex-wrap gap-4 mb-8">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 text-sm font-medium border rounded-md ${
                  selectedRole === role
                    ? "bg-[#6D28D9] text-white border-[#6D28D9]"
                    : "bg-white text-black font-bold border-gray-300 hover:bg-gray-50"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Nom de famille */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-1 font-medium">Nom de famille</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-2 p-3 border-white rounded-md focus:ring-2 focus:ring-purple-500 bg-white text-sm sm:text-base"
            />
          </div>
{/* Localisation */}
<div className="mb-4 relative">
  <label htmlFor="location" className="block mb-1 font-medium">Localisation</label>
  <div className="relative w-52"> {/* ← largeur réduite ici */}
    <select
      id="location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="w-full mt-2 p-3 pr-8 border border-white rounded-md focus:ring-2 focus:ring-purple-500 bg-white text-sm appearance-none"
    >
      <option value=""></option>
      {countries.map((country, index) => (
        <option key={index} value={country}>{country}</option>
      ))}
    </select>
    {/* Flèche dans le champ */}
    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-xs pointer-events-none">
      ▼
    </span>
  </div>
</div>

          {/* Téléphone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 font-medium">Numéro de téléphone</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=" mt-2 p-3  border-white rounded-md focus:ring-2 focus:ring-purple-500 bg-white text-sm sm:text-base"
            />
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

      {/* Colonne droite - Progress bar */}
      <div className="w-1/4 bg-[#1D00FF] rounded-l-3xl flex flex-col items-center justify-center text-white p-8">
        <div className="w-full">
          <div className="w-full h-2.5 bg-white rounded-full">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '5%' }} />
          </div>
          <p className="text-sm mt-2 text-left">5%</p>
          <p className="text-sm font-medium text-left">On y est presque</p>
        </div>
      </div>
    </div>
  );
}
