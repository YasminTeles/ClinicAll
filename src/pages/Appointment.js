import React from "react"

import { AppointmentProvider } from "../components/appointment/AppointmentContext"
import DoctorsList from "../components/appointment/DoctorsList"
import PlanContent from "../components/appointment/PlanContent"
import SearchSpeciality from "../components/appointment/SearchSpeciality"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

import "./Appointment.scss"

function Appointment() {
  return (
    <AppointmentProvider>
      <Header />
      <PlanContent>
        <SearchSpeciality />
      </PlanContent>
      <DoctorsList />
      <Footer />
    </AppointmentProvider>
  )
}

export default Appointment
