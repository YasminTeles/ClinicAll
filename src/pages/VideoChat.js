import React from "react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import twilio from "twilio"

import Room from "../components/videoChat/Room"
import { VideoChatProvider } from "../components/videoChat/videoChatContext";

class VideoChat extends React.Component {

  constructor(props) {
    super(props)
    this.AccessToken = twilio.jwt.AccessToken;
    this.VideoGrant = this.AccessToken.VideoGrant;
    this.state = {
      user: this.props.user.name || Math.random().toString(36).substring(7),
      room: 'consulta',
      token: null,
      back: false,
      logoutTextChat: false,
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
      logoutTextChat: true,
    })
  }

  render(){

    window.onbeforeunload = () => {
      this.handleLogout();
    };

    window.onunload = () => {
      this.handleLogout();
    }

    const {room, token, logoutTextChat, back} = this.state
    return (
      <div>
          {token ? (
            <VideoChatProvider>
              <Room roomName={room} token={token} logoutTextChat={logoutTextChat} handleLogout={this.handleLogout} />
            </VideoChatProvider>
          ) : back && (
            <Redirect to={{ pathname: "/feedback" }} />
          )}
      </div>
    )
  }
}

export default connect((store) => ({ user: store.user }))(VideoChat)
