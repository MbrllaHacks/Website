import './teams.css'
import {Container} from "react-bootstrap"
import Circle from './circle.js'

function Teams() {
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
            <div className='circle'><Circle/></div>
            <div className='circle'><Circle/></div>
            <div className='circle'><Circle/></div>
            <div className='circle'><Circle/></div>
            <div className='circle'><Circle/></div>
            <div className='circle'><Circle/></div>
            <div className='circle'><Circle/></div>
            <div className='circle'><Circle/></div>

        </div>
    </div>
    </Container>

  )
}

export default Teams