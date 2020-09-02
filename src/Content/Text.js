import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom"

import "./Text.scss";

const ColorButton = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    borderRadius: 55,
    fontFamily: 'Mulish',
    backgroundColor: '#13DEDE',
    '&:hover': {
      backgroundColor: '#128BAA',
      fontWeight: 'bold'
    },
  },
}))(Button);

class Text extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openChat: false
    }
  }

  openChat = () => {
    this.setState({
      openChat: true
    })
  }

  render(){
    const {openChat} = this.state
    return (
      <div className='text'>
      <div className='title'>
        Cuidado médico virtual pensado para você
      </div>
      <div className='description'>
        Marcação online e atendimento acessível. Forma de utilizar a tecnologia a favor de pessoas com cuidados especiais etc etc para marcar o texto desse parágrafo.
      </div>
      <ColorButton variant="contained" color="primary" className='button' disableElevation onClick={this.openChat}>
        Consulta hoje
      </ColorButton>
      {openChat && <Redirect to={{ pathname: "/chat" }} />}
    </div>
    )
  }
}

export default Text;
