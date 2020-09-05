import Chat from "twilio-chat"

import { chatToken } from "./tokens"

let chatClient
let generalChannel
let username

export const sendMessage = (message) => {
  if (generalChannel === undefined) {
    return
  }
  generalChannel.sendMessage(message)
}

function setupChannel() {
  generalChannel.join()

  generalChannel.on("messageAdded", (message) => {
    console.log(message.author, message.body)
  })
}

function createOrJoinGeneralChannel() {
  const chatName = "clinicall"
  chatClient.getChannelByUniqueName(chatName)
    .then((channel) => {
      generalChannel = channel
      setupChannel()
    }).catch(() => {
      chatClient.createChannel({
        uniqueName: chatName,
        friendlyName: "General Chat Channel",
      }).then((channel) => {
        generalChannel = channel
        setupChannel()
      })
    })
}

const createChat = (identity) => {
  const token = chatToken(identity)
  Chat.create(token).then((client) => {
    chatClient = client
    chatClient.getSubscribedChannels().then(createOrJoinGeneralChannel)
    username = identity
  }).catch((error) => {
    console.error(error)
  })
}

export default createChat
