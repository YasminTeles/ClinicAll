import React from "react"

import { withStyles } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import SendIcon from "@material-ui/icons/Send"

const ENTER_KEY = 13

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
}

function SendMessage(props) {
  const [newMessage, setNewMessage] = React.useState()

  const handleChange = () => (event) => {
    setNewMessage(event.target.value)
  }

  const clearMessage = () => {
    setNewMessage("")
  }

  const sendMessageWithEnterKey = () => (event) => {
    const { sendMessage } = props
    if (event.keyCode === ENTER_KEY) {
      sendMessage(newMessage)
      clearMessage()
    }
  }

  const { classes, sendMessage } = props
  return (
    <FormControl>
      <div className={classes.root}>
        <OutlinedInput
          id="newMessage"
          fullWidth
          placeholder="Digite uma mensagem"
          value={newMessage}
          onChange={handleChange()}
          onKeyDown={sendMessageWithEnterKey()}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  sendMessage(newMessage)
                  clearMessage()
                }}
                edge="end"
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
        )}
        />
      </div>
    </FormControl>
  )
}

export default withStyles(styles)(SendMessage)
