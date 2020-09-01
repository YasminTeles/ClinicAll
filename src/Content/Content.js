import React from 'react';
import doctors from '../images/doctors.svg'
import Text from './Text'

import "./Content.scss";

function Content() {
  return (
    <div className='content-group'>
      <Text/>
      <img src={doctors} className="doctors" alt="doctors"/>
    </div>
  );
}

export default Content;
