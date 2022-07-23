import './style.css';
import NavbarComp from './components/Navbar/navbar.js';
import Home from './components/Home/home';
import About from './components/About/about';
import Sponsors from './components/Sponsors/sponsors';
import Contact from "./components/Contact/contact";
import FooterComp from './components/Footer/footer';
import Faq from './components/Faq/faq';
import TeamsComp from './components/Teams/Teams';
import Loading from './loading.js'
import React, { useState, useEffect } from 'react'




function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (
    <>
    {loading === false ? (
    <div className='main-site'>
      <NavbarComp /> 
      <Home />
      <About/>
      <Sponsors/>
      <Faq/>
      <Contact />
      <TeamsComp/>
      <FooterComp />
    </div>
    ) : (
      <div>
        <Loading />
      </div>
    )}
    </>
  );
}

export default App;
