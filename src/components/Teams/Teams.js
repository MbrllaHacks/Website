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
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/wilson.png" name="Wilson, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/marina.png" name="Marina, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/ingrid.png" name="Ingrid, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/shion.png" name="Shion, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/nate.png" name="Nate, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/nusha.png" name="Nusha, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/arshaan.png" name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/devin.png" name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/julia.png" name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/minnie.png" name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/owen.png" name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/tom.png" name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/amisha.png" name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image={sample} name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image={sample} name="Saitama, Lead Destroyer"/></div>

            {/* Repeat first 9 images to get a infinite carsouel effect */}
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/wilson.png" name="Wilson, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/marina.png" name="Marina, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/ingrid.png" name="Ingrid, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/shion.png" name="Shion, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/nate.png" name="Nate, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/nusha.png" name="Nusha, Lead Organizer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/arshaan.png" name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/devin.png" name="Saitama, Lead Destroyer"/></div>
            <div className='circle'><Circle image="https://mbrlla.s3.us-west-1.amazonaws.com/julia.png" name="Saitama, Lead Destroyer"/></div>


        </div>
    </div>
    </Container>

  )
}

export default TeamsComp