import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Duodenum extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Duodenum"
            placement="right">
              <path
                id="duodenum"
                className="duodenum"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M215.578,253.12
                  c-0.122-1.074-0.146-1.668-0.194-2.067c-1.771-1.167-3.553-2.318-5.113-3.812c-0.124-0.119-0.24-0.247-0.355-0.368
                  c-0.688,0.836-1.234,1.75-1.576,2.678c-1.735,4.714-3.123,9.667-3.746,14.658c-0.237,1.902,2.216,8.593,4.604,5.327
                  C211.445,266.469,209.982,253.381,215.578,253.12z"/>
          </Tooltip>
        )
    }
}

export default Duodenum
