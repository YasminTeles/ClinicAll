import React from "react";
import { Redirect } from "react-router-dom"
import twilio from "twilio"

import Room from "../components/videoChat/Room"

class VideoChat extends React.Component {

  constructor(props) {
    super(props)
    this.AccessToken = twilio.jwt.AccessToken;
    this.VideoGrant = this.AccessToken.VideoGrant;
    this.state = {
      user: Math.random().toString(36).substring(7),
      room: 'bbb',
      token: null,
      back: false,
    }
  }

  componentDidMount() {
    const {user, room} = this.state
    this.handleSubmit(user, room)
  }

  handleSubmit = async(user, room) => {
    let token = this.videoToken(user, room);
    token = token.toJwt()

    this.setState({
      ...this.state,
      token
    })
  }

  generateToken = () => {
    return new this.AccessToken(
      process.env.REACT_APP_TWILIO_ACCOUNT_SID,
      process.env.REACT_APP_TWILIO_API_KEY,
      process.env.REACT_APP_TWILIO_API_SECRET
    );
  };

  videoToken = (identity, room) => {
    let videoGrantInstance = this.VideoGrant;
    if (typeof room !== "undefined") {
      videoGrantInstance = new this.VideoGrant({ room });
    } else {
      videoGrantInstance = new this.VideoGrant();
    }
    const token = this.generateToken();
    token.addGrant(videoGrantInstance);
    token.identity = identity;
    return token;
  };

  handleLogout = () => {
    this.setState({
      ...this.state,
      token: null,
      back: true,
    })
  }

  render(){
    const {room, token, back} = this.state
    return (
      <div>
        {token ? (
          <Room roomName={room} token={token} handleLogout={this.handleLogout} />
        ) : back && (
          <Redirect to={{ pathname: "/" }} />
        )}
      </div>
    )
  }
}

export default VideoChat;
