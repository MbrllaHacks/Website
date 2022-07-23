import '../../style.css';
import {Container} from "react-bootstrap"
import Circle from './circle.js'
import sample from './../../Assets/pfp.png'


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
            <div className='circle'><Circle image={sample} name="Saitama, One Punch Man"/></div>
            <div className='circle'><Circle image={sample} name="Saitama, One Punch Man"/></div>
            <div className='circle'><Circle image={sample} name="Saitama, One Punch Man"/></div>
            <div className='circle'><Circle image={sample} name="Saitama, One Punch Man"/></div>
            <div className='circle'><Circle image={sample} name="Saitama, One Punch Man"/></div>
            <div className='circle'><Circle image={sample} name="Saitama, One Punch Man"/></div>
            <div className='circle'><Circle image={sample} name="Saitama, One Punch Man"/></div>
            <div className='circle'><Circle image={sample} name="Saitama, One Punch Man"/></div>

        </div>
    </div>
    </Container>

  )
}

export default TeamsComp