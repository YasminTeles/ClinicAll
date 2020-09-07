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

  const description = {
    Ginecologista: "A Ginecologia é a prática da medicina que lida diretamente com a saúde do aparelho reprodutor feminino (vagina, útero e ovários) e mamas.",
    Cardiologista: "Cardiologia é a especialidade médica que se ocupa do diagnóstico e tratamento das doenças que acometem o coração bem como os outros componentes do sistema circulatório.",
    Dentista: "Odontologia ou medicina dentária é a área da saúde humana que estuda e trata do sistema estomatognático.",
    Ortopedista: "A ortopedia é a especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações.",
    Pediatria: "A pediatria é a especialidade médica dedicada à assistência à criança e ao adolescente, nos seus diversos aspectos, sejam eles preventivos ou curativos.",
    Urologista: "Urologia é uma especialidade cirúrgica da medicina que trata do trato urinário de homens e de mulheres e do sistema reprodutor das pessoas do sexo masculino.",
    Neurologista: "Neurologia é a especialidade médica que trata dos distúrbios estruturais do sistema nervoso.",
  }

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
              {description[search]}
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
