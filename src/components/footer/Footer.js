import React from "react"

import logo from "../../assets/logo-branca.svg"

import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <img src={logo} className="logo" alt="logo" />
      <div className="copyright">
        ©Clinicall LTD 2020. Todos os direitos reservados.
      </div>
    </div>
  )
}

export default Footer
