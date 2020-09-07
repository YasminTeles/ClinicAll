import React, { useState } from "react"
import { connect } from "react-redux"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

import { addPain } from "../../actions/index"

import "./PainValues.scss"

const RegularButton = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontSize: 16,
    width: 60,
    minWidth: 40,
    color: "white",
    backgroundColor: "#096262",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      fontWeight: "bold",
    },
  },
}))(Button)

function PainValues(props) {
  const [painValue, setPainValue] = useState(null)
  const { setPain } = props
  return (
    <div className="values">
      <div className="buttons">
        <Button variant="outlined" className={painValue === 1 ? "pain-selected" : "pain-default"} onClick={() => { setPainValue(1); setPain(1) }}> 1 </Button>
        <Button variant="outlined" className={painValue === 2 ? "pain-selected" : "pain-default"} onClick={() => { setPainValue(2); setPain(2) }}> 2 </Button>
        <Button variant="outlined" className={painValue === 3 ? "pain-selected" : "pain-default"} onClick={() => { setPainValue(3); setPain(3) }}> 3 </Button>
        <Button variant="outlined" className={painValue === 4 ? "pain-selected" : "pain-default"} onClick={() => { setPainValue(4); setPain(4) }}> 4 </Button>
        <Button variant="outlined" className={painValue === 5 ? "pain-selected" : "pain-default"} onClick={() => { setPainValue(5); setPain(5) }}> 5 </Button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setPain: (value) => {
    dispatch(addPain(value))
  },
})

export default connect(null, mapDispatchToProps)(PainValues)
