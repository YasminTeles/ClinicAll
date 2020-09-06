import React from "react"

import acessibilidade from "../../assets/acessibilidade.svg"
import PlanText from "./PlanText"

import "./PlanHeader.scss"

function PlanHeader(props) {
  const { children } = props

  return (
    <div className="plan">
      <PlanText>
        {children}
      </PlanText>
      <img src={acessibilidade} className="acessibilidade" alt="acessibilidade" />
    </div>
  )
}

export default PlanHeader
