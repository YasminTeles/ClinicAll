import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Thyroid extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Thyroid"
            placement="right">
              <path
                id="thyroid"
                className="thyroid"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                d="M231.924,117.994h0.641l0.771,0.131l0.643-0.261l0.771-0.914l0.128-0.523
                  l0.384-0.784l0.769-0.914l0.136-0.653l0.77-0.261l0.387-0.914l0.389-0.914l0.386-1.045l0.256-0.261l0.512-0.261l0.259,0.914v0.523
                  l0.131,0.653l0.385,1.045v0.914l0.258,0.653l0.129,0.784l0.128,1.306v0.784l-0.149,1.176l-0.394,1.045l-0.896,1.176l-0.896,0.653
                  l-1.146,0.914h-1.409l-0.768-0.784l-0.136-0.392l-1.021-0.131h-0.897h-1.4h-0.896l-0.64,0.784l-0.519,0.523l-0.512,0.523h-1.153
                  l-0.896-0.653l-0.897-0.784l-0.512-1.176l-0.64-0.914l-0.128-1.306l-0.128-0.784v-1.437l0.256-1.045l0.256-0.914l0.896-1.176
                  l0.135-1.045l0.384-0.784l0.512-0.523l0.256-0.392l0.256,0.653l0.646,0.653v0.914l0.256,0.523l0.384,0.784l0.643,1.045l0.13,0.522
                  l0.258,0.653l0.384,0.653l0.384,0.392l0.519,0.261L231.924,117.994z"/>
          </Tooltip>
        )
    }
}

export default Thyroid
