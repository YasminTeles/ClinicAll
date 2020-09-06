import React, { useState } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import {
  Button, Typography, CardHeader, Card, Avatar,
} from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/core/styles"

import { addDoctor } from "../../actions/index"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginLeft: 50,
    width: "90%",
    height: 80,
    borderRadius: 20,
  },
  doctor: {
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    marginTop: 4,
    alignItems: "center",
    padding: 16,
    display: "flex",
    paddingLeft: 42,
    paddingTop: 10,
    paddingRight: 42,
  },
  title: {
    fontFamily: "Mulish",
    fontSize: 22,
    marginBottom: 0,
    marginLeft: 12,
  },
  price: {
    fontFamily: "Mulish",
    fontSize: 18,
    marginBottom: 0,
    fontWeight: "bold",
    marginTop: 4,
    marginRight: 32,
  },
  button: {
    marginTop: 16,
  },
  avatar: {
    height: 50,
    width: 50,
  },
}))

const ColorButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontWeight: "bold",
    backgroundColor: "#096262",
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}))(Button)

function Doctor(props) {
  const [selected, setSelected] = useState(false)
  const classes = useStyles()
  const { doctor, user = {} } = props
  const userEnsurance = user.ensurances || "Unimed"
  const {
    avatar, name, price, ensurances = [],
  } = doctor

  const handleExpandClick = () => {
    props.dispatch(addDoctor(doctor))
    setSelected(!selected)
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar src={avatar} alt={name} className={classes.avatar} />
          }
          action={(
            <ColorButton variant="contained" color="primary" className={classes.button} disableElevation onClick={handleExpandClick}>
              Marcar
            </ColorButton>
          )}
          title={(
            <div className={classes.doctor}>
              <Typography variant="h5" gutterBottom className={classes.title}>
                {name}
              </Typography>
              <Typography variant="h5" gutterBottom className={classes.price}>
                { ensurances.includes(userEnsurance) ? "Coberto" : `R$ ${price}`}
              </Typography>
            </div>
          )}
          className={classes.header}
        />
      </Card>
      { selected && <Redirect to={{ pathname: "/doctor" }} />}
    </div>
  )
}

export default connect((store) => ({ chosenDoctor: store.doctor, user: store.user }))(Doctor)
