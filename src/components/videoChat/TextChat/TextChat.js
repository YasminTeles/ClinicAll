import React from "react"

import { withStyles } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import SwipeableDrawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Chat from "twilio-chat"
import { v4 as uuidV4 } from "uuid"

import { chatToken } from "../../../services/tokens"
import { VideoChatContext } from "../videoChatContext"
import Messages from "./Messages"
import SendMessage from "./SendMessage"

const styles = {
  root: {
    height: 100,
    width: 300,
    borderRadius: "none",
  },
  header: {
    color: "black",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Mulish",
    marginLeft: 8,
  },
  button: {
    marginTop: -10,
  },
  description: {
    fontSize: 10,
    marginLeft: 10,
    marginRight: 20,
    fontFamily: "Mulish",
  },
}

class TextChat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      channel: {},
      messages: [],
      identity: `person - ${uuidV4()}`,
    }

    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const { identity } = this.state
    this.setupChatClient(identity)
  }

  componentDidUpdate() {
    const { logoutTextChat } = this.props
    console.log({ logoutTextChat })
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

      // client.on("memberJoined", () {
      //   const { channel } = this.state
      //   channel.getMembers().then((members) => {
      //     const { length } = members
      //     console.log({ length })
      //   })
      //   client.shutdown()
      // }
    }).catch((error) => {
      console.error(error)
    })
  }

  setupChannel() {
    const { channel } = this.state

    channel.join()

    channel.on("messageAdded", (message) => {
      const { messages } = this.state
      this.setState({
        messages: [...messages, message],
      })

      channel.getMembersCount((count) => {
        console.log(`Total members in the channel: ${count}`)
      })

      channel.getMembers().then((members) => {
        const { length } = members
        console.log({ length })
      })
    })

    channel.on("memberLeft", (member) => {
      console.log("alguém saiu do canal")
      console.log(member.state.identity)
    })
  }

  sendMessage(message) {
    const { channel } = this.state
    if (channel) {
      channel.sendMessage(message)
    }
  }

  createOrJoinGeneralChannel(client) {
    const chatName = "clinicAll - persons 2"
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
    const { openTextChat, toggleTextChat } = this.context
    const { classes } = this.props
    const { messages, identity } = this.state

    this.exitScreen()

    return (
      <SwipeableDrawer
        anchor="right"
        variant="persistent"
        open={openTextChat}
        onClose={() => toggleTextChat()}
        style={{ opacity: "90%" }}
      >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div className={classes.header}>
              <Typography className={classes.title} gutterBottom>
                Bate Papo
              </Typography>
              <IconButton className={classes.button} aria-label="close" onClick={() => toggleTextChat()}>
                <CloseIcon />
              </IconButton>
            </div>
            <Typography className={classes.description} color="textSecondary" gutterBottom>
              Converse com o seu médico.
            </Typography>
          </CardContent>
        </Card>

        <Messages messages={messages} me={identity} />

        <SendMessage sendMessage={this.sendMessage} />

      </SwipeableDrawer>
    )
  }
}

TextChat.contextType = VideoChatContext

export default withStyles(styles)(TextChat)
