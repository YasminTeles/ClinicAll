import React, { useEffect } from "react"
import { connect } from "react-redux"

import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"

import { addUser } from "../actions"
import AppointmentButton from "../components/appointment/AppointmentButton"
import Header from "../components/header/Header"
import api from "../services/api"
import Home from "./Home"

function Profile(props) {
  const { user } = useAuth0()
  const { email, picture, name } = user

  useEffect(() => {
    api.get("/user", { params: { email } }).then((userInfo) => {
      if (userInfo.data.length === 0) {
        api.post("/user", {
          name,
          avatar: picture,
          email,
          ensurances: [],
        }).then((response) => {
          const { id } = response.data
          props.dispatch(addUser(response.data))
          api.post("/connections", { user_id: id })
        })
      } else {
        const { id } = userInfo.data
        props.dispatch(addUser(userInfo.data))
        api.post("/connections", { user_id: id })
      }
    })
  }, [])

  return (
    <>
      <Header />

      <h1>
        Bem vinda de volta,
        {" "}
        {user.name}
      </h1>

      <AppointmentButton />
    </>
  )
}

export default connect((store) => ({ currentUser: store.user }))(withAuthenticationRequired(Profile, {
  onRedirecting: () => <Home />,
}))
