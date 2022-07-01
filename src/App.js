import "./App.css";
import "./components/Navbar/navbar.css";
import NavbarComp from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div>
      <NavbarComp />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
