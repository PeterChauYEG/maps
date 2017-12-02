import busesReducers from './buses-reducer'
import * as types from '../actions/action-types'

// get fixtures
import * as fixtures from '../fixtures'

it('should return the default state', () => {
  const state = undefined
  const expectation = fixtures.initial
  const action = {
    type: undefined
  }

  const result = busesReducers(state, action)

  expect(result).toEqual(expectation)
})

it('should return the same state', () => {
  const state = fixtures.populated
  const expectation = fixtures.populated
  const action = {
    type: undefined
  }

  const result = busesReducers(state, action)

  expect(result).toEqual(expectation)
})

it('should return set buses as the next state', () => {
  const state = fixtures.initial
  const expectation = fixtures.populated
  const action = {
    type: types.SET_BUSES,
    buses: expectation
  }

  const result = busesReducers(state, action)

  expect(result).toEqual(expectation)
})
