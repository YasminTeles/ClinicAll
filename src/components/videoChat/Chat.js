import React, { useContext } from "react";

import { VideoChatContext } from "./videoChatContext"
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from "@material-ui/core/Drawer";
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import CardContent from '@material-ui/core/CardContent';

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
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Mulish',
    marginLeft: 8
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

function Chat({children}) {
  const classes = useStyles();
  const context = useContext(VideoChatContext)
  const {openHumanBody, changeOpenHumanBody} = context

  return(
    <SwipeableDrawer anchor="right" variant="persistent" open={openHumanBody} onClose={() => changeOpenHumanBody()} style={{opacity: '90%'}}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <div className={classes.header}>
              <Typography className={classes.title} gutterBottom>
                Tipo de dor
              </Typography>
              <IconButton className={classes.button} aria-label="close" onClick={() => changeOpenHumanBody()}>
                <CloseIcon />
              </IconButton>
          </div>
          <Typography className={classes.description} color="textSecondary" gutterBottom>
            Selecione abaixo qual o tipo de dor e em qual região. Depois, classifique essa dor de 1 a 5.
          </Typography>
        </CardContent>
      </Card>
      {children}
    </SwipeableDrawer>
  )
}

export default Chat
