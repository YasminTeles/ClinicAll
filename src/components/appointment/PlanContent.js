import React from "react"

import morro from "../../assets/morro.svg"
import PlanHeader from "./PlanHeader"

function PlanContent(props) {
  const {children} = props

  return (
    <div>
      <PlanHeader>
        {children}
      </PlanHeader>
      <img src={morro} style={{marginTop: "-120px", width: "100%"}} className="acessibilidade" alt="acessibilidade" />
    </div>
  )
}

export default PlanContent
