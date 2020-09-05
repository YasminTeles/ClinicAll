import React from "react"

import { withStyles } from "@material-ui/core"
import clsx from "clsx"

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "inherit",
  },
  message: {
    border: "1px solid transparent",
    borderRadius: "20px",
    color: "#FFFFFF",
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "18px",
    padding: "10px",
    margin: "2px",
    width: "fit-content",
  },
  me: {
    background: "#096262",
    float: "right",
  },
  another: {
    background: "#5B5B5B",
    float: "left",
  },
  line: {
    width: "-webkit-fill-available",
  },
}

function Messages(props) {
  const setStyle = (person) => {
    const { me, classes } = props
    if (me === person) {
      return clsx(classes.me, classes.message)
    }
    return clsx(classes.another, classes.message)
  }

  const { classes, messages } = props
  return (
    <div className={classes.root}>
      {messages.map((message, index) => (
        <div className={classes.line} key={index}>
          <span className={setStyle(message.author)}>
            {message.body}
          </span>
        </div>
      ))}
    </div>
  )
}

export default withStyles(styles)(Messages)
