
import './App.css';
import './components/Navbar/navbar.css';
import NavbarComp from './components/Navbar/navbar.js';
import Home from './components/Home/home';
import About from './components/About/about';
import Sponsors from './components/Sponsors/sponsors';
import Contact from "./components/Contact/contact";
import FooterComp from './components/Footer/footer';
import Faq from './components/Faq/faq';
import TeamsComp from './components/Teams/Teams.js';




function App() {
  return (
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
  );
}

export default App;
