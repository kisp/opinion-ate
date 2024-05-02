import {applyMiddleware, createStore} from 'redux'
import {withExtraArgument} from 'redux-thunk'
import restaurantsReducer from './restaurants/reducers.js'
import {loadRestaurants} from './restaurants/actions.js'

describe('restaurants', () => {
  describe('loadRestaurants action', () => {
    it('stores the restaurants', async () => {
      const records = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'},
      ]

      const api = {
        loadRestaurants: () => Promise.resolve(records),
      }

      const initialState = {records: []}

      const store = createStore(
        restaurantsReducer,
        initialState,
        applyMiddleware(withExtraArgument(api)),
      )

      await store.dispatch(loadRestaurants())

      expect(store.getState().records).toEqual(records)
    })
  })
})
