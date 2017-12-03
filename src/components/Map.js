import React, { Component } from 'react'
import MapGL from 'react-map-gl'

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
         />
      </div>
    )
  }
};

export default Map
