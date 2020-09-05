import React, {useState, useContext} from "react"
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import { Divider, Button, Paper } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import Times from "./Times"
import {AppointmentContext} from "./AppointmentContext"
import calendar from "../../assets/calendar.svg"
import AppointmentScheduled from "./AppointmentScheduled"
import {months, weekdays} from "./variables"
import { connect } from 'react-redux'
import { addAppointment } from "../../actions/index";

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

function TimeSchedule(props){
  const context = useContext(AppointmentContext)
  const {time} = context
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [confirmed, setConfirmed] = useState(false)
  const {appointments, doctor} = props

  const confirmAppointment = () => {
    const appointment = {
      doctor: doctor,
      time: time,
      day: selectedDate,
    }
    const userAppointments = appointments
    userAppointments.push(appointment)
    props.dispatch(addAppointment(userAppointments))
    setConfirmed(true)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return(
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
                {weekdays[selectedDate.getDay()]}, {selectedDate.getDate()} de {months[selectedDate.getMonth()]}
              </div>
              <div className="option-description">
                Selecione um horários disponeiveis abaixo para marcar a sua consulta.
              </div>
              <Times/>
            </div>
          </div>
          <Divider/>
          <div className="confirmation-box">
            {confirmed ? (
              <React.Fragment>
                <AppointmentScheduled/>
                <img src={calendar} className="calendar" alt="calendar" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="confirmation-text">
                  Consulta online marcarda dia {selectedDate.getDate()} de {months[selectedDate.getMonth()]} às {time}?
                </div>
                <ConfirmButton variant="text" color="primary" className="button" disableElevation onClick={confirmAppointment}>Confirmar</ConfirmButton>
              </React.Fragment>
            )}
          </div>
        </Paper>
    </div>
  )
}

export default connect(store => ({ appointments: store.appointments, doctor: store.doctor }))(TimeSchedule)
