import "./home.css"
import { Button } from "react-bootstrap"

function Home(){
    return (<div>
        <div className="quote">
            A virtual hackathon to turn ideas into 
            <span className="black-part"> reality</span>
        </div>
        <div className="dates">
            OCT 08 - OCT 09
        </div>
        <Button variant="primary" className="register">Register now!</Button>
    </div>
    )
}

export default Home