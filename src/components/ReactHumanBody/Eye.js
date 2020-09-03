import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Eye extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="eye"
            placement="right">
              <g
                id="eye"
                className="eye"
                fill={fillColor}
                onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                transform="matrix(0.41320244,0,0,0.4953272,139.64383,136.9891)">
                  <path id="eye1"
                    d="M222.641,46.933c-7.093-1.229-7.14,1.222-10.055,7.116c-3.627,7.333,3.354,7.116,8.044,7.116
                      c5.93,0,9.05-3.234,9.05-9.149C229.68,48.351,226.668,48.562,222.641,46.933L222.641,46.933z"/>
                  <path
                    id="eye2"
                    d="M222.641,46.933c-7.093-1.229-7.14,1.222-10.055,7.116c-3.627,7.333,3.354,7.116,8.044,7.116
                          c5.93,0,9.05-3.234,9.05-9.149C229.68,48.351,226.668,48.562,222.641,46.933L222.641,46.933z"/>
              </g>
          </Tooltip>
        )
    }
}

export default Eye
