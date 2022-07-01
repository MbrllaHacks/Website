
import './App.css';
import './components/Navbar/navbar.css';
import NavbarComp from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about.js';
import Sponsors from './components/Sponsors/sponsors';
import Contact from "./components/Contact/contact";


function App() {
  return (
    <div>
      <NavbarComp />
      <Home />
      <About/>
      <Sponsors/>
      <Contact />
    </div>
  );
}

export default App;
