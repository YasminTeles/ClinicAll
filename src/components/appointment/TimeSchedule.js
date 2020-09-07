import React, { useState, useContext } from "react"
import { connect } from "react-redux"

import DateFnsUtils from "@date-io/date-fns"
import { Divider, Button, Paper } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from "@material-ui/pickers"
import _ from "lodash"

import calendar from "../../assets/calendar.svg"
import api from "../../services/api"
import Footer from "../footer/Footer"
import { AppointmentContext } from "./AppointmentContext"
import AppointmentScheduled from "./AppointmentScheduled"
import Times from "./Times"
import { months, weekdays } from "./variables"

import "./TimeSchedule.scss"

const ConfirmButton = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontSize: 14,
    width: 100,
    height: 30,
    minWidth: 40,
    color: "white",
    marginBottom: 20,
    marginRight: 20,
    backgroundColor: "#096262",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
      fontWeight: "bold",
    },
  },
}))(Button)

function TimeSchedule(props) {
  const context = useContext(AppointmentContext)
  const { time } = context
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [confirmed, setConfirmed] = useState(false)
  const { doctor, user = {} } = props

  const confirmAppointment = () => {
    if (!_.isEmpty(user)) {
      api.post("/userappointments/create", {
        user_id: user.id,
        doctor_id: doctor.id,
        date: selectedDate,
        time,
        speciality: doctor.speciality,
        price: doctor.price,
        annotations: doctor.annotations,
      })
      setConfirmed(true)
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <div className="time-schedule">
      <div className="schedule-header">
        <div className="available-time">
          Horários disponíveis
        </div>
      </div>
      <Paper className="scheduler">
        <div className="day-options">
          <div className="picker">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                autoOk
                variant="static"
                openTo="date"
                disableToolbar
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className="time-options">
            <div className="chosen-day">
              {weekdays[selectedDate.getDay()]}
              ,
              {" "}
              {selectedDate.getDate()}
              {" "}
              de
              {" "}
              {months[selectedDate.getMonth()]}
            </div>
            <div className="option-description">
              Selecione um horários disponeiveis abaixo para marcar a sua consulta.
            </div>
            <Times />
          </div>
        </div>
        <Divider />
        <div className="confirmation-box">
          {confirmed ? (
            <>
              <AppointmentScheduled />
              <img src={calendar} className="calendar" alt="calendar" />
            </>
          ) : (
            <>
              <div className="confirmation-text">
                Consulta online marcada dia
                {" "}
                {selectedDate.getDate()}
                {" "}
                de
                {" "}
                {months[selectedDate.getMonth()]}
                {" "}
                às
                {" "}
                {time}
                ?
              </div>
              <ConfirmButton
                variant="text"
                color="primary"
                className="button"
                disableElevation
                onClick={confirmAppointment}
              >
                Confirmar
              </ConfirmButton>
            </>
          )}
        </div>
      </Paper>
      <Footer />
    </div>
  )
}

export default connect((store) => ({ doctor: store.doctor, user: store.user }))(TimeSchedule)
