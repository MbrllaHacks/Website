import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./../../Assets/logo.svg";
import '../../style.css';
import { FiInstagram,
         FiLinkedin,
         FiYoutube,
         FiTwitter } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";

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
            <Nav.Link eventKey={2} href="#youtube" target="_blank" className="nel" rel="noreferrer">
              <FiYoutube size={25} color='black' />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#linkedin" target="_blank" className="nel" rel="noreferrer">
              <FiLinkedin size={25} color='black' />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#Discord" target="_blank" className="nel" rel="noreferrer">
              <TbBrandDiscord size={27} color='black'  />
            </Nav.Link>
            {/* Add Discord Link here */}
            <Nav.Link eventKey={2} href="#Twitter" target="_blank" className="nel" rel="noreferrer">
              <FiTwitter size={25} color='black' />
            </Nav.Link>
            {/* Add Twitter Link here */}
            <Nav.Link eventKey={2} href="https://www.instagram.com/mbrllahacks/" target="_blank" className="nel" rel="noreferrer">
              <FiInstagram size={25} color='black' />
            </Nav.Link>
            {/* Add Insta link here   */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
