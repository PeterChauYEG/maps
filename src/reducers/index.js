/**
 * This file contains the root reducer which aggregates reducers and combines
 * them into 1 reducer.
 */
import { combineReducers } from 'redux'

// reducers
import buses from './buses-reducer.js'
import { createViewportReducer } from 'redux-map-gl'

// combine reducers into a single reducer
const rootReducer = combineReducers({
  buses,
  map: createViewportReducer()
})

export default rootReducer
