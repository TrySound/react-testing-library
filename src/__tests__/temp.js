// TODO: rename me
import 'jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent, cleanup} from '../'

afterEach(cleanup)

test('temp', () => {
  const effectCb = jest.fn()
  function Counter() {
    React.useEffect(effectCb)
    const [count, setCount] = React.useState(0)
    return <button onClick={() => setCount(count + 1)}>{count}</button>
  }
  const {
    container: {firstChild: buttonNode},
  } = render(<Counter />)
  fireEvent.click(buttonNode)
  expect(buttonNode).toHaveTextContent('1')
  expect(effectCb).toHaveBeenCalledTimes(1)
})
