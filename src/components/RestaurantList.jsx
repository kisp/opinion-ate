import {useEffect} from 'react'
import {connect} from 'react-redux'
import {loadRestaurants} from '../store/restaurants/actions'
import PropTypes from 'prop-types'

export function RestaurantListPure({loadRestaurants, restaurants}) {
  useEffect(() => {
    loadRestaurants()
  }, [loadRestaurants])

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  )
}

RestaurantListPure.propTypes = {
  loadRestaurants: PropTypes.func,
  restaurants: PropTypes.array,
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
})

const mapDispatchToProps = {loadRestaurants}

const RestaurantList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantListPure)
export default RestaurantList
