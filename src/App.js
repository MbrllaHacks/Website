
import './App.css';
import './components/Navbar/navbar.css';
import NavbarComp from './components/Navbar/navbar.js';
import Home from './components/Home/home';
import About from './components/About/about';
import Sponsors from './components/Sponsors/sponsors';
import Contact from "./components/Contact/contact";
import FooterComp from './components/Footer/footer';
import Faq from './components/Faq/faq';
<<<<<<< HEAD
import Contact from './components/Contact/contact';
import Teams from './components/Teams/Teams'
=======
>>>>>>> 211cdb60d762e199775c1a2649260009c9dfe54f



function App() {
  return (
    <div>
      <NavbarComp />
      <Home />
      <About/>
      <Sponsors/>
      <Faq/>
      <Contact />
      <FooterComp />
    </div>
  );
}

export default App;
