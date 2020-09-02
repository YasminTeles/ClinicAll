import React from "react"

import { useAuth0 } from "@auth0/auth0-react"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

import LoginButton from "../authentication/LoginButton"
import User from "./User"

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
      color: "black",
      backgroundColor: "white",
      fontWeight: "bold",
    },
  },
}))(Button)

function Menu() {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="button-group">
      <RegularButton variant="text" color="primary" className="button" disableElevation>
        {isAuthenticated ? ("Dashboard") : ("Home")}
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

      {!isAuthenticated ? (<LoginButton />) : (<User />)}
    </div>
  )
}

export default Menu
