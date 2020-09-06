import React, { useContext, useEffect, useState } from "react"

import api from "../../services/api"
import { AppointmentContext } from "./AppointmentContext"
import Doctor from "./Doctor"

import "./DoctorsList.scss"

function DoctorsList() {
  const [doctors, setDoctors] = useState([])
  const context = useContext(AppointmentContext)
  const { search } = context

  useEffect(() => {
    api.get("/doctors", { params: { type: "all" } }).then((response) => {
      setDoctors(response.data)
    })
  }, [])

  return (
    <div className={search === "" ? "empty-list" : "full-list"}>
      {
        search !== "" && (
          <div className="information">
            <div className="doctor-header">
              <div className="title">
                {search}
              </div>
              <div className="title2">
                cobertos pelo seu plano e particular
              </div>
            </div>
            <div className="description">
              A ginecologia é a prática da medicina que lida diretamente com a saúde do aparelho reprodutor feminino (vagina, útero e ovários) e mamas.
            </div>
            {
              doctors.filter((doctor) => doctor.speciality === search).slice(0, 4).map((doctor) => <Doctor doctor={doctor} />)
            }
          </div>
        )
      }
    </div>
  )
}

export default DoctorsList
