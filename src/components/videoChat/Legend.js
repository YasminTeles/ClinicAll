import React from "react"

import { withStyles } from "@material-ui/core"
import * as sdk from "microsoft-cognitiveservices-speech-sdk"
import Chat from "twilio-chat"
import { v4 as uuidV4 } from "uuid"

import createRecognizer from "../../services/speechToText"
import { chatToken } from "../../services/tokens"
import { VideoChatContext } from "./videoChatContext"

const styles = {
  root: {
    // border: "1px solid #ff0000",
  },
  legend: {
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
      identity: `legend - ${uuidV4()}`,
    }
  }

  componentDidMount() {
    const { identity } = this.state
    this.setupChatClient(identity)
    this.createLegend()
  }

  componentDidUpdate() {
    const { logoutTextChat } = this.props
    if (logoutTextChat) {
      this.logout()
    }
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
    const { channel, identity } = this.state

    channel.join()

    channel.on("messageAdded", (message) => {
      console.log(identity)
      console.log(message.author, message.body)

      if (message.author !== identity) {
        this.setState({
          message: message.body,
        })
      }
    })
  }

  createOrJoinGeneralChannel(client) {
    const chatName = "clinicall - legend 2"
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
          console.error("Channel could not be created.")
        })
      })
  }

  createLegend() {
    const recognizer = createRecognizer()
    recognizer.recognized = (s, e) => {
      if (e.result.reason === sdk.ResultReason.NoMatch) {
        const noMatchDetail = sdk.NoMatchDetails.fromResult(e.result)
        console.log(`(recognized)  Reason: ${sdk.ResultReason[e.result.reason]} | NoMatchReason: ${sdk.NoMatchReason[noMatchDetail.reason]}`)
      } else {
        console.log(`(recognized)  Reason: ${sdk.ResultReason[e.result.reason]} | Duration: ${e.result.duration} | Offset: ${e.result.offset}`)
        console.log(`Text: ${e.result.text}`)

        this.sendMessage(e.result.text)
      }
    }
  }

  sendMessage(message) {
    const { channel } = this.state
    if (channel) {
      channel.sendMessage(message)
    }
  }

  exitScreen() {
    window.onbeforeunload = () => {
      this.logout()
    }

    window.onunload = () => {
      this.logout()
    }
  }

  logout() {
    const { channel } = this.state
    channel.leave()
  }

  render() {
    const { disableLegend } = this.context
    const { classes } = this.props
    const { message } = this.state

    this.exitScreen()

    return (
      <>
        {!disableLegend && (
        <div className={classes.root}>
          <span className={classes.legend}>
            {message}
          </span>
        </div>
        )}
      </>
    )
  }
}

Legend.contextType = VideoChatContext

export default withStyles(styles)(Legend)
