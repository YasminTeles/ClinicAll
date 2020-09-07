import React, { useState, useEffect, useContext } from "react"

import { withStyles, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import Video from "twilio-video"

import Male from "../ReactHumanBody/Male"
import PainClassification from "../ReactHumanBody/PainClassification"
import Chat from "./Chat"
import Legend from "./Legend"
import Participant from "./Participant"
import TextChat from "./TextChat/TextChat"
import { VideoChatContext } from "./videoChatContext"
import VideoMenu from "./VideoMenu"

import "./Room.scss"

const CloseButton = withStyles(() => ({
  root: {
    textTransform: "none",
    position: "absolute",
    top: "5vmin",
    left: 40,
    fontWeight: "bold",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontSize: 16,
    height: 30,
    zIndex: 4,
    color: "#1F1534",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      fontWeight: "bold",
    },
  },
}))(IconButton)

const Room = ({
  roomName, token, logoutTextChat, handleLogout,
}) => {
  const [room, setRoom] = useState(null)
  const [participants, setParticipants] = useState([])
  const context = useContext(VideoChatContext)
  const {
    openHumanBody, disableVideo, disableAudio, setLogoutTextChat, openTextChat,
  } = context

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} type="remote" />
  ))

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant])
    }
    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) => prevParticipants.filter((p) => p !== participant))
    }

    Video.connect(token, {
      name: roomName,
    }).then((room) => {
      setRoom(room)
      room.on("participantConnected", participantConnected)
      room.on("participantDisconnected", participantDisconnected)
      room.participants.forEach(participantConnected)
    })

    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach((trackPublication) => {
            trackPublication.track.stop()
          })
          currentRoom.disconnect()
          return null
        }
        return currentRoom
      })
    }
  }, [roomName, token])

  useEffect(() => {
    if (room && disableAudio) {
      room.localParticipant.audioTracks.forEach((publication) => {
        publication.track.disable()
      })
    } else if (room && !disableAudio) {
      room.localParticipant.audioTracks.forEach((publication) => {
        publication.track.enable()
      })
    }
  }, [room, disableAudio])

  useEffect(() => {
    if (room && disableVideo) {
      room.localParticipant.videoTracks.forEach((publication) => {
        publication.track.disable()
      })
    } else if (room && !disableVideo) {
      room.localParticipant.videoTracks.forEach((publication) => {
        publication.track.enable()
      })
    }
  }, [room, disableVideo])

  return (
    <div className="room">
      <div className="video">
        <CloseButton aria-label="delete" onClick={handleLogout}>
          <CloseIcon />
        </CloseButton>

        <VideoMenu />

        <div className="remote-participant">{remoteParticipants[0]}</div>
        <div className={(openHumanBody || openTextChat) ? "local-participant-tab" : "local-participant"}>
          {room ? (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
              room={room}
              type="local"
            />
          ) : (
            ""
          )}
        </div>
        <Legend chatOpen={(openHumanBody || openTextChat)} logoutTextChat={logoutTextChat} />
      </div>
      { openHumanBody && (
        <Chat>
          <Male />
          <PainClassification />
        </Chat>
      )}
      <TextChat logoutTextChat={logoutTextChat} />
    </div>
  )
}

export default Room
