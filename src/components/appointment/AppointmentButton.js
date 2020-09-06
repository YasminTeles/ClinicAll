import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const styles = {
  root: {
    textTransform: "none",
    borderRadius: 55,
    marginTop: "130%",
    marginRight: 20,
    fontFamily: "Mulish",
    color: "white",
    backgroundColor: "#096262",
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}

function AppointmentButton(props) {
  const [schedule, setScheduled] = useState(false)
  const { classes } = props

  return (
    <div>
      <Button variant="contained" classes={classes} disableElevation onClick={() => setScheduled(true)}>
        Marcar consulta
      </Button>
      {schedule && <Redirect to={{ pathname: "/appointments" }} />}
    </div>
  )
}

export default withStyles(styles)(AppointmentButton)
