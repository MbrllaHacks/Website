import "./home.css"
import prin from "./../../Assets/prin.svg"
import nick from "./../../Assets/nick.svg"
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
//                     <div className="dates">
//                       <Type />
//                     </div>

                    {/* Register Button */}
    
                    <div style={{ margin: "15px", textAlign: "left" }}>
                        <a href="https://youtu.be/dQw4w9WgXcQ">
                        <button className="register">Get notified!</button>
                        </a>
                        <img src={prin} className="prin"></img>
                    </div>
                </Col>

                    {/* PC image */}

                <Col md={4} style={{ paddingRight: 30 }}>
                    <img src={nick} 
                    alt="Nick holding a computer"
                    className="nick"
                    style={{ maxHeight: "520px"}}
                    ></img>
                </Col>
            </Row>

          </Container>
        </Container>
      </section>
    )
}

export default Home


