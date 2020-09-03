import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Pancreas extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Pancreas"
            placement="right">
              <path
                id="pancreas"
                className="pancreas"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M266.973,254.765
                  c-16.765,9.238-29.807,14.289-29.807,14.289l-18.568,0.76l-8.433-4.23l-1.955-2.581l1.489-3.148l10.314-4.721l15.551-0.622
                  l16.05-4.788l14.233-4.833L268.4,246l1.819,2.807l-0.144,3.391L266.973,254.765z"/>
          </Tooltip>
        )
    }
}

export default Pancreas
