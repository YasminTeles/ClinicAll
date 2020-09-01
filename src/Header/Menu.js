import React from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

import LoginButton from "../components/authentication/LoginButton"
import "./Menu.scss"

const RegularButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontSize: 16,
    height: 30,
    color: "#1F1534",
    "&:hover": {
      color: "#13DEDE",
      backgroundColor: "white",
      fontWeight: "bold",
    },
  },
}))(Button)

function Menu() {
  return (
    <div className="button-group">
      <RegularButton variant="text" color="primary" className="button" disableElevation>
        Home
      </RegularButton>
      <RegularButton variant="text" color="primary" className="button" disableElevation>
        Médicos
      </RegularButton>
      <RegularButton variant="text" color="primary" className="button" disableElevation>
        Recursos
      </RegularButton>
      <RegularButton variant="text" color="primary" className="button" disableElevation>
        Serviços
      </RegularButton>
      <RegularButton variant="text" color="primary" className="button" disableElevation>
        Sobre nós
      </RegularButton>
      <LoginButton />
    </div>
  )
}

export default Menu
