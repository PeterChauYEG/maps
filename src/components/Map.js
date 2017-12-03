import React, { Component } from 'react'
import MapGL from 'react-map-gl'

// env var
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

class Map extends Component {
  render () {
    const {
      map,
      onChangeViewport
    } = this.props

    return (
      <div>
        <MapGL
          {...map}
          showZoomControls
          width={500}
          height={500}
          mapStyle='mapbox://styles/mapbox/dark-v9'
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          onChangeViewport={onChangeViewport}
         />
      </div>
    )
  }
};

export default Map
