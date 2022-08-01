import '../../style.css';
import prin from "./../../Assets/prin.svg"
import nick from "./../../Assets/nick.png"
import {Container, Row, Col } from "react-bootstrap"


function Home(){
    return (
        <section>
        <Container id="home">
          <Container className="home-section">
            <Row>
                <Col lg={7} >

                    {/* Heading */}

                    <div className="quote fadeInBottom">
                        A virtual hackathon to turn ideas into 
                        <span className="blackPart"> reality</span>
                    </div>

                    <div className="dates fadeInBottom">
                        OCT 08 - OCT 09
                    </div>

                    {/* Register Button */}
    
                    <div style={{ padding: 20 }} className= "register-comp fadeInBottom">
                        <a href="https://forms.gle/Nw7pjuKdSwySp1Wf8">
                        <button className="register fadeInBottom">Get notified!</button>
                        </a>
                        <img src={prin} className="prin fadeInBottom" alt="prin"></img>
                    </div>
                </Col>

                    {/* Nick image */}

                <Col lg={5}>
                    <>
                        <img src={nick} 
                        alt="Nick holding a computer"
                        className="img-fluid home-nick fadeInBottom"
                        style={{ maxHeight: "450px" }}
                        ></img>

                    </>
                </Col>
            </Row>

          </Container>
        </Container>
      </section>
    )
}

export default Home


