import logo_white from "./../../Assets/logo_white.svg";
import '../../style.css';
import { Container, Row, Col } from "react-bootstrap";
import PrivacyPolicy from "./PopUps/pp";
import CodeOfConduct from "./PopUps/cc";
import React from "react";


function FooterComp() {
  const [PPShow, setPPShow] = React.useState(false);
  const [CCShow, setCCShow] = React.useState(false);

  return (
    <section className="footer">
      <Container>
        <Row className="upper-box">
          <Col lg={6} className="upper-box-col upper-box-col-left">
            <img src={logo_white} alt="logo" className="footer-logo img-fluid"/>
          </Col>

          <Col lg={3} className="upper-box-col upper-box-col-right">
            <span className="upper-box-text"><button onClick={() => setCCShow(true)}>Code of Conduct</button></span>

            <CodeOfConduct show={CCShow} onHide={() => setCCShow(false)} />
            
          </Col>

          <Col lg={3} className="upper-box-col upper-box-col-right">
            <span className="upper-box-text"><button onClick={() => setPPShow(true)}>Privacy Policy</button></span>

            <PrivacyPolicy show={PPShow} onHide={() => setPPShow(false)} />

          </Col>


        </Row>
        <Row className="lower-box">
          <Col lg={12} className="lower-text-box">
              <span className="white-font">Pictures from <a target="_blank" href="https://www.streamlinehq.com/" rel="noreferrer">Streamline</a></span>
          </Col>
          </Row>
          <Row className="lower-box">
          <Col lg={12} className="lower-text-box">
            <a href="https://youtu.be/xvFZjo5PgG0" target="_blank" className="white-font" rel="noreferrer">Secret way to win this hackathon</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FooterComp;
