import React from 'react'
import teamscss from './teams.module.css'
import {Container} from "react-bootstrap"

function teams() {
  return (
    <Container>
    <div className={teamscss.main}>
        <div className={teamscss.top}>
            <b>Brought to you by</b>
        </div>
        <div className={teamscss.middle}>
            Wilson,Lead Organizer
        </div>
        <div className={teamscss.bottom}>
            <div className={teamscss.circles}></div>
            <div className={teamscss.circles}></div>
            <div className={teamscss.circles}></div>
            <div className={teamscss.circles}></div>
            <div className={teamscss.circles}></div>
            <div className={teamscss.circles}></div>
            <div className={teamscss.circles}></div>
            <div className={teamscss.circles}></div>
        </div>
    </div>
    </Container>

  )
}

export default teams