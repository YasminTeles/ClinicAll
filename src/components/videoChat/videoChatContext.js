import React, { useState } from "react"

export const VideoChatContext = React.createContext({})

const CustomProvider = ({ children }) => {
  const [disableAudio, setDisabledAudio] = useState(false)
  const [disableVideo, setDisabledVideo] = useState(false)
  const [openHumanBody, setOpenHumanBody] = useState(false)
  const [subtitleState, setSubtitleState] = useState(true)
  const [disableLegend, setDisabledLegend] = useState(false)
  const [openTextChat, setOpenTextChat] = useState(false)
  const [disableAnnotation, setAnnotations] = useState(false)
  const [annotations, setMoreAnnotations] = useState([])
  const context = {
    disableAudio,
    disableVideo,
    openHumanBody,
    subtitleState,
    disableLegend,
    openTextChat,
    disableAnnotation,
    annotations,
    changeAudioState() {
      setDisabledAudio(!disableAudio)
    },
    changeVideoState() {
      setDisabledVideo(!disableVideo)
    },
    changeOpenHumanBody() {
      setOpenHumanBody(!openHumanBody)
      setOpenTextChat(false)
    },
    changeSubtitleState() {
      setSubtitleState(!subtitleState)
    },
    toggleLegend() {
      setDisabledLegend(!disableLegend)
    },
    toggleTextChat() {
      setOpenTextChat(!openTextChat)
      setOpenHumanBody(false)
    },
    toggleAnnotations() {
      setAnnotations(!disableAnnotation)
    },
    addAnnotation(value) {
      annotations.push(value)
      setMoreAnnotations(annotations)
    },
  }

  return (
    <VideoChatContext.Provider value={context}>
      {children}
    </VideoChatContext.Provider>
  )
}

export const VideoChatProvider = CustomProvider
