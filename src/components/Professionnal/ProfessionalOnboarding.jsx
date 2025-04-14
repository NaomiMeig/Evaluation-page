import React from 'react'
import WelcomeForm from "./components/WelcomeForm";
import Merci from "./components/Merci";
import RoleSelection from "./components/Role";
import MissionStatement from "./components/Mission";
import SuperbeSofia from "./components/Superbe";
import CategoriesProfessionnel from "./components/Categorie";
import MissionHelp from "./components/MissionHelp";
import EntrepriseInfo from "./components/EntrepriseInfo";
import ProfileConfirmation from "./components/ProfilConfirmation";

export default function ProfessionalOnboarding() {
  return (
    <div>
      <div>
      <WelcomeForm />
    </div>
  
    <div>
      <Merci />
    </div> 
    <div>
    <RoleSelection />
    </div>

    <div>
    <MissionStatement />
    </div>

    <div>
    <SuperbeSofia />
    </div>

    
    <div>
    <CategoriesProfessionnel/>
    </div>

    <div>
    <MissionHelp/>
    </div>
    
    <div>
    <EntrepriseInfo/>
    </div>

    <div>
    <ProfileConfirmation/>
    </div>
    </div>
  )
}
