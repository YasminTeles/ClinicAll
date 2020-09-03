import React from "react"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PainValues from "./PainValues"

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
    width: 300
  },
  header: {
    color: 'black',
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Mulish',
    marginLeft: 20
  },
  button: {
    marginTop: -10
  },
  description: {
    fontSize: 10,
    marginLeft: 10,
    marginRight: 20,
    fontFamily: 'Mulish'
  }
}));

function PainClassification() {
  const classes = useStyles();
  return(
    <React.Fragment>
      <Typography className={classes.title} gutterBottom>
        Nível da dor
      </Typography>
      <PainValues/>
    </React.Fragment>
  )
}

export default PainClassification
