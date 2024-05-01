import {render, screen} from '@testing-library/react'
import App from './App.jsx'

test('render hello world', () => {
  render(<App />)

  expect(screen.getByText(/hello react/i)).toBeInTheDocument()
})
