import React from "react"

import PlanContent from "../components/appointment/PlanContent"
import Header from "../components/header/Header"
import { AppointmentProvider } from "../components/appointment/AppointmentContext";
import SearchSpeciality from "../components/appointment/SearchSpeciality"
import DoctorsList from "../components/appointment/DoctorsList"

import "./Appointment.scss"

function Appointment() {

  return (
    <AppointmentProvider>
      <Header />
      <PlanContent>
        <SearchSpeciality/>
      </PlanContent>
      <DoctorsList/>
    </AppointmentProvider>
  )
}

export default Appointment
