import "./sponsors.css"
import hands from "./../../Assets/sponsor-hands.png"
import sponsorBlur from "./../../Assets/sponsor-blur.png"
import prin from "./../../Assets/prin.svg"

import {Container, Row, Col} from "react-bootstrap"


function Sponsors(){
    return (
        <section>
        <Container id="sponsors">
          <Container >
            <Row>

                <Col md={7} >

                    {/* Text */}

                    <div className="sponsor-heading">
                        Sponsors
                    </div>

                    <p>
                    The support of our wonderful sponsors allows hackers to produce something they are proud of.
                    <br/>
                    <br/>
                    Interested in becoming a sponsor?
                    </p>

                    <div style={{ padding: 50, textAlign: "left" }}>
                        <a href="https://youtu.be/dQw4w9WgXcQ">
                        <button className="sponsorUs">Become a Sponsor</button>
                        </a>
                        <img src={prin} className="prin1"></img>
                    </div>

                </Col>

                
                {/* Hands image */}

                <Col md={5} >
                    <img src={hands} 
                    alt="hands"
                    className="hands"
                    style={{ maxHeight: "450px" }}
                    ></img>
                </Col>
            </Row>

          </Container>
        </Container>
      </section>
    )
}

export default Sponsors