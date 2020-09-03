import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Stomach extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Stomach"
            placement="right">
              <path
                id="stomach"
                className="stomach"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M262.916,219.401
                  c-5.788-4.85-17.363-1.243-19.912,4.814l0.258-1.779c-1.775,0.847-1.959,2.909-2.836,4.298c-1.112,1.765-3.505,2.635-5.183,3.924
                  c-3.307,2.538-2.187,7.75-7.688,7.753c-1.378-0.071-2.756-0.128-4.136-0.173c0.101,0.716-0.184,1.28-0.84,1.691
                  c-1.35,0.749-3.242,0.479-4.744,0.704c-3.462,0.521-6.354,3.36-7.447,6.301c1.984,1.908,4.021,3.754,6.209,5.416
                  c0.59-1.529,1.923-2.49,4.563-2.365c3.683,0.174,6.461,3.357,9.713,4.544c4.14,1.51,8.297-1.693,12.465-2.065
                  c6.965-0.621,22.063-6.492,23.802-13.072C268.536,234.101,267.696,223.405,262.916,219.401z"/>
          </Tooltip>
        )
    }
}

export default Stomach
