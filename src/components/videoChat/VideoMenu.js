import React from "react"
import Button from "@material-ui/core/Button"
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import SpeakerNotesOffOutlinedIcon from '@material-ui/icons/SpeakerNotesOffOutlined';
import AccessibilityOutlinedIcon from '@material-ui/icons/AccessibilityOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
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
    const {disableAudio, disableVideo, changeAudioState, changeVideoState, changeOpenHumanBody, openHumanBody} = context
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

        <IconButton aria-label="delete" color="secondary" className="buttonon">
          <SpeakerNotesOffOutlinedIcon />
        </IconButton>

        <IconButton aria-label="delete" color="secondary" className="buttonon">
          <ChatOutlinedIcon />
        </IconButton>

        <IconButton aria-label="delete" color="secondary" className={openHumanBody ? "buttonoff" : "buttonon"} onClick={() => changeOpenHumanBody()}>
          <AccessibilityOutlinedIcon />
        </IconButton>

        <IconButton aria-label="delete" color="secondary" className="buttonon">
          <DescriptionOutlinedIcon />
        </IconButton>
      </div>
    )
  }
}

// const VideoMenu = () => {
//     const context = useContext(VideoChatContext)
//     const {audioState, videoState, changeAudioState, changeVideoState} = context
//     return (
//       <div className="box">

//         <RegularButton variant="text" color="primary" disabled className={audioState ? "buttonon": "buttonoff"} disableElevation>
//           Audio {audioState ? 'on' : 'off'}
//         </RegularButton>

//         <IconButton aria-label="delete" color="secondary" className={audioState ? "buttonon": "buttonoff"} onClick={changeAudioState()}>
//           <MicOffOutlinedIcon />
//         </IconButton>

//         <IconButton aria-label="delete" color="secondary" className={videoState ? "buttonon": "buttonoff"} onClick={changeVideoState()}>
//           <VideocamOffOutlinedIcon />
//         </IconButton>

//         <IconButton aria-label="delete" color="secondary" className="buttonon">
//           <SpeakerNotesOffOutlinedIcon />
//         </IconButton>

//         <IconButton aria-label="delete" color="secondary" className="buttonon">
//           <ChatOutlinedIcon />
//         </IconButton>

//         <IconButton aria-label="delete" color="secondary" className="buttonon">
//           <AccessibilityOutlinedIcon />
//         </IconButton>

//         <IconButton aria-label="delete" color="secondary" className="buttonon">
//           <DescriptionOutlinedIcon />
//         </IconButton>
//         </div>
//     )
// }

export default VideoMenu
