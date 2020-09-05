import React, { useState } from "react"

export const AppointmentContext = React.createContext({})

const CustomProvider = ({ children }) => {
  const [search, setSearch] = useState("")
  const [types, setTypes] = useState([])
  const [time, setTime] = useState("11:30")
  const context = {
    search,
    types,
    time,
    changeSearch(value) {
      setSearch(value)
    },
    changeTypes(value){
      setTypes(types.append(value))
    },
    setTime
  }

  return (
    <AppointmentContext.Provider value={context}>
      {children}
    </AppointmentContext.Provider>
  )
}

export const AppointmentProvider = CustomProvider
