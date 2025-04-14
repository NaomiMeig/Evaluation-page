import React from "react";
import EvaluationForm from "./components/Evaluation";
import TeamForm from "./components/TeamForm";
import RevenueForm from "./components/RevenuePage";
import ProfessionalOnboarding from "./components/Professionnal/ProfessionalOnboarding";
import FunderOnboarding from "./components/Funder/FunderOnboarding";


function App() {
  return (
    <><div>
      <EvaluationForm />
    </div>
    <div>
      <TeamForm />
    </div> 
      
      <RevenueForm/> 

      <ProfessionalOnboarding/> <br/> <br />

      <FunderOnboarding/> 

    </>


  );
}

export default App;
