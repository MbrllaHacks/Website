import '../../style.css';
import { Container, Row, Col} from "react-bootstrap";
import "./questions.js";
import ToggleableAnswer from "./questions.js";
import crossPattern from "./../../Assets/crossPattern.png";

//"What is Mbrlla Hacks?": "Mbrlla Hacks is a virtual hackathon, where hackers of all levels and backgrounds team up to create a coding project from scratch in just 48 hours. Alongside this, we provide participants with workshops and other resources to help them turn their ideas into a reality.

function Faq(){
    var qAndA_Left = {
                "Does this cost money?":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat eaque at amet! Nobis, natus? Excepturi ea consectetur voluptate ipsa iusto aut. Aspernatur, veritatis. Ut exercitationem officia harum ullam corrupti.",
                "What if this is my first time at a hackathon?":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!",
                "What kinds of events will be there?":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!",
                "When do hacker applications open?":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!"}

    var qAndA_Right = {"Who can participate?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores nesciunt eligendi, ratione necessitatibus aliquam tempore. Expedita iste alias consequuntur minima. Libero saepe exercitationem quam accusamus dignissimos deleniti? Mollitia, reiciendis!",
                "How many people can be on a team?":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat eaque at amet! Nobis, natus? Excepturi ea consectetur voluptate ipsa iusto aut. Aspernatur, veritatis. Ut exercitationem officia harum ullam corrupti.",
                "How do I form a team?":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!",
                "What is the judging criteria?":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!",
                "Are there prizes?":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!"}

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