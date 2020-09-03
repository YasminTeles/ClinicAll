import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Esophagus extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Esophagus"
            placement="right">
              <path
                id="esophagus"
                className="esophagus"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M229.155,136.059
                  c0.101,14.84,0.568,29.672,0.591,44.516c0.011,9.012-0.868,18.128,0.001,27.11c0.359,3.77,0.729,7.824,0.727,11.789
                  c0.693-0.356,1.401-0.712,2.134-1.123c1.104-0.616,2.151-1.591,3.188-2.705c-0.229-6.227-0.278-12.482-0.353-18.711
                  c-0.164-15.387-1.438-30.737-1.422-46.11c0.007-10.021-0.352-19.916-1.102-29.884c-0.323-4.305,0.313-8.695-0.541-12.96
                  c-0.33-1.652-0.729-4.417-2.595-4.816c-1.662-0.355-6.192,1.64-8.027,2.007v0.547C230.423,112.668,229.092,126.434,229.155,136.059z
                  "/>
          </Tooltip>
        )
    }
}

export default Esophagus
