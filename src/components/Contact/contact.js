import a from "./../../Assets/a.svg";
import disc from "./../../Assets/disc.svg";
import twitter from "./../../Assets/twitter.svg";
import insta from "./../../Assets/instagram.svg";
import pc2 from "./../../Assets/pc2.svg";
import prin from "./../../Assets/prin.svg";
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
              <a href="#send">
                <button className="button-send">Send</button>
              </a>
              </span>
            </div>

            <div className="socials">
              <a href="#@" >
                <img src={a}></img>
              </a>
              <a href="#Discord">
                <img src={disc}></img>
              </a>{" "}
              <a href="#Twitter">
                <img src={twitter} alt="Twitter"></img>
              </a>{" "}
              <a href="#Instagram">
                <img src={insta} alt="Twitter"></img>
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
