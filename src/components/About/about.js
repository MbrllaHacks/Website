import "./about.css"
import nickumbrella from "./../../Assets/nickumbrella.svg"
import lightbulb from './../../Assets/lightbulb.png'
import umbrella from './../../Assets/umbrella_2.svg'
import about_blur from './../../Assets/about_blur.svg'
import half_prin from './../../Assets/half_prin.svg'
import half_prin_2 from './../../Assets/half_prin_2.svg'
import plus from './../../Assets/crossPattern.png'
import logo from "./../../Assets/logo.svg"
import binary from "./../../Assets/binary.svg"


import {Container, Row, Col, Particle} from "react-bootstrap"


function About(){
    return (
        <section>
        <Container id="about">
          <Container>
            <Row>

                {/* Nick image */}

                <Col lg={5} id='about_images' >
                   
                    <img src={plus} 
                    alt="plus on nick"
                    id="about-plus-1"
                    ></img>

                     <img src={plus} 
                    alt="plus on nick"
                    id="about-plus-2"
                    ></img>

                    <img src={half_prin} 
                    alt="prin on nick"
                    className="about-prin"
                    ></img>

                    <img src={nickumbrella} 
                    alt="Nick with an umbrella"
                    className="img-fluid about-nick"
                    style={{ maxHeight: "580px" }}
                    ></img>

                    <img src={umbrella} 
                    alt="small umbrella"
                    id="about-umbrella-2"
                    ></img>

                    <img src={plus} 
                    alt="plus on nick"
                    id="about-plus-3"
                    ></img>

                     <img src={plus} 
                    alt="plus on nick"
                    id="about-plus-4"
                    ></img>

                    <img src={binary} 
                    alt="binary numbers"
                    id="about-binary"
                    ></img>

                    <img src={lightbulb} 
                    alt="lightbulb below nick's image"
                    className="img-fluid about-bulb"
                    style={{ maxHeight: "580px" }}
                    ></img>

                    <img src={half_prin_2} 
                    alt="half_prin_2"
                    id="about-prin-2"
                    ></img>

                    <img src={about_blur} 
                    alt="blur behind about section"
                    className="about-blur"
                    ></img>
                </Col>

                {/* About Text */}

                <Col md={7} >
                    <div className="about-section-right">
                    <div className="logo_container">
                        <img src={logo} alt="logo" className="about-logo" width="500px" ></img>
                    </div>
        
                    <p class="about-text">
                        A student-run hackathon with the goal to empower hackers of all levels to turn their ideas into reality, with the help of the workshops and resources we make available. In 48 hours, you will be able to develop a project, network with other students from all over the world and learn together!
                    </p>

                    <div className="helloWorld">
                        Hello World!
                    </div>

                    <p class="about-text">
                    We will be conducting several workshops to provide anyone with the chance to learn about multiple skills and resources that will help turn ideas into a real project! 
                    <br/>
                    <div className="about-text-2">
                    Beginner-level hackers should <span className="blue">implement what they learned from the workshops </span> into their proposal!
                    </div>
                    </p>
                    </div>
                    

                </Col>


                    
            </Row>

          </Container>
        </Container>
      </section>
    )
}

export default About


