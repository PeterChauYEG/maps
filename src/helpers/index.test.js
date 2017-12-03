// helpers
import * as helpers from '../helpers'

// get fixtures
import * as fixtures from '../fixtures'

it('should transform the data', () => {
  const param = fixtures.raw
  const expectation = fixtures.populated
  const result = helpers.cleanBuses(param)

  expect(result).toEqual(expectation)
})
