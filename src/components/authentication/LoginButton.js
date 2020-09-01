import React from "react"

import { useAuth0 } from "@auth0/auth0-react"
import { Button, withStyles } from "@material-ui/core"

const styles = {
  root: {
    textTransform: "none",
    backgroundColor: "#5B5B5B",
    fontFamily: "Mulish",
    fontSize: 16,
    height: 30,
    borderRadius: 55,
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#5B5B5B",
      opacity: 0.5,
      fontWeight: "bold",
    },
  },
}

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0()
  const { classes } = props

  return (
    <Button
      onClick={() => loginWithRedirect()}
      classes={classes}
    >
      Entrar
    </Button>
  )
}

export default withStyles(styles)(LoginButton)
