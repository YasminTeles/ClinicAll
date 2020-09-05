import React from "react"

import { withStyles } from "@material-ui/core"
import Chat from "twilio-chat"
import { v4 as uuidv4 } from "uuid"

import { chatToken } from "../../services/tokens"
import { VideoChatContext } from "./videoChatContext"

const styles = {
  root: {
    color: "#FFFFFF",
    background: "#000000",

  },
}

class Legend extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      channel: {},
      message: "",
      identity: `legend out - ${uuidv4()}`,
    }
  }

  componentDidMount() {
    const { identity } = this.state
    this.setupChatClient(identity)
  }

  setupChatClient(identity) {
    const token = chatToken(identity)

    Chat.create(token).then((client) => {
      client.getSubscribedChannels().then(
        this.createOrJoinGeneralChannel(client),
      )
    }).catch((error) => {
      console.error(error)
    })
  }

  setupChannel() {
    const { channel } = this.state

    channel.join()

    channel.on("messageAdded", (message) => {
      console.log(message.author, message.body)

      const result = message.author.match(/legend in/i)

      if (result !== "") {
        this.setState({
          message: message.body,
        })
      }
    })
  }

  createOrJoinGeneralChannel(client) {
    const chatName = "clinicall"
    client.getChannelByUniqueName(chatName)
      .then((channel) => {
        this.setState({
          channel,
        })
        this.setupChannel()
      }).catch(() => {
        client.createChannel({
          uniqueName: chatName,
          friendlyName: `${chatName} Chat Channel`,
        }).then((channel) => {
          this.setState({
            channel,
          })
          this.setupChannel()
        }).catch(() => {
          // console.log("Channel could not be created:")
        })
      })
  }

  static contextType = VideoChatContext

  render() {
    const { disableLegend } = this.context
    const { classes } = this.props
    const { message } = this.state

    return (
      <>
        {!disableLegend && (
          <span className={classes.root}>
            {message}
          </span>
        )}
      </>
    )
  }
}

export default withStyles(styles)(Legend)
