import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Skin extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Skin"
            placement="right">
              <path 
                id="skin" 
                className="skin" 
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                d="M315.75,197.5c0.669,4.716,3.612,8.76,5.105,13.263c1.392,4.198-1.286,17.414,3.933,19.572
                  c5.205,2.154,3.629-15.588,2.814-18.597c-1.017-3.754-3.752-7.978-5.541-11.396c-1.111-2.123-2.781-5.594-5.812-4.092"/>
          </Tooltip>
        )
    }
}

export default Skin
