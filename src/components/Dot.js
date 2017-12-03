import React from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-map-gl'

const Dot = (props) => {
  const {
    latitude,
    longitude
  } = props

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      offsetLeft={-20}
      offsetTop={-10}
     >
      <div className='Dot' />
    </Marker>
  )
}

Dot.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
}

export default Dot
