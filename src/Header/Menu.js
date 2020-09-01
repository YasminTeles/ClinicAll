import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import "./Menu.scss";

const RegularButton = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    borderRadius: 55,
    fontFamily: 'Mulish',
    fontSize: 16,
    height: 30,
    color: '#1F1534',
    '&:hover': {
      color: '#13DEDE',
      backgroundColor: 'white',
      fontWeight: 'bold'
    },
  },
}))(Button);

const JoinButton = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    borderRadius: 55,
    fontFamily: 'Mulish',
    fontSize: 16,
    height: 30,
    backgroundColor: '#5B5B5B',
    '&:hover': {
      backgroundColor: 'black',
      fontWeight: 'bold'
    },
  },
}))(Button);

function Menu() {
  return (
    <div className='button-group'>
      <RegularButton variant="text" color="primary" className='button' disableElevation>
        Home
      </RegularButton>
      <RegularButton variant="text" color="primary" className='button' disableElevation>
        Médicos
      </RegularButton>
      <RegularButton variant="text" color="primary" className='button' disableElevation>
        Recursos
      </RegularButton>
      <RegularButton variant="text" color="primary" className='button' disableElevation>
        Serviços
      </RegularButton>
      <RegularButton variant="text" color="primary" className='button' disableElevation>
        Sobre nós
      </RegularButton>
      <JoinButton variant="contained" color="primary" className='button' disableElevation>
        Entrar
      </JoinButton>
    </div>
  );
}

// backgroundColor: '#13DEDE',
// '&:hover': {
//   backgroundColor: '#13BADE',
// },

export default Menu;
