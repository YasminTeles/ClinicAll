import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import PropTypes from 'prop-types'

class Nasopharynx extends Component {

    render() {
        
      const {
        show,
        fillColor,
        onClick,
        fillOpacity,
        tooltipTitle,
      } = this.props;

      return (
        <>
        {show && (
          <Tooltip
            title={tooltipTitle}
            placement={'right'}
          >
            <path
              id={"nasopharynx"}
              fill={fillColor}
              onClick={onClick}
              fillOpacity={fillOpacity}
              d="M228.725,86.377c2.563,0.366,5.119,0.842,7.688,1.115c0.758-1.761,1.819-2.986,3.319-3.237
                c0,0,0.395-0.717,0.395-1.434c0-5.018,0-10.752-0.777-15.769c-0.137-0.884-11.658-0.073-12.81,0.073
                c-1.516,0.191-2.221,1.146-2.244,4.021c-0.04,3.875,0.289,7.788,0.289,11.676C226.291,83.084,227.687,84.413,228.725,86.377z"/>
          </Tooltip>)}
        </>
        )
    }
}

Nasopharynx.propTypes = {
  show: PropTypes.bool,
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.string,
  onClick: PropTypes.func,
  tooltipTitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
}

export default Nasopharynx
