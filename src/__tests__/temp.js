// TODO: rename me
import 'jest-dom/extend-expect'
import React from 'react'
import {render, cleanup} from '../'

afterEach(cleanup)

test('temp', () => {
  const effectCb = jest.fn()
  function MyUselessComponent() {
    React.useEffect(effectCb)
    return null
  }
  render(<MyUselessComponent />)
  expect(effectCb).toHaveBeenCalledTimes(1)
})
