import "./sponsors.css"
import hands from "./../../Assets/sponsor-hands.png"
import sponsorBlur from "./../../Assets/sponsor-blur.png"
import prin from "./../../Assets/prin.svg"
import sponsor_blur from './../../Assets/home_blur.svg'
import plus from './../../Assets/crossPattern.png'
import umbrella from './../../Assets/umbrella_2.svg'


import {Container, Row, Col} from "react-bootstrap"


function Sponsors(){
    return (
        <section>
        <Container id="sponsors">
          <Container className="sponsors-section">
            <Row>

            <Col lg={7} >

                {/* Text */}

                <div className="sponsors-heading">
                    Sponsors
                </div>

                <p className="sponsors-text">
                The support of our wonderful sponsors allows hackers to produce something they are proud of.
                <br/>
                <br/>
                Interested in becoming a sponsor?
                </p>

                <div className="sponsor-button">
                    <a href="https://youtu.be/dQw4w9WgXcQ">
                    <button className="sponsorUs">Become a Sponsor</button>
                    </a>
                    <img src={prin} className="sponsors-prin"></img>
                </div>

            </Col>

            <Col lg={5} id='sponsor_images' >
                    <img src={umbrella} 
                    alt="small umbrella"
                    className="sponsor-umbrella"
                    ></img>
                    <img src={plus} 
                    alt="plus sign"
                    className="sponsor-plus-1"
                    ></img>
                    <img src={hands} 
                    alt="hands"
                    className="img-fluid sponsors-img"
                    style={{ maxHeight: "400px" }}
                    ></img>
                    <img src={plus} 
                    alt="plus sign"
                    className="sponsor-plus-2"
                    ></img>
                    <img src={plus} 
                    alt="plus sign"
                    className="sponsor-plus-3"
                    ></img>
                    <img src={sponsor_blur} 
                    alt="blur behind sponsor"
                    className="sponsor-blur"
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