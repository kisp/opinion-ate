import {vi} from 'vitest'
import RestaurantList from './RestaurantList.jsx'
import {render} from '@testing-library/react'

describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    const loadRestaurants = vi.fn().mockName('loadRestaurants')

    render(<RestaurantList loadRestaurants={loadRestaurants} />)
    expect(loadRestaurants).toHaveBeenCalled()
  })
})
