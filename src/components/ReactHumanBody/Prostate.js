import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Prostate extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Prostate"
            placement="right">
              <path
                id="prostate"
                className="prostate"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M247.002,345.606
                  c0,3.913-4.729,7.085-10.55,7.085c-5.829,0-10.557-3.172-10.557-7.085s4.729-7.085,10.557-7.085
                  C242.28,338.521,247.002,341.694,247.002,345.606z"/>
          </Tooltip>
        )
    }
}

export default Prostate
