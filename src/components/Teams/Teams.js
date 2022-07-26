import '../../style.css';
import {Container} from "react-bootstrap"
import Circle from './circle.js'
import sample from './../../Assets/pfp.png'
import contributors from "./contributers.json"


function TeamsComp() {
  return (
    <Container>
    <div >
        <div className='teams-title'>
            <b>Brought to you by</b>
        </div>
        <div className='teams-subtitle'>
            Wilson, Lead Organizer
        </div>
        <div className='cir-container'>
            {Object.entries(contributors).map(([key, value]) => {
              const imgLink = `https://mbrlla.s3.us-west-1.amazonaws.com/${key}.png`
              const name = value[0]
              const contribution = value[1]
              return (  
              <div className='circle'><Circle image={imgLink} name={name} contribution={contribution} /></div>

            )})}

            {/* Lopping through first nine entries to create a looping effect  */}

            {Object.entries(contributors).slice(0,9).map(([key, value]) => {
              const imgLink = `https://mbrlla.s3.us-west-1.amazonaws.com/${key}.png`
              const name = value[0]
              const contribution = value[1]
              return (  
              <div className='circle'><Circle image={imgLink} name={name} contribution={contribution} /></div>

            )})}
        </div>
    </div>
    </Container>

  )
}

export default TeamsComp