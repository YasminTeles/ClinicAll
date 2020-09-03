import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Kidney extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Kidney"
            placement="right">
              <g
                id="kidney"
                className="kidney"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                transform="matrix(0.41320244,0,0,0.4953272,139.64383,136.9891)">
                  <path id="kidney1" d="M166.031,171.985l7.934,2.892
                      l9.066,7.238l2.264,4.331l3.401,8.675v10.121l-3.401,10.122h-5.665l-7.934,13.012v10.121l1.134,4.338l-1.134,11.567l-7.932,13.013
                      l-2.266,1.436l-4.533,2.892H151.3l-5.665-4.332l-3.401-5.785l-3.399-7.229l-2.266-10.121v-7.239v-7.229l1.132-10.121v-4.338
                      l1.134-7.229l2.264-7.229l2.266-7.239l3.399-7.229l2.267-5.787l2.266-1.444l2.264-1.444l4.533-2.892L166.031,171.985z"/>
                  <path id="kidney2" d="M294.374,154.174l-7.932,2.892
                      l-9.066,7.23l-2.267,4.337l-3.403,8.675v10.121l3.403,10.121h5.663l7.936,13.013v10.121l-1.132,4.338l1.132,11.567l7.932,13.013
                      l2.267,1.436l4.533,2.892h5.663l5.667-4.331l3.399-5.787l3.401-7.229l2.271-10.121v-7.239v-7.229l-1.132-10.121v-4.338
                      l-1.132-7.229l-2.264-7.229l-2.262-7.239l-3.401-7.229l-2.271-5.787l-2.262-1.445l-2.264-1.444l-4.533-2.892L294.374,154.174z"/>
              </g>
          </Tooltip>
        )
    }
}

export default Kidney
