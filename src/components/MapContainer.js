import { Component } from 'react'
import PropTypes from 'prop-types'

// Helpers
import * as helpers from '../helpers'

class MapContainer extends Component {
  componentDidMount () {
    const {
      setBuses
    } = this.props

    // get data from API
    helpers.getBuses(setBuses)

    // set an interval to get buses and update them
    // get them 1 once every 5 mins to ahear to API Rate Limit Policy
    this.interval = setInterval(() => { helpers.getBuses(setBuses) }, 300000)
  }

  componentWillUnmount () {
    // clear the interval after..
    clearInterval(this.interval)
  }

  render () {
    return this.props.children
  }
};

MapContainer.propTypes = {
  setBuses: PropTypes.func.isRequired
}

export default MapContainer
