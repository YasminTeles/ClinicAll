import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class SalivaryGland extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Salivary Gland"
            placement="right">
              <path
                id="salivary_gland" 
                className="salivary_gland"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M246.531,85.95
                  c-4.238,0.646-8.267,1.739-12.275,3.365c0.6,1.688,3.96,1.814,5.461,1.951c2.119,0.195,5.41,0.386,6.779-1.519
                  C247.502,88.338,247.484,86.854,246.531,85.95z"/>
          </Tooltip>
        )
    }
}

export default SalivaryGland
