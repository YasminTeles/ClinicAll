import React, {useState} from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

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

function PainValues(){
  const [painValue, setPainValue] = useState(null)

  return(
    <div className="values">
      <div className="buttons">
        <Button variant="outlined" className={painValue === 1 ? "pain-selected" : "pain-default"} onClick={() => setPainValue(1)}> 1 </Button>
        <Button variant="outlined" className={painValue === 2 ? "pain-selected" : "pain-default"} onClick={() => setPainValue(2)}> 2 </Button>
        <Button variant="outlined" className={painValue === 3 ? "pain-selected" : "pain-default"} onClick={() => setPainValue(3)}> 3 </Button>
        <Button variant="outlined" className={painValue === 4 ? "pain-selected" : "pain-default"} onClick={() => setPainValue(4)}> 4 </Button>
        <Button variant="outlined" className={painValue === 5 ? "pain-selected" : "pain-default"} onClick={() => setPainValue(5)}> 5 </Button>
      </div>
      <RegularButton variant="text" color="primary" className="button" disableElevation>
        Ok
      </RegularButton>
    </div>
  )
}

export default PainValues
