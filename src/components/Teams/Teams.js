import '../../style.css';
import {Container} from "react-bootstrap"
import Circle from './circle.js'
import contributors from "./contributers.json"
import React, { useState } from 'react';




function TeamsComp() {

  const [hovered, setHovered] = useState(false);
  const [name, setName] = useState("Wilson, Lead Organizer");
  const toggleHover = () => setHovered(!hovered);

  return (
    <Container>
    <div >
        <div className='teams-title'>
            <b>Brought to you by</b>
        </div>
        <div className='teams-subtitle'>
            {name}
        </div>
        <div className='cir-container'>
            {Object.entries(contributors).map(([key, value]) => {
              const imgLink = `https://mbrlla.s3.us-west-1.amazonaws.com/${key}.png`
              const imgName = value[0]
              const contribution = value[1]
              const toggleName = () => setName(`${imgName}, ${contribution}`);


              return (  
              <div className={hovered ? 'circle-paused' : 'circle' } ><Circle image={imgLink} name={imgName} toggler={toggleHover} changeName={toggleName}/></div>

            )})}

            {/* Lopping through first nine entries to create a looping effect  */}

            {Object.entries(contributors).slice(0,9).map(([key, value]) => {
              const imgLink = `https://mbrlla.s3.us-west-1.amazonaws.com/${key}.png`
              const imgName = value[0]
              const contribution = value[1]
              const toggleName = () => setName(`${imgName}, ${contribution}`);
              return (  
              <div className={hovered ? 'circle-paused' : 'circle' } ><Circle image={imgLink} name={imgName} toggler={toggleHover} changeName={toggleName}/></div>

            )})}

            
        </div>
    </div>
    </Container>

  )
}

export default TeamsComp