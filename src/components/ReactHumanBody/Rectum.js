import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Rectum extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Rectum"
            placement="right">
              <path
                id="rectum"
                className="rectum"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M223.967,342.536
                  c-0.104,1.203-0.801,3.146,2.506,3.679c-3.794,0.396-3.435,3.15-1.64,4.247c1.69,1.037,5.063,0.811,7.917,0.759
                  c4.135-0.074,5.953-0.347,6.011-2.12c0.058-1.813-1.313-2.292-4.68-3.218c3.063-0.572,3.563-2.352,1.068-3.161
                  c0.698,0.227,2.316-1.369,1.997-1.697c-0.979-1.007-7.258-1.235-9.489-1.014C224.511,340.322,224.072,341.307,223.967,342.536z"/>
          </Tooltip>
        )
    }
}

export default Rectum
