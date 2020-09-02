import React from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const styles = {
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
}

function AppointmentButton(props) {
  const { classes } = props
  return (
    <Button variant="contained" classes={classes} disableElevation>
      Consulta hoje
    </Button>
  )
}

export default withStyles(styles)(AppointmentButton)
