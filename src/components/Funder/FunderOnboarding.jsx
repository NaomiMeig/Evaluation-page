import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/confirmationstep" element={<ConfirmationStep />} />
        <Route path="/tonexpertise" element={< TonExpertise/>} />
        <Route path="/tamission" element={<TaMission />} />
        <Route path="/confirmationdeuxf" element={<ConfirmationDeuxF/>} />
        <Route path="/categorieForm" element={<CategorieForm />} />
        <Route path="/principauxbesoin" element={< PrincipauxBesoin/>}/>
        <Route path="/confirmationlinkedin" element={<ConfirmationLinkedin />} />
        <Route path="/top" element={<Top />} />
      </Routes>
    </Router>
  );


   
}
