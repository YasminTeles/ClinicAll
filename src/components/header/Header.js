import React from "react"

import logo from "../../assets/logo.svg"
import Menu from "./Menu"

import "./Header.scss"

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <Menu />
    </div>
  )
}

export default Header
