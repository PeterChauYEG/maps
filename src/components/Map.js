import React, { Component } from 'react'
import MapGL from 'react-map-gl'
import PropTypes from 'prop-types'

// Component
import Dot from './Dot'

// env var
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

class Map extends Component {
  render () {
    const {
      actions: {
        onChangeViewport
      },
      map
    } = this.props

    return (
      <div className='Map'>
        <MapGL
          {...map}
          showZoomControls
          width={750}
          height={750}
          mapStyle='mapbox://styles/mapbox/dark-v9'
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          onChangeViewport={onChangeViewport}
         >
          <Dot
            latitude={49.189017}
            longitude={-123.112633}
           />
        </MapGL>
      </div>
    )
  }
};

Map.propTypes = {
  actions: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired
}

export default Map
