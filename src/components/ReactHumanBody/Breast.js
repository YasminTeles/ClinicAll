import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Breast extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Breast"
            placement="right">
              <g
                id="breast"
                className="breast"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                transform="translate(10.5,22)">
                  <path id="breast1" d="M210.508,159.558c0,5.094-9.027,9.223-20.161,9.223
                      s-20.161-4.129-20.161-9.223c0-5.094,9.027-9.223,20.161-9.223S210.508,154.465,210.508,159.558z"/>
                  <path id="breast2" d="M274.354,159.558c0,5.094-9.021,9.223-20.162,9.223
                      c-11.133,0-20.151-4.129-20.151-9.223c0-5.094,9.021-9.223,20.151-9.223C265.326,150.335,274.354,154.465,274.354,159.558z"/>
              </g>
          </Tooltip>
        )
    }
}

export default Breast
