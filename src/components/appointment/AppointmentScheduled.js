import React from "react"

import CheckIcon from "@material-ui/icons/Check"

import "./AppointmentScheduled.scss"

function AppointmentScheduled() {
  return (
    <div className="appointment-scheduled">
      <div className="appointment-header">
        <CheckIcon className="check-button" />
        <div className="confirmation">
          Consulta online marcada!
        </div>
      </div>
      <div className="prepation">
        Preparo para a consulta
      </div>
      <div className="prepation-step1">
        No dia da consulta, o botão
        {" "}
        <b>Entrar na consulta</b>
        {" "}
        estará disponível na página Dashboard. Basta clicar nele e você será redirecionado para a vídeo chamada com o médico agendado.
      </div>
      <div className="prepation-step1">
        No dia da consulta você precisará apenas de uma conexão de internet estável.
      </div>
      <div className="prepation-step1">
        Disponibilizamos de recursos acessíveis como chat, libras e legendas simultâneas. Caso você precise anotar algo, disponibilizamos o recursos de notas. E não se preocupe, elas ficarão disponíveis para você após a consulta.
      </div>
      <div className="prepation-step1">
        Utilizamos imagens como um recurso para ilustrar a fala do médico, então não se preocupe caso o médico fale algo que fuja do seu entendimento.
      </div>
    </div>
  )
}

export default AppointmentScheduled
