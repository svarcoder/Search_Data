import { render } from '@testing-library/react'
import Sidebar from './Sidebar'

test('renders a title', () => {
  const { getByText } = render(<Sidebar />)
  const titleElement = getByText('Team Members')
  expect(titleElement.tagName).toBe('DIV')
})

test('renders a title', () => {
  const { getByText } = render(<Sidebar />)
  const titleElement = getByText('Products')
  expect(titleElement.tagName).toBe('DIV')
})

test('renders a title', () => {
  const { getByText } = render(<Sidebar />)
  const titleElement = getByText('Inbox')
  expect(titleElement.tagName).toBe('DIV')
})

test('renders a title', () => {
  const { getByText } = render(<Sidebar />)
  const titleElement = getByText('Light Mode')
  expect(titleElement.tagName).toBe('DIV')
})
