/**
 * This file contains the root reducer which aggregates reducers and combines
 * them into 1 reducer.
 */
import buses from './buses-reducer.js'
import { combineReducers } from 'redux'

// combine reducers into a single reducer
const rootReducer = combineReducers({
  buses
})

export default rootReducer
