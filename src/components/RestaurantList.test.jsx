import {vi} from 'vitest'
import RestaurantList from './RestaurantList.jsx'
import {render, screen} from '@testing-library/react'

describe('RestaurantList', () => {
  it('loa' + '' + 'ds restaurants on first render', () => {
    const loadRestaurants = vi.fn().mockName('loadRestaurants')
    const restaurants = []

    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    )
    expect(loadRestaurants).toHaveBeenCalled()
  })

  it('displays the restaurants', () => {
    const noop = () => {}

    const restaurants = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Pizza Place'},
    ]

    render(<RestaurantList loadRestaurants={noop} restaurants={restaurants} />)

    expect(screen.getByText('Sushi Place')).toBeInTheDocument()
    expect(screen.getByText('Pizza Place')).toBeInTheDocument()
  })
})
