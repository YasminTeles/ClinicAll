import React from "react"
import { connect } from "react-redux"

import { withStyles } from "@material-ui/core"
import * as sdk from "microsoft-cognitiveservices-speech-sdk"
import { compose } from "recompose"
import Chat from "twilio-chat"
import { v4 as uuidV4 } from "uuid"

import { addLegend } from "../../actions/index"
import createRecognizer from "../../services/speechToText"
import { chatToken } from "../../services/tokens"
import Annotations from "./Annotations"
import { VideoChatContext } from "./videoChatContext"

const styles = {
  box: {
    display: "flex",
    justifyContent: "space-around",
  },
  root: {
    position: "absolute",
    bottom: "8%",
    // border: "1px solid #ff0000",
  },
  legend: {
    fontSize: 22,
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
    const chatName = "clinicall - legend 4"
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
    const { setLegendFull } = this.props
    const recognizer = createRecognizer()
    recognizer.recognized = (s, e) => {
      if (e.result.reason === sdk.ResultReason.NoMatch) {
        const noMatchDetail = sdk.NoMatchDetails.fromResult(e.result)
        console.log(`(recognized)  Reason: ${sdk.ResultReason[e.result.reason]} | NoMatchReason: ${sdk.NoMatchReason[noMatchDetail.reason]}`)
      } else {
        console.log(`(recognized)  Reason: ${sdk.ResultReason[e.result.reason]} | Duration: ${e.result.duration} | Offset: ${e.result.offset}`)

        setLegendFull(e.result.text)
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
    const { disableLegend, disableAnnotation } = this.context
    const { classes, chatOpen } = this.props
    const { message } = this.state

    this.exitScreen()

    return (
      <div>
        {!disableLegend && (
          <div className={classes.box}>
            <div className={classes.root}>
              <div className={classes.legend}>
                {message}
              </div>
            </div>
            {!disableAnnotation && <Annotations chatOpen={chatOpen} message={message} />}
          </div>
        )}

      </div>
    )
  }
}

Legend.contextType = VideoChatContext

const mapDispatchToProps = (dispatch) => ({
  setLegendFull: (value) => {
    dispatch(addLegend(value))
  },
})

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps),
)(Legend)
