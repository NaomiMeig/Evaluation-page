import React from 'react'
import CategorieForm from './components/CategorieForm'
import ConfirmationDeuxF from './components/ConfirmationDeuxF'
import ConfirmationStep from './components/ConfirmationStep'
import ContactForm from './components/ContactForm'
import MissionForm from './components/TaMission'
import TonExpertise from './components/TonExpertise'
import ConfirmationLinkedin from './components/ConfirmationLinkedin'
import Top from './components/Top'
import PrincipauxBesoin from './components/PrincipauxBesoin'

export default function FunderOnboarding() {
  return (
    <><div>
      <CategorieForm/> 
    </div>
     <div>
     <ConfirmationDeuxF/> 
   </div>
   <div>
     <ConfirmationStep/> 
   </div>
   <div>
     <ContactForm/> 
   </div>
   <div>
     <MissionForm/> 
   </div>
   <div>
     <TonExpertise/> 
   </div>
   <div>
     <PrincipauxBesoin/> 
   </div>
   <div>
     <ConfirmationLinkedin/> 
   </div>

   <div>
     <Top/> 
   </div>

   </>
  )
}
