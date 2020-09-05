import React, { useState, useEffect, useContext } from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Video from "twilio-video"
import { v4 as uuidv4 } from "uuid"

import createChat from "../../services/chat"
import createRecognizer from "../../services/speechToText"
import Male from "../ReactHumanBody/Male"
import PainClassification from "../ReactHumanBody/PainClassification"
import Chat from "./Chat"
import Legend from "./Legend"
import Participant from "./Participant"
import { VideoChatContext } from "./videoChatContext"
import VideoMenu from "./VideoMenu"

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
  const context = useContext(VideoChatContext)
  const { openHumanBody, disableVideo, disableAudio } = context

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
      const uuid = uuidv4()
      createChat(`legend in - ${uuid}`)
      createRecognizer()
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
        <RegularButton variant="text" color="primary" className="button" startIcon={<ArrowBackIcon />} disableElevation onClick={handleLogout}>
          Voltar para o dashboard
        </RegularButton>

        <VideoMenu />

        <div className="remote-participant">{remoteParticipants[0]}</div>
        <div className={openHumanBody ? "local-participant-tab" : "local-participant"}>
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
        <Legend />
      </div>
      { openHumanBody && (
        <Chat>
          <Male />
          <PainClassification />
        </Chat>
      )}
    </div>
  )
}

export default Room
