import logo from "./../../Assets/logo.svg";
import a from "./../../Assets/a.svg";
import disc from "./../../Assets/disc.svg";
import twitter from "./../../Assets/twitter.svg";
import insta from "./../../Assets/instagram.svg";
import logo_white from "./../../Assets/logo_white.svg";
import "./footer.css";
import { Container, Row, Col, Particle } from "react-bootstrap";

function FooterComp() {
  return (
    <section className="footer">
      <Container>
        <Row className="upper-box">
          <Col lg={true} className="upper-box-col upper-box-col-left">
            <img src={logo_white} alt="logo" className="upper-box-image" />
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

    // <section>
    //   <footer id="sticky-footer" class="flex-shrink-0 py-4" className="footer">
    //     <Row>
    //       <div className="upper-box">
    //     <Col>
    //         <div className="upper-box-logo">
    //           <img src={logo_white} alt="logo" className="logo" />
    //         </div>
    //     </Col>
    //     <Col>
    //         <div className="upper-box-text">
    //           <text className="upper-box-text-text">Code of Conduct</text>
    //           <text className="upper-box-text-text">Privacy Policy</text>
    //         </div>
    //     </Col>
    //       </div>
    //     </Row>
    //     <Row>
    //       <div className="lower-box">
    //         <text className="lower-box-text">
    //           Pictures from{" "}
    //           <span className="lower-box-text-underlined">Streamline</span>
    //         </text>
    //       </div>
    //     </Row>
    //   </footer>
    // </section>
  );
}

export default FooterComp;
