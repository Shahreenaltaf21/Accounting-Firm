import React from 'react';
// import HelpSection from '../Components/HelpSection'; 
// import WhyChoose from '../Components/WhyChoose';
// import Header from '../Components/Header'; 
import QuestionSection from '../Components/QuestionSection';
// import MissionStatement from '../Components/MissionStatement'
import NewServices from '../Components/NewServices';
import NewHeader from '../Components/NewHeader';
import NewMission from '../Components/NewMission';
import NewChoose from '../Components/NewChoose';
export default function Home() {
  return (
    <>
      <NewHeader />
      {/* <Header /> */}
      {/* <WhyChoose />  */}
      <NewMission />
      <NewChoose />
      {/* <MissionStatement/> */}
      {/* <HelpSection /> */}
      <NewServices/>
      <QuestionSection />
    </>
  );
}