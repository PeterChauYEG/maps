import React, { Component } from 'react'
import MapGL from 'react-map-gl'
import PropTypes from 'prop-types'

// Component
import DotContainer from './DotContainer'

// fixtures
import * as fixtures from '../fixtures'

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

    const buses = fixtures.populated

    return (
      <div className='Map'>
        <MapGL
          {...map}
          showZoomControls
          width={window.innerWidth}
          height={window.innerHeight}
          mapStyle='mapbox://styles/mapbox/dark-v9'
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          onChangeViewport={onChangeViewport}
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
  map: PropTypes.object.isRequired
}

export default Map
