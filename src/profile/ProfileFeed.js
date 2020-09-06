import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"
import _ from "lodash"
import moment from "moment-timezone"

import { addUser, addDoctors } from "../actions"
import Header from "../components/header/Header"
import api from "../services/api"
// import Home from "./Home"
import PreviousAppointments from "./PreviousAppointments"
import UserMainInfo from "./UserMainInfo"

class ProfileFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newAppointments: [],
      oldAppointments: [],
      doctors: [],
      quantity: 0,
    }
  }

  async componentDidMount() {
    const { currentUser, dispatch } = this.props
    const { id } = currentUser
    const {
      newAppointments, oldAppointments, doctors,
    } = this.state

    await api.get("/userappointments", { params: { user_id: id } }).then((appresponse) => {
      this.setState({ ...this.state, quantity: appresponse.data.length })
      appresponse.data.forEach((value) => {
        const currentDate = moment(new Date()).tz("America/Sao_Paulo").format()
        const appDate = moment(value.date).tz("America/Sao_Paulo").format()
        const app = {
          ...value,
          date: appDate,
        }
        const newApp = newAppointments
        const oldApp = oldAppointments
        const newDoctors = doctors
        if (appDate < currentDate) {
          oldApp.push(app)
        } else {
          newApp.push(app)
        }
        const doctor = {
          name: value.name,
          speciality: value.speciality,
          id: value.doctor_id,
          avatar: value.avatar,
        }
        newDoctors.push(doctor)
        this.setState({
          newAppointments: newApp,
          oldAppointments: oldApp,
          doctors: newDoctors,
        })
        // console.log(newDoctors)
        dispatch(addDoctors(doctor))
      })
    })
    // api.post("/connections", { user_id: id })
  }

  render() {
    const {
      doctors, newAppointments, oldAppointments, quantity,
    } = this.state

    return (
      <div>
        { (!_.isEmpty(doctors) && doctors.length === quantity)
          && (
          <>
            <UserMainInfo doctors={doctors} newAppointments={newAppointments} />
            <PreviousAppointments oldAppointments={oldAppointments} />
          </>
          )}
      </div>
    )
  }
}

export default connect((store) => ({ currentUser: store.user, doctors: store.doctors }))(ProfileFeed)