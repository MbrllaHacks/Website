import "./faq.css";
import { Container, Row, Col} from "react-bootstrap";
import "./questions.js";
import ToggleableAnswer from "./questions.js";
import crossPattern from "./../../Assets/crossPattern.png";

function Faq(){
    return(
        <section>
            <Container className="faq-section" id="faq">
                <Container className="faq-content">
                    <img src={crossPattern} className="pattern" alt="Cross"></img>
                    <h1 id="faq-title" className="title">Frequently Asked Questions</h1>

                    <Row className="faq-body">
                        <Col id="col1">
                            <div id="faq-question">
                                What is Mbrlla Hacks?
                            </div>
                            <ToggleableAnswer className="faq-answer">
                                Mbrlla Hacks is a virtual hackathon, where hackers of all levels and backgrounds team up to create a coding project from scratch in just 48 hours. Alongside this, we provide participants with workshops and other resources to help them turn their ideas into a reality.
                            </ToggleableAnswer>

                            <div id="faq-question">
                                Does this cost money?
                            </div>
                            <ToggleableAnswer>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat eaque at amet! Nobis, natus? Excepturi ea consectetur voluptate ipsa iusto aut. Aspernatur, veritatis. Ut exercitationem officia harum ullam corrupti.
                            </ToggleableAnswer>

                            <div id="faq-question">
                                What if this is my first time at a hackathon?
                            </div>
                            <ToggleableAnswer>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!
                            </ToggleableAnswer>

                            <div id="faq-question">
                                What kinds of events will be there?
                            </div>
                            <ToggleableAnswer>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eos nesciunt magni impedit. Accusantium placeat quos vero asperiores voluptatem? Deserunt eaque hic nihil magnam minima, impedit id eveniet sed porro?
                            </ToggleableAnswer>

                            <div id="faq-question">
                                When do hacker applications open?
                            </div>
                            <ToggleableAnswer>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis culpa eveniet, nisi veritatis repudiandae quis facere, vero molestiae vel ratione a fugiat qui debitis, corporis harum beatae placeat excepturi!                                
                            </ToggleableAnswer>
                        </Col>
                        <Col>
                            <div id="faq-question">
                                Who can participate?
                            </div>
                            <ToggleableAnswer>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores nesciunt eligendi, ratione necessitatibus aliquam tempore. Expedita iste alias consequuntur minima. Libero saepe exercitationem quam accusamus dignissimos deleniti? Mollitia, reiciendis!
                            </ToggleableAnswer>

                            <div id="faq-question">
                                How many people can be on a team?
                            </div>
                            <ToggleableAnswer>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod laudantium natus rerum illo incidunt ab quisquam, et recusandae porro, earum dignissimos culpa dolor. Ipsam eaque nostrum amet doloremque quos.
                            </ToggleableAnswer>

                            <div id="faq-question">
                                How do I form a team?
                            </div>
                            <ToggleableAnswer>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cumque accusantium provident voluptate optio odio doloribus maiores minima perferendis magnam cupiditate eveniet, laborum qui magni. Facere nostrum eaque earum beatae.
                            </ToggleableAnswer>

                            <div id="faq-question">
                                What is the judging criteria?
                            </div>
                            <ToggleableAnswer>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid eveniet tempora omnis maiores quae dolorum ad amet obcaecati error nemo, dolores voluptatibus veniam corrupti. Minima ab accusantium adipisci asperiores voluptatibus?
                            </ToggleableAnswer>

                            <div id="faq-question">
                                Are there prizes?
                            </div>
                            <ToggleableAnswer>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus ab rem quos inventore officiis eum unde quis voluptatibus? Dolorum, fuga aliquam voluptas aliquid quia iure perferendis vel labore quibusdam!
                            </ToggleableAnswer>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Faq;