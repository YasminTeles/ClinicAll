import React from "react"

import { withStyles } from "@material-ui/core/styles"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {AppointmentContext} from "./AppointmentContext"

import "./SearchSpeciality.scss"

const GreenSwitch = withStyles({
  switchBase: {
    color: "white",
    '&$checked': {
      color: "white",
    },
    '&$checked + $track': {
      backgroundColor: "#096262",
      opacity: "100%"
    },
  },
  checked: {},
  track: {},
})(Switch);

const specialities = ["Ginecologista", "Cardiologista", "Dentista", "Ortopedista", "Pediatria", "Urologista", "Neurologista"]

class SearchSpeciality extends React.Component {

  static contextType = AppointmentContext

  constructor(props) {
    super(props)
    this.state = {
      openChat: false,
      plan: true,
      particular: true,
    }
  }

  openChat = () => {
    this.setState({
      ...this.state,
      openChat: true,
    })
  }


  render() {
    const {plan, particular } = this.state
    const context = this.context
    const {changeSearch} = context
    const { classes } = this.props

    return (
        <div className="plan-information">
          <div className="plan">
            Plano Unimed
          </div>
          <div className="description">
            As consultas são realizadas por vídeo chamada através da nossa plataforma. Alguns recursos como legenda, libras e tradução por imagem estão disponíveis.
          </div>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={specialities.map((option) => option)}
            onInputChange={(e, v) => changeSearch(v)}
            renderInput={(params) => (
              <TextField {...params} label="Especialidade" margin="normal" variant="outlined" />
            )}
          />
          <FormGroup>
            <FormControlLabel
              classes={classes}
              control={<GreenSwitch checked={plan} onChange={() => this.setState({...this.state, plan: !this.state.plan})} name="plan" />}
              label="Cobertura pelo plano"
            />
            <FormControlLabel
              classes={classes}
              control={<GreenSwitch checked={particular} onChange={() => this.setState({...this.state, particular: !this.state.particular})} name="particular" />}
              label="Particular"
            />
          </FormGroup>
        </div>
      )
  }
}

export default SearchSpeciality
