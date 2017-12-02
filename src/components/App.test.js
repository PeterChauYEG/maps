import React from 'react'
import renderer from 'react-test-renderer'
import { App } from './App'

it('renders without crashing - without redux store', () => {
  const tree = renderer
    .create(<App />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})