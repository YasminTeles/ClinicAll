import React from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"

import { useAuth0 } from "@auth0/auth0-react"

import Home from "./pages/Home"
import Profile from "./pages/Profile"
import VideoChat from './pages/VideoChat'
import Appointment from './pages/Appointment'
import DoctorAppointment from './pages/DoctorAppointment'

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
        <Route path="/appointments" component={Appointment} />
        <Route path="/chat" component={VideoChat} />
        <Route path="/doctor" component={DoctorAppointment} />
      </BrowserRouter>
  )
}

export default Routes
