import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Liver extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Liver"
            placement="right">
              <path
                id="liver"
                className="liver"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M197.814,254.221
                  c3.532-0.967,6.563-2.202,9.563-4.215c4.147-2.783,8.129-6.554,11.707-9.975c1.389-1.33,2.837-2.638,4.815-3.046
                  c3.723-0.765,7.458-1.232,11.112-2.355c4.158-1.278,7.914-3.587,11.279-6.158c2.992-2.286,7.766-8.155,3.896-11.644
                  c-2.021-1.822-5.588-1.64-8.209-1.506c-3.76,0.191-7.504,0.807-11.271,0.846c-7.039,0.072-13.565-2.428-20.402-3.53
                  c-5.975-0.963-12.244-0.149-16.96,3.527c-5.196,4.051-7.469,11.844-7.473,17.954c-0.002,2.655,0.334,5.474,1.002,8.057
                  c0.583,2.254,1.675,4.472,2.078,6.739c0.316,1.816-1.037,4.9,0.712,6.313C191.739,256.9,195.671,254.808,197.814,254.221z"/>
          </Tooltip>
        )
    }
}

export default Liver
