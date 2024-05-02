import {useEffect} from 'react'
import {connect} from 'react-redux'
import {loadRestaurants} from '../store/restaurants/actions'
import PropTypes from 'prop-types'

export function RestaurantList({loadRestaurants, restaurants}) {
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

RestaurantList.propTypes = {
  loadRestaurants: PropTypes.func,
  restaurants: PropTypes.array,
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
})

const mapDispatchToProps = {loadRestaurants}

const RestaurantListConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantList)
export default RestaurantListConnected
