import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./../../Assets/logo.svg";
import disc from "./../../Assets/disc.svg";
import twitter from "./../../Assets/twitter.svg";
import insta from "./../../Assets/instagram.svg";
import linkedin from "./../../Assets/linkedin.svg";
import youtube from "./../../Assets/youtube.svg";
import "./navbar.css";
import { FaInstagram,
         FaLinkedinIn,
         FaDiscord,
         FaYoutube,
         FaTwitter } from "react-icons/fa";

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="285px" className="nel mw-100" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navToggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="navele align-items-center">
            <Nav.Link
              onClick={() => window.location.replace("/#about")}
              className="typo nel"
            >
              About
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              onClick={() => window.location.replace("/#sponsors")}
              className="typo nel"
            >
              Sponsors
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              onClick={() => window.location.replace("/#faq")}
              className="typo nel"
            >
              FAQ
            </Nav.Link>
            <Nav.Link eventKey={2} href="#youtube" className="nel">
              <FaYoutube size={25} color='black' />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#linkedin" className="nel">
              <FaLinkedinIn size={25} color='black' />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#Discord" className="nel">
              <FaDiscord size={25} color='black'  />
            </Nav.Link>
            {/* Add Discord Link here */}
            <Nav.Link eventKey={2} href="#Twitter" className="nel">
              <FaTwitter size={25} color='black' />
            </Nav.Link>
            {/* Add Twitter Link here */}
            <Nav.Link eventKey={2} href="#Instagram" className="nel">
              <FaInstagram size={25} color='black' />
            </Nav.Link>
            {/* Add Insta link here   */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
