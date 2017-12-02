/**
 * This file contains configures the redux store .
 */

import rootReducer from '../reducers'
import { createStore, compose } from 'redux'

// enable redux devtools
// check if the browser has devtools installed
const enhancers = compose(
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
)

export default (initialState) => {
  return createStore(rootReducer, initialState, enhancers)
}
