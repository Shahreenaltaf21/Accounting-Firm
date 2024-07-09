import React from 'react'; 
import PricingChart from '../Components/PricingChart'; 
import ServiceAbout from '../Components/ServiceAbout';
import HelpSection from '../Components/HelpSection'

export default function Services() {
  return (
     <> 
      <ServiceAbout/>
      <HelpSection/>
      <PricingChart/> 
      </>
  );
}
