import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner'
import Services from './Pages/Services';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Resources from './Pages/Resources';
import Footer2 from './Components/Footer2';
import NavMenu from './Components/NavMenu';
import ResolutionHead from './Components/ResolutionHead';
import BusinessServices from './Components/BusinessServices';
import TaxPlanningSrvices from './Components/TaxPlanningSrvices';
export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])
  return (
    <>
      {
        loading ? (
          <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor='#4fa94d'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{marginTop:'15rem', justifyContent:'center', flex: 1,
            alignItems: 'center'}}
            wrapperClass=""
            visible={true} 
          />)
          :(

          <Router> 
            <NavMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Pages/About" element={<About />} exact />
              <Route path="Pages/Services" element={<Services />} exact />
              <Route path="Components/ResolutionHead" element={<ResolutionHead />} exact />
              <Route path="Components/BusinessServices" element={<BusinessServices />} exact />
              <Route path="Components/TaxPlanningServices" element={<TaxPlanningSrvices />} exact />
              <Route path="Pages/Contact" element={<Contact />} exact />
              <Route path="Pages/Resources" element={<Resources />} exact>
              </Route>
            </Routes>
            <Footer2 />
          </Router>
          )
      } 

    </>
  );
}