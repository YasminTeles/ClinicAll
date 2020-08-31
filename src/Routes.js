import React from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"

import { useAuth0 } from "@auth0/auth0-react"

import Home from "./Home"
import Profile from "./pages/Profile"
import Chat from './VideoChat'

function Routes() {
  const { isAuthenticated } = useAuth0()
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={() => (isAuthenticated ? (
          <Redirect to={{ pathname: "/profile" }} />
        ) : (
          <Home />
        ))}
      />
      <Route path="/profile" component={Profile} />
      <Route path="/chat" component={Chat} />
    </BrowserRouter>
  )
}

export default Routes
