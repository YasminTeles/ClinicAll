import React from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

import "./Text.scss"

const ColorButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    backgroundColor: "#13DEDE",
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}))(Button)

function Text() {
  return (
    <div className="text">
      <div className="title">
        Cuidado médico virtual pensado para você
      </div>
      <div className="description">
        Marcação online e atendimento acessível. Forma de utilizar
        a tecnologia a favor de pessoas com cuidados especiais.
      </div>
      <ColorButton variant="contained" color="primary" className="button" disableElevation>
        Consulta hoje
      </ColorButton>
    </div>
  )
}

export default Text
