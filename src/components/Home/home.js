import "./home.css"
import prin from "./../../Assets/prin.svg"
import pc from "./../../Assets/pc.svg"
import {Container, Row, Col, Particle} from "react-bootstrap"
import Type from "./Type"


function Home(){
    return (
        <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
                <Col md={7} className="home-header">

                    {/* Heading */}

                    <h1 className="quote">
                        A virtual hackathon to turn ideas into 
                        <span className="black-part"> reality</span>
                    </h1>
                    <div className="dates">
                         <Type />
                    </div>

                    {/* Register Button */}
    
                    <div style={{ padding: 50, textAlign: "left" }}>
                        <a href="https://youtu.be/dQw4w9WgXcQ">
                        <button className="register">Be notified!</button>
                        </a>
                        <img src={prin} className="prin"></img>
                    </div>
                </Col>

                    {/* PC image */}

                <Col md={5} style={{ paddingRight: 20 }}>
                    <img src={pc} 
                    alt="PC"
                    className="pc"
                    style={{ maxHeight: "450px" }}
                    ></img>
                </Col>
            </Row>

          </Container>
        </Container>
      </section>
    )
}

export default Home


