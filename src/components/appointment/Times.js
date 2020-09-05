import React from "react"
import Row from "./Row"

import "./Times.scss"

const times = ["11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"]

function Times() {
  return (
    <div className="times-options">
      <Row>
        {times.slice(0,5)}
      </Row>
      <Row>
        {times.slice(5,10)}
      </Row>
    </div>
  )
}

export default Times
