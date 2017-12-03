/**
 * This file contains redux buses reducers.
 */
import * as types from '../actions/action-types'

/**
 * Buses reducers which handles updating the redux store.
 * @param {array} state current state of the buses redux store key.
 * @param {object} action an action which may match an action type for this reducer.
 * @returns {array} then next redux state
 */
export default (state = [], action) => {
  switch (action.type) {
    case types.SET_BUSES:
      const {
        buses
      } = action

      return [
        ...buses
      ]
    default:
      return state
  }
}
