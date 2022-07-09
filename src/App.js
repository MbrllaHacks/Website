
import './App.css';
import './components/Navbar/navbar.css';
import NavbarComp from './components/Navbar/navbar.js';
import Home from './components/Home/home';
import About from './components/About/about';
import Sponsors from './components/Sponsors/sponsors';
import Faq from './components/Faq/faq';
import Contact from './components/Contact/contact';
import Teams from './components/Teams/Teams.js'



function App() {
  return (
    <div>
      <NavbarComp />
      <Home />
      <About/>
      <Sponsors/>
      <Faq/>
      <Contact />
      <Teams />
    </div>
  );
}

export default App;
