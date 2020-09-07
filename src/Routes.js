import React from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"

import { useAuth0 } from "@auth0/auth0-react"

import Appointment from "./pages/Appointment"
import DoctorAppointment from "./pages/DoctorAppointment"
import Feedback from "./pages/Feedback"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Review from "./pages/Review"
import VideoChat from "./pages/VideoChat"

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
      <Route path="/feedback" component={Feedback} />
      <Route path="/review" component={Review} />
      <Route path="/appointments" component={Appointment} />
      <Route path="/chat" component={VideoChat} />
      <Route path="/doctor" component={DoctorAppointment} />
    </BrowserRouter>
  )
}

export default Routes
