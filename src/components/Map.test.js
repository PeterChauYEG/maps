import React from 'react'
import renderer from 'react-test-renderer'
import Map from './Map'

it('renders without crashing', () => {
  const tree = renderer
    .create(<Map />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
