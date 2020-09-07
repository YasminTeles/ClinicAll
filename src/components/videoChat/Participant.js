import React, { useState, useEffect, useRef } from "react"

import "./Participant.scss"

const Participant = ({ participant, type }) => {
  const [videoTracks, setVideoTracks] = useState([])
  const [audioTracks, setAudioTracks] = useState([])

  const videoRef = useRef()
  const audioRef = useRef()

  const trackpubsToTracks = (trackMap) => Array.from(trackMap.values())
    .map((publication) => publication.track)
    .filter((track) => track !== null)

  useEffect(() => {
    const trackSubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => [...videoTracks, track])
      } else {
        setAudioTracks((audioTracks) => [...audioTracks, track])
      }
    }

    const trackUnsubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track))
      } else {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track))
      }
    }

    setVideoTracks(trackpubsToTracks(participant.videoTracks))
    setAudioTracks(trackpubsToTracks(participant.audioTracks))

    participant.on("trackSubscribed", trackSubscribed)
    participant.on("trackUnsubscribed", trackUnsubscribed)

    return () => {
      setVideoTracks([])
      setAudioTracks([])
      participant.removeAllListeners()
    }
  }, [participant])

  useEffect(() => {
    const videoTrack = videoTracks[0]
    if (videoTrack) {
      videoTrack.attach(videoRef.current)
      return () => {
        videoTrack.detach()
      }
    }
  }, [videoTracks])

  useEffect(() => {
    const audioTrack = audioTracks[0]
    if (audioTrack) {
      audioTrack.attach(audioRef.current)
      return () => {
        audioTrack.detach()
      }
    }
  }, [audioTracks])

  return (
    <div className="participant">
      {
        type === "remote" ? (
          <div className="remote">
            <h3 className="name">
              Consulta com
              {" "}
              {/* {participant.identity} */}
              Dra Maria Ferro
            </h3>
            <h4 className="description">O seu plano oferece cobertura total a essa consulta.</h4>
            <video className="video" ref={videoRef} autoPlay />
            <audio className="audio" ref={audioRef} autoPlay />
          </div>
        ) : (
          <div className="local">
            <h3 className="name">{participant.identity}</h3>
            <video className="video" ref={videoRef} autoPlay />
            <audio className="audio" ref={audioRef} autoPlay muted />
          </div>
        )
      }
    </div>
  )
}

export default Participant
