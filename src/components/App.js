import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as busesActions from '../actions/buses-actions'
import { onChangeViewport } from 'redux-map-gl'

// styles
import './App.css'

// components
import Map from './Map'

export class App extends Component {
  render () {
    return (
      <Map {...this.props} />
    )
  }
}

function mapStateToProps (state, props) {
  return {
    buses: state.buses,
    map: state.map.viewport.toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(busesActions, dispatch),
    onChangeViewport
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
