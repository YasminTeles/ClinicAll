import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Appendix extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Appendix"
            placement="right">
              <path
                id="appendix"
                className="appendix"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                d="M192,316.834
                  c-1.225,2.578-1.231,5.131-1.173,7.948c0.027,1.613,0.457,6.923,3.499,6.124c2.337-0.614,1.322-6.91,1.382-8.72
                  c0.038-1.293-0.101-7.262-3.208-5.686"/>
          </Tooltip>
        )
    }
}

export default Appendix
