/**
 * This file contains the root reducer which aggregates reducers and combines
 * them into 1 reducer.
 */
import { combineReducers } from 'redux'

// reducers
import buses from './buses-reducer.js'
import enhanceMapReducer, { createViewportReducer } from 'redux-map-gl'

// combine reducers into a single reducer
const rootReducer = combineReducers({
  buses,
  map: enhanceMapReducer(createViewportReducer(), {
    latitude: 49.2827,
    longitude: -123.1207,
    zoom: 11,
    bearing: 9
  })
})

export default rootReducer
