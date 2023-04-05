import { fireEvent, render } from '@testing-library/react'
import Header from './Header'

test('renders a title', () => {
  const { getByText } = render(<Header setQuery={jest.fn()} />)
  const titleElement = getByText('Team Members')
  expect(titleElement.tagName).toBe('DIV')
})

describe('SearchField', () => {
  it('updates the search query when the user types in the input field', () => {
    const { getByRole } = render(<Header setQuery={jest.fn()} />)
    const input: any = getByRole('textbox')
    fireEvent.change(input, { target: { value: 'example query' } })
    expect(input.value).toBe('example query')
  })
})
