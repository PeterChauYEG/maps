import { setBuses } from './buses-actions'
import * as types from './action-types'

// get fixtures
import * as fixtures from '../fixtures'

it('should return an action', () => {
  const expectation = {
    type: types.SET_BUSES,
    buses: fixtures.populated
  }

  const result = setBuses(fixtures.populated)

  expect(result).toEqual(expectation)
})
