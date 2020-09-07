import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import {
  Card, CardMedia, CardContent, Typography, Paper, CardActions, Button,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import moment from "moment-timezone"

import AppointmentButton from "../components/appointment/AppointmentButton"
import "./PreviousAppointments.scss"

const RegularButton = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontSize: 16,
    color: "#096262",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      fontWeight: "bold",
    },
  },
}))(Button)

function PreviousAppointments(props) {
  // const [viewMore, setViewMore] = useState(false)
  const { oldAppointments } = props

  // const handleViewMore = () => {
  //   setViewMore(true)
  // }

  return (
    <>
      <div className="previous-app">
        <div className="historic-header">Histórico de consultas</div>
        <div className="historic-app">
          {
              oldAppointments.splice(0, 3).map((app) => (
                <Card
                  variant="outlined"
                  elevation={0}
                  className="app-card"
                >
                  <CardMedia
                    className="card-media"
                    image={app.avatar}
                    title="Doctor"
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="h2" className="name">
                      {app.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className="speciality">
                      {app.speciality}
                    </Typography>
                    <Typography variant="body2" component="p" className="time">
                      {`${moment(app.date).tz("America/Sao_Paulo").fromNow()
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
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className="description">
                      Consulta de rotina na qual conversaram sobre a possibilidade de realizar exame de covid-19.
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      className="key-words-header"
                    >
                      Palavras-chaves
                    </Typography>
                    <div style={{ display: "flex" }}>
                      {["Covid-19", "Vacina", "Falta de ar", "Pulmão"].map((key) => (
                        <Paper
                          elevation={0}
                          style={{
                            marginRight: 8, backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", fontSize: 12, padding: 5, textAlign: "center",
                          }}
                        >
                          {key}
                        </Paper>
                      ))}
                    </div>
                  </CardContent>
                  <CardActions>
                    <RegularButton variant="text" color="primary" className="button" startIcon={<ArrowForwardIcon />} disableElevation>
                      Ver mais
                    </RegularButton>
                  </CardActions>
                </Card>
              ))
            }
          <AppointmentButton />
        </div>
      </div>
    </>
  )
}

export default PreviousAppointments
