import { NowRequest, NowResponse } from '@vercel/node'

module.exports = (request: NowRequest, response: NowResponse) => {
  response.send("Hi, I'm working now!")
}
