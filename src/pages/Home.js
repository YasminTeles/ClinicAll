import React from "react"

import { useAuth0 } from "@auth0/auth0-react"

import LoginButton from "../components/authentication/LoginButton"
import LogoutButton from "../components/authentication/LogoutButton"
import logo from "../images/logo.png"

function Home() {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </header>
    </div>
  )
}

export default Home
