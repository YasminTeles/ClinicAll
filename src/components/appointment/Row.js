import React, {useContext} from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import {AppointmentContext} from "./AppointmentContext"

const RegularButton = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontSize: 16,
    width: 90,
    height: 30,
    minWidth: 40,
    color: "white",
    marginBottom: 20,
    marginRight: 20,
    backgroundColor: "#096262",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
      fontWeight: "bold",
    },
  },
}))(Button)

const SelectedButton = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontSize: 16,
    width: 90,
    height: 30,
    minWidth: 40,
    color: "white",
    marginBottom: 20,
    marginRight: 20,
    backgroundColor: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
      fontWeight: "bold",
    },
  },
}))(Button)

function Row(props) {
  const context = useContext(AppointmentContext)
  const {time, setTime} = context
  const {children} = props

  return (
    <div>
      {children.map((hour) => {
        return time === hour ? (
        <SelectedButton variant="text" disableElevation onClick={() => setTime(hour)}>{hour}</SelectedButton>
        ) : (
        <RegularButton variant="text" disableElevation onClick={() => setTime(hour)}>{hour}</RegularButton>
      )})}
    </div>
  )
}

export default Row
