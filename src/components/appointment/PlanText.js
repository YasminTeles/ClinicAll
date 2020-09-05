import React from "react"

import "./PlanText.scss"

class PlanText extends React.Component {

  render(){
    const { children } = this.props

    return (
      <div className="plan-text">
        <div className="title">
          Marcar consultas on-line
        </div>
        {children}
      </div>
    )
  }
}

export default PlanText
