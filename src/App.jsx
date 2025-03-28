import React from "react";
import EvaluationForm from "./components/Evaluation";
import TeamForm from "./components/TeamForm";

import RevenueForm from "./components/RevenuePage";


function App() {
  return (
    <><div>
      <EvaluationForm />
    </div><div>
        <TeamForm />
      </div> 
      
      <RevenueForm/> 
      
  
    </>
  );
}

export default App;
