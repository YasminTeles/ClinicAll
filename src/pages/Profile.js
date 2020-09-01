import React from "react"

import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"

import Home from "./Home"

function Profile() {
  const { user } = useAuth0()
  return (
    <div>
      <header>
        <h1>
          Bem vinda de volta,
          {" "}
          {user.name}
        </h1>
      </header>

    </div>
  )
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Home />,
})
