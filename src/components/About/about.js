import '../../style.css';
import nickumbrella from "./../../Assets/nickumbrella.png"
import logo from "./../../Assets/logo.svg"
import {Container, Row, Col } from "react-bootstrap"
import React, { useState, useEffect } from 'react'



function About(){

    return (
        <section>
        <Container id="about">
          <Container>
            <Row>

                {/* Nick image */}

                <Col lg={5} >
                    <img src={nickumbrella} 
                    alt="Nick with an umbrella"
                    className="img-fluid about-nick fadeInBottom"
                    style={{ maxHeight: "750px" }}

                    ></img>
                </Col>

                {/* About Text */}

                <Col md={7} >

                    <img src={logo} alt="logo" className="about-logo fadeInBottom" width="500px" ></img>

                    <p className="about-text fadeInBottom">
                        A student-run hackathon with the goal to empower hackers of all levels to turn their ideas into reality, with the help of the workshops and resources we make available. In 48 hours, you will be able to develop a project, network with other students from all over the world and learn together!
                    </p>

                    <div className="helloWorld fadeInBottom">
                        Hello World!
                    </div>

                    <p className="about-text fadeInBottom">
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


