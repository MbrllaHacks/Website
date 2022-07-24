import '../../style.css';
import hands from "./../../Assets/sponsor-hands.png"
import prin from "./../../Assets/prin.svg"

import {Container, Row, Col} from "react-bootstrap"


function Sponsors(){
    return (
        <section>
        <Container id="sponsors">
          <Container className="sponsors-section">
            <Row>

            <Col lg={7} >

                {/* Text */}

                <div className="sponsors-heading ">
                    Sponsors
                </div>

                <p className="sponsors-text">
                The support of our wonderful sponsors allows hackers to produce something they are proud of.
                <br/>
                <br/>
                Interested in becoming a sponsor?
                </p>

                <div className="sponsor-button ">
                    <a href="mailto:sponsors@mbrllahacks.ca">
                    <button className="sponsorUs">Become a Sponsor</button>
                    </a>
                    <img src={prin} className="sponsors-prin" alt="Prin"></img>
                </div>

            </Col>

            <Col lg={5} >
                    <img src={hands} 
                    alt="hands"
                    className="img-fluid sponsors-img"
                    style={{ maxHeight: "400px" }}
                    ></img>
            </Col>

                

                
                {/* Hands image */}

            </Row>

          </Container>
        </Container>
      </section>
    )
}

export default Sponsors