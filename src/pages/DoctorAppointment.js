import React from "react"

import { AppointmentProvider } from "../components/appointment/AppointmentContext"
import DoctorInfo from "../components/appointment/DoctorInfo"
import PlanContent from "../components/appointment/PlanContent"
import TimeSchedule from "../components/appointment/TimeSchedule"
import Header from "../components/header/Header"

import "./Appointment.scss"

function Appointment() {
  return (
    <AppointmentProvider>
      <Header />
      <PlanContent>
        <DoctorInfo />
      </PlanContent>
      <TimeSchedule />
    </AppointmentProvider>
  )
}

export default Appointment
