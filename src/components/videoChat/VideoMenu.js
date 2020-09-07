import React from "react"

import Button from "@material-ui/core/Button"
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import SpeakerNotesOffOutlinedIcon from '@material-ui/icons/SpeakerNotesOffOutlined';
import AccessibilityOutlinedIcon from '@material-ui/icons/AccessibilityOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { withStyles } from "@material-ui/core/styles"
import IconButton from '@material-ui/core/IconButton';

import { VideoChatContext } from "./videoChatContext"

import "./VideoMenu.scss"

const RegularButton = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: 5,
    fontFamily: "Mulish",
    fontSize: 10,
    color: "white",
    backgroundColor: "#FF3459",
    marginBottom: 5,
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      fontWeight: "bold",
    },
  },
}))(Button)

class VideoMenu extends React.Component {
  static contextType = VideoChatContext

  render(){
    const context = this.context
    const {
      disableAudio,
      disableVideo,
      changeAudioState,
      changeVideoState,
      changeOpenHumanBody,
      openHumanBody,
      disableLegend,
      toggleLegend,
      openTextChat,
      toggleTextChat,
      disableAnnotation,
      toggleAnnotations
    } = context
    return(
      <div className="box">
        <RegularButton variant="text" color="primary" disabled className={disableAudio ? "buttonoff" : "buttonon"} disableElevation>
          Audio {disableAudio ? 'on' : 'off'}
        </RegularButton>

        <IconButton aria-label="delete" color="secondary" className={disableAudio ? "buttonoff" : "buttonon"} onClick={() => changeAudioState()}>
          <MicOffOutlinedIcon />
        </IconButton>

        <IconButton aria-label="delete" color="secondary" className={disableVideo ? "buttonoff" : "buttonon"} onClick={() => changeVideoState()}>
          <VideocamOffOutlinedIcon />
        </IconButton>

        <IconButton
          aria-label="delete"
          color="secondary"
          className={disableLegend ? "buttonoff" : "buttonon"}
          onClick={() => toggleLegend()}
        >
          <SpeakerNotesOffOutlinedIcon />
        </IconButton>

        <IconButton
          aria-label="delete"
          color="secondary"
          className={openTextChat ? "buttonoff" : "buttonon"}
          onClick={() => toggleTextChat()}
        >
          <ForumOutlinedIcon />
        </IconButton>

        <IconButton aria-label="delete" color="secondary" className={openHumanBody ? "buttonoff" : "buttonon"} onClick={() => changeOpenHumanBody()}>
          <AccessibilityOutlinedIcon />
        </IconButton>

        <IconButton aria-label="delete" color="secondary" className={disableAnnotation ? "buttonoff" : "buttonon"} onClick={() => toggleAnnotations()}>
          <DescriptionOutlinedIcon />
        </IconButton>
      </div>
    )
  }
}

export default VideoMenu
