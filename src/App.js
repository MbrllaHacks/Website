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
import Ctf from './components/CTF/ctf.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Challenge1 from "./components/CTF/challenge1";
import Challenge2 from "./components/CTF/challenge2";
import Challenge3 from "./components/CTF/challenge3";
import Challenge4 from "./components/CTF/challenge4";



function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])
  
  return (
    <>
    {loading === false ? (
      <BrowserRouter>
        <div className='main-site'>
          <Routes>
            <Route path="/" element={
              <>
              <NavbarComp /> 
              <Home />
              <About/>
              <Sponsors/>
              <Faq/>
              <Contact />
              <TeamsComp/>
              <FooterComp />
              </>
            } />
            <Route path="/ctf" element={<Ctf />} />
              <Route path="/ctf/challenge1" element={<Challenge1 />} />
              <Route path="/ctf/challenge2" element={<Challenge2 />} />
              <Route path="/ctf/challenge3" element={<Challenge3 />} />
              <Route path="/ctf/challenge4" element={<Challenge4 />} />
            </Routes>
        </div>
      </BrowserRouter>
      
    ) : (
      <div>
        <Loading />
      </div>
    )}
    </>
    
  );
}

export default App;
