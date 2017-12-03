import React, { Component } from 'react'
import MapGL from 'react-map-gl'
import PropTypes from 'prop-types'

// Component
import DotContainer from './DotContainer'

// env var
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

class Map extends Component {
  render () {
    const {
      actions: {
        onChangeViewport
      },
      buses,
      map
    } = this.props

    return (
      <div className='Map'>
        <MapGL
          {...map}
          height={window.innerHeight}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle='mapbox://styles/mapbox/dark-v9'
          onChangeViewport={onChangeViewport}
          showZoomControls
          width={window.innerWidth}
         >
          <DotContainer
            data={buses}
          />
        </MapGL>
      </div>
    )
  }
};

Map.propTypes = {
  actions: PropTypes.object.isRequired,
  buses: PropTypes.array.isRequired,
  map: PropTypes.object.isRequired
}

export default Map
