import '../../style.css';
import { Container, Row, Col} from "react-bootstrap";
import "./questions.js";
import ToggleableAnswer from "./questions.js";
import crossPattern from "./../../Assets/crossPattern.png";

//"What is Mbrlla Hacks?": "Mbrlla Hacks is a virtual hackathon, where hackers of all levels and backgrounds team up to create a coding project from scratch in just 48 hours. Alongside this, we provide participants with workshops and other resources to help them turn their ideas into a reality.

function Faq(){
    var qAndA_Left = {
                "Does this cost money?":"There are no costs attached! Just bring yourself (virtually!) and come join the fun.",
                "What if this is my first time at a hackathon?":"Don't worry and take it easy! There will be many workshops and events to help guide you through the hackathon. There will also be plenty of mentors around to assist you and help with any questions. Come for the experience!",
                "What kinds of events will be there?":"Every kind you’ll need to make the most out of your hacking experience! You’ll get to know your fellow hackers through our team creation event as well as have the opportunity to connect with tech companies through our networking events. We will also host beginner and advanced workshops to help you transform your ideas into real life projects. Last but not least, there will be several game sessions throughout the hackathon!"}

    var qAndA_Right = {"Who can participate?": "University and High School students alike can all participate, from anywhere around the world. The only requirement is that you must be able to speak English.",
                "How many people can be on a team?":"There are 4 people allowed on one team. You can make your team beforehand or during, if you'd like to meet like-minded peers who share your passion! There are 0 restrictions for who can be on a team.",
                "How do I form a team?":"You can use team-searching resources that we provide, before or during the hackathon.",
                "What is the judging criteria?":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!",
                "Are there prizes?":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!",
                "When do hacker applications open?":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!"}

    return(
        <section>
            <Container className="faq-section" id="faq">
                <Container className="faq-content">
                    <img src={crossPattern} className="pattern" alt="Cross"></img>
                    <h1 id="faq-title" className="title">Frequently Asked Questions</h1>

                    <Row >
                        <Col id="col1" lg={6} >
                            <div id="main">
                                <div class="faq-question">What is Mbrlla Hacks?</div>
                                <ToggleableAnswer className = "faq-answer" toggleYes = "true">Mbrlla Hacks is a virtual hackathon, where hackers of all levels and backgrounds team up to create a coding project from scratch in just 48 hours. Alongside this, we provide participants with workshops and other resources to help them turn their ideas into a reality.</ToggleableAnswer>
                            </div>
                            {Object.entries(qAndA_Left).map(([key, value]) => (
                                <div className="col1">
                                    <div class="faq-question">
                                        {key}
                                    </div>
                                    <ToggleableAnswer className="faq-answer" toggleYes = "">
                                        {value}
                                    </ToggleableAnswer>
                                </div>
                            ))}
                        </Col>
                        <Col id="col2" lg={6} >
                            {Object.entries(qAndA_Right).map(([key, value]) => (
                                <div className="col2">
                                    <div class="faq-question">
                                        {key}
                                    </div>
                                    <ToggleableAnswer className="faq-answer" toggleYes = "">
                                        {value}
                                    </ToggleableAnswer>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Faq;