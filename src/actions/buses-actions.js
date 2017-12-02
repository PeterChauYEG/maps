/**
 * This file contains redux buses action creators.
 */
import * as types from './action-types'

/**
 * Creates a redux action to set buses to the redux store.
 * @param {array} buses - a set of data about buses and their locations.
 * @returns {object} a redux action
 */
export const setBuses = (buses) => {
  return {
    type: types.SET_BUSES,
    buses
  }
}
