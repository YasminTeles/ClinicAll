import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Anus extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Anus"
            placement="right">
              <path
                id="anus"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M226.089,351.474
                  c3.767,0,7.724-0.315,11.457-0.147c1.521,3.824-6.23,6.624-6.373,10.188c-1.286,0.313-0.072,0.188-1.5,0.123
                  c-0.14-1.313-0.097-2.454-1.211-3.6c-0.896-0.92-2.738-1.474-3.459-2.458c-0.675-0.923-0.3-2.601,0.086-3.504"/>
          </Tooltip>
        )
    }
}

export default Anus
