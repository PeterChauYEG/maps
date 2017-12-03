import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import * as busesActions from '../actions/buses-actions'
import { onChangeViewport } from 'redux-map-gl'

// components
import MapContainer from './MapContainer'
import Map from './Map'

export class App extends Component {
  render () {
    const {
      buses,
      map,
      onChangeViewport,
      setBuses
    } = this.props

    return (
      <MapContainer
        setBuses={setBuses}>
        <Map
          buses={buses}
          map={map}
          onChangeViewport={onChangeViewport}
        />
      </MapContainer>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    buses: state.buses,
    map: state.map.viewport.toJS() // ensure that the data can be read
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setBuses: (buses) => { dispatch(busesActions.setBuses(buses)) },
    onChangeViewport: (viewport) => { dispatch(onChangeViewport(viewport)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
