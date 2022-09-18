import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import "./../../style.css"


function Ctf() {
  return (
    <>

      <div className='challengeList'>
        <ListGroup>
          <ListGroup.Item variant="primary" className="ctf-item"><Link to="/ctf/challenge1" className="ctf-links" > CHALLENGE 1 </Link></ListGroup.Item>
          <ListGroup.Item variant="primary" className="ctf-item"><Link to="/ctf/challenge2" className="ctf-links" > CHALLENGE 2 </Link></ListGroup.Item>
          <ListGroup.Item variant="primary" className="ctf-item"><Link to="/ctf/challenge3" className="ctf-links" > CHALLENGE 3 </Link></ListGroup.Item>
          <ListGroup.Item variant="primary" className="ctf-item"><Link to="/ctf/challenge4" className="ctf-links" > CHALLENGE 4 </Link></ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default Ctf;
