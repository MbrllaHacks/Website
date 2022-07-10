import disc from "./../../Assets/disc.svg";
import twitter from "./../../Assets/twitter.svg";
import insta from "./../../Assets/instagram.svg";
import pc2 from "./../../Assets/pc2.svg";
import linkedin from "./../../Assets/linkedin.svg";
import youtube from "./../../Assets/youtube.svg";
import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";


function Contact() {
  return (
    <section >
      <Container className="contact-section" id="contact">
        <Row>
          <Col lg={7}>
            <div className="contact-header">Still have questions?</div>
            <div className="contact-body">
              Contact us at{" "}
              <a href="mailto:contact@mbrllahacks.ca">contact@mbrllahacks.ca</a>
            </div>

            <div className="sign-up">
              <span className="sign-up-box">Sign up for updates! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="mailto:contact@mbrllahacks.ca">
                <button className="button-send">Send</button>
              </a>
              </span>
            </div>

            <div className="socials">
              <a href="#youtube" >
                <img src={youtube} alt="Youtube"></img>
              </a>
              <a href="#linkedin" >
                <img src={linkedin} alt="Linkedin"></img>
              </a>
              <a href="#Discord">
                <img src={disc} alt="Discord"></img>
              </a>{" "}
              <a href="#Twitter">
                <img src={twitter} alt="Twitter"></img>
              </a>{" "}
              <a href="#Instagram">
                <img src={insta} alt="Instagram"></img>
              </a>
            </div>
          </Col>

          <Col lg={5}>
            <img className="img-fluid contact-img" src={pc2} alt="Pc2"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
