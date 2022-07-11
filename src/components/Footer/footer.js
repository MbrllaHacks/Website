import logo_white from "./../../Assets/logo_white.svg";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";

function FooterComp() {
  return (
    <section className="footer">
      <Container>
        <Row className="upper-box">
          <Col lg={true} className="upper-box-col upper-box-col-left">
            <img src={logo_white} alt="logo" className="upper-box-image"/>
          </Col>

          <Col lg={true} className="upper-box-col upper-box-col-right">
            <text className="upper-box-text">Code of Conduct</text>
            <text className="upper-box-text">Privacy Policy</text>
          </Col>
        </Row>
        <Row className="lower-box">
          <Col lg={true} className="lower-text-box">
            <text className="lower-box-text">
              Pictures from{" "}
              <span className="lower-box-text-underlined">Streamline</span>
            </text>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FooterComp;
