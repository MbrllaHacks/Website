import pc2 from "./../../Assets/pc2.svg";
import '../../style.css';

import { Container, Row, Col } from "react-bootstrap";
import { FiInstagram,
          FiLinkedin,
          FiYoutube,
          FiTwitter } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";


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
              <a href="#youtube" target="_blank">
                <FiYoutube size={25} color='black' />
              </a>
              <a href="#linkedin" target="_blank">
                <FiLinkedin size={25} color='black' />
              </a>
              <a href="#Discord" target="_blank">
                <TbBrandDiscord size={27} color='black' />
              </a>{" "}
              <a href="#Twitter" target="_blank">
                <FiTwitter size={25} color='black' />
              </a>{" "}
              <a href="https://www.instagram.com/mbrllahacks/" target="_blank">
                <FiInstagram size={25} color='black' />
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
