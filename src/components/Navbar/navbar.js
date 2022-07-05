import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './../../Assets/logo.svg'
import a from './../../Assets/a.svg'
import disc from './../../Assets/disc.svg'
import twitter from './../../Assets/twitter.svg'
import insta from './../../Assets/instagram.svg'
import "./navbar.css"


function NavbarComp(){
  return ( <Navbar collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home"><img src={logo} width="285px" className='nel'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className='navele'>
                <Nav.Link onClick={() => window.location.replace("/#about")} className='typo nel'>About</Nav.Link>
                <Nav.Link eventKey={2} onClick={() => window.location.replace("/#sponsors")} className='typo nel'>Sponsors</Nav.Link>
                <Nav.Link eventKey={2} onClick={() => window.location.replace("/#faq")} className='typo nel'>FAQ</Nav.Link>
                <Nav.Link eventKey={2} href="#@" className='nel spc'><img src={a} width="30px" ></img></Nav.Link>
                <Nav.Link eventKey={2} href="#Discord" className='nel'><img src={disc} width="30px"></img></Nav.Link>   {/* Add Discord Link here */}
                <Nav.Link eventKey={2} href="#Twitter" className='nel'><img src={twitter} width="30px"></img></Nav.Link> {/* Add Twitter Link here */}
                <Nav.Link eventKey={2} href="#Instagram" className='nel'><img src={insta} width="30px"></img></Nav.Link> {/* Add Insta link here   */}
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
  )
}

export default NavbarComp
