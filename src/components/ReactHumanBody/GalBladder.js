import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class GalBladder extends Component {

    render() { 
      const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Gall Bladder"
            placement="right">
            <path
              id="gall_bladder"
              className="gall_bladder"
              fill={fillColor} onClick={onClick}
              fillOpacity="0.5"
              stroke="#787878"
              strokeWidth="0.5"
              d="M214.75,231.5
                c-2.462-0.055-8.877-1.733-10.175,1.517c-1.906,4.77,7.269,4.012,9.553,3.994c2.029-0.017,9.188,0.599,9.7-2.883
                c0.47-3.208-7.819-2.605-9.827-2.628"/>
          </Tooltip>
        )
    }
}

export default GalBladder
