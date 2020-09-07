import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"
import moment from "moment-timezone"

import { addUser, addDoctors } from "../actions"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import PreviousAppointments from "../profile/PreviousAppointments"
import ProfileFeed from "../profile/ProfileFeed"
import UserMainInfo from "../profile/UserMainInfo"
import api from "../services/api"
import Home from "./Home"

function Profile(props) {
  const [dispatched, setDispatched] = useState(false)
  const { user } = useAuth0()
  const { email, picture, name } = user

  useEffect(() => {
    api.get("/user", { params: { email } }).then((userInfo) => {
      if (userInfo.data.length === 0) {
        api.post("/user/create", {
          name,
          avatar: picture,
          email,
          ensurances: [],
        }).then((response) => {
          const { id } = response.data
          props.dispatch(addUser(response.data))
          setDispatched(true)
        })
      } else {
        const { id } = userInfo.data[0]
        props.dispatch(addUser(userInfo.data[0]))
        setDispatched(true)
      }
    })
  }, [])

  return (
    <div>
      <Header />

      <h1 style={{ marginLeft: 50, marginTop: 30 }}>
        Bem vinda de volta,
        {" "}
        {user.name}
      </h1>

      <div style={{ fontSize: 18, marginLeft: 50 }}>
        Plano Unimed
      </div>

      {dispatched && <ProfileFeed />}
      <Footer />
    </div>
  )
}

export default connect((store) => ({ currentUser: store.user, doctors: store.doctors }))(withAuthenticationRequired(Profile, {
  onRedirecting: () => <Home />,
}))
