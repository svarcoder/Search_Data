import { render } from '@testing-library/react'
import Home from './Home'

describe('CardList', () => {
  it('renders a list of cards with the correct values', () => {
    const cards = [
      {
        _id: 1,
        first_name: 'Card 1',
        last_name: 'Description 1',
        department: 'IT 1',
      },
      { _id: 2, first_name: 'Card 2', last_name: 'Description 2', department: 'ITS 2' },
      { _id: 3, first_name: 'Card 3', last_name: 'Description 3', department: 'ITC 3' },
    ]

    const { getByRole } = render(<Home />, { wrapper: ({ children }) => <>{children}</> })

    cards.forEach((card) => {
      expect(getByRole(card.first_name)).toBeInTheDocument()
      expect(getByRole(card.last_name)).toBeInTheDocument()
      expect(getByRole(card.department)).toBeInTheDocument()
    })
  })
})
