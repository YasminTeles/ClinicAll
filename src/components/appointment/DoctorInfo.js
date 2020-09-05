import React from "react"
import { Typography, CardHeader, Card, Avatar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  info: {
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 18
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    marginTop: 40
  },
  root: {
    marginTop: 40,
    width: "60%",
    height: 80,
    borderRadius: 20
  },
  header: {
    marginTop: 4,
    alignItems: "center",
    padding: 16,
    display: "flex",
    paddingLeft: 42,
    paddingTop: 10,
    paddingRight: 42
  },
  title: {
    fontFamily: "Mulish",
    fontSize: 22,
    marginBottom: 0,
    marginLeft: 12
  },
  price: {
    fontFamily: "Mulish",
    fontSize: 18,
    marginBottom: 0,
    fontWeight: 'bold',
    marginTop: 4,
    marginRight: 32
  },
  button: {
    marginTop: 16
  },
  avatar: {
    height: 50,
    width: 50
  }
}));

function DoctorInfo(props) {
  const classes = useStyles();
  const {doctor} = props

  return (
    <div>
      <div className={classes.info}>
        {doctor.price === 0 ? "Coberto" : `R$${doctor.price}`}
      </div>
      <div className={classes.description}>
        As consultas são realizadas por vídeo chamada através da nossa plataforma. Alguns recursos como legenda, libras e tradução por imagem estão disponíveis.
      </div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar src={doctor.picture} alt={doctor.name} className={classes.avatar}/>
          }
          title={
            <div className={classes.titleWrapper}>
              <Typography variant="h5" gutterBottom className={classes.title}>
                {doctor.name}
              </Typography>
            </div>
          }
          className={classes.header}
        />
      </Card>
    </div>
  )
}

export default connect(store => ({ doctor: store.doctor }))(DoctorInfo)
