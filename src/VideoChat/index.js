import React from "react"

import "./App.scss"
import VideoChat from "./VideoChat"

const Chat = () => (
  <div className="app">
    <header>
      <h1>ClinicAll</h1>
    </header>
    <main>
      <VideoChat />
    </main>
    <footer>
      <p>
        Made with
        {" "}
        <span role="img" aria-label="React">
          ⚛
        </span>
        {" "}
        by
        {" "}
        <a href="https://twitter.com/ingriddidi23">@clinicall</a>
      </p>
    </footer>
  </div>
)

export default Chat
