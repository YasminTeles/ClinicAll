import React, { useState } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import {
  Button, Avatar, Paper, IconButton,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import StarOutlinedIcon from "@material-ui/icons/StarOutlined"
import _ from "lodash"

import "./Feedback.scss"

const DashboardButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    color: "#096262",
    backgroundColor: "white",
    border: "solid",
    borderWidth: "thin",
    marginRight: 20,
    "&:hover": {
      backgroundColor: "#096262",
      color: "white",
      fontWeight: "bold",
    },
  },
}))(Button)

const StarButton = withStyles(() => ({
  root: {
    color: "#096262",
  },
}))(IconButton)

const ReviewButton = withStyles(() => ({
  root: {
    color: "white",
    backgroundColor: "#096262",
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    "&:hover": {
      backgroundColor: "#white",
      color: "#096262",
      fontWeight: "bold",
    },
  },
}))(Button)

class Feedback extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      path: null,
      stars: [],
    }
  }

  highlightStar = (index) => {
    const newStars = []
    for (let i = 1; i <= index; i++)
      newStars.push(i)
    this.setState({
      ...this.state,
      stars: newStars
    })
  }

  render() {
    const { doctor } = this.props
    const { path, stars } = this.state

    return (
      <>
        <div className="feedback-header">
          Consulta encerrada
        </div>
        <div className="feedback-information">Você acabou de se consultar com:</div>
        <div className="doctor-information">
          <Paper
            elevation={0}
            variant="outlined"
            style={{
              display: "flex", borderRadius: 20, height: 80, width: "20%", justifyContent: "space-evenly", marginTop: 40,
            }}
          >
            <Avatar src={doctor.avatar} alt={doctor.name} style={{ height: 60, width: 60, marginTop: "3%" }} />
            <div style={{ fontSize: 20, marginTop: "9%", fontWeight: 500 }}>{doctor.name}</div>
          </Paper>
        </div>
        <div className="buttons">
          <DashboardButton variant="contained" disableElevation onClick={() => this.setState({ ...this.state, path: "profile" })}>
            Voltar para o dashboard
          </DashboardButton>
          <ReviewButton variant="contained" disableElevation onClick={() => this.setState({ ...this.state, path: "review" })}>
            Ver resumo da consulta
          </ReviewButton>
        </div>
        <div className="classification">
          <Paper
            elevation={0}
            variant="outlined"
            style={{
              borderRadius: 20, height: 80, width: "20%", marginTop: 40, paddingBottom: 10,
            }}
          >
            <div style={{
              fontSize: 16, marginTop: "7%", fontWeight: 500, color: "rgba(77, 77, 77, 0.87)", textAlign: "center",
            }}
            >
              Como foi a chamada?
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {[1, 2, 3, 4, 5].map((index) => (
                <StarButton onClick={() => this.highlightStar(index)}>
                  { stars.includes(index) ? <StarOutlinedIcon /> : <StarBorderOutlinedIcon />}
                </StarButton>
              ))}
            </div>
          </Paper>
        </div>
        {!_.isEmpty(path) && <Redirect to={{ pathname: `/${path}` }} />}
      </>
    )
  }
}

export default connect((store) => ({ doctor: store.doctor }))(Feedback)
