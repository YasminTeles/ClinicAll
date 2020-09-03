import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Lung extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip title="Lung" placement="right">
              <path id="lung" className="lung" fill={fillColor} onClick={onClick} fillOpacity="0.5" stroke="#787878" strokeWidth="0.5" d="M220.109,140.161
                  c-8.377-0.101-26.996-1.415-33.942,7.271c-2.766,3.447-3.973,11.976-5.82,15.45c-2.772,5.194-1.633,12.48-2.91,17.268
                  c-1.813,6.801,1.641,8.806,5.82,12.724c4.769,4.468,15.037,6.363,22.309,9.088c7.025,2.633,10.703-5.579,11.646-9.088
                  c1.146-4.319,8.179-7.491,11.64-11.815c2.769-3.456,3.88-9.581,3.88-14.541c0-2.115,1.94-8.063,1.94-12.723
                  c0-5.702-2.281-8.499-5.82-11.815C227.913,141.111,221.011,140.372,220.109,140.161z"/>
          </Tooltip>
        )
    }
}

export default Lung
