import React from "react"

import PlanContent from "../components/appointment/PlanContent"
import Header from "../components/header/Header"
import { AppointmentProvider } from "../components/appointment/AppointmentContext";
import DoctorInfo from "../components/appointment/DoctorInfo"
import TimeSchedule from "../components/appointment/TimeSchedule"

import "./Appointment.scss"

function Appointment() {
  return (
    <AppointmentProvider>
      <Header />
      <PlanContent>
        <DoctorInfo/>
      </PlanContent>
      <TimeSchedule/>
    </AppointmentProvider>
  )
}

export default Appointment
