import "./home.css"
import prin from "./../../Assets/prin.svg"
import nick from "./../../Assets/nick.svg"
import home_blur from './../../Assets/home_blur.svg'
import plus from './../../Assets/plus.svg'
import umbrella from './../../Assets/umbrella_2.svg'
import {Container, Row, Col, Particle} from "react-bootstrap"


function Home(){
    return (
        <section>
        <Container id="home">
          <Container className="home-section">
            <Row>
                <Col lg={6} id='home_left' >

                    {/* Heading */}

                    <div className="quote">
                        A virtual hackathon to turn ideas into 
                        <span className="blackPart"> reality</span>
                    </div>

                    <div className="dates">
                        OCT 08 - OCT 09
                    </div>
                    

                    {/* Register Button */}
    
                    <div style={{ padding: 20 }}>
                        <a href="https://forms.gle/Nw7pjuKdSwySp1Wf8">
                        <button className="register">Get notified!</button>
                        </a>
                        <img src={prin} className="prin"></img>
                    </div>
                </Col>

                    {/* Nick image */}

                <Col lg={6} id='images'>
                    <img src={home_blur} 
                    alt="Blur behind nick holding a computer"
                    className="img-fluid home_blur"
                    ></img>

                    <img src={home_blur} 
                    alt="Blur behind nick holding a computer"
                    className="img-fluid home_blur_3"
                    ></img>

                    <img src={home_blur} 
                    alt="Blur behind nick holding a computer"
                    className="img-fluid home_blur_2"
                    ></img>

                    <img src={nick} 
                    alt="Nick holding a computer"
                    className="home-nick"
                    ></img>

                    <div className="float_imgs_top">
                        <img src={plus} 
                            alt="plus sign"
                            className="img-fluid plus"
                        ></img>
                        <img src={umbrella} 
                            alt="umbrella"
                            className="img-fluid umbrella"
                        ></img>
                    </div>

                    <div className="float_imgs_mid">
                        <img src={plus} 
                            alt="plus sign"
                            className="img-fluid plus"
                        ></img>
                    </div>

                    <div className="float_imgs_bottom">
                        <img src={umbrella} 
                            alt="umbrella"
                            className="img-fluid umbrella"
                        ></img>
                        <img src={plus} 
                            alt="plus sign"
                            className="img-fluid plus"
                        ></img>
                    </div>
                </Col>
            </Row>

          </Container>
        </Container>
      </section>
    )
}

export default Home


