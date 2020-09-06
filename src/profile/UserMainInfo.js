import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"

import DateFnsUtils from "@date-io/date-fns"
import {
  Paper, Avatar, Button,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import Brightness1Icon from "@material-ui/icons/Brightness1"
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from "@material-ui/pickers"
import moment from "moment-timezone"

const ColorButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontWeight: "bold",
    backgroundColor: "#096262",
    marginLeft: "22%",
    marginTop: 14,
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}))(Button)

function UserMainInfo(props) {
  const [open, setOpen] = useState(false)
  const [firstAppointment, setFirstAppointment] = useState({})
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { doctors, newAppointments } = props

  useEffect(() => {
    const first = newAppointments.reduce((app, value) => {
      if (value.date < app.date) { app = value }
      return app
    }, newAppointments[0])
    setFirstAppointment(first)
  }, [])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <div style={{ display: "flex", marginTop: 40, justifyContent: "space-around" }}>
      <Paper
        variant="outlined"
        elevation={0}
        style={{
          width: 300, height: 280, padding: "30px 0px 0px 30px",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: "bold" }}>Seus médicos</div>
        {doctors.slice(0, 3).map((doctor) => (
          <div style={{ display: "flex", marginTop: 25 }}>
            <Avatar
              src={doctor.avatar}
              alt={doctor.name}
              style={{
                height: 50,
                width: 50,
              }}
            />
            <div style={{ marginTop: 5, marginLeft: 25 }}>
              <div style={{ fontWeight: "bold" }}>{doctor.name}</div>
              <div style={{ fontSize: 14 }}>{doctor.speciality}</div>
            </div>
          </div>
        ))}
      </Paper>
      <Paper
        variant="outlined"
        elevation={0}
        style={{
          width: 300, height: 280, padding: "30px 0px 0px 0px",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: "bold", marginLeft: 30 }}>Próxima consulta</div>
        <Avatar
          src={firstAppointment.avatar}
          alt={firstAppointment.name}
          style={{
            height: 90,
            width: 90,
            marginTop: 16,
            marginLeft: "35%",
          }}
        />
        <div style={{ marginTop: 10 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Brightness1Icon style={{ color: "#5FD855", width: 10, marginRight: 5 }} />
            <div style={{ fontWeight: "bold", textAlign: "center" }}>{firstAppointment.name}</div>
          </div>
          <div style={{ fontSize: 14, textAlign: "center", marginLeft: -10 }}>{firstAppointment.speciality}</div>
          <div style={{
            textAlign: "center", marginTop: 14, marginLeft: -10, fontWeight: "bold",
          }}
          >
            {`Faltam ${moment(firstAppointment.date).tz("America/Sao_Paulo").fromNow().replace("in", "")
              .replace("hours", "horas")
              .replace("day", "dia")
              .replace("month", "mês")
              .replace("year", "ano")
              .replace("minute", "minuto")
              .replace("ago", "")
              .replace("a ", "1 ")
              .replace("days", "dias")
              .replace("months", "meses")
              .replace("minutes", "minutos")
              .replace("years", "anos")}`}
          </div>
          <ColorButton variant="contained" color="primary" className="button" disableElevatio onClick={() => setOpen(true)}>
            Entrar na consulta
          </ColorButton>
        </div>
      </Paper>
      <Paper
        variant="outlined"
        elevation={0}
        style={{
          borderColor: "#E5E5E5",
        }}
      >
        <div className="picker">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              autoOk
              variant="static"
              openTo="date"
              disableToolbar
              initialFocusedDate={firstAppointment.date}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>
      </Paper>
      <div>
        {open && <Redirect to={{ pathname: "/chat" }} />}
      </div>
    </div>
  )
}

export default UserMainInfo
