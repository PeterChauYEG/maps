import React from 'react'
import ReactMapGL from 'react-map-gl'

// env var
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const Map = (props) => {
  const {
    map,
    onChangeViewport
  } = props

  return (
    // <ReactMapGL
    //   { ...map }
    //   showZoomControls={true}
    //   width={500}
    //   height={500}
    //   // mapStyle={mapStyle}
    //   mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
    //   onChangeViewport={onChangeViewport}
    // />
      <ReactMapGL
        width={400}
        height={400}
        latitude={37.7577}
        longitude={-122.4376}
        zoom={8}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => {
          const {width, height, latitude, longitude, zoom} = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      />
  );
};

export default Map
