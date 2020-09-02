import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from "@material-ui/core/styles"

import Video from "twilio-video"

import Participant from "./Participant"
import "./Room.scss"

const RegularButton = withStyles(() => ({
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
}))(Button)

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null)
  const [participants, setParticipants] = useState([])

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} type="remote"/>
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

  return (
    <div className="room">
      <RegularButton variant="text" color="primary" className="button" startIcon={<ArrowBackIcon />} disableElevation onClick={handleLogout}>
        Voltar para o dashboard
      </RegularButton>

      <div className="remote-participant">{remoteParticipants[0]}</div>
      <div className="local-participant">
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
            type="local"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Room
