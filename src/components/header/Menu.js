import React, {useState} from "react"

import { useAuth0 } from "@auth0/auth0-react"
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';

import LoginButton from "../authentication/LoginButton"
import { useLocation, Redirect } from 'react-router-dom'
import User from "./User"

import "./Menu.scss"

const useStyles = makeStyles({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontSize: 16,
    height: 30,
    color: "#1F1534",
    "&:hover": {
      color: "#096262",
      backgroundColor: "white",
      fontWeight: "bold",
    },
  },
  selected: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontSize: 16,
    height: 30,
    color: "#096262",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  label: {
    textTransform: 'capitalize',
  },
});

function Menu() {
  const [page, setPage] = useState("")
  const { isAuthenticated } = useAuth0()
  let location = useLocation();
  const classes = useStyles();

  return (
    <div className="button-group">
      <Button
        classes={{
          root: location.pathname === "/" ? classes.selected : classes.root,
          label: classes.label,
        }}
        onClick={() => setPage("/")}
      >
        {isAuthenticated ? ("Dashboard") : ("Home")}
      </Button>
      <Button
        classes={{
          root: (location.pathname === "/appointments" || location.pathname ===  "/doctor") ? classes.selected : classes.root,
          label: classes.label,
        }}
        onClick={() => setPage("/appointments")}
      >
        Consultas
      </Button>
      <Button
        classes={{
          root: location.pathname === "/resources" ? classes.selected : classes.root,
          label: classes.label,
        }}
        onClick={() => setPage("/resources")}
      >
        Recursos
      </Button>
      <Button
        classes={{
          root: location.pathname === "/services" ? classes.selected : classes.root,
          label: classes.label,
        }}
      >
        Serviços
      </Button>
      <Button
        classes={{
          root: location.pathname === "/about" ? classes.selected : classes.root,
          label: classes.label,
        }}
      >
        Sobre nós
      </Button>

      {!isAuthenticated ? (<LoginButton />) : (<User />)}
      {page !== "" && <Redirect to={{ pathname: page }} />}
    </div>
  )
}

export default Menu
