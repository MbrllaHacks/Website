import "./about.css"
import nickumbrella from "./../../Assets/nickumbrella.svg"
import logo from "./../../Assets/logo.svg"


import {Container, Row, Col, Particle} from "react-bootstrap"


function About(){
    return (
        <section>
        <Container fluid className="about-section" id="about">
          <Container >
            <Row>
                    {/* Nick image */}

                <Col md={4} >
                    <img src={nickumbrella} 
                    alt="Nick with an umbrella"
                    className="nickumbrella"
                    style={{ maxHeight: "580px" }}
                    ></img>
                </Col>

                    {/* About Text */}

                <Col md={7} className="about-typo" >

                    <img src={logo} className="umbLogo" width="500px" ></img>

                    <p>
                        A student-run hackathon with the goal to empower hackers of all levels to turn their ideas into reality, with the help of the workshops and resources we make available. In 48 hours, you will be able to develop a project, network with other students from all over the world and learn together!
                    </p>

                    <div className="helloWorld">
                        Hello World!
                    </div>

                    <p>
                    We will be conducting several workshops to provide anyone with the chance to learn about multiple skills and resources that will help turn ideas into a real project! 
                    <br/>
                    Beginner-level hackers should <span className="blue">implement what they learned from the workshops </span> into their proposal!
                    </p>

                </Col>
            </Row>

          </Container>
        </Container>
      </section>
    )
}

export default About


