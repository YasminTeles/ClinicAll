import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Testis extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Testis"
            placement="right">
              <g
                id="testis"
                className="testis"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                transform="matrix(0.56875117,0,0,0.3849043,165.45861,146.96332)">
                  <path id="testis1" d="M113.31,613.195
                      c0,11.169-4.713,20.216-10.529,20.216c-5.817,0-10.532-9.047-10.532-20.216c0-11.158,4.715-20.211,10.532-20.211
                      C108.596,592.984,113.31,602.036,113.31,613.195z"/>
                  <path id="testis2" d="M139.098,613.195
                      c0,11.169-4.715,20.216-10.532,20.216c-5.814,0-10.529-9.047-10.529-20.216c0-11.158,4.715-20.211,10.529-20.211
                      C134.383,592.984,139.098,602.036,139.098,613.195z"/>
              </g>
          </Tooltip>
        )
    }
}

export default Testis
