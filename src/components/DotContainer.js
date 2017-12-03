import React from 'react'
import PropTypes from 'prop-types'

// Component
import Dot from './Dot'

const DotContainer = (props) => {
  const {
    data
  } = props

  // check if the data is populated
  if (data.length === 0) {
    return null
  }

  return data.map((ele, i) => {
    return (
      <Dot
        key={i}
        latitude={ele.latitude}
        longitude={ele.longitude}
       />
    )
  })
}

DotContainer.propTypes = {
  data: PropTypes.array.isRequired
}

export default DotContainer
