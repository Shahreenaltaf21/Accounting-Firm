import React from 'react';
import HelpSection from '../Components/HelpSection';  
import QuestionSection from '../Components/QuestionSection'; 
import NewHeader from '../Components/NewHeader';
import NewMission from '../Components/NewMission';
import NewChoose from '../Components/NewChoose'; 

export default function Home() { 
    
  return (
    <>
      <NewHeader /> 
      <NewMission />
      <NewChoose /> 
      <HelpSection /> 
      <QuestionSection />
    </>
  );
}