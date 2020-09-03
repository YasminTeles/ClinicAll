import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class UrinaryBladder extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Urinary Bladder"
            placement="right">
              <path
                id="urinary_bladder" 
                className="urinary_bladder"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M231.739,325.129
                  c-15.16-2.202-28.836,18.655-9.9,21.638C236,349,251.281,331.751,232.759,325.776"/>
          </Tooltip>
        )
    }
}

export default UrinaryBladder
