import React, { useState } from "react";
import { FaMars, FaVenus } from "react-icons/fa";

const TeamForm = () => {
  const [teamSize, setTeamSize] = useState(1);
  const [teamMessage, setTeamMessage] = useState("");
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "", firstName: "", gender: "", expertise: "", role: "", experience: "", linkedin: "" }
  ]);

  const options = {
    expertise: ["Développement", "Design", "Marketing"],
    role: ["Lead", "Membre", "Consultant"],
    experience: ["Débutant", "Intermédiaire", "Avancé", "Expert"]
  };

  const handleTeamSizeChange = (size) => {
    setTeamSize(size);
    setTeamMembers(
      Array.from({ length: size }, (_, i) => ({
        id: i + 1,
        name: "",
        firstName: "",
        gender: "",
        expertise: "",
        role: "",
        experience: "",
        linkedin: ""
      }))
    );
  };

  const handleMemberChange = (id, field, value) => {
    setTeamMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, [field]: value } : member
      )
    );
  };

  const addMember = () => {
    setTeamMembers((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", firstName: "", gender: "", expertise: "", role: "", experience: "", linkedin: "" }
    ]);
  };

  return (
    <div className="min-h-screen bg-primary w-full p-4 sm:p-6 lg:p-8 font-inter">
      {/* Sélection du nombre de membres */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Combien de personnes dans votre équipe ?</h2>
        <div className="flex gap-2 mt-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => handleTeamSizeChange(num)}
              className={`px-4 py-2 rounded-md border ${
                teamSize === num ? "bg-primary text-white" : "bg-white border-gray-300"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Message pour l'équipe */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Message pour votre équipe</h2>
        <textarea
          value={teamMessage}
          onChange={(e) => setTeamMessage(e.target.value)}
          className="w-full p-2 mt-3 border rounded-md bg-white text-sm sm:text-base"
          placeholder="Écrivez un message..."
        />
      </div>

      {/* Formulaire des membres */}
      <h2 className="text-xl font-bold">Membre(s) de l’équipe</h2>
      {teamMembers.map((member) => (
        <div key={member.id} className="mt-2 p-4 rounded-md shadow space-y-4">
          <div className="flex flex-col sm:flex-col gap-5 lg:flex-row">
            <input
              type="text"
              placeholder="Nom"
              value={member.name}
              onChange={(e) => handleMemberChange(member.id, "name", e.target.value)}
              className="border bg-white p-2 rounded-md w-full sm:w-1/3"
            />
            <input
              type="text"
              placeholder="Prénom"
              value={member.firstName}
              onChange={(e) => handleMemberChange(member.id, "firstName", e.target.value)}
              className="border bg-white p-2 rounded-md w-full sm:w-1/3"
            />
            <div className="flex flex-row items-center gap-2">
              <span className="font-medium sm:ml-2 ">Sexe :</span>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name={`gender-${member.id}`}
                value="male"
                checked={member.gender === "male"}
                onChange={(e) => handleMemberChange(member.id, "gender", e.target.value)}
              />
              <FaMars className="text-blue-500" /> Homme
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name={`gender-${member.id}`}
                value="female"
                checked={member.gender === "female"}
                onChange={(e) => handleMemberChange(member.id, "gender", e.target.value)}
              />
              <FaVenus className="text-pink-500" /> Femme
            </label>
            </div>
            
          </div>
          <div className="flex sm:flex-row gap-4">
             {/* Sélection de l'expertise */}
          <select
            value={member.expertise}
            onChange={(e) => handleMemberChange(member.id, "expertise", e.target.value)}
            className="border bg-white p-2 rounded-md w-full sm:w-1/3"
          >
            <option value="">Expertise</option>
            {options.expertise.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
             
          {/* Sélection du rôle */}
          <select
            value={member.role}
            onChange={(e) => handleMemberChange(member.id, "role", e.target.value)}
            className="border bg-white p-2 rounded-md w-full sm:w-1/3"
          >
            <option value="">Rôle</option>
            {options.role.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>

          {/* Sélection des options de l'experience*/}
          <select
            value={member.experience}
            onChange={(e) => handleMemberChange(member.id, "experience", e.target.value)}
            className="border bg-white p-2 rounded-md w-full sm:w-1/3"
          >
            <option value="">Experience</option>
            {options.experience.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          </div>
      
          {/* Champ LinkedIn */}
          <input
            type="text"
            placeholder="Lien LinkedIn"
            value={member.linkedin}
            onChange={(e) => handleMemberChange(member.id, "linkedin", e.target.value)}
            className="border bg-white p-2 rounded-md w-full"
          />
        </div>
      ))}

<button 
  onClick={addMember}
  className="mt-4 w-10 h-10 flex items-center justify-center bg-violet-200 text-white rounded-full text-xl hover:bg-violet-300">
  +
</button>



      {/* Boutons de navigation */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
        <button className="w-full sm:w-auto bg-purple-300 text-white py-2 px-4 border border-gray-300 rounded-full hover:bg-black">Revenir</button>
        <button className="w-full sm:w-auto bg-purple-300 text-white py-2 px-4 border border-gray-300 rounded-full hover:bg-black">Continuer</button>
      </div>
    </div>
  );
};

export default TeamForm;


