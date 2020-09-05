import twilio from "twilio"

const { AccessToken } = twilio.jwt
const { ChatGrant, VideoGrant, VoiceGrant } = AccessToken

export const generateToken = () => new AccessToken(
  process.env.REACT_APP_TWILIO_ACCOUNT_SID,
  process.env.REACT_APP_TWILIO_API_KEY,
  process.env.REACT_APP_TWILIO_API_SECRET,
)

export const chatToken = (identity) => {
  const chatGrant = new ChatGrant({
    serviceSid: process.env.REACT_APP_TWILIO_CHAT_SERVICE_SID,
  })
  const token = generateToken()
  token.addGrant(chatGrant)
  token.identity = identity
  return token.toJwt()
}

export const videoToken = (identity, room) => {
  let videoGrant
  if (typeof room !== "undefined") {
    videoGrant = new VideoGrant({ room })
  } else {
    videoGrant = new VideoGrant()
  }
  const token = generateToken()
  token.addGrant(videoGrant)
  token.identity = identity
  return token
}

export const voiceToken = (identity, config) => {
  let voiceGrant
  if (typeof config.twilio.outgoingApplicationSid !== "undefined") {
    voiceGrant = new VoiceGrant({
      outgoingApplicationSid: config.twilio.outgoingApplicationSid,
      incomingAllow: config.twilio.incomingAllow,
    })
  } else {
    voiceGrant = new VoiceGrant({
      incomingAllow: config.twilio.incomingAllow,
    })
  }
  const token = generateToken()
  token.addGrant(voiceGrant)
  token.identity = identity
  return token
}
