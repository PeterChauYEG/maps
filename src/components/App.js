import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as busesActions from '../actions/buses-actions'

// styles
import './App.css'

export class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Maps</h1>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    buses: state.buses
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(busesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
