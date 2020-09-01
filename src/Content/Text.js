import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import "./Text.scss";

const ColorButton = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    borderRadius: 55,
    fontFamily: 'Mulish',
    backgroundColor: '#13DEDE',
    '&:hover': {
      backgroundColor: '#13BADE',
      fontWeight: 'bold'
    },
  },
}))(Button);

function Text() {
  return (
    <div className='text'>
      <div className='title'>
        Cuidado médico virtual pensado para você
      </div>
      <div className='description'>
        Marcação online e atendimento acessível. Forma de utilizar a tecnologia a favor de pessoas com cuidados especiais etc etc para marcar o texto desse parágrafo.
      </div>
      <ColorButton variant="contained" color="primary" className='button' disableElevation>
        Consulta hoje
      </ColorButton>
    </div>
  );
}

export default Text;
