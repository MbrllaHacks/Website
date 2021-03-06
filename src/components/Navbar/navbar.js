import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./../../Assets/logo.svg";
import a from "./../../Assets/a.svg";
import disc from "./../../Assets/disc.svg";
import twitter from "./../../Assets/twitter.svg";
import insta from "./../../Assets/instagram.svg";
import linkedin from "./../../Assets/linkedin.svg";
import youtube from "./../../Assets/youtube.svg";
import "./navbar.css";

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="285px" className="nel mw-100"></img>
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
              <img src={youtube} width="30px"></img>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#linkedin" className="nel">
              <img src={linkedin} width="30px"></img>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#Discord" className="nel">
              <img src={disc} width="30px"></img>
            </Nav.Link>
            {/* Add Discord Link here */}
            <Nav.Link eventKey={2} href="#Twitter" className="nel">
              <img src={twitter} width="30px"></img>
            </Nav.Link>
            {/* Add Twitter Link here */}
            <Nav.Link eventKey={2} href="#Instagram" className="nel">
              <img src={insta} width="30px"></img>
            </Nav.Link>
            {/* Add Insta link here   */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
